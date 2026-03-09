export function Footer() {
  return (
    <footer className="bg-[#1d1d1f] border-t border-[#424245]/40 py-12 px-6">
      <div className="max-w-[980px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="text-[12px] text-[#6e6e73]">
          Copyright &copy; {new Date().getFullYear()} Najeem Shaik. All rights reserved.
        </p>
        <div className="flex gap-7">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] text-[#6e6e73] hover:text-[#f5f5f7] transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] text-[#6e6e73] hover:text-[#f5f5f7] transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="mailto:najeem@example.com"
            className="text-[12px] text-[#6e6e73] hover:text-[#f5f5f7] transition-colors duration-200"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
