const education = [
  {
    school: "DSA — Data Science Academy",
    course: "Formação Engenheiro de Dados",
    period: "em breve",
    upcoming: true,
  },
  {
    school: "Infinity Big Data",
    course: "Formação em Engenharia de Dados",
    period: "2025 — 2027",
  },
  {
    school: "Xperiun",
    course: "Formação em Análise de Dados",
    period: "2024 — 2026",
  },
  {
    school: "Faculdade FAEL",
    course: "Graduação em Logística",
    period: "2021 — 2023",
  },
  {
    school: "Wise Up",
    course: "Inglês",
    period: "2021 — 2022",
  },
];

const certs = [
  "ETL Python com Google BigQuery",
  "Google Cloud Platform — Data Lakehouse",
  "Power Automate Essencial",
  "Data Engineer Fundamentals",
  "Power BI — 112 horas",
];

export function Education() {
  return (
    <section id="formacao" className="relative py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <p className="font-mono text-xs text-accent mb-4 tracking-widest uppercase">
            04 — formação
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-10">
            Aprendizado <span className="text-gradient">contínuo</span>.
          </h2>
          <div className="space-y-4">
            {education.map((e) => (
              <div
                key={e.school + e.course}
                className={`bg-gradient-card border rounded-2xl p-5 ${
                  e.upcoming ? "border-accent/50 shadow-glow" : "border-border"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display font-semibold">{e.school}</h3>
                    <p className="text-sm text-muted-foreground">{e.course}</p>
                  </div>
                  <span
                    className={`font-mono text-xs whitespace-nowrap ${
                      e.upcoming ? "text-accent" : "text-muted-foreground"
                    }`}
                  >
                    {e.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="font-mono text-xs text-accent mb-4 tracking-widest uppercase">
            05 — certificações
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-10">
            Conhecimento <span className="text-gradient">validado</span>.
          </h2>
          <ul className="space-y-3">
            {certs.map((c) => (
              <li
                key={c}
                className="flex items-center gap-4 bg-gradient-card border border-border rounded-xl p-4 hover:border-primary/40 transition-colors"
              >
                <span className="font-mono text-xs text-accent">✓</span>
                <span className="text-foreground">{c}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 p-6 rounded-2xl border border-border bg-gradient-card">
            <h3 className="font-display font-semibold mb-2">Idiomas</h3>
            <div className="flex gap-6 text-sm">
              <div>
                <div className="text-foreground">Português</div>
                <div className="text-muted-foreground text-xs">Nativo</div>
              </div>
              <div>
                <div className="text-foreground">Inglês</div>
                <div className="text-muted-foreground text-xs">Básico-Intermediário</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}