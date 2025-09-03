import { useEffect, useRef, useState } from "react";
import diandreleft from "../assets/diandre_left.png";
import diandreright from "../assets/diandre_right.png";
import { motion } from "framer-motion";

const EnterTheMatrix = () => {
  const canvasRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [startRain, setStartRain] = useState(false);

  // start effect 1.5s after doors open
  useEffect(() => {
    if (!isOpen) return;
    const t = setTimeout(() => setStartRain(true), 1500);
    return () => clearTimeout(t);
  }, [isOpen]);

// centerward “fall into screen” effect — SLOW + CLEAR letters
// centerward effect — staggered timing so letters don't converge together
// Centerward effect — continuous edge emitter (no visible "start place")
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
    cssW = canvas.offsetWidth;
    cssH = canvas.offsetHeight;
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    canvas.width = Math.floor(cssW * dpr);
    canvas.height = Math.floor(cssH * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  // spawn at a random edge (just outside the canvas)
  const spawnFromEdge = () => {
    const edge = choose(["top", "right", "bottom", "left"]);
    let x, y;
    const overshoot = 10; // start slightly offscreen

    switch (edge) {
      case "top":
        x = rand(-overshoot, cssW + overshoot);
        y = -overshoot;
        break;
      case "bottom":
        x = rand(-overshoot, cssW + overshoot);
        y = cssH + overshoot;
        break;
      case "left":
        x = -overshoot;
        y = rand(-overshoot, cssH + overshoot);
        break;
      case "right":
        x = cssW + overshoot;
        y = rand(-overshoot, cssH + overshoot);
        break;
    }

    return {
      x,
      y,
      vx: 0,
      vy: 0,
      ch: choose(letters),
      // per-particle variation & timing
      speedMul: rand(0.6, 1.4),
      delayFrames: randInt(0, 90),        // staggered start
      life: 0,                             // for fade-in
      alphaIn: rand(6, 14),                // frames to fade in
    };
  };

  const trySpawn = () => {
    // probabilistic spawn to avoid bursts
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

        // gentle inward pull with per-particle speed
        const SPEED = BASE_SPEED * p.speedMul;
        p.vx = (p.vx + ndx * dist * SPEED) * DRAG;
        p.vy = (p.vy + ndy * dist * SPEED) * DRAG;

        // slight wobble so paths aren't perfectly straight
        p.vx += (Math.random() - 0.5) * 0.01;
        p.vy += (Math.random() - 0.5) * 0.01;

        p.x += p.vx;
        p.y += p.vy;

        // age for fade-in
        p.life++;
      }

      // sizing & alpha (clear, readable, slight fade-in)
      const dx2 = cx - p.x;
      const dy2 = cy - p.y;
      const dist2 = Math.hypot(dx2, dy2) || 1;
      const edgeFactor = Math.min(1, dist2 / maxDist);
      const size = Math.max(16, BASE_SIZE * (0.9 + 0.9 * edgeFactor));

      // fade-in over first alphaIn frames
      const fadeIn = Math.min(1, p.life / p.alphaIn);
      const alpha = 0.8 * fadeIn; // up to 0.8 opacity

      ctx.globalAlpha = alpha;
      ctx.fillStyle = "#00ff66";
      ctx.font = `700 ${size}px monospace`;
      ctx.fillText(p.ch, p.x, p.y);
      ctx.globalAlpha = 1;

      // recycle near center (despawn + respawn at edge)
      if (dist2 < 18 && p.delayFrames <= 0) {
        particles.splice(i, 1);
        particles.push(spawnFromEdge());
      }
    }

    raf = requestAnimationFrame(step);
  };

  sizeCanvas();
  raf = requestAnimationFrame(step);
  window.addEventListener("resize", sizeCanvas);

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("resize", sizeCanvas);
  };
}, [startRain]);

  return (
    <div
      className="relative flex justify-center items-center h-screen bg-black overflow-hidden cursor-pointer"
      onClick={() => setIsOpen(true)}
      role="button"
      aria-label="Enter the Matrix"
    >
      {/* left half */}
      <motion.img
        className="w-50 z-0"
        src={diandreleft}
        alt="left half of Diandre"
        initial={false}
        animate={{ rotateY: isOpen ? 85 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{ transformOrigin: "center" }}
      />

      {/* matrix canvas ABOVE the halves */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className={`transition-opacity duration-700 ${
            startRain ? "opacity-100" : "opacity-0"
          } 
          w-[18vw] sm:w-[14vw] lg:w-[12vw]
          h-[40vh] sm:h-[38vh] lg:h-[42vh]
          max-w-[220px] min-w-[100px]
          max-h-[360px] min-h-[180px]
          
          translate-y-[8%]`}
          style={{
            boxShadow: "0 0 12px rgba(0,255,102,0.28)",
            background: "transparent",
          }}
        />
      </div>

      {/* right half */}
      <motion.img
        className="w-50 z-0"
        src={diandreright}
        alt="right half of Diandre"
        initial={false}
        animate={{ rotateY: isOpen ? 85 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{ transformOrigin: "center" }}
      />
    </div>
  );
};

export default EnterTheMatrix;