// Original illustrations in the VNETWORK visual language: white "server" stacks with red bands, a red glass badge, soft lavender floor.
// Pure SVG strings (no image assets, no network). scene(kind, iconMarkup, id) -> <svg> markup. `kind`: 'cloud' (home) or 'tile' (industry / solution).
// Gradient ids are prefixed per instance so several scenes can share a page.

function stack(g, cx, base, w, tiers, scale = 1) {
  const rx = w / 2, ry = w * 0.13, bh = 26 * scale, rh = 7 * scale;
  let out = '';
  let y = base;
  for (let i = 0; i < tiers; i++) {
    // red band under each disc
    out += `<rect x="${cx - rx}" y="${y - rh}" width="${w}" height="${rh}" fill="url(#${g}r)"/><ellipse cx="${cx}" cy="${y}" rx="${rx}" ry="${ry}" fill="url(#${g}r)"/>`;
    y -= rh;
    // white disc
    out += `<rect x="${cx - rx}" y="${y - bh}" width="${w}" height="${bh}" fill="url(#${g}w)"/><ellipse cx="${cx}" cy="${y}" rx="${rx}" ry="${ry}" fill="url(#${g}w)"/>`;
    y -= bh;
  }
  out += `<ellipse cx="${cx}" cy="${y}" rx="${rx}" ry="${ry}" fill="url(#${g}t)"/>`;
  return { svg: out, top: y - ry };
}

export function scene(kind, iconMarkup = '', id = 'a') {
  const g = `g${id}`;
  const big = stack(g, 372, 262, 118, 5);
  const mid = stack(g, 214, 282, 92, 4, .92);
  const small = stack(g, 468, 292, 70, 3, .8);
  const badge = kind === 'cloud'
    ? `<g transform="translate(70 46)"><path d="M62 100c-24 0-42-15-42-36 0-19 14-34 33-36 6-18 23-28 43-28 25 0 44 16 47 38 17 3 30 17 30 33 0 18-16 29-36 29z" fill="url(#${g}c)"/>
        <path d="M62 100c-24 0-42-15-42-36 0-19 14-34 33-36" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="2" stroke-linecap="round"/></g>`
    : `<g transform="translate(118 40)"><rect width="128" height="128" rx="34" fill="url(#${g}c)"/>
        <rect x="2" y="2" width="124" height="124" rx="32" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="2"/>
        <g transform="translate(34 34) scale(2.4)" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" color="#fff">${iconMarkup}</g></g>`;
  return `<svg class="art" viewBox="0 0 560 360" role="img" aria-hidden="true" focusable="false">
  <defs>
    <linearGradient id="${g}w" x1="0" x2="1"><stop offset="0" stop-color="#e9ecf8"/><stop offset=".35" stop-color="#fff"/><stop offset=".7" stop-color="#fff"/><stop offset="1" stop-color="#dfe3f3"/></linearGradient>
    <linearGradient id="${g}t" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#f1f3fb"/></linearGradient>
    <linearGradient id="${g}r" x1="0" x2="1"><stop offset="0" stop-color="#c81f12"/><stop offset=".45" stop-color="#f23a26"/><stop offset="1" stop-color="#cf2a1a"/></linearGradient>
    <linearGradient id="${g}c" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#ff6a52"/><stop offset=".55" stop-color="#e32f1e"/><stop offset="1" stop-color="#b3180e"/></linearGradient>
    <radialGradient id="${g}f" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#e7e9f7" stop-opacity="0"/></radialGradient>
    <filter id="${g}s" x="-20%" y="-20%" width="140%" height="160%"><feGaussianBlur stdDeviation="9"/></filter>
  </defs>
  <ellipse cx="290" cy="300" rx="270" ry="52" fill="url(#${g}f)"/>
  <ellipse cx="290" cy="300" rx="226" ry="38" fill="none" stroke="#e32f1e" stroke-opacity=".16" stroke-width="1.5"/>
  <ellipse cx="290" cy="300" rx="170" ry="27" fill="none" stroke="#e32f1e" stroke-opacity=".22" stroke-width="1.5"/>
  <ellipse cx="372" cy="268" rx="70" ry="13" fill="#2a1f50" opacity=".16" filter="url(#${g}s)"/>
  <ellipse cx="214" cy="288" rx="56" ry="11" fill="#2a1f50" opacity=".14" filter="url(#${g}s)"/>
  <path d="M244 200v34M244 234h-30" stroke="#e32f1e" stroke-opacity=".35" stroke-width="1.5" stroke-dasharray="3 5" fill="none"/>
  ${small.svg}${mid.svg}${big.svg}
  <path d="M184 184V150M184 150h0" stroke="#e32f1e" stroke-opacity=".35" stroke-width="1.5" stroke-dasharray="3 5" fill="none"/>
  ${badge}
  <g fill="#fff" stroke="#e32f1e" stroke-opacity=".3"><circle cx="470" cy="116" r="5"/><circle cx="96" cy="250" r="4"/><circle cx="520" cy="196" r="3"/></g>
</svg>`;
}
