export type FocusArea = {
  title: string;
  description: string;
  technologies: string[];
};

export const focusAreas: FocusArea[] = [
  {
    title: 'iOS Engineering',
    description: 'Consumer apps at scale — Swift, UIKit/SwiftUI patterns, and long-lived codebases.',
    technologies: ['iOS', 'Swift', 'Objective-C modernization'],
  },
  {
    title: 'Architecture',
    description: 'Modularization, MVVM/C coordinators, dependency injection, and reviews that keep teams aligned.',
    technologies: ['Modularization', 'MVVM', 'RxSwift', 'React Native integration'],
  },
  {
    title: 'Reliability & quality',
    description: 'Testing, CI/CD, and practices that keep releases predictable.',
    technologies: ['Unit testing', 'CI/CD', 'Code review'],
  },
  {
    title: 'Product domains',
    description: 'Experience across ride-hailing, food delivery, fintech, health, and education products.',
    technologies: ['FinTech', 'Marketplace apps', 'Wallet experiences'],
  },
  {
    title: 'AI & intelligent systems',
    description: 'Exploring on-device and mobile-adjacent AI, agents, and tooling (personal R&D).',
    technologies: ['On-device AI', 'Agents', 'Developer tooling'],
  },
];
