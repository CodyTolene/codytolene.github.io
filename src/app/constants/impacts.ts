import { Impact } from 'src/app/types';

export const IMPACTS: readonly Impact[] = [
  {
    title: 'Modernize legacy apps',
    subtitle: 'Stability first, then speed',
    icon: 'angular',
    bullets: [
      'Incremental migrations that keep production stable',
      'Reduce complexity and remove sharp edges',
      'Use clear patterns and predictable structure',
    ],
  },
  {
    title: 'Ship reliable releases',
    subtitle: 'Pipelines and guardrails',
    icon: 'docker',
    bullets: [
      'CI builds, checks, consistent environments',
      'E2E coverage for critical workflows',
      'Release routines teams trust',
    ],
  },
  {
    title: 'Build clean APIs',
    subtitle: 'Typed contracts and integration',
    icon: 'dotnet',
    bullets: [
      'REST design with pragmatic endpoints',
      'Auth patterns that are easy to reason about',
      'Data access that stays testable and maintainable',
    ],
  },
  {
    title: 'Make UI fast and usable',
    subtitle: 'Performance and accessibility',
    icon: 'cloud',
    bullets: [
      'Responsive layouts with tight feedback loops',
      'Accessibility and Core Web Vitals awareness',
      'Clear component boundaries and state flow',
    ],
  },
];
