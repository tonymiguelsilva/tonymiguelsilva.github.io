import e1 from "@/assets/engineering/e1.png";
import e2 from "@/assets/engineering/e2.png";
import e3 from "@/assets/engineering/e3.png";
import e4 from "@/assets/engineering/e4.png";

const projects = [
  {
    tag: "Databricks • Medallion",
    title: "Pipeline de Dados com Databricks, Python e SQL",
    scenario: "Arquitetura Medallion (Bronze → Silver → Gold) para dados de vendas",
    description:
      "Pipeline completo construído no Databricks com Python + SQL, aplicando boas práticas de validação, transformação e modelagem analítica. Job agendado executa o fluxo end-to-end automaticamente.",
    highlights: [
      "Arquitetura em camadas Bronze → Silver → Gold",
      "Validação e transformação orientadas a boas práticas",
      "Modelos analíticos lapidados para consumo na camada Gold",
      "Job automatizado com execução agendada",
    ],
    stack: ["Databricks", "Python", "SQL", "Spark"],
    image: e1,
  },
  {
    tag: "GCP • Data Lake",
    title: "Data Lake no Google Cloud Platform",
    scenario: "Arquitetura moderna de Data Lake simulando cenário real de mercado",
    description:
      "Implementação de Landing → Bronze → Silver → Gold no GCP, usando Cloud Storage como Landing, Dataflow para ingestão e BigQuery como camada analítica consumida por Looker Studio e Power BI.",
    highlights: [
      "Landing em Cloud Storage com fatos e dimensões (CSV)",
      "Ingestão para BigQuery via Dataflow (Bronze)",
      "Queries SQL agendadas para tratar e padronizar (Silver)",
      "Camada Gold modelada para consumo analítico",
    ],
    stack: ["GCP", "Cloud Storage", "Dataflow", "BigQuery", "Looker Studio"],
    image: e2,
  },
  {
    tag: "BigQuery • Airflow • dbt",
    title: "Data Warehouse com Airflow, dbt e BigQuery",
    scenario: "Projeto end-to-end de Engenharia de Dados com orquestração e Analytics Engineering",
    description:
      "Pipeline orquestrado em Airflow (Docker) extraindo de fontes relacionais para BigQuery, com FULL e INCREMENTAL load. Transformações em dbt aplicando staging/DW, versionamento e modelagem analítica.",
    highlights: [
      "Orquestração em Apache Airflow rodando em Docker",
      "FULL LOAD para dimensões e INCREMENTAL para fatos",
      "Escalável: nova tabela = nova entrada em uma lista",
      "Transformações em dbt — staging, DW e versionamento",
      "Consumo final em Looker Studio",
    ],
    stack: ["BigQuery", "Airflow", "Docker", "dbt", "Looker Studio"],
    image: e3,
  },
  {
    tag: "Apache Hop • SQL Server",
    title: "DW com Apache Hop, SQL Server e Power BI",
    scenario: "Pipeline ETL on-premises com foco em performance e governança",
    description:
      "Construção de um DW consolidando múltiplas fontes (SQL Server, ODBC) via Apache Hop, com carga incremental no pipeline e no Power BI para alta performance, mesmo em grandes volumes.",
    highlights: [
      "ETL em Apache Hop: Origem → Stage → DW",
      "Atualização incremental no pipeline e no Power BI",
      "Usuários simulados e permissões controladas",
      "Consumo final em Power BI e Excel",
    ],
    stack: ["Apache Hop", "SQL Server", "Power BI", "ODBC"],
    image: e4,
  },
];

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
            Pipelines, ETL/ELT, orquestração e arquiteturas modernas em cloud e on-premises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <article
              key={p.title}
              className="group relative bg-gradient-card border border-border rounded-2xl overflow-hidden shadow-card hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden border-b border-border bg-[#0b0f1a]">
                <img
                  src={p.image}
                  alt={`Preview de ${p.title}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 font-mono text-[10px] px-2 py-1 rounded-md bg-background/80 backdrop-blur border border-border text-accent uppercase tracking-widest z-10">
                  {String(idx + 1).padStart(2, "0")} / {p.tag}
                </span>
              </div>

              <div className="p-7 flex flex-col flex-1">
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

                <div className="mt-auto flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] px-2 py-1 rounded-md bg-secondary text-secondary-foreground border border-border"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}