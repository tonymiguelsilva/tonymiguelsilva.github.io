import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="max-w-3xl animate-fade-up">
          <p className="font-mono text-xs sm:text-sm text-accent mb-6 tracking-widest uppercase">
            // analytics_engineer.init()
          </p>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-bold leading-[0.95] mb-8">
            Tony Miguel <br />
            <span className="text-gradient">da Silva</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
            Transformo dados brutos em decisões. Construo pipelines escaláveis,
            dashboards estratégicos e arquiteturas de dados modernas — de{" "}
            <span className="text-foreground font-medium">ingestão a insight</span>.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#experiencia"
              className="bg-gradient-accent text-accent-foreground px-7 py-3.5 rounded-full font-medium shadow-glow hover:scale-[1.02] transition-transform"
            >
              Ver trajetória
            </a>
            <a
              href="https://www.linkedin.com/in/tony-miguel-silva-power-bi"
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3.5 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/tonymiguelsilva"
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3.5 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            >
              GitHub ↗
            </a>
          </div>

          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
            {[
              { v: "8+", l: "anos de experiência" },
              { v: "10+", l: "stacks dominadas" },
              { v: "∞", l: "queries SQL" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-display font-bold text-gradient">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}