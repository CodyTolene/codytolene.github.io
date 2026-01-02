import { Project } from 'src/app/types';

export const FEATURED_PROJECTS: Project[] = [
  {
    title: 'Pip Terminal',
    role: 'Front-end platform and device tooling',
    description:
      'Pip-Boy.com brings Pip-Boy interfaces to the web with interactive simulations for multiple models. It also includes a companion app for the real Pip-Boy 3000 Mk V using Web Serial to flash firmware, install community apps, manage files, and run device utilities.',
    imageUrl: 'images/projects/pip-terminal_x92.png',
    stack: [
      { label: 'Angular', icon: 'angular' },
      { label: 'TypeScript', icon: 'typescript' },
      { label: 'Firebase', icon: 'firebase' },
      { label: 'Auth', icon: 'fingerprint' },
      { label: 'Espruino', icon: 'espruino' },
      { label: 'Cypress', icon: 'cypress' },
      { label: 'JavaScript', icon: 'javascript' },
      { label: 'CI/CD', icon: 'githubactions' },
    ],
    links: [
      { label: 'Live Site', href: 'https://www.Pip-Boy.com' },
      { label: 'GitHub', href: 'https://github.com/CodyTolene/pip-terminal' },
    ],
  },
  {
    title: 'NewsBeacon',
    role: 'Local news aggregation and community platform',
    description:
      'NewsBeacon.ai aggregates local news and organizes it by county with clean, readable layouts. It adds AI-assisted summaries, tagging, and metadata to improve discovery while keeping source attribution and quality controls.',
    imageUrl: 'images/projects/news-beacon_x92.png',
    stack: [
      { label: 'Angular', icon: 'angular' },
      { label: 'TypeScript', icon: 'typescript' },
      { label: 'Firebase', icon: 'firebase' },
      { label: 'Auth', icon: 'fingerprint' },
      { label: 'AI Integration', icon: 'googlegemini' },
      { label: 'Cypress', icon: 'cypress' },
      { label: 'CI/CD', icon: 'githubactions' },
    ],
    links: [{ label: 'Live Site', href: 'https://www.NewsBeacon.ai' }],
  },
  {
    title: 'Lambda Guru Website',
    role: 'Personal blog and resource website',
    description:
      'Notes on software and building products, with practical write-ups on patterns, tooling, and lessons learned from real projects. It is also the place to buy my devices.',
    imageUrl: 'images/projects/lambda-guru-t_x92.png',
    stack: [
      { label: 'Angular', icon: 'angular' },
      { label: 'TypeScript', icon: 'typescript' },
      { label: 'Google Cloud', icon: 'googlecloud' },
      { label: 'Cypress', icon: 'cypress' },
      { label: 'CI/CD', icon: 'githubactions' },
    ],
    links: [{ label: 'Live Site', href: 'https://www.lambda.guru' }],
  },
  {
    title: 'Pro Angular',
    role: 'Open source Angular tools and resources',
    description:
      'ProAngular provides free Angular components, templates, and guides to help developers ship modern, scalable apps. It also includes starter patterns, tooling notes, and real-world examples that keep projects consistent and maintainable.',
    imageUrl: 'images/projects/pro-angular_x92.png',
    stack: [
      { label: 'Angular', icon: 'angular' },
      { label: 'TypeScript', icon: 'typescript' },
      { label: 'Firebase', icon: 'firebase' },
      { label: 'CI/CD', icon: 'githubactions' },
    ],
    links: [
      { label: 'Live Site', href: 'https://www.ProAngular.com' },
      { label: 'GitHub', href: 'https://github.com/ProAngular' },
    ],
  },
];
