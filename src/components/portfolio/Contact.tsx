export function Contact() {
  return (
    <section id="contato" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-mono text-xs text-accent mb-4 tracking-widest uppercase">
          08 — contato
        </p>
        <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-[1.05]">
          Vamos <span className="text-gradient">trocar uma ideia</span>.
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
          Curtiu algum projeto? Quer trocar uma ideia sobre dados, BI ou
          engenharia analítica? Me chama.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:tonymiguel71@gmail.com"
            className="bg-gradient-accent text-accent-foreground px-8 py-4 rounded-full font-medium shadow-glow hover:scale-[1.02] transition-transform"
          >
            tonymiguel71@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/tony-miguel-silva-power-bi"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/tonymiguelsilva"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
          >
            GitHub ↗
          </a>
        </div>

        <div className="mt-24 pt-8 border-t border-border text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} Tony Miguel da Silva — Portão, RS · Brasil
        </div>
      </div>
    </section>
  );
}
