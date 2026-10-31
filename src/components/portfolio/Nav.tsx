import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Mail, Menu, X } from "lucide-react";

const links = [
  { hash: "sobre", label: "Sobre" },
  { hash: "stack", label: "Stack" },
  { hash: "projetos", label: "Projetos de BI" },
  { hash: "engenharia", label: "Engenharia de Dados" },
  { hash: "experiencia", label: "Experiência" },
  { hash: "formacao", label: "Formação" },
  { hash: "contato", label: "Contato" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled || menuOpen ? "backdrop-blur-xl bg-background/95 border-b border-border" : ""}`}>
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between" aria-label="Navegação principal">
        <Link to="/" hash="top" onClick={() => setMenuOpen(false)} className="font-display font-bold text-lg tracking-tight">
          <span className="text-gradient">tony</span>
          <span className="text-muted-foreground font-mono text-sm">.data</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-7 text-sm">
          {links.map((link) => (
            <li key={link.hash}>
              <Link to="/" hash={link.hash} className="text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a href="mailto:tonymiguel71@gmail.com" className="hidden md:inline-flex lg:hidden xl:inline-flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
          <span className="size-2 rounded-full bg-accent animate-pulse" />
          disponível
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="lg:hidden inline-flex size-10 items-center justify-center rounded-md border border-border bg-background/80 text-foreground"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          title={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-navigation" className="lg:hidden fixed inset-x-0 top-16 h-[calc(100dvh-4rem)] bg-background border-t border-border overflow-y-auto">
          <nav className="max-w-6xl mx-auto px-6 py-6" aria-label="Navegação mobile">
            <ul className="divide-y divide-border">
              {links.map((link) => (
                <li key={link.hash}>
                  <Link to="/" hash={link.hash} onClick={() => setMenuOpen(false)} className="flex min-h-14 items-center justify-between py-3 text-base font-medium">
                    {link.label}
                    <span aria-hidden="true" className="text-accent">→</span>
                  </Link>
                </li>
              ))}
            </ul>
            <a href="mailto:tonymiguel71@gmail.com" className="mt-8 inline-flex w-full min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">
              <Mail aria-hidden="true" className="size-4" />
              Entrar em contato
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
