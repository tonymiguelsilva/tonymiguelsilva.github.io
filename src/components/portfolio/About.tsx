export function About() {
  return (
    <section id="sobre" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="font-mono text-xs text-accent mb-4 tracking-widest uppercase">
            01 — sobre
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Dados com<br />
            <span className="text-gradient">propósito.</span>
          </h2>
        </div>
        <div className="md:col-span-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            Minha trajetória começou em Frota, Logística e Compras — onde aprendi
            que <span className="text-foreground">todo dado conta uma história operacional</span>.
            Nos últimos anos, direcionei a carreira para Engenharia e Análise de Dados.
          </p>
          <p>
            Evoluí de BI tradicional para a construção de{" "}
            <span className="text-foreground">pipelines escaláveis, automação de cargas
            e arquitetura de dados moderna em cloud</span>. Tenho formação em Análise
            de Dados pela <span className="text-accent font-medium">Xperiun Data Analytics</span>{" "}
            e atualmente curso na{" "}
            <span className="text-accent font-medium">Jornada Dados</span>, com formação em
            Análise, Engenharia de Dados e IA, reforçando o foco em ETL/ELT, orquestração,
            Data Warehouses e Data Lakes.
          </p>
        </div>
      </div>
    </section>
  );
}