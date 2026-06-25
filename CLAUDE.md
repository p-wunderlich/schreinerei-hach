# Schreinerei Hach — Project Context

## Project
Static website for **Schreinerei Hach** ("Tischler Tobi"), a German carpentry/joinery business.
Language: German. Audience: local customers looking for handcrafted woodwork.

## Stack
Pure HTML5 · CSS3 · vanilla JS — **no build tools, no npm, no frameworks**.
Workflow: edit a file → save → reload in browser. That's it.

## File Map
```
index.html                  # Homepage
projekt-*.html              # Static project detail pages
impressum.html              # Legal notice (Pflicht nach deutschem Recht)
datenschutz.html            # Privacy policy (Pflicht nach deutschem Recht)
assets/styles/styles.css    # All styles (single file)
assets/scripts/lightbox.js  # Shared image lightbox behavior
assets/images/              # logo.png, logo.svg, project photos (PXL_*.jpg)
```

Homepage sections (by anchor): `#start` · `#leistungen` · `#projekte` · `#kontakt`

## Design Tokens (CSS custom properties in `:root`)
| Variable | Value | Use |
|---|---|---|
| `--color-primary` | `#484d4a` | Dark gray — text, header bg |
| `--color-accent` | `#c89d66` | Gold/bronze — highlights, buttons |
| Font | Inter (Google Fonts CDN) | All body text |
| Breakpoint | `768px` | Mobile ↔ desktop |

## Conventions & Gotchas
- **Hamburger menu**: pure CSS checkbox hack — no JS involved, don't add any
- **Lightbox**: shared vanilla JS in `assets/scripts/lightbox.js`
- **All CSS** lives in `assets/styles/styles.css`; no inline styles, no scoped styles
- **Impressum + Datenschutz** are legally mandatory in Germany — never remove or rename these pages
- Placeholder legal data (Musterstrasse, VAT ID) needs to be replaced with real business info before going live

## What Good Looks Like
- Semantic HTML5, `lang="de"`, proper `alt` on images
- Mobile-first: styles default to mobile, override at `@media (min-width: 768px)`
- Zero external JS libraries — keep it that way unless there's a strong reason
