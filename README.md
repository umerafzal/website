# umerafzal.dev

Static portfolio for Umer Afzal — Astro, TypeScript, Tailwind CSS, GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Commands

| Command | Action |
| --- | --- |
| `npm run dev` | Start dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run check` | Astro + TypeScript check |

## Configuration

- Site URLs and social links: `src/config/site.ts`
- Experience, focus, improvements: `src/data/`
- Projects and writing: `src/content/`

## Deploy (GitHub Pages)

1. Push to `main` on `umerafzal/website`.
2. Repository **Settings → Pages**: source **GitHub Actions**.
3. DNS: `CNAME` for `umerafzal.dev` → GitHub Pages (see GitHub docs).
4. `public/CNAME` is already set to `umerafzal.dev`.

Workflow: `.github/workflows/deploy.yml` (Node 22 on CI).

**If deploy fails:** In repo **Settings → Pages**, set **Source** to **GitHub Actions** (not “Deploy from a branch”). Re-run the workflow from the **Actions** tab. Live site: `https://umerafzal.github.io/website/`

## Agent docs

See [AGENTS.md](AGENTS.md) and [docs/architecture.md](docs/architecture.md).
