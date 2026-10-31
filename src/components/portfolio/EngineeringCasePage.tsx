import { Link } from '@tanstack/react-router';
import { ArrowDown, ArrowLeft, ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Nav } from './Nav';
import { Contact } from './Contact';
import type { EngineeringCase } from '@/lib/engineering-cases';

export function EngineeringCasePage({ project }: { project: EngineeringCase }) {
 return <main id="top" className="farol-page min-h-screen bg-background text-foreground">
  <Nav />
  <header className="max-w-6xl mx-auto px-6 pt-28 md:pt-36 pb-16">
   <Button asChild variant="ghost" size="sm" className="pl-0 mb-8"><Link to="/" hash="engenharia"><ArrowLeft aria-hidden="true" />Voltar ao portfólio</Link></Button>
   <p className="font-mono text-xs text-accent uppercase mb-5">{project.category}</p>
   <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight max-w-4xl break-words">{project.title}</h1>
   <p className="text-lg text-muted-foreground leading-relaxed mt-6 max-w-3xl">{project.summary}</p>
   <ul className="flex flex-wrap gap-2 mt-7">{project.stack.slice(0, 6).map(s => <li key={s} className="font-mono text-xs border border-border rounded-md px-3 py-1.5">{s}</li>)}</ul>
   <div className="flex flex-wrap gap-3 mt-8">
    <Button asChild className="h-auto min-h-10 py-3 whitespace-normal"><a href={project.repository} target="_blank" rel="noreferrer"><Github aria-hidden="true" />Ver código no GitHub<ArrowUpRight aria-hidden="true" /></a></Button>
    {project.platform && <Button asChild variant="outline" className="h-auto min-h-10 py-3 whitespace-normal"><a href={project.platform} target="_blank" rel="noreferrer"><ExternalLink aria-hidden="true" />Acessar plataforma</a></Button>}
   </div>
  </header>
  <figure className="max-w-6xl mx-auto px-6 pb-16">
   <a href={project.image} target="_blank" rel="noreferrer" aria-label={`Ampliar capa de ${project.title}`} className="block focus-visible:ring-2 focus-visible:ring-ring"><img src={project.image} alt={project.imageAlt} className="w-full h-auto border border-border rounded-lg" /></a>
  </figure>
  <nav aria-label="Navegação deste projeto" className="sticky top-16 z-40 border-y border-border bg-background/95 backdrop-blur-xl">
   <div className="case-nav-scroll max-w-6xl mx-auto px-6 overflow-x-auto md:overflow-visible">
    <ul className="flex min-w-max gap-1 py-2 md:min-w-0 md:flex-wrap md:justify-center">
     {project.sections.map((section, index) => <li key={section.label}><a href={`#case-section-${index + 1}`} className="inline-flex min-h-10 items-center rounded-md px-3 text-xs font-mono text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">{String(index + 1).padStart(2, '0')} {section.label}</a></li>)}
    </ul>
   </div>
  </nav>
  {project.gallery && project.gallery.length > 0 && <section className="border-t border-border py-16 md:py-20">
   <div className="max-w-6xl mx-auto px-6">
    <p className="font-mono text-xs text-accent uppercase mb-4">Projeto em execução</p>
    <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 leading-tight">Detalhes da implementação.</h2>
    <p className="text-muted-foreground leading-relaxed max-w-2xl mb-10">Capturas reais das ferramentas, modelos e interfaces desenvolvidas no projeto.</p>
    <div className="grid md:grid-cols-2 gap-8">
     {project.gallery.map(media => <figure key={media.image} className="min-w-0">
      <a href={media.image} target="_blank" rel="noreferrer" aria-label={`Ampliar: ${media.caption}`} className="group block aspect-[16/10] overflow-hidden rounded-lg border border-border bg-secondary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
       <img src={media.image} alt={media.alt} loading="lazy" className="size-full object-contain transition-transform duration-300 group-hover:scale-[1.02]" />
      </a>
      <figcaption className="mt-3 flex items-start justify-between gap-4 text-sm text-muted-foreground">
       <span>{media.caption}</span>
       <ExternalLink aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
      </figcaption>
     </figure>)}
    </div>
   </div>
  </section>}
  {project.sections.map((section, i) => <section id={`case-section-${i + 1}`} key={section.label} className={`scroll-mt-28 py-16 md:py-20 border-t border-border ${i % 2 ? 'bg-secondary/20' : ''}`}>
   <div className="max-w-6xl mx-auto px-6">
    <p className="font-mono text-xs text-accent uppercase mb-4">{String(i + 1).padStart(2, '0')} — {section.label}</p>
    <h2 className="font-display font-bold text-3xl md:text-4xl mb-8 leading-tight">{section.title}</h2>
    {section.paragraphs && <div className="space-y-4 max-w-3xl text-muted-foreground leading-relaxed mb-8">{section.paragraphs.map(p => <p key={p}>{p}</p>)}</div>}
    {section.flow && <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">{section.flow.map((stage, index) => <li key={stage} className="min-w-0 border-t-2 border-accent pt-5 pb-2"><div className="flex items-center justify-between gap-3 mb-4"><span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, '0')}</span>{index < (section.flow?.length ?? 0) - 1 && <ArrowDown aria-hidden="true" className="size-4 text-muted-foreground md:-rotate-90" />}</div><p className="font-display font-semibold text-lg break-words">{stage}</p></li>)}</ol>}
    {section.items && <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">{section.items.map(item => <div key={item.title} className="border-t border-border pt-5 min-w-0"><h3 className="font-display text-xl font-semibold text-foreground mb-3 break-words">{item.title}</h3><p className="text-sm text-muted-foreground leading-relaxed break-words">{item.text}</p></div>)}</div>}
    {section.note && <aside className="border-l-2 border-accent pl-5 mt-8 text-sm text-muted-foreground leading-relaxed max-w-3xl">{section.note}</aside>}
   </div>
  </section>)}
  <section className="py-16 border-y border-border"><div className="max-w-6xl mx-auto px-6"><p className="font-mono text-xs text-accent mb-4">{String(project.sections.length + 1).padStart(2, '0')} — TECNOLOGIAS</p><h2 className="font-display text-3xl font-bold mb-8">Uma stack integrada.</h2><ul className="flex flex-wrap gap-2">{project.stack.map(s => <li key={s} className="font-mono text-xs border border-border bg-secondary/40 rounded-md px-3 py-2">{s}</li>)}</ul><Button asChild variant="outline" className="mt-10"><Link to="/" hash="engenharia">Mais projetos<ArrowUpRight aria-hidden="true" /></Link></Button></div></section>
  <Contact />
 </main>;
}
