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

Live URL (project site, no custom domain): **https://umerafzal.github.io/website/**

### One-time GitHub settings

1. **Settings → Actions → General → Workflow permissions**  
   Choose **Read and write permissions** (required so the workflow can push `gh-pages`).

2. **Settings → Pages → Build and deployment**  
   - **Source:** Deploy from a branch  
   - **Branch:** `gh-pages` / **/(root)**  

3. Push to `main` (or run **Actions → Deploy to GitHub Pages → Run workflow**).

### Notes

- The workflow builds `dist/` and publishes it to the `gh-pages` branch via `peaceiris/actions-gh-pages`.
- **Private repos** need GitHub Pro (or make the repo public) for Pages on the free plan.
- For a custom domain later, add DNS + `public/CNAME` and switch Astro `site` / `base` as needed.

## Agent docs

See [AGENTS.md](AGENTS.md) and [docs/architecture.md](docs/architecture.md).
