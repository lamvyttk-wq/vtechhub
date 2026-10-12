# V-TECH FOUNDRY — Industry Story Landing Pages

Scroll-driven landing pages (white luxury, frosted glass, brand red as a thin accent) that walk an enterprise buyer from
**real industry pain → matching packaged solution → proof (PoC) → contact**.

No build step, no libraries. Plain HTML/CSS/ES modules; icons are inline SVG (`js/icons.js`).

```bash
python3 -m http.server 8765      # JSON is fetched, so serve over HTTP (not file://)
# http://localhost:8765/                     home + industry index (single page, hash routes)
# http://localhost:8765/#industry-bfsi       story page (bfsi, government, healthcare, retail, manufacturing, logistics, media, education)
# http://localhost:8765/#solution-dlp        product page, links back to the stories it appears in
node build-artifact.mjs                      # -> dist/vtechhub.html, one self-contained file (css/js/data inlined)
```
Deploys as-is to GitHub Pages / any static host.

## Motion model (modelled on apple.com/macbook-pro)
Native scrolling only: no smooth-scroll library, no pinned scenes, no scroll-scrubbed animation, no parallax.
Instead (all in `js/app.js` + the motion block at the end of `css/styles.css`):
- **Reveal once** — `.rv` elements fade/rise the first time they enter the viewport (IntersectionObserver, short stagger).
- **Chapter sequence** — each story chapter plays a timed sequence on entry: challenge → bridge draws → answer resolves from blur → points → metric counts up.
- **Sticky local nav** (industry pages) — Overview · Key challenges · Solutions · Why · FAQ, active section underlined, CTA on the right.
- **FAQ** — accordion height eases open/closed.
- `prefers-reduced-motion` disables all of it; content is fully readable without JS motion.

## How the industry page reads
Modelled on the information flow of enterprise-services pages (overview -> proof -> offering -> why us -> approach -> people -> FAQ -> other sectors), not on their look:
sticky local nav -> hero + illustrated banner -> **Overview** (who we are for you + 4 proof points taken from the site's own copy: challenges, solutions, 14-day PoC, 1-day reply)
-> **Challenges** (picker + 5 timed challenge/answer chapters) -> **Solutions** (image cards) -> **Why us** -> **Approach** (problem, answer, proof + PoC CTA)
-> **Experts** -> **FAQ** -> **Other industries** -> contact. EN/VI toggle persists. Single white theme.

## Look & feel
- Typeface: **Be Vietnam Pro** (single family, bold headings) to match vnetwork.vn's geometric sans; brand red `#e32f1e` sampled from vnetwork.vn. Both are CSS variables at the top of `css/styles.css`. The font match is visual, not read from VNETWORK's stylesheet: confirm against their site and swap `--sans` if needed.
- Illustrations: `js/art.js` draws original SVG art in VNETWORK's visual style (white server stacks with red bands, red glass tiles): hero scenes, one wide banner per industry (8 hand-drawn motifs, chips use the package's solution icons) and solution/industry thumbnails. No image files, no network. Replace with official VNETWORK artwork by swapping the `art()` calls in `js/app.js`.
- Supplied photos (`assets/photos/`, cropped from the client's screenshots, inlined as data URIs in the single-file build): circuit board -> Database Security, CDN; engineers -> Manufacturing; container port -> Logistics; operating room -> Healthcare; training room -> Education and AI Legal. Mapping lives in `heroByIndustry` (top banner: Manufacturing, Logistics), `byIndustry` and `bySolution` in `data/images.json`.
- Photography: `data/images.json` lists photo slots (skyline hero, collaboration, dashboard, data centre, conference, control room, learning, port) with candidate Unsplash URLs, bilingual alt/caption, and which slot each industry/solution uses. Each photo sits on an always-rendered fallback (mesh gradient + pattern + icon, or the illustrated scene), stays transparent until it loads, tries the next candidate on error and is removed if all fail, so no broken-image icon or empty frame can appear. The hero uses the "radiant aura" frame (amber/red/blue blur + `rounded-2xl` bordered image). **Photo URLs have not been verified from the build sandbox (no access to Unsplash): run `node tools/verify-images.mjs` with internet access and swap any failing `photo-...` id for one you have checked on unsplash.com.**
- Experts: `data/experts.json` (3 cards, EN/VI). Photos go in `assets/experts/` and are referenced by `photo`; `null` shows a neutral avatar. **Phan Thi My Hau has no role/bio yet** (card shows "Speaker"/"Diễn giả" only).

## Editing content (no code)
- `data/industries/<id>.json` — one story per industry. Schema + rules in `data/SCHEMA.md`.
- `data/solutions.json` — shared product catalog (industries may add `newSolutions`).
- `data/ui.json` — all interface strings (EN/VI).
- `data/experts.json` — speaker cards.
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
