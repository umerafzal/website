# Architecture and implementation plan

This document is the source of truth for how the portfolio is structured. Agents must follow it before changing code.

## Product intent

The site is a **premium engineering portfolio** for Umer Afzal, a Berlin-based Senior Mobile Engineer. It should communicate work, technical judgment, and what he is building next — not a résumé pasted onto a webpage.

Primary message:

> Umer is a senior engineer who improves complex mobile systems, builds products, and is moving deeper into AI and intelligent software.

Audience: engineering managers, staff+ engineers, CTOs, recruiters, collaborators, founders.

## Stack (locked)

| Layer | Choice |
| --- | --- |
| Framework | Astro, static output only |
| Language | TypeScript, strict |
| Styles | Tailwind CSS + CSS custom properties |
| Content | Markdown / MDX via Astro content collections |
| Hosting | GitHub Pages + custom domain `https://umerafzal.dev` |
| Deploy | GitHub Actions |

Do **not** add: backend, database, CMS, auth, analytics (unless explicitly requested; prefer Plausible), extra JS libraries, animation libraries.

## Site config

Mutable facts live in `src/config/site.ts` (name, role, location, social URLs, email). Never hard-code social URLs in components. Missing URLs stay as empty strings or `TODO` placeholders in that config file only.

Astro `site` is `https://umerafzal.dev`. `base` is `/`. Do not set a GitHub project-pages base path.

## Routes

| Path | Purpose |
| --- | --- |
| `/` | Hero, selected work, engineering focus, things improved, experience |
| `/about` | Biography, interests, current exploration |
| `/projects` | All projects; filter via query-less links: `/projects`, `/projects/commercial`, `/projects/personal`, `/projects/experiments` |
| `/projects/[slug]` | Case study |
| `/lab` | Experiments only (more exploratory tone) |
| `/writing` | Article index |
| `/writing/[slug]` | Article |

Do not add extra marketing pages.

## Content model

Collections:

- `src/content/projects/*.mdx` — commercial, personal, and experiment work
- `src/content/writing/*.mdx` — articles
- `src/content.config.ts` — Zod schemas

Project types: `commercial` | `personal` | `experiment`

Project status: `idea` | `prototype` | `mvp` | `active` | `shipped` | `archived`

Featured homepage projects: `featured: true` and not `draft`.

Experience is data in `src/data/experience.ts`, not invented in templates.

Improvements (“Things I’ve improved”) live in `src/data/improvements.ts`.

Engineering focus areas live in `src/data/focus.ts`.

## Commercial case studies

Optional MDX sections (omit unused ones): Overview, Role, Context, Problem, Approach, Engineering challenges, Architecture, My contribution, Impact, Technologies, Lessons learned.

Always keep commercial writing at a non-confidential abstraction. A short, visually quiet confidentiality note is allowed on commercial pages.

## Design system

- Default: dark. Also support light. Theme toggle; persist in `localStorage`; honor `prefers-color-scheme` on first visit.
- Fonts (two only): Inter (UI) + JetBrains Mono (meta, tags, code). Self-host via `@fontsource`.
- Visual language: typography, spacing, hairline borders, restrained accent. No blobs, heavy glass, stock illustrations, fake metrics.
- Motion: short fade/slide; hover on cards; respect `prefers-reduced-motion`.
- Mobile-first; semantic HTML; visible focus; WCAG-oriented contrast.

Tokens live in `src/styles/global.css` as CSS variables (`--bg`, `--fg`, `--muted`, `--border`, `--accent`).

## JavaScript policy

Static HTML by default. Islands only for:

- Theme toggle
- Mobile nav open/close if CSS-only is insufficient

Project filtering uses **static category routes**, not client JS.

## SEO

Every page: unique title, description, canonical, Open Graph, Twitter card. Homepage: Person JSON-LD. Include sitemap and robots.txt. No keyword stuffing.

## Deployment

- Workflow: `.github/workflows/deploy.yml` → builds `dist/`, pushes to `gh-pages` via `peaceiris/actions-gh-pages`
- GitHub Pages source: branch `gh-pages`, folder `/ (root)`
- Repo **Settings → Actions → Workflow permissions**: Read and write
- Project URL: `https://umerafzal.github.io/website/` (`base: '/website/'` in Astro)
- Do not claim a live deploy unless it was actually run

## Implementation order for agents

1. Read `AGENTS.md` and this file
2. Change data/content before inventing UI copy
3. Keep components small and presentational
4. Run `npm run check` and `npm run build`
5. Verify key routes in the browser when UI changed
