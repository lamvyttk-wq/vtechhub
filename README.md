# V-TECH HUB — Industry Story Landing Pages

Scroll-driven landing pages (white luxury, frosted glass, brand red as a thin accent) that walk an enterprise buyer from
**real industry pain → matching packaged solution → proof (PoC) → contact**.

No build step. Plain HTML/CSS/ES modules + GSAP/ScrollTrigger + Lenis (vendored in `assets/vendor`); icons are inline SVG (`js/icons.js`).

```bash
python3 -m http.server 8765      # JSON is fetched, so serve over HTTP (not file://)
# http://localhost:8765/                     home + industry index (single page, hash routes)
# http://localhost:8765/#industry-bfsi       story page (bfsi, government, healthcare, retail, manufacturing, logistics, media, education)
# http://localhost:8765/#solution-dlp        product page, links back to the stories it appears in
node build-artifact.mjs                      # -> dist/vtechhub.html, one self-contained file (css/js/data inlined)
```
Deploys as-is to GitHub Pages / any static host.

## How the story works (industry.html)
Hero → "what worries you most?" picker (jumps straight to the matching chapter) → 5 pinned chapters where the
**challenge card dims and the matching answer card resolves as you scroll** → bundle → outcomes → FAQ → PoC → contact.
Mobile and `prefers-reduced-motion` get a non-pinned, readable layout. EN/VI toggle persists. Single white theme.

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

## React artifact build (V-TECH FOUNDRY)
`react/VTechFoundry.jsx` is one self-contained React component (Tailwind core classes + `lucide-react`, no scroll or autoplay motion;
EN/VI driven by one dictionary). Layout: hero + industry switcher, featured AI Agent SuperSales, alliance banner + facts, leadership. It is generated, so edit the sources and rebuild:
- `react/template.jsx`: component code and UI strings (`[en, vi]` pairs)
- `react/overlay.mjs`: hand-authored content (industry stories, images, AI Agent SuperSales, experts, alliance signing photo)
- `data/*.json`: industries, chapters, solutions (shared with the vanilla site)
```bash
npm install
node build-react.mjs   # -> react/VTechFoundry.jsx and dist/vtechfoundry-react.html
```
Every image sits on an SVG circuit-pattern base with a topic illustration for each sector (`SCENES` in `react/template.jsx`) and fades in only once the photo loads, so a blocked or failed URL never shows a broken icon or black void. The signing photo tries
`/images/vpbank-vnetwork-signing.jpg` first. Ms. Hau's profile is `profile: null` in `react/overlay.mjs`: paste her existing role, bio and photo there.
