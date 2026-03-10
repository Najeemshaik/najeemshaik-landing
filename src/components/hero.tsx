"use client";

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

export function Hero() {
  return (
    <section className="relative min-h-screen bg-white flex flex-col justify-between px-6 md:px-16 py-16 overflow-hidden">

      {/* Top nav row */}
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

      {/* Centre: name */}
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-[clamp(72px,13vw,180px)] font-semibold leading-[0.92] tracking-[-0.04em] text-[#1d1d1f] select-none">
          Najeem
          <br />
          Shaik
        </h1>
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
