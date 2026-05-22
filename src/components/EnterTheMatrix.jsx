import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import diandreleft from "../assets/diandre_left.png";
import diandreright from "../assets/diandre_right.png";

const ZOOM_DURATION_MS = 6500;
const EXPAND_FULL_AFTER_MS = 5600;
const FULLSCREEN_ANIM_MS = 1700;

const EnterTheMatrix = () => {
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [startRain, setStartRain] = useState(false);
  const [expandFull, setExpandFull] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const t = setTimeout(() => {
      setStartRain(true);
    }, 1200);

    return () => clearTimeout(t);
  }, [isOpen]);

  useEffect(() => {
    if (!startRain) return;

    const tExpand = setTimeout(() => {
      setExpandFull(true);

      setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
      }, 50);
    }, EXPAND_FULL_AFTER_MS);

    return () => clearTimeout(tExpand);
  }, [startRain]);

  useEffect(() => {
    if (!expandFull) return;

    const t = setTimeout(() => {
      navigate("/about-me");
    }, FULLSCREEN_ANIM_MS);

    return () => clearTimeout(t);
  }, [expandFull, navigate]);

  useEffect(() => {
    if (!startRain) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const letters =
      "アイウエオカキクケコサシスセソABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*".split(
        ""
      );

    let cssW = 0;
    let cssH = 0;
    let raf = 0;

    const MAX_PARTS = 220;
    const SPAWN_PER_FRAME = 6;
    const BASE_SPEED = 0.0075;
    const DRAG = 0.982;
    const BASE_SIZE = 16;

    const particles = [];

    const rand = (a, b) => a + Math.random() * (b - a);
    const randInt = (a, b) => Math.floor(rand(a, b + 1));
    const choose = (arr) => arr[(Math.random() * arr.length) | 0];

    const sizeCanvas = () => {
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

      let x = 0;
      let y = 0;

      const overshoot = 20;

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

        default:
          x = cssW + overshoot;
          y = rand(-overshoot, cssH + overshoot);
      }

      return {
        x,
        y,
        vx: 0,
        vy: 0,
        ch: choose(letters),
        speedMul: rand(0.6, 1.8),
        delayFrames: randInt(0, 80),
        life: 0,
        alphaIn: rand(6, 16),
      };
    };

    const trySpawn = () => {
      for (let i = 0; i < SPAWN_PER_FRAME; i++) {
        if (particles.length < MAX_PARTS && Math.random() < 0.92) {
          particles.push(spawnFromEdge());
        }
      }
    };

    const step = () => {
      ctx.fillStyle = "rgba(0,0,0,0.12)";
      ctx.fillRect(0, 0, cssW, cssH);

      const cx = cssW * 0.5;
      const cy = cssH * 0.5;

      const maxDist = Math.hypot(cx, cy);

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.shadowColor = "#00ff66";
      ctx.shadowBlur = 12;

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

          p.vx += (Math.random() - 0.5) * 0.08;
          p.vy += (Math.random() - 0.5) * 0.08;

          p.x += p.vx;
          p.y += p.vy;

          p.life++;
        }

        const dx2 = cx - p.x;
        const dy2 = cy - p.y;

        const dist2 = Math.hypot(dx2, dy2) || 1;

        const edgeFactor = Math.min(1, dist2 / maxDist);

        const size = Math.max(10, BASE_SIZE * (0.8 + edgeFactor * 1.8));
        const fadeIn = Math.min(1, p.life / p.alphaIn);
        const alpha = 0.9 * fadeIn;

        ctx.globalAlpha = alpha;

        const green = Math.floor(180 + edgeFactor * 75);

        ctx.fillStyle = `rgb(0,${green},90)`;
        ctx.font = `700 ${size}px monospace`;
        ctx.fillText(p.ch, p.x, p.y);

        ctx.globalAlpha = 1;

        if (dist2 < 45) {
          ctx.beginPath();
          ctx.arc(cx, cy, 4, 0, Math.PI * 2);
          ctx.fillStyle = "#00ff99";
          ctx.fill();
        }

        if (dist2 < 18 && p.delayFrames <= 0) {
          particles.splice(i, 1);
          particles.push(spawnFromEdge());
        }
      }

      raf = requestAnimationFrame(step);
    };

    sizeCanvas();

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cssW, cssH);

    raf = requestAnimationFrame(step);

    const onResize = () => {
      sizeCanvas();
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [startRain, expandFull]);

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black overflow-hidden cursor-pointer [perspective:1400px]"
      onClick={() => setIsOpen(true)}
      role="button"
      aria-label="Enter the Matrix"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,102,0.18),rgba(0,0,0,0.94)_45%,black_80%)]" />

      <div className="pointer-events-none absolute inset-0 z-30 opacity-20 bg-[linear-gradient(rgba(0,255,102,0.15)_1px,transparent_1px)] bg-[length:100%_4px]" />

      <div className="pointer-events-none absolute inset-0 z-40 shadow-[inset_0_0_160px_rgba(0,0,0,1)]" />

      {startRain && (
        <motion.div
          className="absolute z-5 h-40 w-24 rounded-full bg-green-400/20 blur-3xl"
          initial={{
            scale: 0.4,
            opacity: 0,
          }}
          animate={{
            scale: expandFull ? 10 : 2.5,
            opacity: expandFull ? 0.2 : 0.85,
          }}
          transition={{
            duration: expandFull ? 1.7 : 5.2,
            ease: expandFull ? [0.65, 0, 0.35, 1] : [0.45, 0, 0.2, 1],
          }}
        />
      )}

      <motion.img
        className="w-50 z-10 drop-shadow-[0_0_24px_rgba(0,255,102,0.25)]"
        src={diandreleft}
        alt="left half of Diandre"
        initial={false}
        animate={{
          rotateY: isOpen ? 88 : 0,
          x: isOpen ? -22 : 0,
          opacity: expandFull ? 0 : 1,
          filter: isOpen
            ? "brightness(0.55) contrast(1.25)"
            : "brightness(1)",
        }}
        transition={{
          rotateY: {
            duration: 1.45,
            ease: "easeInOut",
          },
          x: {
            duration: 1.45,
            ease: "easeInOut",
          },
          opacity: {
            duration: 0.6,
            ease: "easeInOut",
          },
          filter: {
            duration: 1.2,
          },
        }}
        style={{
          transformOrigin: "right center",
        }}
      />

      <motion.div
        className={
          "pointer-events-none z-20 will-change-transform " +
          (expandFull
            ? "fixed inset-0"
            : "absolute inset-0 flex items-center justify-center")
        }
        initial={{
          scale: 1,
        }}
        animate={
          startRain
            ? expandFull
              ? {
                  scale: 1.15,
                  rotateX: 0,
                }
              : {
                  scaleX: 8.5,
                  scaleY: 3.6,
                  rotateX: 18,
                }
            : {
                scale: 1,
              }
        }
        transition={{
          duration: expandFull
            ? FULLSCREEN_ANIM_MS / 1000
            : ZOOM_DURATION_MS / 1000,
          ease: expandFull
            ? [0.65, 0, 0.35, 1]
            : [0.45, 0, 0.2, 1],
        }}
        style={{
          transformOrigin: "50% 50%",
        }}
      >
        <canvas
          ref={canvasRef}
          className={
            "block transition-opacity duration-700 " +
            (startRain ? "opacity-100 " : "opacity-0 ") +
            (expandFull
              ? "w-full h-full rounded-none"
              : "w-[18vw] sm:w-[14vw] lg:w-[12vw] h-[42vh] max-w-[210px] min-w-[100px] max-h-[380px] min-h-[190px] rounded-[12px] translate-y-[8%]")
          }
          style={{
            boxShadow: expandFull
              ? "0 0 80px rgba(0,255,102,0.35)"
              : "0 0 28px rgba(0,255,102,0.55)",
            background: "rgba(0,20,8,0.28)",
          }}
        />
      </motion.div>

      <motion.img
        className="w-50 z-10 drop-shadow-[0_0_24px_rgba(0,255,102,0.25)]"
        src={diandreright}
        alt="right half of Diandre"
        initial={false}
        animate={{
          rotateY: isOpen ? -88 : 0,
          x: isOpen ? 22 : 0,
          opacity: expandFull ? 0 : 1,
          filter: isOpen
            ? "brightness(0.55) contrast(1.25)"
            : "brightness(1)",
        }}
        transition={{
          rotateY: {
            duration: 1.45,
            ease: "easeInOut",
          },
          x: {
            duration: 1.45,
            ease: "easeInOut",
          },
          opacity: {
            duration: 0.6,
            ease: "easeInOut",
          },
          filter: {
            duration: 1.2,
          },
        }}
        style={{
          transformOrigin: "left center",
        }}
      />

      {!isOpen && (
        <motion.p
          className="absolute bottom-16 z-50 text-green-400 tracking-[0.35em] text-xs sm:text-sm font-mono"
          animate={{
            opacity: [0.35, 1, 0.35],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
          }}
        >
          CLICK TO ENTER
        </motion.p>
      )}
    </div>
  );
};

export default EnterTheMatrix;