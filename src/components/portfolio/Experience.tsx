const items = [
  {
    company: "3S Corp",
    role: "Analista de Dados Pleno",
    period: "abr 2026 — atual",
    location: "Novo Hamburgo, RS",
    bullets: [
      "Desenvolvimento de projetos de BI para Importação, Exportação, Suprimentos, Financeiro e demais áreas corporativas.",
    ],
    current: true,
  },
  {
    company: "Grupo Hoff",
    role: "Analista de Dados — Pricing & Suprimentos",
    period: "jun 2024 — mar 2026",
    bullets: [
      "ETL em SQL e dashboards estratégicos em Power BI para pricing, suprimentos e estoques.",
      "Painéis de vendas regionais ampliando visibilidade da performance comercial.",
      "Implementação de RLS em relatórios corporativos, garantindo governança.",
      "Apoio à diretoria com relatórios de contas a receber, produção e giro de estoque.",
    ],
  },
  {
    company: "Grupo Hoff",
    role: "Analista de Suprimentos",
    period: "abr 2021 — mai 2024",
    bullets: [
      "Gestão de estoques de 20 filiais e compras diretas para produção e revenda.",
      "Dashboards em Power BI + SQL para análise de desempenho.",
      "Apoio na gestão de frota de 140 veículos por 6 meses.",
    ],
  },
  {
    company: "Grupo Hoff",
    role: "Auxiliar de Compras",
    period: "set 2020 — abr 2021",
    bullets: ["Compras indiretas, gestão de estoques, cadastros e follow-up."],
  },
  {
    company: "Grupo Hoff",
    role: "Auxiliar Administrativo de Frota",
    period: "fev 2019 — ago 2020",
    bullets: ["Gestão de multas, CNH, rastreamento veicular e lançamento no SAP."],
  },
  {
    company: "Grupo Hoff",
    role: "Aprendiz de Frota",
    period: "fev 2018 — jan 2019",
    bullets: ["Lançamento de NF no SAP, controle de multas e análises em planilhas."],
  },
];

export function Experience() {
  return (
    <section id="experiencia" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <p className="font-mono text-xs text-accent mb-4 tracking-widest uppercase">
            05 — experiência
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Uma trajetória <span className="text-gradient">orientada por dados</span>.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border md:left-[calc(25%-1px)]" />
          <div className="space-y-12">
            {items.map((it, idx) => (
              <div key={idx} className="relative grid md:grid-cols-4 gap-6 md:gap-10 pl-8 md:pl-0">
                <div className="absolute left-0 top-2 md:left-[calc(25%-7px)]">
                  <div
                    className={`size-3.5 rounded-full border-2 ${
                      it.current
                        ? "bg-accent border-accent shadow-glow"
                        : "bg-background border-primary"
                    }`}
                  />
                </div>
                <div className="md:text-right md:pr-10">
                  <div className="font-mono text-xs text-accent">{it.period}</div>
                  {it.location && (
                    <div className="text-xs text-muted-foreground mt-1">{it.location}</div>
                  )}
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-display font-semibold text-xl">{it.role}</h3>
                  <div className="text-sm text-muted-foreground mb-3">{it.company}</div>
                  <ul className="space-y-2 text-muted-foreground text-[15px] leading-relaxed">
                    {it.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-accent mt-2 size-1 rounded-full bg-accent shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}