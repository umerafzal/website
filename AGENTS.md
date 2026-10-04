# Agent guide — umerafzal/website

Read this file and [docs/architecture.md](docs/architecture.md) before writing code or content.

## Mission

Build and maintain a **static, premium engineering portfolio** for Umer Afzal (Senior Mobile Engineer, Berlin). The site must feel credible to senior engineers and hiring leaders — not a generic developer template.

## Non-negotiables

- **Stack**: Astro (static), TypeScript (strict), Tailwind CSS, MDX content collections, GitHub Pages at `https://umerafzal.dev`.
- **No**: backend, database, CMS, auth, default analytics, unnecessary dependencies or client JS.
- **Content honesty**: Never invent employers, metrics, features, testimonials, or URLs. Use `src/config/site.ts` and marked placeholders/drafts.
- **Confidentiality**: Commercial case studies stay abstract. No internal URLs, tickets, proprietary diagrams, or private metrics.

## Where things live

| Area | Location |
| --- | --- |
| Site facts (social, email) | `src/config/site.ts` |
| Experience timeline | `src/data/experience.ts` |
| Engineering focus | `src/data/focus.ts` |
| Things improved | `src/data/improvements.ts` |
| Projects | `src/content/projects/*.mdx` + `src/content.config.ts` |
| Writing | `src/content/writing/*.mdx` |
| Layout, SEO | `src/layouts/` |
| UI components | `src/components/` |
| Pages | `src/pages/` |
| Design tokens | `src/styles/global.css` |
| Deploy | `.github/workflows/deploy.yml`, `public/CNAME` |

## Workflow

1. **Plan**: Confirm the change fits architecture.md (routes, content model, JS policy).
2. **Data first**: Update config/data/content before page markup.
3. **Components**: Small, presentational; no hard-coded project cards in pages.
4. **Verify**: `npm run check`, `npm run build`, and `npm run lint` if configured.
5. **UI changes**: Spot-check responsive layout and keyboard focus.

## Skills (project)

Use when relevant:

- `.cursor/skills/portfolio-implement/SKILL.md` — scaffold, features, deploy checklist
- `.cursor/skills/portfolio-content/SKILL.md` — frontmatter, tone, confidentiality

## Rules (project)

Cursor rules under `.cursor/rules/` enforce stack, content, and Astro patterns. They apply automatically when configured.

## Copy tone

Concrete, senior-engineer voice. Avoid “passionate ninja”, fake metrics, and marketing fluff. Prefer: reliability, architecture, systems improvement, mobile + AI exploration.

## Definition of done

- Builds cleanly on CI path (static `dist/`).
- New/changed pages have SEO metadata.
- Accessibility: semantic HTML, focus states, reduced motion.
- Summary for the user: what changed, what Umer must still fill in, assumptions.
