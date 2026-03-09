export function Footer() {
  return (
    <footer className="py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
          Najeem Shaik — {new Date().getFullYear()}
        </p>
        <div className="flex gap-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors tracking-widest uppercase"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors tracking-widest uppercase"
          >
            LinkedIn
          </a>
          <a
            href="mailto:najeem@example.com"
            className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors tracking-widest uppercase"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
