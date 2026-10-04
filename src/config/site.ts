export const siteConfig = {
  name: 'Umer Afzal',
  role: 'Senior Mobile Engineer',
  location: 'Berlin, Germany',
  headline:
    'Senior Mobile Engineer building reliable products and exploring AI.',
  bio: 'Umer is a senior software engineer with 10+ years of experience building mobile products, working across iOS, React Native, TypeScript and modern mobile infrastructure.',
  url: 'https://umerafzal.github.io/website',
  email: '', // TODO: add contact email
  social: {
    github: '', // TODO: e.g. https://github.com/umerafzal
    linkedin: '', // TODO: e.g. https://www.linkedin.com/in/...
  },
} as const;

export type SiteConfig = typeof siteConfig;
