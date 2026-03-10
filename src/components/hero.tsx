"use client";

import { useEffect, useRef } from "react";
import { useMagnetic } from "@/hooks/use-magnetic";

const links = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Email", href: "mailto:najeem@example.com" },
];

function MagneticLink({ label, href }: { label: string; href: string }) {
  const ref = useMagnetic(0.25);
  return (
    <a
      ref={ref as React.RefObject<HTMLAnchorElement>}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="inline-block text-[13px] font-mono text-[#6e6e73] hover:text-[#1d1d1f] transition-colors duration-200 tracking-widest uppercase px-1 py-1"
    >
      {label}
    </a>
  );
}

// 3D tilt + scroll reactive name
function TiltName() {
  const ref = useRef<HTMLHeadingElement>(null);
  const state = useRef({ rx: 0, ry: 0, scroll: 0, raf: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMouse = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      // -1 to 1
      const nx = (e.clientX / w - 0.5) * 2;
      const ny = (e.clientY / h - 0.5) * 2;
      state.current.ry = nx * 6;   // max 6deg horizontal
      state.current.rx = -ny * 3;  // max 3deg vertical
    };

    const onScroll = () => {
      state.current.scroll = window.scrollY;
    };

    const tick = () => {
      const { rx, ry, scroll } = state.current;
      const scrollRx = Math.min(scroll * 0.015, 8); // tilt back slightly on scroll
      el.style.transform = `perspective(800px) rotateX(${rx + scrollRx}deg) rotateY(${ry}deg)`;
      state.current.raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    state.current.raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(state.current.raf);
    };
  }, []);

  return (
    <h1
      ref={ref}
      className="text-[clamp(72px,13vw,180px)] font-semibold leading-[0.92] tracking-[-0.04em] text-[#1d1d1f] select-none will-change-transform"
      style={{ transformStyle: "preserve-3d", transition: "transform 0.08s linear" }}
    >
      Najeem
      <br />
      Shaik
    </h1>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen bg-white flex flex-col justify-between px-6 md:px-16 py-16 overflow-hidden">
      {/* Top nav */}
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-mono text-[#6e6e73] tracking-widest uppercase">
          Najeem Shaik
        </span>
        <div className="flex gap-7">
          {links.map((l) => (
            <MagneticLink key={l.label} {...l} />
          ))}
        </div>
      </div>

      {/* Name */}
      <div className="flex-1 flex flex-col justify-center">
        <TiltName />
      </div>

      {/* Bottom row */}
      <div className="flex items-end justify-between">
        <p className="text-[13px] text-[#6e6e73] font-mono max-w-[280px] leading-relaxed">
          Software engineer ·{" "}
          <br className="hidden md:block" />
          music producer · video editor · animator
        </p>
        <span className="text-[13px] font-mono text-[#6e6e73]">
          © {new Date().getFullYear()}
        </span>
      </div>
    </section>
  );
}
