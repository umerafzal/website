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
    role: 'Senior iOS Engineer',
    location: 'Berlin, Germany',
    start: 'Jul 2023',
    end: 'Present',
    technologies: ['iOS', 'Swift', 'React Native', 'Referrals', 'Mobile architecture'],
    summary:
      'Native iOS and React Native work on a global consumer food platform — referral-related features, cross-brand parity on RN surfaces, and day-to-day delivery with product and design partners.',
  },
  {
    company: 'DeliveryHero (foodpanda)',
    role: 'iOS Engineer',
    location: 'Singapore',
    start: 'Nov 2021',
    end: 'Jul 2023',
    technologies: ['iOS', 'Swift', 'Wallet', 'Payments UX', 'Widgets'],
    summary:
      'iOS engineering on the consumer app with emphasis on wallet and digital payments — security-minded UX (including biometrics where appropriate), widgets, and maintainable module structure.',
  },
  {
    company: 'Digitify',
    role: 'Senior iOS Engineer',
    location: 'Lahore, Pakistan',
    start: 'Mar 2021',
    end: 'Oct 2021',
    technologies: ['iOS', 'Swift', 'RxSwift', 'MVVM', 'FinTech'],
    summary:
      'FinTech iOS delivery: new features, architecture for B2B banking flows, dependency injection, and close collaboration with product and business stakeholders.',
  },
  {
    company: 'Jeeny',
    role: 'Lead iOS Engineer',
    location: 'Lahore, Pakistan',
    start: 'Jan 2018',
    end: 'Mar 2021',
    technologies: ['iOS', 'Swift', 'Objective-C', 'Modularization', 'CI/CD'],
    summary:
      'Ride-hailing and on-demand services — led customer app modernization (Objective-C toward Swift, modular architecture), driver app core features, CI/CD, reviews, and mentoring across the iOS team.',
  },
  {
    company: 'Nutright',
    role: 'iOS Engineer',
    location: 'Lahore, Pakistan',
    start: 'Mar 2017',
    end: 'Dec 2017',
    technologies: ['iOS', 'Swift', 'Firebase'],
    summary: 'Built the Nutright health and fitness iOS app from scratch.',
  },
  {
    company: 'Metikulous',
    role: 'iOS Engineer',
    location: 'Lahore, Pakistan',
    start: 'Aug 2014',
    end: 'Mar 2017',
    technologies: ['iOS', 'Swift', 'Objective-C'],
    summary:
      'Early-career iOS work across education, social, and payments-adjacent apps — feature delivery from Objective-C through Swift.',
  },
];
