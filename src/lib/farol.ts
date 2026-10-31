import coverUrl from "@/assets/projects/farol/cover.jpg";

export const farol = {
  title: "Projeto Farol",
  subtitle: "Torre de Controle de Projetos no Databricks",
  summary: "Plataforma Lakehouse que integra dados de projetos, custos, pessoas e fornecedores para identificar riscos, prever desvios e apoiar decisões executivas.",
  repository: "https://github.com/tonymiguelsilva/projeto_databricks",
  cover: coverUrl,
  coverAlt: "Arquitetura do Projeto Farol com fontes de dados, Lakehouse Databricks e produtos analíticos",
  // Flip to false again if the repository goes private.
  showRepository: true,
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

import dashboardUrl from "@/assets/projects/farol/dashboard.png";
import pipelineUrl from "@/assets/projects/farol/pipeline-vertice.png";
import riscoUrl from "@/assets/projects/farol/projetos-risco.png";
import simuladorUrl from "@/assets/projects/farol/simulador.png";

const dashboard = { url: dashboardUrl };
const pipeline = { url: pipelineUrl };
const risco = { url: riscoUrl };
const simulador = { url: simuladorUrl };

export type FarolMedia = { title: string; image?: string; alt?: string };
export const farolMedia: FarolMedia[] = [
  { title: "Dashboard executivo", image: dashboard.url, alt: "Dashboard AI/BI executivo do Projeto Farol com KPIs do portfólio" },
  { title: "Grafo do pipeline", image: pipeline.url, alt: "Grafo do pipeline Bronze, Silver e Gold no Databricks" },
  { title: "Databricks App — Projetos em risco", image: risco.url, alt: "Tela Projetos em risco do Databricks App com fila de atuação" },
  { title: "Databricks App — Simulador", image: simulador.url, alt: "Simulador de realocação de pessoas do Databricks App" },
];
