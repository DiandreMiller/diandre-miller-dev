import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import diandreleft from "../assets/diandre_left.png";
import diandreright from "../assets/diandre_right.png";

const ZOOM_DURATION_MS = 3200;      // how long the initial zoom runs
const EXPAND_FULL_AFTER_MS = 2800;  // when to switch canvas to fullscreen (near end of zoom)

const EnterTheMatrix = () => {
  const canvasRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [startRain, setStartRain] = useState(false);
  const [expandFull, setExpandFull] = useState(false);

  // start rain 1.5s after doors start opening
  useEffect(() => {
    if (!isOpen) return;
    const t = setTimeout(() => setStartRain(true), 1500);
    return () => clearTimeout(t);
  }, [isOpen]);

  // when rain begins, schedule the fullscreen phase to kick in near the end of the zoom
  useEffect(() => {
    if (!startRain) return;
    const tExpand = setTimeout(() => {
      setExpandFull(true);
      // ensure canvas resizes crisply to the new full-screen box
      setTimeout(() => window.dispatchEvent(new Event("resize")), 60);
    }, EXPAND_FULL_AFTER_MS);
    return () => clearTimeout(tExpand);
  }, [startRain]);

  // Matrix center-ward effect + responsive sizing
  useEffect(() => {
    if (!startRain) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    let cssW = 0, cssH = 0, raf = 0;
    const MAX_PARTS = 120;
    const SPAWN_PER_FRAME = 3;
    const BASE_SPEED = 0.006;
    const DRAG = 0.985;
    const BASE_SIZE = 14;

    const particles = [];
    const rand = (a, b) => a + Math.random() * (b - a);
    const randInt = (a, b) => Math.floor(rand(a, b + 1));
    const choose = (arr) => arr[(Math.random() * arr.length) | 0];

    const sizeCanvas = () => {
      // ✅ fullscreen: use viewport; else use element box
      if (expandFull) {
        cssW = window.innerWidth;
        cssH = window.innerHeight;
      } else {
        cssW = canvas.clientWidth;
        cssH = canvas.clientHeight;
      }
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = Math.floor(cssW * dpr);
      canvas.height = Math.floor(cssH * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawnFromEdge = () => {
      const edge = choose(["top", "right", "bottom", "left"]);
      let x, y;
      const overshoot = 10;
      switch (edge) {
        case "top":
          x = rand(-overshoot, cssW + overshoot); y = -overshoot; break;
        case "bottom":
          x = rand(-overshoot, cssW + overshoot); y = cssH + overshoot; break;
        case "left":
          x = -overshoot; y = rand(-overshoot, cssH + overshoot); break;
        default:
          x = cssW + overshoot; y = rand(-overshoot, cssH + overshoot);
      }
      return {
        x, y, vx: 0, vy: 0,
        ch: choose(letters),
        speedMul: rand(0.6, 1.4),
        delayFrames: randInt(0, 90),
        life: 0,
        alphaIn: rand(6, 14),
      };
    };

    const trySpawn = () => {
      for (let i = 0; i < SPAWN_PER_FRAME; i++) {
        if (particles.length < MAX_PARTS && Math.random() < 0.7) {
          particles.push(spawnFromEdge());
        }
      }
    };

    const step = () => {
      ctx.clearRect(0, 0, cssW, cssH);

      const cx = cssW * 0.5;
      const cy = cssH * 0.5;
      const maxDist = Math.hypot(cx, cy);

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.shadowColor = "#00ff66";
      ctx.shadowBlur = 8;

      trySpawn();

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        if (p.delayFrames > 0) {
          p.delayFrames--;
        } else {
          const dx = cx - p.x;
          const dy = cy - p.y;
          const dist = Math.hypot(dx, dy) || 1;
          const ndx = dx / dist;
          const ndy = dy / dist;

          const SPEED = BASE_SPEED * p.speedMul;
          p.vx = (p.vx + ndx * dist * SPEED) * DRAG;
          p.vy = (p.vy + ndy * dist * SPEED) * DRAG;

          p.vx += (Math.random() - 0.5) * 0.01; // tiny wobble
          p.vy += (Math.random() - 0.5) * 0.01;

          p.x += p.vx;
          p.y += p.vy;
          p.life++;
        }

        const dx2 = cx - p.x;
        const dy2 = cy - p.y;
        const dist2 = Math.hypot(dx2, dy2) || 1;
        const edgeFactor = Math.min(1, dist2 / maxDist);
        const size = Math.max(12, BASE_SIZE * (0.9 + 0.9 * edgeFactor));
        const fadeIn = Math.min(1, p.life / p.alphaIn);
        const alpha = 0.8 * fadeIn;

        ctx.globalAlpha = alpha;
        ctx.fillStyle = "#00ff66";
        ctx.font = `700 ${size}px monospace`;
        ctx.fillText(p.ch, p.x, p.y);
        ctx.globalAlpha = 1;

        if (dist2 < 18 && p.delayFrames <= 0) {
          particles.splice(i, 1);
          particles.push(spawnFromEdge());
        }
      }

      raf = requestAnimationFrame(step);
    };

    sizeCanvas();
    raf = requestAnimationFrame(step);

    const onResize = () => sizeCanvas();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [startRain, expandFull]); // include expandFull so sizing updates

  return (
    <div
        className="fixed inset-0 flex justify-center items-center bg-black overflow-hidden cursor-pointer [perspective:1200px]"
        onClick={() => setIsOpen(true)}
        role="button"
        aria-label="Enter the Matrix"
    >
      {/* Left half — rotate on open, fade during zoom */}
      <motion.img
        className="w-50 z-0"
        src={diandreleft}
        alt="left half of Diandre"
        initial={false}
        animate={{
          rotateY: isOpen ? 85 : 0,
          opacity: startRain ? 0 : 1,
        }}
        transition={{
          rotateY: { duration: 1.5, ease: "easeInOut" },
          opacity: { duration: ZOOM_DURATION_MS / 1000, ease: "easeInOut" },
        }}
        style={{ transformOrigin: "center" }}
      />

      {/* Matrix canvas wrapper — centered first, then FIXED fullscreen */}
      <motion.div
        className={
          "pointer-events-none z-10 will-change-transform " +
          (expandFull
            ? "fixed inset-0"                                   // fullscreen phase
            : "absolute inset-0 flex items-center justify-center" // centered box phase
          )
        }
        initial={{ scale: 1 }}
        animate={
          startRain
            ? (expandFull ? { scaleX: 1, scaleY: 1 } : { scaleX: 7.4, scaleY: 3.0 })
            : { scale: 1 }
        }
        transition={{
          duration: expandFull ? 0.7 : ZOOM_DURATION_MS / 1000,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "50% 50%" }}
      >
        <canvas
          ref={canvasRef}
          className={
            "transition-opacity duration-700 " +
            (startRain ? "opacity-100 " : "opacity-0 ") +
            (expandFull
              ? "w-full h-full rounded-none translate-y-0" // <-- fill the fixed wrapper
              : "w-[18vw] sm:w-[14vw] lg:w-[vw] h-[40vh] sm:h-[38vh] lg:h-[42vh] max-w-[200px] min-w-[100px] max-h-[360px] min-h-[180px] rounded-[10px] translate-y-[8%]"
            )
          }
          style={{
            boxShadow: expandFull
              ? "0 0 24px rgba(0,255,102,0.18)"
              : "0 0 12px rgba(0,255,102,0.28)",
            background: "transparent",
          }}
        />
      </motion.div>

      {/* Right half — rotate on open, fade during zoom */}
      <motion.img
        className="w-50 z-0"
        src={diandreright}
        alt="right half of Diandre"
        initial={false}
        animate={{
          rotateY: isOpen ? -85 : 0,
          opacity: startRain ? 0 : 1,
        }}
        transition={{
          rotateY: { duration: 1.5, ease: "easeInOut" },
          opacity: { duration: ZOOM_DURATION_MS / 1000, ease: "easeInOut" },
        }}
        style={{ transformOrigin: "center" }}
      />
    </div>
  );
};

export default EnterTheMatrix;