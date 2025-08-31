import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/matrixFourOFour.css";

const FourOFour = () => {
  useEffect(() => {
    const canvas = document.getElementById("matrix");
    const ctx = canvas.getContext("2d");
    const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const fontSize = 16;
    let drops = [];

    function initCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const cols = Math.floor(canvas.width / fontSize);
      drops = Array(cols).fill(1);
      ctx.fillStyle = "rgb(0,0,0)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function draw() {
      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0F0";
      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const ch = letters[(Math.random() * letters.length) | 0];
        ctx.fillText(ch, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    }

    initCanvas();
    const id = setInterval(draw, 33);
    window.addEventListener("resize", initCanvas);
    return () => {
      clearInterval(id);
      window.removeEventListener("resize", initCanvas);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden bg-black">
      {/* Canvas in the background */}
      <canvas id="matrix" className="absolute inset-0 w-full h-full block -z-10" />

      {/* 404 message — ignore pointer events so clicks pass through */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center justify-center">
        <h1 className="text-9xl font-extrabold text-green-500 drop-shadow-[0_0_20px_#00ff00]">
          404
        </h1>
        <p className="mt-4 text-green-400 font-mono text-xl">You took the wrong pill...</p>
      </div>

      {/* Return pill — sits above, clickable */}
      <h2 className="absolute inset-0 z-20 flex items-center justify-center">
        <Link
          to="/"
          className="cursor-pointer px-5 py-2 border-2 border-blue-500 text-blue-700 text-[22px] font-semibold rounded-full animate-heartbeat2 willchange-beat translate-y-24"
        >
          Return Home
        </Link>
      </h2>
    </div>
  );
};

export default FourOFour;