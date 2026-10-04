export type ExperienceEntry = {
  company: string;
  role: string;
  location?: string;
  start: string;
  end: string | 'Present';
  technologies: string[];
  summary: string;
};

export const experience: ExperienceEntry[] = [
  {
    company: 'HelloFresh',
    role: 'Senior Mobile Engineer',
    location: 'Berlin, Germany',
    start: '2023',
    end: 'Present',
    technologies: [
      'iOS',
      'Swift',
      'React Native',
      'TypeScript',
      'JavaScript',
      'Mobile architecture',
      'Observability',
    ],
    summary:
      'Working on large-scale consumer mobile products: architecture, cross-platform integration, reliability, and observability across native and React Native surfaces.',
  },
  {
    company: 'foodpanda',
    role: 'Senior iOS Engineer',
    start: '2021',
    end: '2023',
    technologies: [
      'iOS',
      'Swift',
      'Consumer applications',
      'Wallet / payments-related mobile experiences',
      'Mobile architecture',
    ],
    summary:
      'Built and evolved iOS features for a high-traffic consumer app, with focus on wallet-related experiences and sustainable mobile architecture.',
  },
];
