import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check, GitBranch, Github, ImageIcon, Layers, MessageSquare, PanelTop, ShieldCheck, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/portfolio/Nav";
import { Contact } from "@/components/portfolio/Contact";
import { FarolArchitecture } from "@/components/portfolio/FarolArchitecture";
import { farol, farolMedia } from "@/lib/farol";

export const Route = createFileRoute("/projetos/farol")({
  head: () => ({ meta: [
    { title: "Projeto Farol — Databricks Lakehouse | Tony Miguel" },
    { name: "description", content: farol.summary + " Case técnico com dados sintéticos, arquitetura medalhão e IA governada." },
    { property: "og:title", content: "Projeto Farol — Torre de Controle no Databricks" },
    { property: "og:description", content: farol.summary },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: FarolPage,
});

function RepositoryButton() {
  if (!farol.showRepository) return null;
  return <Button asChild className="h-auto min-h-10 py-3 whitespace-normal"><a href={farol.repository} target="_blank" rel="noreferrer"><Github aria-hidden="true" />Ver código no GitHub<ArrowUpRight aria-hidden="true" /></a></Button>;
}

function Section({ number, label, title, children }: { number: string; label: string; title: string; children: ReactNode }) {
  return <section id={`farol-${number}`} className="scroll-mt-28 py-16 md:py-24 border-t border-border"><div className="max-w-6xl mx-auto px-6"><p className="font-mono text-xs text-accent uppercase mb-4">{number} — {label}</p><h2 className="font-display font-bold text-3xl md:text-4xl mb-10 leading-tight">{title}</h2>{children}</div></section>;
}

const farolSections = [
  ["01", "Visão geral"],
  ["02", "Números"],
  ["03", "Arquitetura"],
  ["04", "Indicadores"],
  ["05", "IA e governança"],
  ["06", "Produtos"],
  ["07", "Galeria"],
  ["08", "Tecnologias"],
  ["09", "Aprendizados"],
] as const;

const questions = [
  "Quais projetos estão atrasados ou acima do orçamento?",
  "Qual é o estouro financeiro previsto?",
  "O farol informado pelo gerente combina com os indicadores?",
  "Existem pessoas ociosas que poderiam apoiar projetos críticos?",
  "Quais bloqueios mais afetam o portfólio?",
  "Quais fornecedores estão atrasando entregas?",
  "O que pode dar errado no próximo mês e onde agir primeiro?",
];

function FarolPage() {
  return (
    <main id="top" className="farol-page bg-background text-foreground min-h-screen">
      <Nav />
      <header className="max-w-6xl mx-auto px-6 pt-28 md:pt-36 pb-16 md:pb-20">
        <Button asChild variant="ghost" size="sm" className="pl-0 mb-10"><Link to="/" hash="engenharia"><ArrowLeft aria-hidden="true" />Voltar ao portfólio</Link></Button>
        <p className="font-mono text-xs text-accent uppercase mb-5">Engenharia de Dados / Analytics / Inteligência Artificial</p>
        <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">Projeto <span className="text-primary">Farol</span></h1>
        <p className="font-display text-xl md:text-3xl mt-5 max-w-3xl">{farol.subtitle}</p>
        <p className="text-muted-foreground text-lg leading-relaxed mt-6 max-w-3xl">{farol.summary}</p>
        <div className="flex flex-wrap gap-2 mt-7">{["Databricks", "Lakehouse", "Python", "SQL", "Genie Agent"].map(s => <span key={s} className="font-mono text-xs text-foreground/80 border border-border rounded-md px-3 py-1.5">{s}</span>)}</div>
        <div className="mt-7"><RepositoryButton /></div>
        <aside className="border-l-2 border-accent pl-5 mt-10 max-w-3xl text-sm text-muted-foreground leading-relaxed"><strong className="text-foreground">Simulação com dados 100% sintéticos.</strong> Gerados deterministicamente com seed {farol.simulation.seed}, para fins educacionais. A Vértice Tecnologia é fictícia; os dados não representam uma empresa, pessoas ou resultados reais. Referência: {farol.simulation.referenceDate}.</aside>
      </header>

      <figure className="max-w-6xl mx-auto px-6 pb-16 md:pb-20">
        <a href={farol.cover} target="_blank" rel="noreferrer" aria-label="Ampliar arquitetura do Projeto Farol" className="block overflow-hidden rounded-lg border border-border bg-secondary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <img src={farol.cover} alt={farol.coverAlt} className="w-full h-auto" />
        </a>
      </figure>

      <nav aria-label="Navegação do Projeto Farol" className="sticky top-16 z-40 border-y border-border bg-background/95 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 overflow-x-auto">
          <ul className="flex min-w-max gap-1 py-2">
            {farolSections.map(([number, label]) => <li key={number}><a href={`#farol-${number}`} className="inline-flex min-h-10 items-center rounded-md px-3 text-xs font-mono text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">{number} {label}</a></li>)}
          </ul>
        </div>
      </nav>

      <Section number="01" label="Visão geral" title="Da fragmentação à visão executiva.">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 md:gap-16">
          <div className="space-y-5 text-muted-foreground leading-relaxed"><p>Na empresa fictícia Vértice Tecnologia, informações de projetos estavam distribuídas entre PMO, RH, timesheet, financeiro, compras, Excel, ClickUp e Microsoft Project.</p><p>O Farol centraliza essas fontes em uma torre de controle no Databricks. Uma arquitetura medalhão — Bronze, Silver e Gold — sustenta três produtos analíticos e uma visão confiável de prazo, custo, risco e capacidade.</p></div>
          <ul className="divide-y divide-border">{questions.map((q, i) => <li key={q} className="flex gap-4 py-4 first:pt-0"><span className="font-mono text-xs text-accent mt-1 shrink-0">0{i + 1}</span><span className="text-sm leading-relaxed">{q}</span></li>)}</ul>
        </div>
      </Section>

      <Section number="02" label="Escala da simulação" title="O projeto em números.">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">{farol.numbers.map(n => <div key={n.label} className="border-t border-border pt-5"><dd className="font-display text-4xl md:text-5xl font-bold text-primary mb-3">{n.value}</dd><dt className="text-sm text-muted-foreground">{n.label}</dt></div>)}</dl>
        <p className="text-xs text-muted-foreground mt-8">Volumes sintéticos da simulação. O benchmark 20/20 corresponde às 20 perguntas avaliadas, não a uma garantia para qualquer pergunta.</p>
      </Section>

      <Section number="03" label="Arquitetura" title="Um fluxo. Três produtos. A mesma verdade.">
        <FarolArchitecture />
        <div className="grid md:grid-cols-3 gap-8 mt-14">{[
          ["Bronze", "Preservar e validar", "Preserva os dados próximos do formato original e valida as contagens das fontes antes de continuar o processamento."],
          ["Silver", "Integrar e padronizar", "Limpa, tipa, deduplica e integra os dados. Cronogramas de Excel, ClickUp e Microsoft Project convergem em um único modelo de tarefas."],
          ["Gold", "Traduzir em indicadores", "Produz indicadores executivos de prazo, custo, risco e utilização das pessoas para os produtos analíticos."],
        ].map(([name, title, description]) => <div key={name} className="border-t border-border pt-6"><p className="font-mono text-xs text-accent mb-3">{name}</p><h3 className="text-xl font-semibold mb-3">{title}</h3><p className="text-sm leading-relaxed text-muted-foreground">{description}</p></div>)}</div>
      </Section>

      <Section number="04" label="Indicadores executivos" title="O risco além do farol informado.">
        <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">{[
          ["SPI", "Desempenho de prazo"], ["CPI", "Desempenho de custo"], ["EAC", "Custo estimado ao término"], ["Estouro previsto", "Desvio financeiro estimado"], ["Margem projetada", "Perspectiva de resultado do projeto"], ["Atraso projetado", "Perspectiva de desvio no cronograma"], ["Utilização e custo ocioso", "Capacidade disponível e seu impacto financeiro"],
        ].map(([label, text]) => <div key={label} className="border-b border-border pb-6"><dt className="font-display font-semibold text-lg mb-2">{label}</dt><dd className="text-sm text-muted-foreground">{text}</dd></div>)}
          <div className="border-l-2 border-destructive pl-5 sm:col-span-2"><dt className="font-display font-semibold text-lg mb-2">Falso verde</dt><dd className="text-sm text-muted-foreground leading-relaxed">Projeto reportado como verde pelo gerente, mas com SPI abaixo de {farol.falseGreenSpiThreshold.toFixed(2).replace(".", ",")}. A divergência entre relato e indicador sinaliza um risco que merece atenção.</dd></div>
        </dl>
      </Section>

      <Section number="05" label="Inteligência e governança" title="IA no pipeline. Confiança nos números.">
        <div className="grid md:grid-cols-3 gap-10">{[
          { icon: Sparkles, title: "Textos em dados estruturados", text: "Databricks AI Functions transformam os textos livres dos gerentes em causa do bloqueio, responsável por destravar e impacto estimado em dias. O processamento é incremental: registros já classificados são persistidos e não geram novas chamadas de IA." },
          { icon: Layers, title: "Métricas governadas", text: "Uma Metric View centraliza as fórmulas oficiais de SPI, CPI, carteira, margem, risco e estouro. Dashboard, SQL e Genie consultam as mesmas definições e apresentam os mesmos números." },
          { icon: GitBranch, title: "Infraestrutura como código", text: "Jobs, pipelines, dashboard e Genie são definidos e implantados com Databricks Declarative Automation Bundles, permitindo versionamento, validação e reprodução do ambiente." },
        ].map(item => <div key={item.title}><item.icon aria-hidden="true" className="size-6 text-accent mb-5" /><h3 className="text-xl font-semibold mb-4">{item.title}</h3><p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p></div>)}</div>
        <div className="mt-14 border-t border-border pt-8"><h3 className="font-display text-xl font-semibold flex items-center gap-3 mb-6"><ShieldCheck aria-hidden="true" className="size-5 text-accent" />Qualidade e segurança</h3><ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{["Testes automatizados de cobertura, unicidade e reconciliação", "Expectations no pipeline", "Unity Catalog para governança", "Processamento serverless", "Credenciais fora do Git", "Secret scope para acesso ao storage", "OAuth no aplicativo", "Nenhuma credencial armazenada no código"].map(item => <li key={item} className="flex gap-3 text-sm text-muted-foreground"><Check aria-hidden="true" className="size-4 shrink-0 text-accent mt-0.5" />{item}</li>)}</ul></div>
      </Section>

      <Section number="06" label="Produtos finais" title="Da engenharia à decisão.">
        <div className="grid md:grid-cols-3 gap-6">{[
          { icon: PanelTop, title: "Dashboard AI/BI", intro: "Três páginas executivas", text: "Portfólio, capacidade das pessoas e fornecedores. Filtros, KPIs, evolução semanal, riscos, bloqueios e atrasos em uma leitura executiva." },
          { icon: MessageSquare, title: "Genie Agent", intro: "Farol · Diretoria", text: "Responde perguntas executivas em português usando as tabelas Gold e métricas governadas. Avaliado com 20 perguntas, alcançou 20/20 no benchmark." },
          { icon: Layers, title: "Databricks App", intro: "React e TypeScript", text: "Projetos em risco: KPIs e fila de atuação. Simulador: impacto operacional e financeiro da realocação de pessoas. Perguntar: conversa integrada com o Genie Agent." },
        ].map(item => <article key={item.title} className="bg-card border border-border rounded-lg p-7"><item.icon aria-hidden="true" className="size-7 text-primary mb-6" /><p className="text-xs font-mono text-accent mb-3">{item.intro}</p><h3 className="text-2xl font-bold mb-4">{item.title}</h3><p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p></article>)}</div>
      </Section>

      <Section number="07" label="Galeria" title="Os produtos, em detalhe.">
        <div className="grid md:grid-cols-2 gap-6">{farolMedia.map(media => <figure key={media.title} className="min-w-0"><div className="aspect-video border border-border rounded-lg bg-secondary/30 overflow-hidden">{media.image ? <a href={media.image} target="_blank" rel="noreferrer" aria-label={`Ampliar ${media.title}`} className="block h-full focus-visible:ring-2 focus-visible:ring-ring"><img src={media.image} alt={media.alt ?? media.title} className="w-full h-full object-contain" loading="lazy" /></a> : <div className="flex flex-col items-center justify-center h-full text-center p-5"><ImageIcon aria-hidden="true" className="size-8 text-accent mb-4" /><p className="text-sm font-medium">{media.title}</p><p className="text-xs text-muted-foreground mt-2">Captura de tela em breve</p></div>}</div><figcaption className="text-sm text-muted-foreground mt-3">{media.title}</figcaption></figure>)}</div>
      </Section>

      <Section number="08" label="Tecnologias" title="Uma stack integrada."><ul className="flex flex-wrap gap-3">{farol.stack.map(item => <li key={item} className="text-xs font-mono px-3 py-2 border border-border bg-secondary/40 rounded-md">{item}</li>)}</ul></Section>

      <Section number="09" label="Principais aprendizados" title="Construir a base. Entregar o produto.">
        <ul className="grid md:grid-cols-2 gap-x-16 gap-y-5">{["Integração de fontes heterogêneas", "Modelagem em arquitetura medalhão", "Métricas financeiras e operacionais", "Qualidade e governança de dados", "Aplicação de IA em pipelines SQL", "Infraestrutura Databricks como código", "Construção de produtos analíticos para usuários executivos"].map(item => <li key={item} className="flex items-start gap-3 text-muted-foreground"><ArrowUpRight aria-hidden="true" className="size-4 text-accent shrink-0 mt-1" />{item}</li>)}</ul>
      </Section>

      <section className="border-y border-border py-12"><div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-6"><div><h2 className="text-2xl font-bold">Engenharia que conecta dados e decisões.</h2><p className="text-muted-foreground text-sm mt-3">Conheça também as outras arquiteturas do portfólio.</p></div><div className="flex flex-wrap gap-3"><RepositoryButton /><Button asChild variant="outline"><Link to="/" hash="engenharia">Mais projetos<ArrowUpRight aria-hidden="true" /></Link></Button></div></div></section>
      <Contact />
    </main>
  );
}
