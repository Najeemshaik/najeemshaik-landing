"use client";

import { useEffect, useState } from "react";

const lines = [
  { prompt: "whoami", output: "najeem shaik" },
  { prompt: "cat interests.txt", output: "music production  ·  software  ·  video editing  ·  motion" },
  { prompt: "status", output: "building." },
];

function TerminalLine({
  prompt,
  output,
  onDone,
  showCursor,
}: {
  prompt: string;
  output: string;
  onDone?: () => void;
  showCursor: boolean;
}) {
  const [promptDone, setPromptDone] = useState(false);
  const [displayedOutput, setDisplayedOutput] = useState("");
  const [displayedPrompt, setDisplayedPrompt] = useState("");

  useEffect(() => {
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setDisplayedPrompt(prompt.slice(0, i));
      if (i >= prompt.length) {
        clearInterval(iv);
        setTimeout(() => setPromptDone(true), 180);
      }
    }, 40);
    return () => clearInterval(iv);
  }, [prompt]);

  useEffect(() => {
    if (!promptDone) return;
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setDisplayedOutput(output.slice(0, i));
      if (i >= output.length) {
        clearInterval(iv);
        onDone?.();
      }
    }, 22);
    return () => clearInterval(iv);
  }, [promptDone, output, onDone]);

  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2">
        <span className="text-[#30d158]">›</span>
        <span className="text-[#f5f5f7]">{displayedPrompt}</span>
        {!promptDone && showCursor && (
          <span className="inline-block w-[2px] h-[1em] bg-[#f5f5f7] animate-pulse" />
        )}
      </div>
      {promptDone && (
        <div className="pl-4 text-[#a1a1a6]">
          {displayedOutput}
          {displayedOutput.length < output.length && showCursor && (
            <span className="inline-block w-[2px] h-[1em] bg-[#a1a1a6] animate-pulse ml-[1px]" />
          )}
        </div>
      )}
    </div>
  );
}

export function Hero() {
  const [activeLineIndex, setActiveLineIndex] = useState(0);
  const [done, setDone] = useState(false);

  return (
    <section className="relative min-h-screen bg-black flex flex-col justify-center px-6 md:px-16 overflow-hidden">
      {/* Grain overlay */}
      <svg className="pointer-events-none fixed inset-0 w-full h-full opacity-[0.03] z-50" aria-hidden>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      <div className="max-w-[780px]">
        {/* Name — huge, weight-animated */}
        <h1
          className="text-[clamp(64px,12vw,160px)] font-black leading-[0.9] tracking-[-0.04em] text-[#f5f5f7] mb-12 select-none"
          style={{ fontVariationSettings: '"wght" 900' }}
        >
          Najeem
          <br />
          <span className="text-[#2d2d2f] [-webkit-text-stroke:1px_#3a3a3c]">
            Shaik
          </span>
        </h1>

        {/* Terminal */}
        <div className="font-mono text-[14px] leading-[1.8] space-y-4">
          {lines.map((line, i) => {
            if (i > activeLineIndex) return null;
            return (
              <TerminalLine
                key={i}
                prompt={line.prompt}
                output={line.output}
                showCursor={i === activeLineIndex && !done}
                onDone={() => {
                  if (i < lines.length - 1) {
                    setTimeout(() => setActiveLineIndex(i + 1), 320);
                  } else {
                    setDone(true);
                  }
                }}
              />
            );
          })}
          {done && (
            <div className="flex items-center gap-2">
              <span className="text-[#30d158]">›</span>
              <span className="inline-block w-[2px] h-[14px] bg-[#f5f5f7] animate-pulse" />
            </div>
          )}
        </div>

        {/* Links — minimal, after terminal */}
        <div className="flex gap-7 mt-14">
          {[
            { label: "GitHub", href: "https://github.com" },
            { label: "LinkedIn", href: "https://linkedin.com" },
            { label: "Email", href: "mailto:najeem@example.com" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="text-[12px] font-mono text-[#6e6e73] hover:text-[#f5f5f7] transition-colors duration-200 tracking-widest uppercase"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll line */}
      <div className="absolute bottom-10 right-10 flex flex-col items-center gap-2">
        <div className="w-[1px] h-14 bg-gradient-to-b from-transparent to-[#3a3a3c]" />
      </div>
    </section>
  );
}
