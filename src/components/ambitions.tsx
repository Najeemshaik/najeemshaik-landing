"use client";

import { useEffect, useRef } from "react";

const ambitions = [
  {
    title: "Build something used by millions.",
    description:
      "I want to ship a product that genuinely improves how people work or live — something that reaches real scale and solves a problem worth solving.",
  },
  {
    title: "Go deep on systems.",
    description:
      "I want to deeply understand the machinery underneath: databases, compilers, operating systems. Not just to use them — but to build them.",
  },
  {
    title: "Start a company.",
    description:
      "Eventually I want to build something from zero. A product, a team, a culture. I'm drawn to the full-stack challenge of entrepreneurship.",
  },
  {
    title: "Contribute meaningfully to open source.",
    description:
      "I want to give back to the ecosystem that shaped how I learned. Not just one-off PRs — sustained, impactful contribution to projects people rely on.",
  },
  {
    title: "Keep learning, always.",
    description:
      "Technology moves fast. I want to stay curious — picking up new languages, domains, and ideas — long after it stops being comfortable.",
  },
];

export function Ambitions() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const items = container.querySelectorAll<HTMLElement>(".reveal-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#000] py-[92px] pb-[140px] px-6">
      <div className="max-w-[980px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-[12px] font-semibold text-[#a1a1a6] uppercase tracking-[0.08em] mb-4">
            Ambitions
          </p>
          <h2 className="text-[48px] leading-[1.08] font-semibold tracking-[-0.003em] text-[#f5f5f7]">
            Where I&apos;m headed.
          </h2>
        </div>

        <div ref={containerRef} className="flex flex-col gap-3">
          {ambitions.map((item, i) => (
            <div
              key={item.title}
              className="reveal-item bg-[#1d1d1f] rounded-[18px] px-10 py-8 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 items-start"
              style={{
                opacity: 0,
                transform: "translateY(24px)",
                transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.08}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.08}s`,
              }}
            >
              <h3 className="text-[21px] font-semibold text-[#f5f5f7] tracking-[-0.003em] leading-[1.25]">
                {item.title}
              </h3>
              <p className="text-[17px] leading-[1.47] text-[#a1a1a6]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
