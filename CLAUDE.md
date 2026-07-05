# MAVE Molecular Cosmetics — project context

Single-page store for MAVE Molecular Cosmetics. The whole app lives in `index.html`
(React 18 + framer-motion 6). `index.html` is the only source you edit; opening it
directly still works via Babel Standalone, but production is built with
`npm run build` (`scripts/build.mjs`), which precompiles the JSX with esbuild into
`dist/` — Vercel runs this automatically (see `buildCommand` in `vercel.json`).
`vercel.json` also rewrites SPA routes to `/index.html`.

## Brand voice — required reading

Before writing or editing ANY copy (UI text, product pages, marketing blocks,
errors, emails, translations), read `docs/MAVE_BRAND_VOICE.md` and follow it
strictly. Summary: premium, calm, precise, quiet authority. No hype, no emojis,
no exclamation marks, no fake intimacy, no influencer tone. Controlled claims
only ("supports", "helps reinforce" — never "cures", "clinically proven").

## Design skills

Project-level skills live in `.claude/skills/`:

- `impeccable` — design quality/critique/polish system (auto-hook on UI edits
  is configured in `.claude/settings.json`)
- `emil-design-eng` — Emil Kowalski's design-engineering and animation polish
- `ui-ux-pro-max` — UI/UX reference database (styles, palettes, type pairs, UX rules)

Use them for any UI/visual work in this repo.

## Conventions

- Images live in `assets/`; reference them with absolute paths (`/assets/...`)
  so they resolve on nested SPA routes like `/checkout/delivery`.
- Product/scene imagery is stored as WebP (~100KB each). When adding a new
  image, convert to WebP (quality ~80, max width 2000px) before committing.
- Prices display in euro, comma decimals (`€28,95`); parse with `parseEuro`,
  format with `formatEuro`.
- Demo persona: Alessandra Rossi (Riga, Latvia), demo dates in 2026.
- `index.html` is canonical; there is no `mave-store.html` anymore.
