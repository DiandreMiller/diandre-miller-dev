import { useEffect, useRef } from "react";

/**
 * Matrix-style background with a multi-color cyber palette.
 *
 * Props:
 *  - fontSize: px per glyph (default 16)
 *  - trail:    how many characters in each column trail (default 6)
 *  - speed:    global speed multiplier (default 1)
 *  - density:  0.5–1.5; >1 = more columns (default 1)
 *  - palette:  array of hex colors used for trails
 */
export default function MatrixBackground({
  fontSize = 16,
  trail = 6,
  speed = .5,
  density = 1,
  palette = ["#00ff46", "#00c8ff", "#64c8ff", "#ffa500", "#7fffd4"], // green, teal, light blue, orange, aquamarine
  background = "#000000",
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false });

    // High-DPI crispness
    const setSize = () => {
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // scale drawing ops
    };

    setSize();
    let resizeTimer = 0;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setSize();
        initColumns(); // re-init for new size
      }, 100);
    };
    window.addEventListener("resize", onResize);

    // Convert hex -> rgb object
    const toRGB = (hex) => {
      const h = hex.replace("#", "");
      const n = parseInt(h.length === 3
        ? h.split("").map((c) => c + c).join("")
        : h, 16);
      return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
    };
    const rgbPalette = palette.map(toRGB);

    // Column state
    let columns = 0;
    let drops = [];
    let speeds = [];
    let columnXs = [];

    const initColumns = () => {
      const w = canvas.clientWidth;
      columns = Math.max(1, Math.floor((w / fontSize) * density));
      drops = Array.from({ length: columns }, () => -Math.floor(Math.random() * 40));
      speeds = Array.from({ length: columns }, () =>
        (Math.random() * 1.2 + 0.6) * speed
      );
      columnXs = Array.from({ length: columns }, (_, i) => Math.floor(i * (w / columns)));
    };

    initColumns();

    // Glyphs to pick from
    const glyphs = "アイウエオカキクケコｱｲｳｴｵ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Paint initial background
    const fillBG = () => {
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    };
    fillBG();

    // Draw
    const draw = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      // Faint black rectangle to create fading trails
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, w, h);

      ctx.font = `${fontSize}px monospace`;
      ctx.textBaseline = "top";

      for (let i = 0; i < columns; i++) {
        // pick a trail color for this column
        const base = rgbPalette[i % rgbPalette.length];

        // current head position (in rows)
        const headY = Math.floor(drops[i]) * fontSize;
        const x = columnXs[i];

        // draw head (bright white for pop)
        const headChar = glyphs[(Math.random() * glyphs.length) | 0];
        ctx.fillStyle = "rgba(255,255,255,0.9)";
        ctx.fillText(headChar, x, headY);

        // draw trailing characters with decreasing opacity
        for (let k = 1; k <= trail; k++) {
          const y = headY - k * fontSize;
          if (y < -fontSize || y >= h) continue;
          const ch = glyphs[(Math.random() * glyphs.length) | 0];
          const alpha = Math.max(0.1, 0.85 - k * (0.8 / trail));
          ctx.fillStyle = `rgba(${base.r},${base.g},${base.b},${alpha})`;
          ctx.fillText(ch, x, y);
        }

        // advance this drop
        drops[i] += speeds[i];
        if (headY > h + Math.random() * 200) {
          drops[i] = -Math.random() * 40; // reset above the top at random row
          speeds[i] = (Math.random() * 1.2 + 0.6) * speed; // new speed
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [fontSize, trail, speed, density, palette, background]);

  return (
    <canvas
      ref={canvasRef}
      className="matrix-canvas fixed inset-0 -z-10 pointer-events-none"
    />
  );
}