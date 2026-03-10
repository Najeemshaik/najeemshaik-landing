"use client";

// EQ bars — music identity
function EQBars() {
  return (
    <div className="flex items-end gap-[3px] h-8" aria-hidden>
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="w-[3px] rounded-full bg-[#1d1d1f] animate-eq"
          style={{
            animationDelay: `${(i * 0.07).toFixed(2)}s`,
            animationDuration: `${(0.45 + (i % 5) * 0.11).toFixed(2)}s`,
          }}
        />
      ))}
    </div>
  );
}

// Truly infinite vertical stack — duplicate items for seamless loop
const stackItems = [
  "Next.js", "TypeScript", "Python", "Go",
  "Kafka", "PostgreSQL", "Redis", "Docker",
  "After Effects", "Premiere Pro", "Ableton Live", "GSAP",
];
const stackDuped = [...stackItems, ...stackItems]; // doubled for seamless loop

export function About() {
  return (
    <section className="bg-white py-24 px-6 border-t border-[#d2d2d7]">
      <div className="max-w-[980px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

          {/* Cell 1 — identity (2 cols) */}
          <div className="col-span-2 bg-[#f5f5f7] rounded-[18px] p-8 flex flex-col justify-between min-h-[200px]">
            <p className="text-[11px] font-mono text-[#6e6e73] uppercase tracking-widest">
              About
            </p>
            <div>
              <p className="text-[32px] font-semibold text-[#1d1d1f] leading-[1.1] tracking-[-0.02em]">
                Engineer.
              </p>
              <p className="text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#6e6e73]">
                Creator.
              </p>
            </div>
          </div>

          {/* Cell 2 — EQ / music (1 col) */}
          <div className="col-span-1 bg-[#f5f5f7] rounded-[18px] p-8 flex flex-col justify-between min-h-[200px]">
            <p className="text-[11px] font-mono text-[#6e6e73] uppercase tracking-widest">
              Sound
            </p>
            <div className="space-y-3">
              <EQBars />
              <p className="text-[13px] text-[#6e6e73] font-mono">Music Producer</p>
            </div>
          </div>

          {/* Cell 3 — currently building (1 col) */}
          <div className="col-span-1 bg-[#f5f5f7] rounded-[18px] p-8 flex flex-col justify-between min-h-[200px]">
            <p className="text-[11px] font-mono text-[#6e6e73] uppercase tracking-widest">
              Now
            </p>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#30d158] animate-pulse" />
                <span className="text-[12px] font-mono text-[#30d158]">Building</span>
              </div>
              <p className="text-[15px] text-[#1d1d1f] leading-snug font-medium">
                This portfolio & side projects
              </p>
            </div>
          </div>

          {/* Cell 4 — motion / timeline bars (2 cols) */}
          <div className="col-span-2 bg-[#f5f5f7] rounded-[18px] p-8 flex flex-col justify-between min-h-[180px] overflow-hidden">
            <p className="text-[11px] font-mono text-[#6e6e73] uppercase tracking-widest">
              Motion
            </p>
            <div className="flex gap-[3px] items-end mt-4" aria-hidden>
              {Array.from({ length: 40 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1 bg-[#1d1d1f] rounded-sm animate-timeline"
                  style={{
                    height: `${14 + Math.sin(i * 0.65) * 10}px`,
                    animationDelay: `${(i * 0.035).toFixed(2)}s`,
                  }}
                />
              ))}
            </div>
            <p className="text-[13px] text-[#6e6e73] font-mono mt-4">
              Video Editor · Animator
            </p>
          </div>

          {/* Cell 5 — infinite stack scroll (1 col) */}
          <div className="col-span-1 bg-[#f5f5f7] rounded-[18px] p-8 flex flex-col min-h-[180px] overflow-hidden">
            <p className="text-[11px] font-mono text-[#6e6e73] uppercase tracking-widest mb-4">
              Stack
            </p>
            <div className="flex-1 overflow-hidden relative">
              {/* Fade edges */}
              <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-[#f5f5f7] to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-[#f5f5f7] to-transparent z-10 pointer-events-none" />
              <div className="flex flex-col gap-2 animate-stack-scroll">
                {stackDuped.map((s, i) => (
                  <span key={i} className="text-[13px] font-mono text-[#6e6e73] whitespace-nowrap">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Cell 6 — coding (1 col) */}
          <div className="col-span-1 bg-[#1d1d1f] rounded-[18px] p-8 flex flex-col justify-between min-h-[180px]">
            <p className="text-[11px] font-mono text-[#6e6e73] uppercase tracking-widest">
              Code
            </p>
            <div className="font-mono text-[12px] leading-[1.8] text-[#a1a1a6] space-y-0.5">
              <p><span className="text-[#30d158]">const</span> <span className="text-[#f5f5f7]">najeem</span> = {"{"}</p>
              <p className="pl-4"><span className="text-[#a1a1a6]">builds:</span> <span className="text-[#f5f5f7]">"things"</span>,</p>
              <p className="pl-4"><span className="text-[#a1a1a6]">ships:</span> <span className="text-[#f5f5f7]">true</span>,</p>
              <p>{"}"}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
