"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
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

// Eyes follow cursor — offset relative to eye position in image
function EyesLayer() {
  const wrapRef = useRef<HTMLDivElement>(null); // the outer image container
  const eyesRef = useRef<HTMLDivElement>(null); // the translating div
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const raf = useRef(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const wrap = wrapRef.current;
      if (!wrap) return;
      const rect = wrap.getBoundingClientRect();

      // Eye center in the image — approx 28% from top, 50% horizontally
      const eyeX = rect.left + rect.width * 0.50;
      const eyeY = rect.top + rect.height * 0.28;

      // Vector from eye to cursor
      const dx = e.clientX - eyeX;
      const dy = e.clientY - eyeY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Max travel in px — eyes move toward cursor, zero when cursor is on eye
      const MAX_L = 8;
      const MAX_R = 0.3; // body already angled right — less travel needed
      const MAX_X = dx > 0 ? MAX_R : MAX_L;
      const MAX_Y = 8;
      const scale = Math.min(dist, 200) / 200; // ramps up over 200px distance
      target.current = {
        x: (dx / (dist || 1)) * scale * MAX_X,
        y: (dy / (dist || 1)) * scale * MAX_Y,
      };
    };

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.08;
      current.current.y += (target.current.y - current.current.y) * 0.08;
      if (eyesRef.current) {
        eyesRef.current.style.transform = `translate(${current.current.x.toFixed(2)}px, ${current.current.y.toFixed(2)}px)`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div ref={wrapRef} className="absolute inset-0">
      <div ref={eyesRef} className="absolute inset-0 will-change-transform">
        <Image
          src="/eyes.png"
          alt=""
          height={6000}
          width={4000}
          quality={100}
          className="h-full w-auto object-contain object-bottom"
          priority
          aria-hidden
        />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen w-full max-w-[1700px] mx-auto bg-white flex flex-col justify-between px-6 md:px-16 py-16 overflow-hidden">

      {/* Body + eyes — same canvas size, eyes behind body */}
      <div className="absolute bottom-0 right-0 h-[115%] w-auto pointer-events-none select-none">
        <EyesLayer />
        {/* Body layer — on top */}
        <Image
          src="/body.png"
          alt="Najeem"
          height={6000}
          width={4000}
          quality={100}
          className="relative h-full w-auto object-contain object-bottom"
          priority
        />
      </div>

      {/* Top-left links */}
      <div className="flex items-center relative z-10">
        <div className="flex gap-7">
          {links.map((l) => (
            <MagneticLink key={l.label} {...l} />
          ))}
        </div>
      </div>

      {/* Name */}
      <div className="flex-1 flex flex-col justify-center relative z-10">
        <TiltName />
      </div>

      {/* Bottom row */}
      <div className="flex items-end justify-between relative z-10">
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
