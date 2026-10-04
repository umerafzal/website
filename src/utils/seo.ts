import { siteConfig } from '@/config/site';

export function absoluteUrl(path: string) {
  const base = siteConfig.url.replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}`;
}

export function pageTitle(page?: string) {
  if (!page) return `${siteConfig.name} — ${siteConfig.role}`;
  return `${page} — ${siteConfig.name}`;
}
