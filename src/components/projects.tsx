"use client";

import { useRef, useCallback } from "react";

const projects = [
  {
    index: "01",
    name: "Project Alpha",
    year: "2024",
    discipline: "Full-Stack",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    link: "#",
  },
  {
    index: "02",
    name: "Dev CLI Tool",
    year: "2024",
    discipline: "Tooling",
    stack: ["Node.js", "TypeScript", "Shell"],
    link: "#",
  },
  {
    index: "03",
    name: "Data Pipeline",
    year: "2023",
    discipline: "Backend",
    stack: ["Python", "Kafka", "Redis"],
    link: "#",
  },
  {
    index: "04",
    name: "Motion Reel",
    year: "2023",
    discipline: "Video · Animation",
    stack: ["After Effects", "Premiere Pro"],
    link: "#",
  },
  {
    index: "05",
    name: "Beat Pack Vol. 1",
    year: "2023",
    discipline: "Music Production",
    stack: ["Ableton Live"],
    link: "#",
  },
];

function DrawArrow() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className="shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
    >
      <path
        d="M3.5 14.5L14.5 3.5M14.5 3.5H6.5M14.5 3.5V11.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="[stroke-dasharray:36] [stroke-dashoffset:36] group-hover:[stroke-dashoffset:0] transition-all duration-400"
      />
    </svg>
  );
}

// Subtle vertical magnetic pull on each row
function ProjectRow({ p }: { p: typeof projects[0] }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dy = (e.clientY - rect.top - rect.height / 2) * 0.08;
    el.style.transform = `translateY(${dy}px)`;
    el.style.transition = "transform 0.1s ease-out";
  }, []);

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translateY(0)";
    el.style.transition = "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
  }, []);

  return (
    <a
      ref={ref}
      href={p.link}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group flex items-center justify-between py-5 border-t border-[#d2d2d7] hover:border-[#1d1d1f] transition-colors duration-200"
    >
      <div className="flex items-center gap-6 min-w-0">
        <span className="font-mono text-[11px] text-[#d2d2d7] w-5 shrink-0">{p.index}</span>
        <span className="text-[#1d1d1f] text-[18px] font-medium tracking-[-0.01em] truncate">
          {p.name}
        </span>
        <span className="hidden md:block text-[13px] text-[#6e6e73] font-mono">{p.discipline}</span>
      </div>
      <div className="flex items-center gap-5 shrink-0 ml-4">
        <div className="hidden md:flex gap-3">
          {p.stack.map((t) => (
            <span key={t} className="text-[11px] font-mono text-[#d2d2d7] group-hover:text-[#6e6e73] transition-colors duration-200">
              {t}
            </span>
          ))}
        </div>
        <span className="font-mono text-[11px] text-[#6e6e73]">{p.year}</span>
        <span className="text-[#d2d2d7] group-hover:text-[#1d1d1f] transition-colors duration-200">
          <DrawArrow />
        </span>
      </div>
    </a>
  );
}

export function Projects() {
  return (
    <section id="projects" className="bg-white py-24 px-6 border-t border-[#d2d2d7]">
      <div className="max-w-[980px] mx-auto">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-[clamp(32px,5vw,56px)] font-semibold tracking-[-0.025em] text-[#1d1d1f] leading-none">
            Work
          </h2>
          <span className="font-mono text-[12px] text-[#6e6e73] pb-1">
            {projects.length} projects
          </span>
        </div>
        <div>
          {projects.map((p) => (
            <ProjectRow key={p.index} p={p} />
          ))}
          <div className="border-t border-[#d2d2d7]" />
        </div>
      </div>
    </section>
  );
}
