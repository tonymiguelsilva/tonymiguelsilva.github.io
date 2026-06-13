const groups = [
  {
    title: "BI & Analytics",
    items: ["Power BI", "DAX", "Power Query", "Modelagem Dimensional", "RLS"],
  },
  {
    title: "Engenharia de Dados",
    items: ["Apache Hop", "SSIS", "dbt", "Airflow", "ETL/ELT"],
  },
  {
    title: "Linguagens & DBs",
    items: ["Python", "SQL Server", "Firebird", "BigQuery"],
  },
  {
    title: "Cloud & Plataformas",
    items: ["Azure", "AWS", "GCP", "Databricks"],
  },
  {
    title: "Automação",
    items: ["n8n", "Power Automate"],
  },
  {
    title: "ERP",
    items: ["SAP", "Junsoft"],
  },
];

export function Stack() {
  return (
    <section id="stack" className="relative py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <p className="font-mono text-xs text-accent mb-4 tracking-widest uppercase">
            02 — stack
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
          Stack <span className="text-gradient">técnica</span>.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map((g) => (
            <div
              key={g.title}
              className="bg-gradient-card border border-border rounded-2xl p-6 shadow-card hover:border-primary/40 transition-all hover:-translate-y-1 duration-300"
            >
              <h3 className="font-display font-semibold text-base mb-4 flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-accent" />
                {g.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span
                    key={i}
                    className="font-mono text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}