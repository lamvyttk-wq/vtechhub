# Industry story schema (data/industries/<id>.json)

All user-facing strings are bilingual objects: `{ "en": "...", "vi": "..." }`.

```jsonc
{
  "id": "bfsi",                      // url: industry.html?i=bfsi
  "order": 1,
  "icon": "landmark",                // a lucide icon name
  "name":  { "en": "...", "vi": "..." },        // short name for menu/cards, e.g. "Healthcare"
  "title": { "en": "...", "vi": "..." },        // full hero title
  "tagline": { "en": "...", "vi": "..." },      // one-line bundle summary under hero title
  "bundle": ["email-security", "..."],          // solution ids in the integrated package

  "challengesIntro": { "en": "...", "vi": "..." },   // 2-3 sentences, the "why now"

  // THE STORY: 4-5 chapters. Each chapter = one real customer pain matched to its answer.
  "chapters": [
    {
      "id": "phishing",
      "persona": { "en": "Head of IT Security", "vi": "..." },   // who feels this pain
      "challenge": {
        "title": { "en": "...", "vi": "..." },
        "body":  { "en": "...", "vi": "..." },     // 2-3 sentences, concrete scenario
        "stat":  { "value": "...", "label": {"en":"","vi":""}, "source": "url", "verify": false } // OPTIONAL, only if sourced
      },
      "solutions": ["email-security"],             // ids from solutions registry
      "response": {
        "title": { "en": "...", "vi": "..." },
        "body":  { "en": "...", "vi": "..." },
        "points": [ { "en": "...", "vi": "..." } ], // 3 short bullets, how it works
        "metric": { "value": "42%", "label": {"en":"","vi":""} }  // OPTIONAL, only vendor-supplied/sourced
      },

      // THE PICTURE (both optional; see "Scenes" below). Without them the chapter still works: the scene
      // falls back to the default for the first solution's kind, using generic labels from data/ui.json.
      "scenario": { "en": "...", "vi": "..." },     // ONE sentence, present tense: the concrete moment the persona lives
      "scene": { "kind": "gate", ... }
    }
  ],

  "outcomes": [ { "title": {..}, "body": {..} } ],   // exactly 3 "why choose V-Tech Foundry"
  "faq": [ { "q": {..}, "a": {..} } ],               // 3-4 items
  "regulations": ["Decree 13", "PCI DSS"],           // optional chips shown in hero
  "newSolutions": [ /* solution objects (see below) only for ids NOT in data/solutions.json */ ],
  "sources": ["https://..."]                         // research references (not rendered)
}
```

## Solution object (data/solutions.json, or `newSolutions`)
```jsonc
{ "id": "dlp", "icon": "shield-check", "name": "Data Loss Prevention",
  "tagline": {"en":"","vi":""}, "description": {"en":"","vi":""} }
```

## Rules
- Do NOT invent product metrics, certifications, customers or percentages. Use a number only if
  it comes from the V-Tech Foundry / VNETWORK material or a cited public source; otherwise omit `metric`/`stat`.
- Prefer existing solution ids; add `newSolutions` only for products VNETWORK / V-Tech Foundry really sells.
- Vietnamese copy must be natural business Vietnamese (not literal translation); cite Vietnamese regulation by its real name.
- Tone: enterprise decision-maker (CIO/CTO/CFO): outcome and risk first, no jargon dumps.

## Scenes (the animated picture beside each chapter)
Every chapter plays a scroll-scrubbed explainer: the problem happens, the solution steps in, the problem is stopped.
`scene.kind` picks the animation; every other field is a label that overrides the default in `data/ui.json > scenes.<kind>`.
All labels are bilingual objects `{en, vi}`, short (limits below are hard: longer text overflows the drawing).
Sample strings are illustrative, NOT claims: no real names, numbers, customers or percentages.

| kind | tells the story of | fields (all optional except kind) |
|---|---|---|
| `gate` | a stream of items hits a shield; the bad ones are blocked, the good ones get through (email security, WAF, bots, fraud requests, hosting/availability) | `dest` (the protected place, ≤22 chars) · `src` (where traffic comes from, ≤22) · `bad` ×3 and `good` ×3 (item labels, ≤24 chars each) · `before`/`after` (status chips, ≤12) |
| `mask` | a privileged user queries a table; sensitive values get masked and the query is controlled (database security) | `table` (≤26) · `actor` (≤22) · `query` (a SQL-ish string, ≤14) · `approved` (≤22) · `rows` ×4 `{k:{en,vi} ≤14, v:"sample value", s:1 if sensitive}` — three rows should be `s:1` · `before`/`after` |
| `perimeter` | data tries to leave through channels; a ring closes around it (DLP, leaks, IP theft) | `asset` (what leaks, ≤24) · `channels` ×3 `{en,vi,icon}` (≤18 chars; icon one of `message-circle` `mail` `hard-drive` `send` `globe`) · `before`/`after` |
| `scan` | a stack of documents is reviewed slowly, then an AI scan flags the risky clauses (AI legal / compliance) | `doc` (document title, ≤22) · `flags` ×3 (risky-clause labels, ≤18) · `timeBefore`/`timeAfter` (≤10, e.g. Days / Minutes) · `perDoc` (≤22) · `before`/`after` |
| `wave` | a traffic spike overloads the service; the edge absorbs it and the line goes flat (DDoS, CDN, peak load) | `capacity` (≤12) · `down` (the failure label, ≤16) · `edge` (≤40) · `before`/`after` |

`scenario` rules: one sentence, present tense, starts from a time or a situation ("Monday, 08:47. ..."), names the
person's pressure, no figures, no brand claims. It must match the chapter's persona and challenge.
