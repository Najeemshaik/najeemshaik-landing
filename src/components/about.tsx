"use client";

import { useEffect, useState } from "react";

// EQ bars — music production identity
function EQBars() {
  return (
    <div className="flex items-end gap-[3px] h-10" aria-hidden>
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="w-[3px] rounded-full bg-[#30d158] animate-eq"
          style={{
            animationDelay: `${(i * 0.07).toFixed(2)}s`,
            animationDuration: `${(0.5 + (i % 5) * 0.12).toFixed(2)}s`,
          }}
        />
      ))}
    </div>
  );
}

// Live clock
function LiveClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="font-mono text-[#f5f5f7] tabular-nums">{time}</span>;
}

// Scramble text on mount
function ScrambleText({ text }: { text: string }) {
  const [display, setDisplay] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  useEffect(() => {
    let frame = 0;
    const total = 18;
    const id = setInterval(() => {
      frame++;
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (frame / total > i / text.length) return char;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      if (frame >= total) clearInterval(id);
    }, 40);
    return () => clearInterval(id);
  }, [text]);

  return <>{display}</>;
}

const stack = ["Next.js", "TypeScript", "Python", "Go", "Kafka", "PostgreSQL", "Redis", "Docker", "GSAP", "Premiere Pro", "After Effects", "Ableton Live"];

export function About() {
  return (
    <section className="bg-[#000] py-24 px-6">
      <div className="max-w-[980px] mx-auto">

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[auto] gap-3">

          {/* Cell 1 — large, name + role (2 cols) */}
          <div className="col-span-2 bg-[#1d1d1f] rounded-[18px] p-8 flex flex-col justify-between min-h-[200px]">
            <p className="text-[12px] font-mono text-[#6e6e73] uppercase tracking-widest">Based in</p>
            <div>
              <p className="text-[32px] font-semibold text-[#f5f5f7] leading-[1.1] tracking-[-0.02em]">
                <ScrambleText text="Engineer." />
              </p>
              <p className="text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#a1a1a6]">
                <ScrambleText text="Creator." />
              </p>
            </div>
          </div>

          {/* Cell 2 — EQ / music (1 col) */}
          <div className="col-span-1 bg-[#1d1d1f] rounded-[18px] p-8 flex flex-col justify-between min-h-[200px]">
            <p className="text-[12px] font-mono text-[#6e6e73] uppercase tracking-widest">Sound</p>
            <div className="space-y-3">
              <EQBars />
              <p className="text-[13px] text-[#a1a1a6] font-mono">Music Producer</p>
            </div>
          </div>

          {/* Cell 3 — Live time (1 col) */}
          <div className="col-span-1 bg-[#1d1d1f] rounded-[18px] p-8 flex flex-col justify-between min-h-[200px]">
            <p className="text-[12px] font-mono text-[#6e6e73] uppercase tracking-widest">Local time</p>
            <div>
              <LiveClock />
              <p className="text-[13px] text-[#6e6e73] font-mono mt-1">Chicago, IL</p>
            </div>
          </div>

          {/* Cell 4 — Motion / video (2 cols) */}
          <div className="col-span-2 bg-[#1d1d1f] rounded-[18px] p-8 flex flex-col justify-between min-h-[180px] overflow-hidden relative">
            <p className="text-[12px] font-mono text-[#6e6e73] uppercase tracking-widest">Motion</p>
            {/* CSS animation strip — abstract bars that suggest video timeline */}
            <div className="flex gap-1 items-end mt-4" aria-hidden>
              {Array.from({ length: 32 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1 bg-[#2997ff] rounded-sm opacity-60 animate-timeline"
                  style={{
                    height: `${16 + Math.sin(i * 0.7) * 12}px`,
                    animationDelay: `${(i * 0.04).toFixed(2)}s`,
                  }}
                />
              ))}
            </div>
            <p className="text-[13px] text-[#a1a1a6] font-mono mt-4">Video Editor · Animator</p>
          </div>

          {/* Cell 5 — Currently building (1 col) */}
          <div className="col-span-1 bg-[#1d1d1f] rounded-[18px] p-8 flex flex-col justify-between min-h-[180px]">
            <p className="text-[12px] font-mono text-[#6e6e73] uppercase tracking-widest">Now</p>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#30d158] animate-pulse" />
                <span className="text-[12px] font-mono text-[#30d158]">Building</span>
              </div>
              <p className="text-[15px] text-[#f5f5f7] leading-snug">This portfolio & side projects</p>
            </div>
          </div>

          {/* Cell 6 — Stack marquee (1 col) */}
          <div className="col-span-1 bg-[#1d1d1f] rounded-[18px] p-8 flex flex-col justify-between min-h-[180px] overflow-hidden">
            <p className="text-[12px] font-mono text-[#6e6e73] uppercase tracking-widest">Stack</p>
            <div className="overflow-hidden mt-4">
              <div className="flex flex-col gap-2 animate-stack-scroll">
                {stack.map((s) => (
                  <span key={s} className="text-[13px] font-mono text-[#a1a1a6] whitespace-nowrap">{s}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
