import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const NODES = 70;
const CONNECTION_DIST = 140;
const CURSOR_REPEL_DIST = 120;
const CURSOR_CONNECT_DIST = 160;

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const nodesRef = useRef<Node[]>([]);
  const animRef = useRef<number>(0);
  const themeRef = useRef(resolvedTheme);

  // sync theme into ref so animation loop can read it without re-mounting
  useEffect(() => {
    themeRef.current = resolvedTheme;
  }, [resolvedTheme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // init nodes
    nodesRef.current = Array.from({ length: NODES }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1.5,
    }));

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      const isDark = themeRef.current === "dark";

      ctx.clearRect(0, 0, w, h);

      const nodeColor = isDark ? "138, 43, 226" : "100, 40, 180";
      const lineColor = isDark ? "120, 30, 200" : "110, 40, 190";
      const cursorLineColor = isDark ? "140, 60, 220" : "120, 50, 200";

      const nodes = nodesRef.current;
      const mouse = mouseRef.current;

      // update positions
      for (const n of nodes) {
        // repel from cursor
        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CURSOR_REPEL_DIST && dist > 0) {
          const force = (CURSOR_REPEL_DIST - dist) / CURSOR_REPEL_DIST;
          n.vx += (dx / dist) * force * 0.4;
          n.vy += (dy / dist) * force * 0.4;
        }

        // dampen
        n.vx *= 0.97;
        n.vy *= 0.97;

        n.x += n.vx;
        n.y += n.vy;

        // bounce
        if (n.x < 0) { n.x = 0; n.vx *= -1; }
        if (n.x > w) { n.x = w; n.vx *= -1; }
        if (n.y < 0) { n.y = 0; n.vy *= -1; }
        if (n.y > h) { n.y = h; n.vy *= -1; }
      }

      // draw connections between nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * (isDark ? 0.18 : 0.09);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // draw cursor connections
      for (const n of nodes) {
        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CURSOR_CONNECT_DIST) {
          const alpha = (1 - dist / CURSOR_CONNECT_DIST) * (isDark ? 0.35 : 0.2);
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${cursorLineColor}, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(n.x, n.y);
          ctx.stroke();
        }
      }

      // draw nodes
      for (const n of nodes) {
        // glow
        const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius * (isDark ? 4 : 3));
        grd.addColorStop(0, `rgba(${nodeColor}, ${isDark ? 0.35 : 0.18})`);
        grd.addColorStop(1, `rgba(${nodeColor}, 0)`);

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * (isDark ? 4 : 3), 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${nodeColor}, ${isDark ? 0.45 : 0.25})`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
