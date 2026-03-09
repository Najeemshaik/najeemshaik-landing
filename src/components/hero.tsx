export function Hero() {
  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Subtle radial gradient for depth */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <p
          className="text-[#a1a1a6] text-[12px] font-semibold uppercase tracking-[0.08em] mb-5"
        >
          Software Engineer
        </p>

        <h1
          className="text-[56px] leading-[1.07] font-semibold tracking-[-0.022em] text-[#f5f5f7] max-w-[700px]"
          style={{ lineHeight: "1.07" }}
        >
          Built for the people
          <br />
          <span className="text-[#a1a1a6]">who build things.</span>
        </h1>

        <p className="mt-6 text-[19px] leading-[1.47] text-[#a1a1a6] max-w-[502px]">
          Hi, I&apos;m Najeem Shaik. I engineer clean, scalable software and
          obsess over the details that make products feel inevitable.
        </p>

        <div className="mt-9 flex items-center gap-5 flex-wrap justify-center">
          <a
            href="#projects"
            className="inline-flex items-center justify-center bg-[#f5f5f7] text-black text-[17px] font-normal px-5 py-2 rounded-full tracking-[-0.022em] hover:bg-white transition-colors duration-300"
          >
            View my work
          </a>
          <a
            href="mailto:najeem@example.com"
            className="text-[#2997ff] text-[17px] font-normal tracking-[-0.022em] hover:underline"
          >
            Get in touch ›
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 flex flex-col items-center gap-2">
        <div className="w-[1px] h-10 bg-gradient-to-b from-transparent to-[#424245]" />
      </div>
    </section>
  );
}
