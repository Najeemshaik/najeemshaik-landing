"use client";

import { useReveal } from "@/hooks/use-reveal";

const projects = [
  {
    name: "Project Alpha",
    tagline: "Full-stack web platform.",
    description:
      "A full-stack web application built to solve a real-world problem. Features authentication, real-time updates, and a clean API layer.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    status: "Shipped",
    link: "#",
    accent: "#2997ff",
  },
  {
    name: "Dev CLI Tool",
    tagline: "Developer workflow automation.",
    description:
      "A command-line utility that automates repetitive development workflows. Reduced setup time from 30 minutes to under 2 minutes.",
    stack: ["Node.js", "TypeScript", "Shell"],
    status: "Open Source",
    link: "#",
    accent: "#30d158",
  },
  {
    name: "Data Pipeline",
    tagline: "Event-driven data at scale.",
    description:
      "An event-driven data processing pipeline capable of handling millions of records. Built with resilience and observability in mind.",
    stack: ["Python", "Kafka", "Redis"],
    status: "In Progress",
    link: "#",
    accent: "#ff9f0a",
  },
  {
    name: "Portfolio v1",
    tagline: "Personal site, over-engineered intentionally.",
    description:
      "My first personal site. Minimal, fast, and purposely over-engineered as a learning exercise in modern web tooling.",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    status: "Shipped",
    link: "#",
    accent: "#bf5af2",
  },
];

export function Projects() {
  const headerRef = useReveal();

  return (
    <section id="projects" className="bg-[#000] py-[92px] pb-[140px] px-6">
      <div className="max-w-[980px] mx-auto">
        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className="reveal text-center mb-16"
        >
          <p className="text-[12px] font-semibold text-[#a1a1a6] uppercase tracking-[0.08em] mb-4">
            Projects
          </p>
          <h2 className="text-[48px] leading-[1.08] font-semibold tracking-[-0.003em] text-[#f5f5f7]">
            Things I&apos;ve built.
          </h2>
        </div>

        {/* Project tiles — 2 col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              className="group bg-[#1d1d1f] rounded-[18px] p-10 flex flex-col gap-5 hover:bg-[#2d2d2f] transition-colors duration-300"
            >
              {/* Status badge */}
              <span
                className="self-start text-[12px] font-semibold uppercase tracking-[0.06em] px-3 py-1 rounded-full"
                style={{
                  color: project.accent,
                  background: `${project.accent}18`,
                }}
              >
                {project.status}
              </span>

              <div className="flex-1">
                <h3 className="text-[24px] font-semibold text-[#f5f5f7] tracking-[-0.003em] leading-[1.2] mb-1">
                  {project.name}
                </h3>
                <p className="text-[17px] text-[#a1a1a6] leading-[1.47]">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[12px] text-[#6e6e73] bg-[#3a3a3c] px-2.5 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="text-[#a1a1a6] group-hover:text-[#f5f5f7] transition-colors text-[18px] ml-4">
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
