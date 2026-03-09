// No "use client" needed — pure CSS marquee, no JS

const row1 = ["TypeScript", "React", "Next.js", "Python", "Go", "Node.js", "PostgreSQL", "Redis", "Kafka", "Docker"];
const row2 = ["After Effects", "Premiere Pro", "Ableton Live", "Logic Pro", "GSAP", "Tailwind CSS", "Git", "Linux", "Figma", "AWS"];

function MarqueeRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  // Duplicate for seamless loop
  const all = [...items, ...items];
  return (
    <div className="overflow-hidden py-1">
      <div
        className={`flex gap-3 w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {all.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-[13px] font-mono text-[#6e6e73] bg-[#1d1d1f] px-4 py-2 rounded-full whitespace-nowrap border border-[#2d2d2f] hover:text-[#f5f5f7] hover:border-[#424245] transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section className="bg-[#000] py-24 border-t border-[#1d1d1f] overflow-hidden">
      <div className="max-w-[980px] mx-auto px-6 mb-10">
        <h2 className="text-[clamp(32px,5vw,56px)] font-semibold tracking-[-0.025em] text-[#f5f5f7] leading-none">
          Craft
        </h2>
      </div>
      <div className="space-y-3">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
}
