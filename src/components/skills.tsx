"use client";

import { useReveal } from "@/hooks/use-reveal";

const categories = [
  {
    label: "Languages",
    items: ["TypeScript", "Python", "Go", "SQL", "Bash", "Rust (learning)"],
  },
  {
    label: "Frontend",
    items: ["React / Next.js", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Web APIs"],
  },
  {
    label: "Backend",
    items: ["Node.js", "REST & GraphQL", "PostgreSQL", "Redis", "Kafka", "Docker"],
  },
  {
    label: "Concepts",
    items: ["System Design", "Data Structures & Algorithms", "Distributed Systems", "CI/CD", "Observability", "API Design"],
  },
  {
    label: "Tools & Practices",
    items: ["Git", "Linux", "Testing (unit, integration, e2e)", "Code Review", "Technical Writing"],
  },
];

export function Skills() {
  const ref = useReveal();

  return (
    <section className="bg-[#1d1d1f] py-[92px] pb-[140px] px-6">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="reveal max-w-[980px] mx-auto"
      >
        <div className="text-center mb-16">
          <p className="text-[12px] font-semibold text-[#a1a1a6] uppercase tracking-[0.08em] mb-4">
            Skills & Learnings
          </p>
          <h2 className="text-[48px] leading-[1.08] font-semibold tracking-[-0.003em] text-[#f5f5f7]">
            A craft built over years.
          </h2>
        </div>

        {/* 3-col grid on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {categories.map((cat, i) => (
            <div
              key={cat.label}
              className="bg-[#000] rounded-[18px] p-8"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <p className="text-[12px] font-semibold text-[#a1a1a6] uppercase tracking-[0.08em] mb-5">
                {cat.label}
              </p>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li key={item} className="text-[15px] leading-[1.5] text-[#f5f5f7]">
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
