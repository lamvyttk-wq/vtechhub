# V-TECH FOUNDRY — Industry Story Landing Pages

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

## How the story works
Hero ("which one sounds like you?" persona match, jumps straight to that chapter) -> why now -> 5 pinned chapters -> resolved
bundle -> outcomes -> FAQ -> PoC -> contact. In every chapter the left column reads **challenge -> the moment -> answer** in one
place (the text crossfades), while the right column plays a **scroll-scrubbed scene**: the problem happens, the solution steps in,
the problem is stopped (`js/scenes.js`: gate, mask, perimeter, scan, wave). The contact form always knows which chapter sent the
visitor ("You were reading..."), and a floating "Talk to an expert" button follows the visitor until the contact section.
Header: a mega-menu grouped by industry; hovering an industry shows its packaged solutions. Solution pages loop the same scene.
Mobile and `prefers-reduced-motion` get a non-pinned layout (reduced motion shows every scene in its resolved state). EN/VI toggle persists.

## Auto-play and performance
- **Auto-play story**: "Watch the story" in the industry hero (or Auto-play in the story bar) scrolls the pinned chapters by itself, slower while
  there is something to read, quicker through the turn, then glides to the bundle and nudges the "Talk to an expert" button. Speed 1x/1.5x/2x.
  Any wheel, touch, key or click takes over instantly. On phones scenes auto-play when they come into view; on the home page the sector explorer
  and the hero demo rotate on their own. All of it is off for `prefers-reduced-motion`.
- **Why it is fast** (measured in a software-rendered browser, so read the ratios, not the numbers; scroll through chapters 1-2):
  frame time 123 ms -> 19 ms, p95 183 ms -> 33 ms (home 146 -> 21 ms). The cost was painting: three `filter: blur(70px)` orbs (~90 ms/frame), backdrop blur on large
  glass (~30 ms), a full-screen grain overlay (~13 ms). Orbs are now pre-softened radial gradients with scroll parallax only; glass blur is 18px;
  grain is gone. Layout is read once per ScrollTrigger refresh (never per scroll frame); the spotlight is rAF-throttled; infinite CSS animations
  pause offscreen; pins/timelines start after the first paint (first paint ~800 -> ~560 ms); SVG pills are measured in one batched pass.
- **Adaptive lite mode**: if a device averages worse than ~28 ms/frame while the visitor scrolls (or Save-Data is on) the page switches to `html.lite`
  (no backdrop/text blur) and remembers it (`vth-lite`). Clear that key to re-evaluate.
- Debugging a regression: toggle effects with an injected style (`.ambient i{filter:none}`, `*{backdrop-filter:none}`) and watch frame times; do not add
  `filter: blur()` to anything that moves or scrolls.

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
