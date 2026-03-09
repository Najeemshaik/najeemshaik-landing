export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 border-b border-border">
      <div className="max-w-4xl">
        <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6 font-mono">
          Software Engineer
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-8">
          Najeem
          <br />
          <span className="text-muted-foreground">Shaik</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed">
          I build things on the web. Passionate about clean code, great user
          experiences, and pushing the limits of what&apos;s possible.
        </p>
        <div className="flex gap-6 mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors tracking-widest uppercase"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors tracking-widest uppercase"
          >
            LinkedIn
          </a>
          <a
            href="mailto:najeem@example.com"
            className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors tracking-widest uppercase"
          >
            Email
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-6 md:left-16 lg:left-24">
        <span className="text-muted-foreground font-mono text-xs tracking-widest">
          SCROLL ↓
        </span>
      </div>
    </section>
  );
}
