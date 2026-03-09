"use client";

import { useRef } from "react";

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

// SVG arrow that draws itself on hover
function DrawArrow() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
    >
      <path
        d="M4 16L16 4M16 4H7M16 4V13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="[stroke-dasharray:40] [stroke-dashoffset:40] group-hover:[stroke-dashoffset:0] transition-all duration-500"
      />
    </svg>
  );
}

export function Projects() {
  return (
    <section id="projects" className="bg-[#000] py-24 px-6 border-t border-[#1d1d1f]">
      <div className="max-w-[980px] mx-auto">

        {/* Header row */}
        <div className="flex items-end justify-between mb-3">
          <h2 className="text-[clamp(32px,5vw,56px)] font-semibold tracking-[-0.025em] text-[#f5f5f7] leading-none">
            Work
          </h2>
          <span className="font-mono text-[12px] text-[#6e6e73] pb-1">
            {projects.length} projects
          </span>
        </div>

        {/* Project rows */}
        <div className="mt-8">
          {projects.map((p, i) => (
            <a
              key={p.index}
              href={p.link}
              className="group flex items-center justify-between py-5 border-t border-[#1d1d1f] hover:border-[#3a3a3c] transition-colors duration-200"
            >
              <div className="flex items-center gap-6 min-w-0">
                <span className="font-mono text-[11px] text-[#424245] w-6 shrink-0">{p.index}</span>
                <span className="text-[#f5f5f7] text-[18px] font-medium tracking-[-0.01em] group-hover:text-white transition-colors truncate">
                  {p.name}
                </span>
                <span className="hidden md:block text-[13px] text-[#6e6e73] font-mono">{p.discipline}</span>
              </div>

              <div className="flex items-center gap-6 shrink-0 ml-4">
                <div className="hidden md:flex gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="text-[11px] font-mono text-[#424245] group-hover:text-[#6e6e73] transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="font-mono text-[11px] text-[#424245]">{p.year}</span>
                <span className="text-[#424245] group-hover:text-[#f5f5f7] transition-colors duration-200">
                  <DrawArrow />
                </span>
              </div>
            </a>
          ))}
          {/* Final border */}
          <div className="border-t border-[#1d1d1f]" />
        </div>

      </div>
    </section>
  );
}
