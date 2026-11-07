import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { farol } from "@/lib/farol";

export function FarolCard() {
  return (
    <article className="group border border-border rounded-2xl overflow-hidden bg-gradient-card flex flex-col shadow-card">
      <Link to="/projetos/farol" aria-label="Conhecer o Projeto Farol" className="aspect-video block overflow-hidden bg-secondary/40 border-b border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <img src={farol.cover} alt={farol.coverAlt} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
      </Link>
      <div className="p-7 flex flex-col flex-1">
        <p className="font-mono text-[10px] text-accent uppercase mb-5">Engenharia de Dados · Analytics · IA</p>
        <h3 className="font-display font-bold text-2xl mb-3">{farol.title}</h3>
        <p className="text-accent text-sm mb-4">{farol.subtitle}</p>
        <p className="text-sm text-foreground/80 leading-relaxed mb-6">{farol.summary}</p>
        <ul className="text-sm text-foreground/75 space-y-2 mb-6">
          {["Arquitetura medalhão com métricas governadas", "AI Functions e classificação incremental de bloqueios", "Dashboard AI/BI, Genie Agent e Databricks App"].map((text) => <li key={text} className="flex gap-2"><span className="text-accent" aria-hidden="true">▸</span>{text}</li>)}
        </ul>
        <p className="text-xs text-muted-foreground mb-6">Dados 100% sintéticos · Simulação de {farol.simulation.referenceDate}</p>
        <div className="flex flex-wrap gap-1.5 mb-6">{["Databricks", "Python", "SQL", "Unity Catalog", "React", "TypeScript"].map((text) => <span key={text} className="font-mono text-[10px] bg-secondary border border-border px-2 py-1 rounded-md">{text}</span>)}</div>
        <div className="mt-auto flex flex-wrap gap-3 border-t border-border/60 pt-5">
          <Button asChild size="sm"><Link to="/projetos/farol">Conhecer o projeto <ArrowUpRight aria-hidden="true" /></Link></Button>
          {farol.showRepository && (
            <Button asChild size="sm" variant="outline" className="h-auto min-h-9 whitespace-normal py-2">
              <a href={farol.repository} target="_blank" rel="noreferrer"><Github aria-hidden="true" />Ver código no GitHub</a>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
