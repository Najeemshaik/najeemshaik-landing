const projects = [
  {
    number: "01",
    name: "Project Alpha",
    description:
      "A full-stack web application built to solve a real-world problem. Features authentication, real-time updates, and a clean API layer.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    status: "Shipped",
    link: "#",
  },
  {
    number: "02",
    name: "Dev CLI Tool",
    description:
      "A command-line utility that automates repetitive development workflows. Reduced setup time from 30 minutes to under 2 minutes.",
    stack: ["Node.js", "TypeScript", "Shell"],
    status: "Open Source",
    link: "#",
  },
  {
    number: "03",
    name: "Data Pipeline",
    description:
      "An event-driven data processing pipeline capable of handling millions of records. Built with resilience and observability in mind.",
    stack: ["Python", "Kafka", "Redis"],
    status: "In Progress",
    link: "#",
  },
  {
    number: "04",
    name: "Portfolio v1",
    description:
      "My first personal site. Minimal, fast, and purposely over-engineered as a learning exercise in modern web tooling.",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    status: "Shipped",
    link: "#",
  },
];

export function Projects() {
  return (
    <section className="py-32 px-6 md:px-16 lg:px-24 border-b border-border">
      <div className="max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 mb-16">
          <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase font-mono">
            02 / Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Things I&apos;ve built
          </h2>
        </div>

        <div className="divide-y divide-border">
          {projects.map((project) => (
            <a
              key={project.number}
              href={project.link}
              className="group grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 py-10 items-start hover:bg-accent/30 -mx-6 px-6 transition-colors"
            >
              <span className="font-mono text-xs text-muted-foreground pt-1">
                {project.number}
              </span>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <h3 className="text-xl font-semibold tracking-tight group-hover:text-foreground transition-colors">
                    {project.name}
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground border border-border px-2 py-0.5">
                    {project.status}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-3 flex-wrap">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors text-lg">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
