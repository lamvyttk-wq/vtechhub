// node tools/verify-images.mjs  -> checks every candidate in data/images.json (needs internet). Exit 1 if a slot has no working candidate.
import fs from 'fs';
const m = JSON.parse(fs.readFileSync(new URL('../data/images.json', import.meta.url), 'utf8'));
let bad = 0;
for (const [slot, v] of Object.entries(m)) {
  if (!v || !v.src) continue;
  let any = false;
  for (const s of v.src) {
    const url = s.replace('{w}', '800');
    try {
      const r = await fetch(url, { method: 'GET', redirect: 'follow', headers: { Range: 'bytes=0-1023' } });
      const ok = r.ok && /^image\//.test(r.headers.get('content-type') || '');
      console.log(ok ? 'OK  ' : 'FAIL', slot, r.status, r.headers.get('content-type') || '', url);
      any ||= ok;
    } catch (e) { console.log('FAIL', slot, e.message, url); }
  }
  if (!any) { bad++; console.log(`!! ${slot}: no working candidate (UI will show the illustrated fallback)`); }
}
process.exit(bad ? 1 : 0);
