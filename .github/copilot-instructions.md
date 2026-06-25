# Copilot Instructions — Schreinerei Hach

Static website for a German carpentry business. Pure HTML5/CSS3/vanilla JS — no build tools, no npm, no frameworks.

## Key Facts
- **Language**: German (all copy is in German)
- **Workflow**: edit → save → reload in browser. No build step.
- **Single CSS file**: `assets/styles/styles.css` — all styles go here
- **Homepage sections**: `#start` · `#leistungen` · `#projekte` · `#referenzen` · `#kontakt`

## Design Tokens (`:root` in CSS)
- Primary color: `#484d4a` (dark gray)
- Accent color: `#c89d66` (gold/bronze)
- Font: Inter (Google Fonts CDN)
- Mobile breakpoint: `768px`

## Hard Rules
- Hamburger menu is pure CSS (checkbox pattern) — do not add JS for it
- Lightbox script lives inline at the bottom of `index.html` — keep it there
- `impressum.html` and `datenschutz.html` are legally required — never delete them
- No external JS libraries unless absolutely necessary

See `CLAUDE.md` at repo root for full context.
