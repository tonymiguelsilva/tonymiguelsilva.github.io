import { useEffect, useState } from "react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#stack", label: "Stack" },
  { href: "#projetos", label: "Projetos" },
  { href: "#engenharia", label: "Eng. de Dados" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#formacao", label: "Formação" },
  { href: "#contato", label: "Contato" },
];

export function Nav({ sectionBase = "" }: { sectionBase?: string }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href={`${sectionBase}#top`} className="font-display font-bold text-lg tracking-tight">
          <span className="text-gradient">tony</span>
          <span className="text-muted-foreground font-mono text-sm">.data</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={`${sectionBase}${l.href}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:tonymiguel71@gmail.com"
          className="hidden sm:inline-flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
        >
          <span className="size-2 rounded-full bg-accent animate-pulse" />
          disponível
        </a>
      </nav>
    </header>
  );
}