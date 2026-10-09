# V-TECH FOUNDRY — Industry Story Landing Pages

Scroll-driven landing pages (white luxury, frosted glass, brand red as a thin accent) that walk an enterprise buyer from
**real industry pain → matching packaged solution → proof (PoC) → contact**.

No build step. Plain HTML/CSS/ES modules + GSAP/ScrollTrigger (vendored in `assets/vendor`); icons are inline SVG (`js/icons.js`).

```bash
python3 -m http.server 8765      # JSON is fetched, so serve over HTTP (not file://)
# http://localhost:8765/                     home + industry index (single page, hash routes)
# http://localhost:8765/#industry-bfsi       story page (bfsi, government, healthcare, retail, manufacturing, logistics, media, education)
# http://localhost:8765/#solution-dlp        product page, links back to the stories it appears in
node build-artifact.mjs                      # -> dist/vtechhub.html, one self-contained file (css/js/data inlined)
```
Deploys as-is to GitHub Pages / any static host.

## How the story works
Hero ("which one sounds like you?" persona match, jumps straight to that chapter) -> why now -> 5 pinned chapters -> resolved
bundle -> outcomes -> FAQ -> PoC -> contact. In every chapter the left column reads **challenge -> the moment -> answer** in one
place (the text crossfades), while the right column plays a **scroll-scrubbed scene**: the problem happens, the solution steps in,
the problem is stopped (`js/scenes.js`: gate, mask, perimeter, scan, wave). The contact form always knows which chapter sent the
visitor ("You were reading..."), and a floating "Talk to an expert" button follows the visitor until the contact section.
Header: a mega-menu grouped by industry; hovering an industry shows its packaged solutions. Solution pages loop the same scene.
Mobile and `prefers-reduced-motion` get a non-pinned layout (reduced motion shows every scene in its resolved state). EN/VI toggle persists.

## Design system, motion and performance
- **Type**: Plus Jakarta Sans (headlines, 800) + Inter (reading, 400-700), both with native Vietnamese subsets. No serifs, no italics, no clipping masks on text,
  headline line-height 1.12 so stacked diacritics never collide. Accent words use a red-to-coral gradient (`.display em`). Tokens live at the top of `css/styles.css`.
- **Scroll is native**: no scroll hijacking (Lenis removed). The industry story is a pinned, scrubbed sequence that advances only as the visitor scrolls
  (challenge -> scene plays -> answer). There is no auto-play and no forced scrolling.
- **Quick view** (opt-in): "Quick view / Xem nhanh" opens a carousel of the chapters. Swiping is native `scroll-snap`; Prev/Next, dots, arrow keys and Esc also work; focus is trapped
  and restored. Each slide's scene plays once when it appears. Nothing moves on its own.
- **Micro-interactions** (transform/opacity only): 22px fade-rise on scroll (`.rv`, IntersectionObserver, class dropped after it plays so hover works), cards lift `translateY(-4px)`
  with a soft shadow on hover (hover-capable devices only), buttons and cards scale to `.98` when pressed. No backdrop blur, no filter blur, nothing that reflows (the sector
  explorer is a master list + cross-fading detail, not a resizing accordion).
- **Mobile first**: verified with zero horizontal overflow at 300/320/360/390/414px in EN and VI; 44px touch targets; bottom-sheet quick view; phones get a non-pinned layout where
  each scene plays once as it scrolls into view. `ScrollTrigger` ignores address-bar resizes.
- **Reduced motion**: pins, reveals, word animation, marquee and scene timelines are all off; scenes show their resolved state.
- **Performance** (software-rendered browser, so read the ratios): scrolling through chapters holds 60fps (p95 16.7ms; the build before the paint fixes averaged 123ms). Layout is measured after first
  paint, never per scroll frame; infinite CSS animations pause offscreen; a frame-time governor switches to `html.lite` (decorative animation off) on slow devices and remembers it (`vth-lite`).
- Debugging a regression: inject a style that disables one effect and watch frame times; do not add `filter: blur()` or `backdrop-filter` to anything that moves or scrolls.

## Editing content (no code)
- `data/industries/<id>.json` — one story per industry. Schema + rules in `data/SCHEMA.md` (incl. `scenario` + `scene` per chapter).
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
- `scenario` lines and scene labels in the 7 non-BFSI industries are illustrative drafts written for this build (no figures). Chapters whose
  first solution does not match their theme reuse that solution's scene on purpose: review compliance/sovereignty chapters
  (government `compliance`, healthcare `sovereignty`, education `budget-sovereignty`, logistics `uptime`, manufacturing `audit`).
- Confirm the Zalo link and the `Terms`/`Privacy` URLs.
