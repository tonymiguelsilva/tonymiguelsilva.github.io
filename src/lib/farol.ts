export const farol = {
  title: "Projeto Farol",
  subtitle: "Torre de Controle de Projetos no Databricks",
  summary: "Plataforma Lakehouse que integra dados de projetos, custos, pessoas e fornecedores para identificar riscos, prever desvios e apoiar decisões executivas.",
  repository: "https://github.com/tonymiguelsilva/projeto_databricks",
  // Enable when the repository is ready to be shared publicly.
  showRepository: false,
  simulation: { seed: 42, referenceDate: "16/10/2026" },
  falseGreenSpiThreshold: 0.90,
  numbers: [
    { value: "60", label: "projetos" },
    { value: "523", label: "colaboradores" },
    { value: "3.911", label: "status semanais" },
    { value: "30.883", label: "apontamentos de horas" },
    { value: "7", label: "tabelas integradas na Silver" },
    { value: "3", label: "produtos analíticos" },
    { value: "20/20", label: "benchmark do Genie" },
  ],
  stack: ["Databricks", "Lakeflow Jobs", "Spark Declarative Pipelines", "Unity Catalog", "Databricks SQL", "AI Functions", "Genie Agent", "AI/BI Dashboards", "Declarative Automation Bundles", "Python", "SQL", "TypeScript", "React", "AppKit", "Supabase Storage", "Git e GitHub"],
};

export type FarolMedia = { title: string; image?: string; alt?: string };
// Set image to the URL of a supplied .asset.json pointer; no other gallery edits needed.
export const farolMedia: FarolMedia[] = [
  { title: "Dashboard executivo" },
  { title: "Grafo do pipeline" },
  { title: "Databricks App — Projetos em risco" },
  { title: "Databricks App — Simulador" },
];