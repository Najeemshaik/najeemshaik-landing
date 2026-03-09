export function About() {
  return (
    <section className="py-32 px-6 md:px-16 lg:px-24 border-b border-border">
      <div className="max-w-4xl grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 items-start">
        <div>
          <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase font-mono">
            01 / About
          </p>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Who I am
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m Najeem Shaik — a software engineer who cares deeply about
              building products that are both technically sound and delightful to
              use. I thrive at the intersection of systems thinking and
              thoughtful design.
            </p>
            <p>
              I&apos;m drawn to hard problems: distributed systems, developer
              tooling, and the craft of writing software that scales. When I&apos;m
              not coding, I&apos;m usually reading, thinking about the future of
              technology, or exploring new ideas.
            </p>
            <p>
              I believe good software is the result of curiosity, discipline,
              and a relentless focus on what matters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
