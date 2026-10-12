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

/* ------------------------------------------------------------------ industry banner (wide) + solution thumbnail */
const W = 'url(#BW)', R = '#e32f1e', INK = '#1d2140', SOFT = '#dfe3f3';

// one flat-vector motif per industry, drawn around (0,0) = ground centre, growing upward
const MOTIFS = {
  bfsi: () => `<rect x="-160" y="-14" width="320" height="14" rx="3" fill="${W}"/><rect x="-140" y="-28" width="280" height="14" rx="3" fill="${W}"/>
    ${[-110, -55, 0, 55, 110].map((x) => `<rect x="${x - 15}" y="-160" width="30" height="132" rx="4" fill="${W}"/><rect x="${x - 15}" y="-160" width="8" height="132" rx="3" fill="${SOFT}" opacity=".6"/>`).join('')}
    <rect x="-150" y="-176" width="300" height="16" rx="4" fill="${W}"/><path d="M-160-176 0-240 160-176z" fill="${W}"/><circle cx="0" cy="-200" r="14" fill="${R}"/>
    <g fill="${R}"><ellipse cx="205" cy="-6" rx="30" ry="8"/><ellipse cx="205" cy="-16" rx="30" ry="8" fill="#f23a26"/><ellipse cx="205" cy="-26" rx="30" ry="8"/></g>`,
  government: () => `<rect x="-170" y="-90" width="340" height="90" rx="6" fill="${W}"/><rect x="-100" y="-130" width="200" height="40" rx="4" fill="${W}"/>
    <path d="M-62-130a62 62 0 0 1 124 0z" fill="${W}"/><rect x="-6" y="-232" width="12" height="42" rx="4" fill="${W}"/><path d="M6-232h46l-12 14 12 14H6z" fill="${R}"/>
    ${[-130, -90, -50, 50, 90, 130].map((x) => `<rect x="${x - 10}" y="-72" width="20" height="44" rx="4" fill="${SOFT}"/>`).join('')}<rect x="-22" y="-60" width="44" height="60" rx="6" fill="${R}"/>`,
  healthcare: () => `<rect x="-95" y="-215" width="190" height="190" rx="44" fill="${W}"/><rect x="-18" y="-185" width="36" height="130" rx="10" fill="${R}"/><rect x="-65" y="-138" width="130" height="36" rx="10" fill="${R}"/>
    <path d="M-230-40h120l22-46 34 92 28-62 18 16h138" fill="none" stroke="${R}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" opacity=".85"/>`,
  retail: () => `<path d="M-100-8-84-150h168l16 142z" fill="${W}"/><path d="M-56-150v-22a56 56 0 0 1 112 0v22" fill="none" stroke="${R}" stroke-width="10" stroke-linecap="round"/>
    <circle cx="0" cy="-84" r="30" fill="${R}"/><path d="M-12-72 12-96M-12-96h.1M12-72h.1" stroke="#fff" stroke-width="7" stroke-linecap="round"/>
    <path d="M130-8 142-96h62l12 88z" fill="#f23a26"/><path d="M152-96v-14a20 20 0 0 1 40 0v14" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round"/><path d="M-210-8-200-80h50l10 72z" fill="${SOFT}"/>`,
  manufacturing: () => `<rect x="-170" y="-110" width="330" height="110" rx="6" fill="${W}"/><path d="M-170-110v-40l60 40v-40l60 40v-40l60 40v-40l60 40v-40l60 40z" fill="${W}"/>
    <rect x="-120" y="-210" width="30" height="100" fill="${W}"/><rect x="-120" y="-210" width="30" height="14" fill="${R}"/><rect x="-60" y="-190" width="30" height="80" fill="${W}"/><rect x="-60" y="-190" width="30" height="14" fill="${R}"/>
    ${[-130, -80, -30, 20, 70, 120].map((x) => `<rect x="${x}" y="-70" width="26" height="30" rx="4" fill="${SOFT}"/>`).join('')}
    <g transform="translate(215 -70)"><circle r="42" fill="${R}"/>${Array.from({ length: 8 }, (_, i) => `<rect x="-8" y="-54" width="16" height="16" rx="3" fill="${R}" transform="rotate(${i * 45})"/>`).join('')}<circle r="16" fill="#fff"/></g>`,
  logistics: () => `<path d="M-250-30C-170-120-60-130 40-80s190 10 240-70" fill="none" stroke="${R}" stroke-width="3" stroke-dasharray="4 9" stroke-linecap="round" opacity=".6"/>
    <rect x="-170" y="-130" width="210" height="100" rx="10" fill="${W}"/><rect x="-170" y="-84" width="210" height="14" fill="${R}"/><path d="M50-108h52l40 44v34H50z" fill="${W}"/><path d="M62-96h34l24 28H62z" fill="${SOFT}"/>
    ${[-110, 10, 100].map((x) => `<circle cx="${x}" cy="-26" r="22" fill="${INK}"/><circle cx="${x}" cy="-26" r="9" fill="#fff"/>`).join('')}
    <g transform="translate(220 -150)"><path d="M0 62C-26 30-34 14-34 0a34 34 0 0 1 68 0c0 14-8 30-34 62z" fill="${R}"/><circle r="12" cy="0" fill="#fff"/></g>`,
  media: () => `<rect x="-190" y="-230" width="380" height="220" rx="20" fill="${W}"/><rect x="-176" y="-216" width="352" height="192" rx="12" fill="${INK}"/>
    <circle cx="0" cy="-120" r="42" fill="${R}"/><path d="M-12-142 28-120-12-98z" fill="#fff"/><rect x="-12" y="-10" width="24" height="10" fill="${SOFT}"/><rect x="-56" y="-2" width="112" height="6" rx="3" fill="${W}"/>
    ${[-150, -128, -106, -84, 84, 106, 128, 150].map((x, i) => `<rect x="${x - 5}" y="${-40 - [24, 40, 16, 32, 30, 14, 38, 22][i]}" width="10" height="${[24, 40, 16, 32, 30, 14, 38, 22][i]}" rx="5" fill="#f23a26" opacity=".85"/>`).join('')}
    <path d="M214-170a50 50 0 0 1 0 100M234-190a78 78 0 0 1 0 140" fill="none" stroke="${R}" stroke-width="5" stroke-linecap="round" opacity=".7"/>`,
  education: () => `<rect x="-130" y="-40" width="260" height="28" rx="6" fill="${R}"/><rect x="-115" y="-68" width="230" height="28" rx="6" fill="${W}"/><rect x="-100" y="-96" width="200" height="28" rx="6" fill="${SOFT}"/>
    <path d="M-150-150 0-210 150-150 0-90z" fill="${INK}"/><path d="M-80-122v40c0 22 38 34 80 34s80-12 80-34v-40L0-96z" fill="#2c3260"/>
    <path d="M150-150v70" stroke="${R}" stroke-width="6" stroke-linecap="round"/><circle cx="150" cy="-72" r="10" fill="${R}"/>`
};

function chip(icon, x, y, n) {
  return `<g transform="translate(${x} ${y})"><g class="flt f${n}"><rect width="176" height="60" rx="18" fill="#fff" fill-opacity=".88" stroke="#fff"/><circle cx="32" cy="30" r="19" fill="${R}"/>
    <g transform="translate(20 18) scale(1)" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${icon}</g>
    <rect x="62" y="20" width="86" height="9" rx="4.5" fill="${SOFT}"/><rect x="62" y="35" width="58" height="8" rx="4" fill="#eceef8"/></g></g>`;
}

export function banner(industryId, chipIcons = [], id = 'b') {
  const g = `b${id}`;
  const motif = (MOTIFS[industryId] || MOTIFS.bfsi)().replace(/BW/g, `${g}w`);
  const l = stack(g, 232, 330, 76, 4, .9), r = stack(g, 980, 332, 84, 5, .95);
  const ic = (i) => chipIcons[i] || '';
  return `<svg class="art banner-art" viewBox="0 0 1200 380" preserveAspectRatio="xMidYMid slice" role="img" aria-hidden="true" focusable="false">
  <defs>
    <linearGradient id="${g}bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff1ee"/><stop offset=".5" stop-color="#f5f6fd"/><stop offset="1" stop-color="#e6e9fb"/></linearGradient>
    <linearGradient id="${g}w" x1="0" x2="1"><stop offset="0" stop-color="#e6e9f8"/><stop offset=".4" stop-color="#fff"/><stop offset=".75" stop-color="#fff"/><stop offset="1" stop-color="#d9deF2"/></linearGradient>
    <linearGradient id="${g}t" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#f1f3fb"/></linearGradient>
    <linearGradient id="${g}r" x1="0" x2="1"><stop offset="0" stop-color="#c81f12"/><stop offset=".45" stop-color="#f23a26"/><stop offset="1" stop-color="#cf2a1a"/></linearGradient>
    <radialGradient id="${g}ga" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ff9d8a" stop-opacity=".75"/><stop offset="1" stop-color="#ff9d8a" stop-opacity="0"/></radialGradient>
    <radialGradient id="${g}gb" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#9fb2ff" stop-opacity=".7"/><stop offset="1" stop-color="#9fb2ff" stop-opacity="0"/></radialGradient>
    <radialGradient id="${g}f" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#e7e9f7" stop-opacity="0"/></radialGradient>
    <pattern id="${g}d" width="26" height="26" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.3" fill="#1d2140" opacity=".1"/></pattern>
    <filter id="${g}s" x="-20%" y="-20%" width="140%" height="160%"><feGaussianBlur stdDeviation="10"/></filter>
  </defs>
  <rect width="1200" height="380" fill="url(#${g}bg)"/><rect width="1200" height="380" fill="url(#${g}d)"/>
  <circle cx="120" cy="60" r="260" fill="url(#${g}ga)"/><circle cx="1090" cy="320" r="300" fill="url(#${g}gb)"/>
  <ellipse cx="600" cy="334" rx="560" ry="46" fill="url(#${g}f)"/><ellipse cx="600" cy="334" rx="440" ry="34" fill="none" stroke="${R}" stroke-opacity=".18" stroke-width="1.5"/><ellipse cx="600" cy="334" rx="330" ry="25" fill="none" stroke="${R}" stroke-opacity=".24" stroke-width="1.5"/>
  ${l.svg}${r.svg}
  <ellipse cx="600" cy="336" rx="230" ry="16" fill="#2a1f50" opacity=".14" filter="url(#${g}s)"/>
  <g transform="translate(600 330)">${motif}</g>
  ${chip(ic(0), 70, 52, 1)}${chip(ic(1), 930, 44, 2)}${chip(ic(2), 380, 28, 3)}
</svg>`;
}

// square thumbnail for a solution card
export function thumb(iconMarkup = '', id = 't', variant = 0, wide = false) {
  const g = `t${id}`;
  const tint = [['#fff1ee', '#ffd9d2'], ['#eef0fd', '#d6dcfb'], ['#fbf3e8', '#f3dcc0'], ['#eef7f3', '#cfe9de']][variant % 4];
  const s1 = stack(g, 150, 214, 62, 3, .8), s2 = stack(g, 205, 220, 40, 2, .7);
  return `<svg class="art thumb-art" viewBox="${wide ? '0 26 240 190' : '0 0 240 240'}" preserveAspectRatio="xMidYMid slice" role="img" aria-hidden="true" focusable="false">
  <defs>
    <linearGradient id="${g}bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${tint[0]}"/><stop offset="1" stop-color="${tint[1]}"/></linearGradient>
    <linearGradient id="${g}w" x1="0" x2="1"><stop offset="0" stop-color="#e6e9f8"/><stop offset=".4" stop-color="#fff"/><stop offset=".75" stop-color="#fff"/><stop offset="1" stop-color="#d9def2"/></linearGradient>
    <linearGradient id="${g}t" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#f1f3fb"/></linearGradient>
    <linearGradient id="${g}r" x1="0" x2="1"><stop offset="0" stop-color="#c81f12"/><stop offset=".45" stop-color="#f23a26"/><stop offset="1" stop-color="#cf2a1a"/></linearGradient>
    <linearGradient id="${g}c" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#ff6a52"/><stop offset=".55" stop-color="#e32f1e"/><stop offset="1" stop-color="#b3180e"/></linearGradient>
    <pattern id="${g}d" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.1" fill="#1d2140" opacity=".1"/></pattern>
  </defs>
  <rect width="240" height="240" fill="url(#${g}bg)"/><rect width="240" height="240" fill="url(#${g}d)"/>
  <ellipse cx="120" cy="214" rx="130" ry="22" fill="#fff" opacity=".55"/><ellipse cx="120" cy="214" rx="92" ry="15" fill="none" stroke="${R}" stroke-opacity=".25" stroke-width="1.5"/>
  ${s2.svg}${s1.svg}
  <g transform="translate(26 36)"><rect width="104" height="104" rx="28" fill="url(#${g}c)"/><rect x="2" y="2" width="100" height="100" rx="26" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="2"/>
    <g transform="translate(28 28) scale(1.9)" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${iconMarkup}</g></g>
</svg>`;
}
