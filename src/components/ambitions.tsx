const statements = [
  { n: "I",   text: "Ship things that reach people." },
  { n: "II",  text: "Go deep on systems." },
  { n: "III", text: "Start something from zero." },
  { n: "IV",  text: "Make music that lasts." },
  { n: "V",   text: "Stay curious." },
];

export function Ambitions() {
  return (
    <section className="bg-white py-24 px-6 border-t border-[#d2d2d7]">
      <div className="max-w-[980px] mx-auto">
        <h2 className="text-[clamp(32px,5vw,56px)] font-semibold tracking-[-0.025em] text-[#1d1d1f] leading-none mb-12">
          Aimed at
        </h2>
        <div>
          {statements.map((s) => (
            <div
              key={s.n}
              className="group flex items-baseline gap-6 py-6 border-t border-[#d2d2d7] hover:border-[#1d1d1f] transition-colors duration-200"
            >
              <span className="font-mono text-[11px] text-[#d2d2d7] w-6 shrink-0 pt-0.5">
                {s.n}
              </span>
              <p className="text-[clamp(22px,3.5vw,40px)] font-semibold text-[#d2d2d7] group-hover:text-[#1d1d1f] tracking-[-0.02em] leading-tight transition-colors duration-300">
                {s.text}
              </p>
            </div>
          ))}
          <div className="border-t border-[#d2d2d7]" />
        </div>
      </div>
    </section>
  );
}
