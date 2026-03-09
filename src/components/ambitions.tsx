const ambitions = [
  {
    number: "01",
    title: "Build something used by millions",
    description:
      "I want to ship a product that genuinely improves how people work or live — something that reaches real scale and solves a problem worth solving.",
  },
  {
    number: "02",
    title: "Go deep on systems",
    description:
      "I want to deeply understand the machinery underneath: databases, compilers, operating systems. Not just to use them — but to build them.",
  },
  {
    number: "03",
    title: "Start a company",
    description:
      "Eventually I want to build something from zero. A product, a team, a culture. I'm drawn to the full-stack challenge of entrepreneurship.",
  },
  {
    number: "04",
    title: "Contribute meaningfully to open source",
    description:
      "I want to give back to the ecosystem that shaped how I learned. Not just one-off PRs — but sustained, impactful contribution to projects people rely on.",
  },
  {
    number: "05",
    title: "Keep learning, always",
    description:
      "Technology moves fast. I want to stay curious — picking up new languages, domains, and ideas — long after it stops being comfortable.",
  },
];

export function Ambitions() {
  return (
    <section className="py-32 px-6 md:px-16 lg:px-24 border-b border-border">
      <div className="max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 mb-16">
          <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase font-mono">
            04 / Ambitions
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Where I&apos;m headed
          </h2>
        </div>

        <div className="space-y-0 divide-y divide-border">
          {ambitions.map((item) => (
            <div key={item.number} className="grid grid-cols-[auto_1fr] gap-8 py-8">
              <span className="font-mono text-xs text-muted-foreground pt-1">
                {item.number}
              </span>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
