export function Footer() {
  return (
    <footer className="bg-white border-t border-[#d2d2d7] py-10 px-6">
      <div className="max-w-[980px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-[12px] font-mono text-[#6e6e73]">
          Najeem Shaik &mdash; {new Date().getFullYear()}
        </p>
        <div className="flex gap-7">
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
              className="text-[12px] font-mono text-[#6e6e73] hover:text-[#1d1d1f] transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
