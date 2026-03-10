"use client";

import { useRef, useEffect, useCallback } from "react";

// ── EQ bars
function EQBars() {
  return (
    <div className="flex items-end gap-[3px] h-7" aria-hidden>
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="w-[3px] rounded-full bg-[#1d1d1f] animate-eq"
          style={{
            animationDelay: `${(i * 0.07).toFixed(2)}s`,
            animationDuration: `${(0.45 + (i % 5) * 0.11).toFixed(2)}s`,
          }}
        />
      ))}
    </div>
  );
}

// ── Infinite vertical stack
const stackItems = [
  "Next.js", "TypeScript", "Python", "Go",
  "Kafka", "PostgreSQL", "Redis", "Docker",
  "After Effects", "Premiere Pro", "Ableton Live", "GSAP",
];
const stackDuped = [...stackItems, ...stackItems];

// ── Motion cell: self-animating particles disturbed by mouse
const N_PARTICLES = 38;

function initParticles(W: number, H: number) {
  return Array.from({ length: N_PARTICLES }, (_, i) => ({
    x: Math.random() * W,
    y: Math.random() * H,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    r: 1.5 + Math.random() * 2.5,
    phase: Math.random() * Math.PI * 2,
    speed: 0.3 + Math.random() * 0.4,
  }));
}

function MotionCell() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -999, y: -999 });
  const rafRef = useRef(0);
  const particles = useRef<ReturnType<typeof initParticles>>([]);
  const t = useRef(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const W = canvas.width;
    const H = canvas.height;
    const mx = mouse.current.x;
    const my = mouse.current.y;
    t.current += 0.012;

    // Soft trail effect — don't fully clear
    ctx.fillStyle = "rgba(29,29,31,0.18)";
    ctx.fillRect(0, 0, W, H);

    const hasMouseInside = mx > 0 && mx < W && my > 0 && my < H;

    for (const p of particles.current) {
      // Autonomous drift — gentle sine wave path
      p.vx += Math.sin(t.current * p.speed + p.phase) * 0.015;
      p.vy += Math.cos(t.current * p.speed + p.phase * 1.3) * 0.015;

      // Cap velocity
      const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (speed > 1.2) { p.vx *= 0.96; p.vy *= 0.96; }

      // Mouse repulsion — scatter on hover
      if (hasMouseInside) {
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const repelR = 70;
        if (dist < repelR && dist > 0) {
          const force = (1 - dist / repelR) * 2.5;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }
      }

      p.x += p.vx;
      p.y += p.vy;

      // Wrap edges
      if (p.x < -10) p.x = W + 10;
      if (p.x > W + 10) p.x = -10;
      if (p.y < -10) p.y = H + 10;
      if (p.y > H + 10) p.y = -10;

      // Draw particle
      const distToMouse = Math.sqrt((p.x - mx) ** 2 + (p.y - my) ** 2);
      const glow = hasMouseInside ? Math.max(0, 1 - distToMouse / 80) : 0;
      const opacity = 0.35 + glow * 0.65;
      const drawR = p.r + glow * 3;

      ctx.beginPath();
      ctx.arc(p.x, p.y, drawR, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(245,245,247,${opacity.toFixed(2)})`;
      ctx.fill();

      // Draw connections between close particles
      for (const q of particles.current) {
        if (q === p) continue;
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 80) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(245,245,247,${((1 - d / 80) * 0.12).toFixed(2)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    rafRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const setSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      particles.current = initParticles(canvas.width, canvas.height);
    };

    setSize();
    const ro = new ResizeObserver(setSize);
    ro.observe(canvas);
    rafRef.current = requestAnimationFrame(draw);
    return () => { ro.disconnect(); cancelAnimationFrame(rafRef.current); };
  }, [draw]);

  const onMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };
  const onLeave = () => { mouse.current = { x: -999, y: -999 }; };

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="w-full h-full cursor-crosshair block"
    />
  );
}

export function About() {
  return (
    <section className="bg-white py-20 px-6 border-t border-[#d2d2d7]">
      <div className="max-w-[980px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-auto">

          {/* Row 1 */}

          {/* Cell 1 — identity (2 cols) */}
          <div className="col-span-2 bg-[#f5f5f7] rounded-[18px] p-7 flex flex-col justify-between h-[150px]">
            <p className="text-[11px] font-mono text-[#6e6e73] uppercase tracking-widest">About</p>
            <div>
              <p className="text-[26px] font-semibold text-[#1d1d1f] leading-[1.1] tracking-[-0.02em]">Engineer.</p>
              <p className="text-[26px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#6e6e73]">Creator.</p>
            </div>
          </div>

          {/* Cell 2 — EQ (1 col) */}
          <div className="col-span-1 bg-[#f5f5f7] rounded-[18px] p-7 flex flex-col justify-between h-[150px]">
            <p className="text-[11px] font-mono text-[#6e6e73] uppercase tracking-widest">Sound</p>
            <div className="space-y-2">
              <EQBars />
              <p className="text-[12px] text-[#6e6e73] font-mono">Music Producer</p>
            </div>
          </div>

          {/* Cell 3 — now (1 col) */}
          <div className="col-span-1 bg-[#f5f5f7] rounded-[18px] p-7 flex flex-col justify-between h-[150px]">
            <p className="text-[11px] font-mono text-[#6e6e73] uppercase tracking-widest">Now</p>
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#30d158] animate-pulse" />
                <span className="text-[11px] font-mono text-[#30d158]">Building</span>
              </div>
              <p className="text-[14px] text-[#1d1d1f] leading-snug font-medium">
                This portfolio & side projects
              </p>
            </div>
          </div>

          {/* Row 2 */}

          {/* Cell 4 — Motion particle field (2 cols, explicit height) */}
          <div className="col-span-2 bg-[#1d1d1f] rounded-[18px] h-[220px] flex flex-col overflow-hidden relative group">
            {/* Label + hint overlay */}
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-7 pt-6 z-10 pointer-events-none">
              <p className="text-[11px] font-mono text-[#6e6e73] uppercase tracking-widest">Motion</p>
              <p className="text-[11px] font-mono text-[#424245] group-hover:text-[#6e6e73] transition-colors">
                hover
              </p>
            </div>
            {/* Canvas fills entire cell */}
            <div className="absolute inset-0">
              <MotionCell />
            </div>
            {/* Bottom label */}
            <p className="absolute bottom-0 left-0 right-0 px-7 pb-5 text-[12px] text-[#424245] font-mono z-10 pointer-events-none group-hover:text-[#6e6e73] transition-colors">
              Video Editor · Animator
            </p>
          </div>

          {/* Cell 5 — stack scroll (1 col) */}
          <div className="col-span-1 bg-[#f5f5f7] rounded-[18px] p-7 h-[180px] flex flex-col overflow-hidden">
            <p className="text-[11px] font-mono text-[#6e6e73] uppercase tracking-widest mb-3">Stack</p>
            <div className="flex-1 overflow-hidden relative">
              <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-[#f5f5f7] to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-[#f5f5f7] to-transparent z-10 pointer-events-none" />
              <div className="flex flex-col gap-2 animate-stack-scroll">
                {stackDuped.map((s, i) => (
                  <span key={i} className="text-[12px] font-mono text-[#6e6e73] whitespace-nowrap">{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Cell 6 — code (1 col) */}
          <div className="col-span-1 bg-[#1d1d1f] rounded-[18px] p-7 h-[220px] flex flex-col justify-between overflow-hidden">
            <p className="text-[11px] font-mono text-[#6e6e73] uppercase tracking-widest">Code</p>
            <div className="font-mono text-[12px] leading-[1.9] text-[#a1a1a6]">
              <p><span className="text-[#30d158]">const</span> <span className="text-[#f5f5f7]">najeem</span> = {"{"}</p>
              <p className="pl-3"><span className="text-[#a1a1a6]">builds:</span> <span className="text-[#f5f5f7]">"things"</span>,</p>
              <p className="pl-3"><span className="text-[#a1a1a6]">ships:</span> <span className="text-[#f5f5f7]">true</span>,</p>
              <p className="pl-3"><span className="text-[#a1a1a6]">learns:</span> <span className="text-[#f5f5f7]">always</span>,</p>
              <p>{"}"}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
