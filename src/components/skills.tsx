const row1Base = ["TypeScript", "React", "Next.js", "Python", "Go", "Node.js", "PostgreSQL", "Redis", "Kafka", "Docker"];
const row2Base = ["After Effects", "Premiere Pro", "Ableton Live", "Logic Pro", "GSAP", "Tailwind CSS", "Git", "Linux", "Figma", "AWS"];

// 4x duplication guarantees seamless loop at any viewport width
const row1 = [...row1Base, ...row1Base, ...row1Base, ...row1Base];
const row2 = [...row2Base, ...row2Base, ...row2Base, ...row2Base];

function MarqueeRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="overflow-hidden py-1">
      <div className={`flex gap-3 w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {items.map((item, i) => (
          <span
            key={i}
            className="text-[13px] font-mono text-[#6e6e73] bg-[#f5f5f7] px-4 py-2 rounded-full whitespace-nowrap border border-[#d2d2d7] hover:text-[#1d1d1f] hover:border-[#1d1d1f] transition-colors duration-200 cursor-default select-none"
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
    <section className="bg-white py-24 border-t border-[#d2d2d7] overflow-hidden">
      <div className="max-w-[980px] mx-auto px-6 mb-10">
        <h2 className="text-[clamp(32px,5vw,56px)] font-semibold tracking-[-0.025em] text-[#1d1d1f] leading-none">
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
