import { createFileRoute } from '@tanstack/react-router';
import { EngineeringCasePage } from '@/components/portfolio/EngineeringCasePage';
import { localCase } from '@/lib/engineering-cases';

export const Route = createFileRoute('/projetos/arquitetura-local-dw')({
 head: () => ({ meta: [
  { title: localCase.title + ' | Tony Miguel' },
  { name: 'description', content: localCase.summary },
  { property: 'og:title', content: localCase.title + ' | Tony Miguel' },
  { property: 'og:description', content: localCase.summary },
  { property: 'og:type', content: 'article' },
  { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: CasePage,
});

function CasePage() { return <EngineeringCasePage project={localCase} />; }
