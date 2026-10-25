import { ArrowDown, ArrowRight, Database, Layers, Network, PanelTop, Sparkles } from "lucide-react";

export function FarolArchitecture({ compact = false }: { compact?: boolean }) {
  const stages = compact
    ? [{ label: "Fontes", icon: Database }, { label: "Lakehouse", icon: Layers }, { label: "Decisões", icon: Sparkles }]
    : [
        { label: "Fontes simuladas", detail: "PMO · RH · Financeiro · Compras · Timesheet · Excel · ClickUp · Microsoft Project", icon: Database },
        { label: "Supabase Storage", detail: "Compatível com S3", icon: Database },
        { label: "Unity Catalog Volume", detail: "Entrada governada", icon: Network },
        { label: "Bronze → Silver → Gold", detail: "Preservar · integrar · modelar", icon: Layers },
        { label: "Produtos analíticos", detail: "Dashboard AI/BI · Genie Agent · Databricks App", icon: PanelTop },
      ];
  return (
    <ol aria-label="Fluxo da arquitetura do Projeto Farol" className={compact ? "flex items-center justify-center gap-4 w-full" : "grid gap-5 md:grid-cols-5"}>
      {stages.map((stage, index) => (
        <li key={stage.label} className={compact ? "flex items-center gap-4 min-w-0" : "relative min-w-0"}>
          <div className={compact ? "text-center" : "border-t-2 border-primary pt-5"}>
            <stage.icon aria-hidden="true" className={compact ? "size-7 mx-auto mb-3 text-accent" : "size-6 mb-4 text-accent"} />
            <p className={compact ? "font-mono text-xs text-foreground" : "font-display font-semibold text-base"}>{stage.label}</p>
            {!compact && "detail" in stage && <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{stage.detail}</p>}
          </div>
          {compact && index < stages.length - 1 && <ArrowRight aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />}
          {!compact && index < stages.length - 1 && <ArrowDown aria-hidden="true" className="size-4 text-primary mt-4 md:hidden" />}
        </li>
      ))}
    </ol>
  );
}