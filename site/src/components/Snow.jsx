import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const DEFAULT_FLAKES = 120;

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

const Snow = ({ flakes = DEFAULT_FLAKES }) => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const flakesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const createFlake = (width, height) => ({
      x: Math.random() * width,
      y: -Math.random() * height,
      r: randomBetween(0.6, 2.2),
      vy: randomBetween(0.35, 1.25),
      vx: randomBetween(-0.25, 0.25),
      drift: randomBetween(0.002, 0.01),
      phase: Math.random() * Math.PI * 2,
      alpha: randomBetween(0.35, 0.85),
    });

    const resize = () => {
      const dpr = clamp(window.devicePixelRatio || 1, 1, 2);
      const width = window.innerWidth || 1;
      const height = window.innerHeight || 1;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = clamp(Number(flakes) || DEFAULT_FLAKES, 20, 400);
      const existing = flakesRef.current;

      if (existing.length === count) return;

      const next = new Array(count).fill(null).map((_, i) => {
        if (existing[i]) return existing[i];
        return createFlake(width, height);
      });
      flakesRef.current = next;
    };

    resize();
    window.addEventListener("resize", resize);

    let last = performance.now();
    const tick = (now) => {
      const dt = clamp((now - last) / 16.67, 0.5, 2);
      last = now;

      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "#ffffff";
      for (const flake of flakesRef.current) {
        flake.phase += flake.drift * dt * 60;
        flake.x += (flake.vx + Math.sin(flake.phase) * 0.2) * dt * 60;
        flake.y += flake.vy * dt * 60;

        if (flake.x < -10) flake.x = width + 10;
        if (flake.x > width + 10) flake.x = -10;
        if (flake.y > height + 10) {
          flake.y = -10;
          flake.x = Math.random() * width;
        }

        ctx.globalAlpha = flake.alpha;
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [flakes]);

  return createPortal(
    <canvas
      ref={canvasRef}
      className="fixed left-0 top-0 w-screen h-screen z-10 pointer-events-none"
      aria-hidden="true"
    />,
    document.body
  );
};

export default Snow;
