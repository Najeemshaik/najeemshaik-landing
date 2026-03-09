const categories = [
  {
    label: "Languages",
    items: [
      "TypeScript",
      "Python",
      "Go",
      "SQL",
      "Bash",
      "Rust (learning)",
    ],
  },
  {
    label: "Frontend",
    items: [
      "React / Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "Web APIs",
    ],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "REST & GraphQL",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "Docker",
    ],
  },
  {
    label: "Concepts",
    items: [
      "System Design",
      "Data Structures & Algorithms",
      "Distributed Systems",
      "CI/CD",
      "Observability",
      "API Design",
    ],
  },
  {
    label: "Tools & Practices",
    items: [
      "Git",
      "Linux",
      "Testing (unit, integration, e2e)",
      "Code Review",
      "Technical Writing",
    ],
  },
];

export function Skills() {
  return (
    <section className="py-32 px-6 md:px-16 lg:px-24 border-b border-border">
      <div className="max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 mb-16">
          <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase font-mono">
            03 / Skills & Learnings
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            What I&apos;ve learned
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {categories.map((cat) => (
            <div key={cat.label} className="bg-background p-8 space-y-4">
              <h3 className="text-xs font-mono tracking-[0.25em] uppercase text-muted-foreground">
                {cat.label}
              </h3>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="text-sm text-foreground/80">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
