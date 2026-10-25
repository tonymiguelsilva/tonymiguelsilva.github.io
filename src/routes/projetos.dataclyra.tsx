import { createFileRoute } from '@tanstack/react-router';
import { EngineeringCasePage } from '@/components/portfolio/EngineeringCasePage';
import { dataclyraCase } from '@/lib/engineering-cases';

export const Route = createFileRoute('/projetos/dataclyra')({
 head: () => ({ meta: [
  { title: dataclyraCase.title + ' | Tony Miguel' },
  { name: 'description', content: dataclyraCase.summary },
  { property: 'og:title', content: dataclyraCase.title + ' | Tony Miguel' },
  { property: 'og:description', content: dataclyraCase.summary },
  { property: 'og:type', content: 'article' },
  { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: CasePage,
});

function CasePage() { return <EngineeringCasePage project={dataclyraCase} />; }
