import dwImg from "@/assets/projects/local-dw-architecture.jpg.asset.json";
import gcpImg from "@/assets/projects/gcp-data-lake-cover.jpg.asset.json";

const projects = [
  {
    tag: "Data Warehouse · Local",
    title: "Local Data Warehouse Architecture",
    description:
      "Projeto completo de Engenharia de Dados Local desenvolvido para simular um ambiente real de Data Warehouse — desde a ingestão de dados via API até a camada analítica em Power BI.",
    highlights: [
      "Ingestão de dados com Python e FastAPI",
      "Orquestração de pipelines com Apache Airflow",
      "Data Warehouse em PostgreSQL",
      "Transformação e modelagem com dbt",
      "Camadas Bronze, Silver e Gold",
      "Visualização e análise em Power BI",
    ],
    stack: ["Python", "FastAPI", "Apache Airflow", "PostgreSQL", "dbt", "Power BI"],
    github: "https://github.com/tonymiguelsilva/projeto-arquitetura-local-dw",
    image: dwImg.url,
  },
  {
    tag: "Data Warehouse · Cloud",
    title: "Cloud Data Engineering — GCP",
    description:
      "Pipeline end-to-end de dados na Google Cloud. Parte de um banco PostgreSQL com ingestão incremental em Python, armazena arquivos Parquet no Google Cloud Storage e carrega o Data Warehouse no BigQuery, com transformação e modelagem em dbt nas camadas Bronze, Silver e Gold. Orquestração com Apache Airflow.",
    highlights: [
      "Pipeline de dados end-to-end",
      "Ingestão incremental com watermark",
      "Arquivos Parquet no GCS",
      "Arquitetura Bronze, Silver e Gold",
      "Modelagem dimensional",
      "Data Quality com 20 testes",
      "Particionamento e clustering no BigQuery",
      "Integração com API externa",
      "Notificações automáticas",
    ],
    stack: [
      "Python",
      "PostgreSQL",
      "Apache Airflow",
      "GCS",
      "BigQuery",
      "dbt",
      "Docker",
      "Google Cloud",
    ],
    github: "https://github.com/tonymiguelsilva/projeto-cloud-gcp-data-engineering",
    image: gcpImg.url,
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
            Arquitetura <span className="text-gradient">end-to-end</span>.
          </h2>
          <p className="text-muted-foreground mt-4">
            Projetos que conectam ingestão, orquestração, transformação e visualização em um fluxo contínuo de valor.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative bg-gradient-card border border-border rounded-2xl overflow-hidden shadow-card hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="relative block aspect-video overflow-hidden bg-secondary border-b border-border"
                aria-label={`Abrir ${p.title} no GitHub`}
              >
                <img
                  src={p.image}
                  alt={`Arquitetura do ${p.title}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
                <span className="absolute bottom-3 right-3 font-mono text-[10px] px-2.5 py-1.5 rounded-md bg-background/80 backdrop-blur border border-border text-foreground/90">
                  ver no GitHub ↗
                </span>
              </a>

              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-[10px] tracking-widest text-accent uppercase">
                    {p.tag}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl leading-tight mb-3 group-hover:text-gradient transition-all">
                  {p.title}
                </h3>
                <p className="text-sm text-foreground/80 mb-6 leading-relaxed">{p.description}</p>

                <ul className="space-y-2 mb-6 text-sm">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-foreground/75">
                      <span className="text-accent mt-1 shrink-0">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mb-6">
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
                  <span className="font-mono text-[10px] text-muted-foreground">
                    Repositório público
                  </span>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-accent hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </article>
          ))}

          <div className="group relative lg:col-span-2 bg-gradient-card border border-dashed border-border rounded-2xl overflow-hidden flex flex-col items-center justify-center text-center p-8 min-h-[180px]">
            <span className="font-mono text-[10px] tracking-widest text-accent uppercase mb-4">
              Em breve
            </span>
            <h3 className="font-display font-bold text-2xl leading-tight mb-3">
              Mais projetos <span className="text-gradient">por aqui</span>.
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Novas arquiteturas com Databricks, GCP, Airflow, dbt e BigQuery estão em construção.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
