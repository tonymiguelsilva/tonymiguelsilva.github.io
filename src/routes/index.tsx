import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Stack } from "@/components/portfolio/Stack";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tony Miguel da Silva — Analytics & Data Engineer" },
      { name: "description", content: "Portfólio de Tony Miguel da Silva — Analytics Engineer, BI e Engenharia de Dados. Power BI, SQL, Python, dbt, Airflow, Databricks, Cloud." },
      { property: "og:title", content: "Tony Miguel da Silva — Analytics & Data Engineer" },
      { property: "og:description", content: "Pipelines de dados, dashboards estratégicos e arquitetura moderna em cloud." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
