# MAVE Molecular Cosmetics — project context

Single-page store for MAVE Molecular Cosmetics. The whole app lives in `index.html`
(React 18 + framer-motion 6, JSX compiled in the browser via Babel Standalone).
`vercel.json` rewrites SPA routes to `/index.html`.

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
- Prices display in euro. Demo persona: Alessandra Rossi (Riga, Latvia).
- Keep `mave-store.html` out of new work — `index.html` is canonical.
