/** Internal URL with Astro `base` (GitHub Pages project site: `/website/`). */
export function href(path: string): string {
  const base = import.meta.env.BASE_URL;
  if (path === '/') return base;
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${normalized}`;
}

/** Pathname without deploy base, for nav active state. */
export function pathnameWithoutBase(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (base && pathname.startsWith(base)) {
    const rest = pathname.slice(base.length);
    return rest.startsWith('/') ? rest : `/${rest}`;
  }
  return pathname;
}
