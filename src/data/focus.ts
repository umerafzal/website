export type FocusArea = {
  title: string;
  description: string;
  technologies: string[];
};

export const focusAreas: FocusArea[] = [
  {
    title: 'Mobile Engineering',
    description: 'Shipping and maintaining consumer mobile products at scale.',
    technologies: ['iOS', 'Swift', 'React Native', 'TypeScript'],
  },
  {
    title: 'Architecture',
    description: 'Modularization, migrations, and structures that teams can extend safely.',
    technologies: ['Modularization', 'Migrations', 'Scalable mobile architecture'],
  },
  {
    title: 'Reliability',
    description: 'Sessions, errors, and visibility so production issues are understandable.',
    technologies: ['Authentication', 'Session management', 'Observability', 'Error handling'],
  },
  {
    title: 'Developer Experience',
    description: 'Tooling and workflows that reduce friction for mobile engineers.',
    technologies: ['Tooling', 'Automation', 'Engineering productivity'],
  },
  {
    title: 'AI & Intelligent Systems',
    description: 'Exploring on-device and mobile-adjacent AI, agents, and intelligent apps.',
    technologies: ['On-device AI', 'Mobile AI infrastructure', 'Agents', 'RAG'],
  },
];
