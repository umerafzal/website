export const siteConfig = {
  name: 'Umer Afzal',
  role: 'Senior iOS Engineer',
  location: 'Berlin, Germany',
  headline:
    'Senior iOS engineer building reliable consumer products and exploring mobile AI.',
  bio: 'Senior iOS engineer with more than a decade of experience shipping mobile products — from ride-hailing and health apps to fintech and large-scale consumer brands. Strong focus on Swift, modular architecture, and cross-platform integration where it makes sense.',
  url: 'https://umerafzal.github.io/website',
  email: 'umer.afzal07@gmail.com',
  social: {
    github: '', // Add if you want it shown in the header
    linkedin: 'https://www.linkedin.com/in/umer-afzal',
  },
} as const;

export type SiteConfig = typeof siteConfig;
