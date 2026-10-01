# V-TECH HUB — Industry Story Landing Pages

Scroll-driven landing pages (light luxury + glass, Vnetwork red) that walk an enterprise buyer from
**real industry pain → matching packaged solution → proof (PoC) → contact**.

No build step. Plain HTML/CSS/ES modules + GSAP/ScrollTrigger + Lenis + Lucide (vendored in `assets/vendor`).

```bash
python3 -m http.server 8765      # JSON is fetched, so serve over HTTP (not file://)
# http://localhost:8765/                      home + industry picker
# http://localhost:8765/industry.html?i=bfsi  story page (bfsi, government, healthcare, retail, manufacturing, logistics, media, education)
# http://localhost:8765/solution.html?s=dlp   product page, links back to the stories it appears in
```
Deploys as-is to GitHub Pages / any static host. `?lang=vi` preselects Vietnamese.

## How the story works (industry.html)
Hero → "what worries you most?" picker (jumps straight to the matching chapter) → 5 pinned chapters where the
**challenge card dims and the matching answer card resolves as you scroll** → bundle → outcomes → FAQ → PoC → contact.
Mobile and `prefers-reduced-motion` get a non-pinned, readable layout. EN/VI toggle and light/dark theme persist.

## Editing content (no code)
- `data/industries/<id>.json` — one story per industry. Schema + rules in `data/SCHEMA.md`.
- `data/solutions.json` — shared product catalog (industries may add `newSolutions`).
- `data/ui.json` — all interface strings (EN/VI).
- `js/config.js` — phone, email, Zalo, offices, and **`leadEndpoint`** (form POST target; `null` = log only).
- Brand tokens are CSS variables at the top of `css/styles.css`.

## Content review checklist (before publishing)
- **Only BFSI is from the approved mockup copy.** The other 7 industries are researched drafts (EN + VI).
  Vnetwork.vn could not be reached during research, so nothing below is verified against the product catalog:
  - Products `cdn`, `anti-ddos-waf` (media) and `anti-ddos-cdn`, `web-waf` (retail) are assumed; confirm names/scope and merge the duplicates.
  - Regulation citations (Decree 13/2023, Law on Data 2024, Cybersecurity Law, Decree 85/2016, TCVN 11930...) need a legal check of article numbers and currency.
  - `95%` / `42%` appear only in BFSI/AI Legal (from the mockup); no other metric or customer claim exists.
  - Regulation chips are English-only strings.
- Confirm the Zalo link and the `Terms`/`Privacy` URLs.
