export function DataEngineering() {
  return (
    <section id="engenharia" className="relative py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <p className="font-mono text-xs text-accent mb-4 tracking-widest uppercase">
            04 — engenharia de dados
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Projetos de <span className="text-gradient">Engenharia de Dados</span>.
          </h2>
          <p className="text-muted-foreground mt-4">
            Pipelines, ETL/ELT, orquestração e arquiteturas modernas em cloud.
          </p>
        </div>

        <div className="relative bg-gradient-card border border-dashed border-border rounded-2xl p-16 text-center">
          <p className="font-mono text-xs text-accent mb-3 tracking-widest uppercase">
            // em construção
          </p>
          <h3 className="font-display font-bold text-2xl mb-3">
            Projetos selecionados em breve
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Estou preparando uma coletânea de projetos com Python, SQL, dbt,
            Airflow, Apache Hop e cloud (Azure / GCP / AWS).
          </p>
        </div>
      </div>
    </section>
  );
}