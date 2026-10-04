---
name: portfolio-implement
description: Implements and extends the Umer Afzal Astro portfolio (static site, GitHub Pages). Use when scaffolding, adding pages, components, deployment workflow, SEO, or design system work on this repository.
---

# Portfolio implementation

## Before coding

1. Read `AGENTS.md` and `docs/architecture.md`.
2. Inspect repo: existing Astro config, collections, workflows.

## Build order

1. `src/config/site.ts`, data modules (`experience`, `focus`, `improvements`)
2. `src/content.config.ts` + seed MDX
3. `src/styles/global.css` tokens + Tailwind
4. Layouts (Base, SEO partial)
5. Components listed in architecture.md
6. Pages per route table
7. `@astrojs/sitemap`, `robots.txt`, favicon, manifest
8. `.github/workflows/deploy.yml`, `public/CNAME`

## Quality gate

```bash
npm run check
npm run build
```

Fix all errors before finishing. Do not claim GitHub Pages is live unless deploy was run.

## JS policy

Theme toggle + optional mobile nav only. No filter UI libraries.

## Deliverable summary

Report: built scope, architecture choices, local run, deploy steps, placeholders Umer must fill, assumptions, limitations.
