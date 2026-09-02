const education = [
  {
    school: "DSA — Data Science Academy",
    course: "Formação Engenheiro de Dados",
    period: "2026 — 2028",
  },
  {
    school: "Infinity Big Data",
    course: "Formação em Engenharia de Dados",
    period: "2025 — 2026",
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
];

export function Education() {
  return (
    <section id="formacao" className="relative py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <p className="font-mono text-xs text-accent mb-4 tracking-widest uppercase">
            06 — formação
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-10">
            Aprendizado <span className="text-gradient">contínuo</span>.
          </h2>
          <div className="space-y-4">
            {education.map((e) => (
              <div
                key={e.school + e.course}
                className="bg-gradient-card border border-border rounded-2xl p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display font-semibold">{e.school}</h3>
                    <p className="text-sm text-muted-foreground">{e.course}</p>
                  </div>
                  <span className="font-mono text-xs whitespace-nowrap text-muted-foreground">
                    {e.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="font-mono text-xs text-accent mb-4 tracking-widest uppercase">
            07 — idiomas
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-10">
            Idiomas em <span className="text-gradient">evolução</span>.
          </h2>
          <div className="space-y-3">
            {[
              { lang: "Português", level: "Nativo" },
              { lang: "Espanhol", level: "Intermediário" },
              { lang: "Inglês", level: "Básico" },
            ].map((l) => (
              <div
                key={l.lang}
                className="flex items-center justify-between bg-gradient-card border border-border rounded-xl p-4"
              >
                <span className="font-display font-semibold">{l.lang}</span>
                <span className="font-mono text-xs text-accent">{l.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}