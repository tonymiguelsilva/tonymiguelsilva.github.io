import { createFileRoute } from '@tanstack/react-router';
import { EngineeringCasePage } from '@/components/portfolio/EngineeringCasePage';
import { cloudCase } from '@/lib/engineering-cases';

export const Route = createFileRoute('/projetos/cloud-gcp')({
 head: () => ({ meta: [
  { title: cloudCase.title + ' | Tony Miguel' },
  { name: 'description', content: cloudCase.summary },
  { property: 'og:title', content: cloudCase.title + ' | Tony Miguel' },
  { property: 'og:description', content: cloudCase.summary },
  { property: 'og:type', content: 'article' },
  { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: CasePage,
});

function CasePage() { return <EngineeringCasePage project={cloudCase} />; }
