import p1 from "@/assets/projects/p1.jpg";
import p2 from "@/assets/projects/p2.jpg";
import p3 from "@/assets/projects/p3.jpg";

const projects = [
  {
    tag: "Comercial • Forecast • ML",
    title: "Dashboard Comercial com Forecast e Recomendação",
    scenario: "Setor comercial — análise de metas, forecast e recomendação de produtos",
    description:
      "Painel dinâmico que substituiu fechamentos manuais em planilhas descentralizadas, reduzindo o tempo de decisão de 14 dias para poucas horas. Integra modelo de recomendação em Python baseado no histórico de compras e similaridade entre clientes.",
    highlights: [
      "Forecast de vendas com projeção e gargalos antecipados",
      "Recomendação automática de produtos por similaridade de clientes",
      "Performance por gerente, supervisor e equipe",
      "Real x Meta por mês e região",
    ],
    stack: ["Power BI", "DAX", "Power Query", "Python"],
    source: "Dados fictícios — Pinski Modas (Curso Xperiun)",
    link: "https://app.powerbi.com/view?r=eyJrIjoiYzNiNjc5ZmItMWRkMi00ZjIzLWE2MTQtNzVhMTg3NTc3NWJmIiwidCI6ImJiMTc5Y2MxLWI5YjUtNDlkZi04YTBhLWI3ZDJjYjg3OTU2OSJ9",
    image: p1,
  },
  {
    tag: "Controladoria • DRE",
    title: "Dashboard Controladoria — DRE",
    scenario: "Controladoria — análise financeira (DRE, Receita, Despesas e Margens)",
    description:
      "Transformação de dados financeiros complexos em informações claras e acionáveis para a diretoria. Painel interativo com DRE visual e intuitiva, abrindo caminho para projeções, tendências e simulações de cenários.",
    highlights: [
      "DRE com receita bruta, despesas, margem de contribuição e resultado líquido",
      "Comparação Real x Previsto (metas) por mês e acumulado",
      "Evolução do desempenho desde 2021",
      "Análises por filial — São Paulo, Rio de Janeiro e Florianópolis",
    ],
    stack: ["Power BI", "DAX", "Power Query", "Figma"],
    source: "Dados fictícios — XPBucks (Curso Xperiun)",
    link: "https://app.powerbi.com/view?r=eyJrIjoiM2NlNDY3NjktNWI5ZS00NGVkLWJlNDQtMTNmMjM5M2Y1NmEyIiwidCI6ImJiMTc5Y2MxLWI5YjUtNDlkZi04YTBhLWI3ZDJjYjg3OTU2OSJ9",
    image: p2,
  },
  {
    tag: "Financeiro • Rentabilidade",
    title: "Dashboard Financeiro",
    scenario: "Setor financeiro — gestão de receita, despesas e rentabilidade",
    description:
      "Dashboard com foco em clareza e comparabilidade, ideal para decisões rápidas e bem embasadas. Tudo atualizado automaticamente via Power Query + DAX, com segmentação por tipo de conta e por cliente.",
    highlights: [
      "Indicadores principais: Receita, Custo, Despesas e Lucro",
      "Comparativo Ano Atual vs Ano Anterior por mês",
      "Pagamentos segmentados por tipo (fixo x variável)",
      "Receita por cliente e por tipo de conta (operacional x não operacional)",
    ],
    stack: ["Power BI", "DAX", "Power Query", "Figma"],
    source: "Dados fictícios — Xperiun Data Analytics",
    link: "https://app.powerbi.com/view?r=eyJrIjoiYTZlOWRmOGEtOGMwNS00MWI3LWEyZGEtZGM5M2Y3OTdkMzIyIiwidCI6ImJiMTc5Y2MxLWI5YjUtNDlkZi04YTBhLWI3ZDJjYjg3OTU2OSJ9",
    image: p3,
  },
];

export function Projects() {
  return (
    <section id="projetos" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <p className="font-mono text-xs text-accent mb-4 tracking-widest uppercase">
            03 — projetos
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Projetos selecionados em <span className="text-gradient">BI & Analytics</span>.
          </h2>
          <p className="text-muted-foreground mt-4">
            Dashboards construídos com foco em storytelling, performance e decisões de negócio.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <article
              key={p.title}
              className="group relative bg-gradient-card border border-border rounded-2xl p-7 shadow-card hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="relative block -mx-7 -mt-7 mb-6 aspect-[1400/751] overflow-hidden rounded-t-2xl border-b border-border bg-secondary"
                aria-label={`Abrir ${p.title} no Power BI`}
              >
                <img
                  src={p.image}
                  alt={`Preview do ${p.title}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-contain object-center transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
                <span className="absolute bottom-2 right-2 font-mono text-[10px] px-2 py-1 rounded-md bg-background/80 backdrop-blur border border-border text-foreground/90">
                  abrir dashboard ↗
                </span>
              </a>
            )}

              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[10px] tracking-widest text-accent uppercase">
                  {String(idx + 1).padStart(2, "0")} / {p.tag}
                </span>
              </div>

              <h3 className="font-display font-bold text-xl leading-tight mb-2 group-hover:text-gradient transition-all">
                {p.title}
              </h3>
              <p className="font-mono text-xs text-muted-foreground mb-4">{p.scenario}</p>
              <p className="text-sm text-foreground/80 mb-5 leading-relaxed">{p.description}</p>

              <ul className="space-y-2 mb-6 text-sm">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-foreground/75">
                    <span className="text-accent mt-1 shrink-0">▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[10px] px-2 py-1 rounded-md bg-secondary text-secondary-foreground border border-border"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-5 border-t border-border/60 flex items-center justify-between">
                <span className="font-mono text-[10px] text-muted-foreground">{p.source}</span>
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-accent hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    ver projeto →
                  </a>
                ) : (
                  <span className="text-[10px] font-mono text-muted-foreground/70">
                    link em breve
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}