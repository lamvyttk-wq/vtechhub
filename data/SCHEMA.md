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
      }
    }
  ],

  "outcomes": [ { "title": {..}, "body": {..} } ],   // exactly 3 "why choose V-Tech Hub"
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
  it comes from the V-Tech Hub / VNETWORK material or a cited public source; otherwise omit `metric`/`stat`.
- Prefer existing solution ids; add `newSolutions` only for products VNETWORK / V-Tech Hub really sells.
- Vietnamese copy must be natural business Vietnamese (not literal translation); cite Vietnamese regulation by its real name.
- Tone: enterprise decision-maker (CIO/CTO/CFO): outcome and risk first, no jargon dumps.
