"use client";

import { useReveal } from "@/hooks/use-reveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="bg-[#000] py-[92px] px-6">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="reveal max-w-[980px] mx-auto"
      >
        {/* Eyebrow */}
        <p className="text-[12px] font-semibold text-[#a1a1a6] uppercase tracking-[0.08em] mb-4 text-center">
          About
        </p>

        {/* Large statement headline */}
        <h2 className="text-[48px] leading-[1.08] font-semibold tracking-[-0.003em] text-[#f5f5f7] text-center max-w-[660px] mx-auto mb-16">
          Engineered for impact. Designed with care.
        </h2>

        {/* Two-tile grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-[#1d1d1f] rounded-[18px] p-10 flex flex-col gap-4">
            <p className="text-[12px] font-semibold text-[#a1a1a6] uppercase tracking-[0.08em]">
              Who I am
            </p>
            <p className="text-[17px] leading-[1.47] text-[#a1a1a6]">
              I&apos;m Najeem Shaik — a software engineer who cares deeply about
              building products that are both technically sound and delightful
              to use. I thrive at the intersection of systems thinking and
              thoughtful design.
            </p>
            <p className="text-[17px] leading-[1.47] text-[#a1a1a6]">
              I believe good software is the result of curiosity, discipline,
              and a relentless focus on what matters.
            </p>
          </div>

          <div className="bg-[#1d1d1f] rounded-[18px] p-10 flex flex-col gap-4">
            <p className="text-[12px] font-semibold text-[#a1a1a6] uppercase tracking-[0.08em]">
              What drives me
            </p>
            <p className="text-[17px] leading-[1.47] text-[#a1a1a6]">
              I&apos;m drawn to hard problems: distributed systems, developer
              tooling, and the craft of writing software that scales. When
              I&apos;m not coding, I&apos;m reading, thinking about the future of
              technology, or exploring new ideas.
            </p>
            <p className="text-[17px] leading-[1.47] text-[#a1a1a6]">
              I want to build things that outlast the moment they were made in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
