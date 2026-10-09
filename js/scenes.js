// V-TECH FOUNDRY scene engine: five scroll-scrubbed explainers that turn a pain into its answer without words.
// Every scene is DRAWN IN ITS RESOLVED STATE (so no-JS / reduced-motion visitors see the happy ending), and
// sceneTimeline() returns a 10-unit GSAP timeline: 0-3.6 the problem, 3.6-5.4 the turn, 5.4-10 resolved.
import { ICONS } from './icons.js';

const INK = '#0b0c11', RED = '#e31e24', GOLD = '#a88a5c';
let scUid = 0;
const scx = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const scw = (s, px = 6.4) => Math.round(String(s).length * px);
const scIcon = (name, x, y, size, cls = '') =>
  `<g class="${cls}" transform="translate(${x - size / 2} ${y - size / 2}) scale(${size / 24})" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ICONS.box}</g>`;

export const SCENE_KINDS = {
  'email-security': 'gate', 'web-waf': 'gate', 'database-security': 'mask', dlp: 'perimeter',
  'ai-agent': 'chat', 'anti-ddos-waf': 'wave', 'anti-ddos-cdn': 'wave', cdn: 'wave'
};
export const sceneKindOf = (chapter) => chapter.scene?.kind || SCENE_KINDS[chapter.solutions?.[0]] || 'gate';

// shared "before -> after" status chip, top-left of every scene
function status(d, tr) {
  const b = tr(d.before).toUpperCase(), a = tr(d.after).toUpperCase();
  const wb = 44 + scw(b, 8.9), wa = 44 + scw(a, 8.9);
  return `<g class="sc-status" transform="translate(26 22)">
    <g class="st-b" opacity="0"><rect width="${wb}" height="28" rx="14" fill="rgba(227,30,36,.09)" stroke="${RED}" stroke-opacity=".45"/><circle cx="15" cy="14" r="4" fill="${RED}"/><text class="sc-lbl" x="28" y="18.2" fill="${RED}">${scx(b)}</text></g>
    <g class="st-a"><rect width="${wa}" height="28" rx="14" fill="rgba(255,255,255,.7)" stroke="${GOLD}" stroke-opacity=".7"/>${scIcon('check', 15, 14, 11, 'sc-ok')}<text class="sc-lbl" x="28" y="18.2" fill="${INK}">${scx(a)}</text></g></g>`;
}
const gateBar = (x, name) => `<g class="gate" opacity="1">
  <rect class="gate-glow" x="${x - 9}" y="60" width="18" height="300" rx="9" fill="${GOLD}" opacity=".22"/>
  <rect x="${x - 3}" y="64" width="6" height="292" rx="3" fill="url(#gg${scUid})"/>
  <circle cx="${x}" cy="210" r="25" fill="#fff" stroke="${GOLD}" stroke-width="1.5"/>${scIcon('shield-check', x, 210, 24, 'sc-ink')}
  <text class="sc-cap" x="${x}" y="384" text-anchor="middle">${scx(name)}</text></g>`;
const defs = () => `<defs><linearGradient id="gg${scUid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${GOLD}" stop-opacity=".1"/><stop offset=".5" stop-color="${GOLD}"/><stop offset="1" stop-color="${GOLD}" stop-opacity=".1"/></linearGradient></defs>`;

/* ----------------------------------------------------------------- gate: stream filtered at a shield */
function gateSVG(d, tr) {
  const y = (i) => 92 + i * 44;
  const order = [['ok', 0], ['bad', 0], ['ok', 1], ['bad', 1], ['ok', 2], ['bad', 2]];
  const pill = (kind, label, i, ghost) => {
    const w = Math.min(194, 40 + scw(label, 6.3));
    const atDest = kind === 'ok';
    return `<g class="gp ${kind} ${ghost ? 'ghost' : ''}" data-y="${y(i)}" transform="translate(${atDest ? 408 : 236} ${y(i)})" opacity="${atDest ? 1 : 0}">
      <rect width="${w}" height="30" rx="15"/><circle cx="16" cy="15" r="4"/><text x="28" y="19.5">${scx(label)}</text></g>`;
  };
  const items = order.map(([k, n], i) => pill(k, tr(k === 'ok' ? d.good[n] : d.bad[n]), i, false)).join('');
  const ghosts = [1, 3, 5].map((i, n) => pill('bad', tr(d.bad[n]), i, true)).join('');
  const xs = [1, 3, 5].map((i) => `<g class="xm" transform="translate(300 ${y(i) + 15})" opacity="0">${scIcon('x', 0, 0, 20, 'sc-red')}</g>`).join('');
  return `${defs()}${status(d, tr)}
    <text class="sc-lbl muted" x="392" y="52">${scx(tr(d.dest).toUpperCase())}</text>
    <rect class="dest" x="392" y="64" width="224" height="292" rx="22"/>
    <circle cx="66" cy="210" r="28" fill="#fff" stroke="rgba(11,12,17,.2)"/>${scIcon('globe', 66, 210, 22, 'sc-ink')}
    <text class="sc-cap" x="66" y="262" text-anchor="middle">${scx(tr(d.src))}</text>
    <line x1="98" x2="288" y1="210" y2="210" stroke="rgba(11,12,17,.16)" stroke-dasharray="3 6"/>
    ${gateBar(300, d.gateName)}${items}${ghosts}${xs}`;
}
function gateTL(svg, T) {
  const q = (s) => svg.querySelectorAll(s);
  const pills = [...q('.gp:not(.ghost)')];
  pills.forEach((el, i) => {
    T.fromTo(el, { x: 92, opacity: 0 }, { x: 408, opacity: 1, duration: 1.5, ease: 'power2.out' }, 0.3 + i * 0.33);
  });
  T.fromTo(q('.gate'), { opacity: 0, scaleY: .1, svgOrigin: '300 210' }, { opacity: 1, scaleY: 1, duration: .8, ease: 'power3.out' }, 3.7)
   .fromTo(q('.dest'), { stroke: RED, fill: 'rgba(227,30,36,.06)' }, { stroke: 'rgba(11,12,17,.14)', fill: 'rgba(255,255,255,.55)', duration: .6 }, 4.8)
   .to(q('.gp.bad:not(.ghost)'), { x: 236, opacity: 0, duration: .9, ease: 'power2.in', stagger: .14 }, 4.1)
   .fromTo(q('.xm'), { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, { scale: 1, opacity: 1, duration: .3, stagger: .14, ease: 'back.out(2)' }, 4.5)
   .to(q('.xm'), { opacity: 0, duration: .4, stagger: .1 }, 5.3)
   .fromTo(q('.st-b'), { opacity: 0 }, { opacity: 1, duration: .4 }, .6).to(q('.st-b'), { opacity: 0, duration: .3 }, 3.7)
   .fromTo(q('.st-a'), { opacity: 0 }, { opacity: 1, duration: .5 }, 4.9);
  q('.gp.ghost').forEach((el, n) => {
    const t0 = 5.7 + n * .95;
    T.fromTo(el, { x: 92, opacity: 0 }, { x: 236, opacity: 1, duration: 1.25, ease: 'power2.in' }, t0)
     .to(el, { opacity: 0, duration: .25 }, t0 + 1.2)
     .fromTo(q('.xm')[n], { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, { scale: 1, opacity: 1, duration: .25, ease: 'back.out(2)' }, t0 + 1.15)
     .to(q('.xm')[n], { opacity: 0, duration: .3 }, t0 + 1.55);
  });
  T.fromTo(q('.gate-glow'), { opacity: .15 }, { opacity: .5, duration: .7, yoyo: true, repeat: 5, ease: 'sine.inOut' }, 4.2);
}

/* ----------------------------------------------------------------- mask: query-level control + masking */
function maskSVG(d, tr) {
  const rows = d.rows.slice(0, 4);
  const y = (i) => 142 + i * 46;
  const body = rows.map((r, i) => `<g class="rw">
    <line x1="290" x2="590" y1="${y(i) - 20}" y2="${y(i) - 20}" stroke="rgba(11,12,17,.07)"/>
    <text class="sc-lbl muted" x="292" y="${y(i) + 2}">${scx(tr(r.k).toUpperCase())}</text>
    <rect class="hot" x="418" y="${y(i) - 16}" width="176" height="28" rx="8" opacity="0"/>
    <text class="sc-val" x="428" y="${y(i) + 3}">${scx(r.v)}</text>
    ${r.s ? `<g class="mk"><rect x="418" y="${y(i) - 16}" width="176" height="28" rx="8" fill="#eceef5"/><text class="sc-dots" x="428" y="${y(i) + 5}">•••• •••• ••••</text></g>` : ''}</g>`).join('');
  return `${status(d, tr)}${defs()}
    <circle cx="66" cy="208" r="32" fill="#fff" stroke="rgba(11,12,17,.2)"/>${scIcon('user-round', 66, 208, 26, 'sc-ink')}
    <text class="sc-cap" x="66" y="262" text-anchor="middle">${scx(tr(d.actor))}</text>
    <path class="qline" pathLength="1" d="M104 208 H256" stroke="${INK}" stroke-width="1.6" stroke-dasharray="4 5" fill="none"/>
    <path class="qarrow" d="M252 202 l10 6 -10 6" fill="none" stroke="${INK}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    <text class="sc-lbl qlbl-b" x="180" y="190" text-anchor="middle" fill="${RED}" opacity="0">${scx(tr(d.query))}</text>
    <text class="sc-lbl qlbl-a" x="180" y="190" text-anchor="middle" fill="${INK}">${scx(tr(d.approved))}</text>
    <circle class="qdot" cx="104" cy="208" r="4.5" fill="${GOLD}" opacity="0"/>
    <g class="px"><rect x="214" y="132" width="10" height="152" rx="5" fill="url(#gg${scUid})"/><circle cx="219" cy="208" r="19" fill="#fff" stroke="${GOLD}" stroke-width="1.5"/>${scIcon('lock', 219, 208, 17, 'sc-ink')}</g>
    <rect class="tbl" x="270" y="64" width="344" height="296" rx="22"/>
    <text class="sc-serif sm" x="292" y="104">${scx(tr(d.table))}</text>
    ${body}
    <g class="tlock">${scIcon('shield-check', 588, 98, 22, 'sc-gold')}</g>`;
}
function maskTL(svg, T) {
  const q = (s) => svg.querySelectorAll(s);
  T.fromTo(q('.qline'), { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 1.2, ease: 'power1.out' }, .3)
   .fromTo(q('.qarrow'), { opacity: 0 }, { opacity: 1, duration: .3 }, 1.4)
   .fromTo(q('.px'), { opacity: 0, scaleY: .2, svgOrigin: '219 208' }, { opacity: 1, scaleY: 1, duration: .8, ease: 'power3.out' }, 3.7)
   .fromTo(q('.hot'), { opacity: 0 }, { opacity: 1, duration: .5, stagger: .18 }, 1.7)
   .to(q('.hot'), { opacity: 0, duration: .5 }, 4.3)
   .fromTo(q('.mk'), { opacity: 0 }, { opacity: 1, duration: .6, stagger: .22 }, 4.5)
   .fromTo(q('.tlock'), { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, { scale: 1, opacity: 1, duration: .5, ease: 'back.out(2)' }, 5.3)
   .fromTo(q('.qlbl-b'), { opacity: 0 }, { opacity: 1, duration: .4 }, 1.6).to(q('.qlbl-b'), { opacity: 0, duration: .3 }, 3.7)
   .fromTo(q('.qlbl-a'), { opacity: 0 }, { opacity: 1, duration: .4 }, 4.6)
   .fromTo(q('.st-b'), { opacity: 0 }, { opacity: 1, duration: .4 }, 1.6).to(q('.st-b'), { opacity: 0, duration: .3 }, 3.7)
   .fromTo(q('.st-a'), { opacity: 0 }, { opacity: 1, duration: .5 }, 4.9)
   ;
  const dot = q('.qdot'), qd = gsap.timeline({ repeat: 3, repeatDelay: .3 });
  qd.fromTo(dot, { x: 0, opacity: 0 }, { opacity: 1, duration: .1 }).to(dot, { x: 108, duration: .8, ease: 'power1.in' }).to(dot, { opacity: 0, duration: .12 });
  T.add(qd, 5.5);
}

/* ----------------------------------------------------------------- perimeter: data tries to leave, a ring closes */
function perimeterSVG(d, tr) {
  const C = [320, 192], R = 92, circ = Math.round(2 * Math.PI * R);
  const nodes = [[96, 104, 'message-circle'], [544, 104, 'mail'], [320, 336, 'hard-drive']];
  const ch = d.channels.slice(0, 3);
  const lines = nodes.map(([x, y]) => `<line x1="${C[0]}" y1="${C[1]}" x2="${x}" y2="${y}" stroke="rgba(11,12,17,.16)" stroke-dasharray="3 6"/>`).join('');
  const nd = nodes.map(([x, y, icon], i) => `<g class="nd" data-i="${i}">
      <circle class="nc" cx="${x}" cy="${y}" r="31"/>${scIcon(ch[i].icon || icon, x, y, 24, 'sc-ink')}
      <g class="bang" opacity="0"><circle cx="${x + 24}" cy="${y - 24}" r="10" fill="${RED}"/>${scIcon('alert-triangle', x + 24, y - 24, 12, 'sc-white')}</g>
      <g class="nlock">${scIcon('lock', x + 24, y - 24, 12, 'sc-gold')}</g>
      <text class="sc-cap" x="${x}" y="${y + (y > 300 ? 54 : 52)}" text-anchor="middle">${scx(tr(ch[i]))}</text></g>`).join('');
  const pk = (cls) => nodes.map(([x, y], i) => [0, 1].map((n) => `<rect class="${cls}" data-i="${i}" data-n="${n}" x="-4" y="-4" width="8" height="8" rx="2" transform="translate(${C[0]} ${C[1]})" opacity="0"/>`).join('')).join('');
  return `${status(d, tr)}
    ${lines}
    <circle class="ring-glow" cx="${C[0]}" cy="${C[1]}" r="${R}" fill="none" stroke="${GOLD}" stroke-width="14" opacity=".14"/>
    <circle class="ring" cx="${C[0]}" cy="${C[1]}" r="${R}" fill="none" stroke="${GOLD}" stroke-width="2" stroke-dasharray="${circ}" stroke-dashoffset="0" transform="rotate(-90 ${C[0]} ${C[1]})"/>
    <circle cx="${C[0]}" cy="${C[1]}" r="52" fill="#fff" stroke="rgba(11,12,17,.14)"/>${scIcon('file-text', C[0], C[1], 30, 'sc-ink')}
    <text class="sc-lbl halo" x="${C[0]}" y="${C[1] + 74}" text-anchor="middle">${scx(tr(d.asset).toUpperCase())}</text>
    ${nd}${pk('pk')}${pk('pg')}`;
}
function perimeterTL(svg, T) {
  const q = (s) => svg.querySelectorAll(s);
  const C = [320, 192], R = 92, nodes = [[96, 104], [544, 104], [320, 336]];
  const circ = Math.round(2 * Math.PI * R);
  q('.pk').forEach((el) => {
    const i = +el.dataset.i, n = +el.dataset.n, [x, y] = nodes[i];
    const t0 = .3 + i * .35 + n * .85;
    T.fromTo(el, { x: C[0], y: C[1], opacity: 0 }, { x, y, opacity: 1, duration: 1.2, ease: 'power1.in' }, t0).to(el, { opacity: 0, duration: .2 }, t0 + 1.2);
  });
  q('.nd').forEach((nd, i) => {
    T.fromTo(nd.querySelector('.bang'), { opacity: 0, scale: 0, transformOrigin: '50% 50%' }, { opacity: 1, scale: 1, duration: .4, ease: 'back.out(2)' }, 1.6 + i * .5)
     .to(nd.querySelector('.bang'), { opacity: 0, scale: 0, duration: .3 }, 4.5)
     .fromTo(nd.querySelector('.nc'), { stroke: RED, fill: 'rgba(227,30,36,.07)' }, { stroke: 'rgba(11,12,17,.2)', fill: 'rgba(255,255,255,.8)', duration: .6 }, 4.7)
     .fromTo(nd.querySelector('.nlock'), { opacity: 0, scale: 0, transformOrigin: '50% 50%' }, { opacity: 1, scale: 1, duration: .45, ease: 'back.out(2)' }, 5.2 + i * .12);
  });
  T.fromTo(q('.ring'), { strokeDashoffset: circ }, { strokeDashoffset: 0, duration: 1.3, ease: 'power2.inOut' }, 3.7)
   .fromTo(q('.ring-glow'), { opacity: 0 }, { opacity: .16, duration: 1.3 }, 3.7)
   .fromTo(q('.st-b'), { opacity: 0 }, { opacity: 1, duration: .4 }, 1.6).to(q('.st-b'), { opacity: 0, duration: .3 }, 3.7)
   .fromTo(q('.st-a'), { opacity: 0 }, { opacity: 1, duration: .5 }, 4.9);
  q('.pg').forEach((el) => {
    const i = +el.dataset.i, n = +el.dataset.n, [x, y] = nodes[i];
    const dx = x - C[0], dy = y - C[1], L = Math.hypot(dx, dy), ex = C[0] + dx / L * R, ey = C[1] + dy / L * R;
    const t0 = 5.7 + i * .5 + n * 1.5;
    T.fromTo(el, { x: C[0], y: C[1], opacity: 0, scale: 1, transformOrigin: '50% 50%' }, { x: ex, y: ey, opacity: 1, duration: .75, ease: 'power1.in' }, t0)
     .to(el, { scale: 2.6, opacity: 0, duration: .35, ease: 'power2.out' }, t0 + .75);
  });
}

/* ----------------------------------------------------------------- scan: documents reviewed in minutes, not days */
function scanSVG(d, tr) {
  const ly = (i) => 124 + i * 25, W = [196, 168, 204, 146, 198, 176, 200, 118, 186];
  const flags = [2, 5, 7], fl = d.flags.slice(0, 3);
  const lines = W.map((w, i) => {
    const f = flags.indexOf(i);
    return `<g class="ln ${f >= 0 ? 'flag' : 'okln'}" data-y="${ly(i)}">
      ${f >= 0 ? `<rect class="hl" x="204" y="${ly(i) - 10}" width="${w + 14}" height="19" rx="6"/>` : scIcon('check', 197, ly(i), 8, 'sc-ok sm')}
      <rect class="bar" x="214" y="${ly(i) - 3.5}" width="${w}" height="7" rx="3.5"/></g>`;
  }).join('');
  const chips = flags.map((li, n) => {
    const w = 40 + scw(tr(fl[n]), 6.1);
    return `<g class="chip" data-y="${ly(li)}" transform="translate(484 ${ly(li) - 14})"><path d="M-40 14 H0" stroke="${RED}" stroke-opacity=".5" stroke-dasharray="2 4"/>
      <rect width="${w}" height="28" rx="14"/><circle cx="14" cy="14" r="4" fill="${RED}"/><text x="26" y="18.4">${scx(tr(fl[n]))}</text></g>`;
  }).join('');
  return `${status(d, tr)}${defs()}
    <g class="pile"><rect x="214" y="64" width="260" height="322" rx="16" fill="#fff" stroke="rgba(11,12,17,.14)" opacity=".0"/><rect x="202" y="54" width="260" height="322" rx="16" fill="#fff" stroke="rgba(11,12,17,.14)" opacity="0"/></g>
    <rect class="doc" x="190" y="46" width="260" height="322" rx="16"/>
    ${scIcon('file-text', 214, 86, 16, 'sc-ink')}<text class="sc-serif xs" x="230" y="92">${scx(tr(d.doc))}</text>
    ${lines}${chips}
    <rect class="beam" x="190" y="100" width="260" height="3" rx="1.5" fill="${GOLD}" opacity="0"/>
    <g class="clock" transform="translate(98 128)"><circle r="34" fill="#fff" stroke="rgba(11,12,17,.2)" stroke-width="1.5"/>
      <line class="hand-h" x1="0" y1="0" x2="0" y2="-17" stroke="${INK}" stroke-width="2.4" stroke-linecap="round"/><line class="hand-m" x1="0" y1="0" x2="0" y2="-26" stroke="${RED}" stroke-width="1.8" stroke-linecap="round"/><circle r="3" fill="${INK}"/></g>
    <text class="sc-serif tm b" x="98" y="214" text-anchor="middle" fill="${RED}" opacity="0">${scx(tr(d.timeBefore))}</text>
    <text class="sc-serif tm a" x="98" y="214" text-anchor="middle" fill="${INK}">${scx(tr(d.timeAfter))}</text>
    <text class="sc-cap" x="98" y="240" text-anchor="middle">${scx(tr(d.perDoc))}</text>`;
}
function scanTL(svg, T) {
  const q = (s) => svg.querySelectorAll(s);
  const at = (y) => 3.8 + (y - 100) / 250 * 2.3;
  T.fromTo(q('.pile rect'), { opacity: 0, x: -30 }, { opacity: .85, x: 0, duration: .8, stagger: .25 }, .2)
   .fromTo(q('.hand-m'), { rotation: 0, svgOrigin: '0 0' }, { rotation: 1080, duration: 3.5, ease: 'none' }, 0)
   .fromTo(q('.hand-h'), { rotation: 0, svgOrigin: '0 0' }, { rotation: 180, duration: 3.5, ease: 'none' }, 0)
   .fromTo(q('.tm.b'), { opacity: 0 }, { opacity: 1, duration: .5 }, .6).to(q('.tm.b'), { opacity: 0, duration: .3 }, 5.3)
   .fromTo(q('.tm.a'), { opacity: 0 }, { opacity: 1, duration: .5 }, 5.4)
   .fromTo(q('.st-b'), { opacity: 0 }, { opacity: 1, duration: .4 }, .8).to(q('.st-b'), { opacity: 0, duration: .3 }, 3.7)
   .fromTo(q('.st-a'), { opacity: 0 }, { opacity: 1, duration: .5 }, 5.5)
   .to(q('.pile rect'), { opacity: 0, x: -30, duration: .6, stagger: .1 }, 3.9)
   .set(q('.beam'), { y: 0, opacity: 0 }, 0).to(q('.beam'), { opacity: 1, duration: .25 }, 3.7)
   .to(q('.beam'), { y: 250, duration: 2.1, ease: 'none' }, 3.8).to(q('.beam'), { opacity: 0, duration: .25 }, 5.95)
   .fromTo(q('.clock'), { opacity: 1 }, { opacity: .35, duration: .6 }, 5.4);
  q('.ln').forEach((ln) => {
    const t = at(+ln.dataset.y);
    if (ln.classList.contains('flag')) T.fromTo(ln.querySelector('.hl'), { opacity: 0 }, { opacity: 1, duration: .35 }, t);
    else T.fromTo(ln.querySelector('.sc-ok'), { opacity: 0, scale: 0, transformOrigin: '50% 50%' }, { opacity: 1, scale: 1, duration: .3, ease: 'back.out(2)' }, t);
  });
  q('.chip').forEach((c, n) => T.fromTo(c, { opacity: 0, x: 504 }, { opacity: 1, x: 484, duration: .5, ease: 'power3.out' }, at(+c.dataset.y) + .15));
}

/* ----------------------------------------------------------------- wave: a spike absorbed at the edge */
const WAVE_N = 29, wx = (i) => 40 + i * 20;
const waveY = {
  base: (i) => 268 - 9 * Math.sin(i * .7) - 4 * Math.sin(i * 1.9),
  spike: (i) => 268 - 9 * Math.sin(i * .7) - 168 * Math.exp(-(((i - 18) / 3.1) ** 2)) - 22 * Math.exp(-(((i - 9) / 2.4) ** 2)),
  calm: (i) => 262 - 9 * Math.sin(i * .7) - 4 * Math.sin(i * 1.9) - 20 * Math.exp(-(((i - 18) / 5) ** 2))
};
function wavePath(ys) {
  let d = `M${wx(0)} ${ys[0].toFixed(1)}`;
  for (let i = 1; i < ys.length; i++) {
    const mx = (wx(i - 1) + wx(i)) / 2, my = (ys[i - 1] + ys[i]) / 2;
    d += ` Q${wx(i - 1)} ${ys[i - 1].toFixed(1)} ${mx} ${my.toFixed(1)}`;
  }
  return d + ` T${wx(ys.length - 1)} ${ys[ys.length - 1].toFixed(1)}`;
}
function waveSVG(d, tr) {
  const ys = Array.from({ length: WAVE_N }, (_, i) => waveY.calm(i));
  const line = wavePath(ys);
  const edge = Array.from({ length: 7 }, (_, i) => 76 + i * 80);
  const px = wx(18);
  return `${status(d, tr)}
    <line x1="40" x2="610" y1="330" y2="330" stroke="rgba(11,12,17,.18)"/>
    <line x1="40" x2="610" y1="190" y2="190" stroke="${GOLD}" stroke-dasharray="4 6"/><text class="sc-lbl muted" x="610" y="182" text-anchor="end">${scx(tr(d.capacity).toUpperCase())}</text>
    <path class="wa" d="${line} L${wx(WAVE_N - 1)} 330 L${wx(0)} 330 Z" fill="rgba(11,12,17,.05)"/>
    <path class="wl" d="${line}" fill="none" stroke="${INK}" stroke-width="2.4" stroke-linecap="round"/>
    <g class="alert" transform="translate(${px} 70)" opacity="0"><circle r="12" fill="${RED}"/>${scIcon('alert-triangle', 0, 0, 14, 'sc-white')}<text class="sc-lbl" x="20" y="4" fill="${RED}">${scx(tr(d.down).toUpperCase())}</text></g>
    ${edge.map((x, i) => `<g class="edge" transform="translate(${x} 362)"><line x1="0" y1="-24" x2="0" y2="-8" stroke="rgba(11,12,17,.2)"/><circle class="ripple" r="6" fill="none" stroke="${GOLD}"/><circle r="6" fill="#fff" stroke="${GOLD}" stroke-width="1.5"/><circle r="2.4" fill="${GOLD}"/></g>`).join('')}
    <text class="sc-cap" x="40" y="392">${scx(tr(d.edge))}</text>`;
}
function waveTL(svg, T) {
  const q = (s) => svg.querySelectorAll(s);
  const wl = q('.wl')[0], wa = q('.wa')[0];
  const s = { a: 0, b: 1 };
  const draw = () => {
    const ys = Array.from({ length: WAVE_N }, (_, i) => {
      const m = waveY.base(i) + (waveY.spike(i) - waveY.base(i)) * s.a;
      return m + (waveY.calm(i) - m) * s.b;
    });
    const p = wavePath(ys);
    wl.setAttribute('d', p); wa.setAttribute('d', `${p} L${wx(WAVE_N - 1)} 330 L${wx(0)} 330 Z`);
  };
  T.fromTo(s, { a: 0, b: 0 }, { a: 0, b: 0, duration: .01, onUpdate: draw }, 0)
   .fromTo(s, { a: 0 }, { a: 1, duration: 2.6, ease: 'power2.in', onUpdate: draw, immediateRender: false }, .5)
   .fromTo(s, { b: 0 }, { b: 1, duration: 1.4, ease: 'power2.inOut', onUpdate: draw, immediateRender: false }, 4.1)
   .to(wl, { stroke: RED, duration: .8 }, 1.8).to(wa, { fill: 'rgba(227,30,36,.10)', duration: .8 }, 1.8)
   .to(wl, { stroke: INK, duration: .8 }, 4.3).to(wa, { fill: 'rgba(11,12,17,.05)', duration: .8 }, 4.3)
   .fromTo(q('.alert'), { opacity: 0, y: -8 }, { opacity: 1, y: 0, duration: .5 }, 2.9).to(q('.alert'), { opacity: 0, duration: .4 }, 4.2)
   .fromTo(q('.edge'), { opacity: 0, scale: 0, transformOrigin: '50% 100%' }, { opacity: 1, scale: 1, duration: .5, stagger: .1, ease: 'back.out(2)' }, 3.7)
   .fromTo(q('.st-b'), { opacity: 0 }, { opacity: 1, duration: .4 }, 2.4).to(q('.st-b'), { opacity: 0, duration: .3 }, 3.8)
   .fromTo(q('.st-a'), { opacity: 0 }, { opacity: 1, duration: .5 }, 5)
   .fromTo(q('.ripple'), { scale: 1, opacity: .7, transformOrigin: '50% 50%' }, { scale: 3, opacity: 0, duration: 1.1, stagger: .12, repeat: 3, repeatDelay: .25, ease: 'power1.out' }, 5.2);
}

/* ----------------------------------------------------------------- chat: questions pile up unanswered, an AI agent answers instantly and captures the lead */
function chatSVG(d, tr) {
  const ys = [104, 174, 244], ask = d.ask.slice(0, 3), rep = d.reply.slice(0, 3);
  const pill = (kind, label, x, y, extra = '') => {
    const w = Math.min(194, 40 + scw(label, 6.3));
    return `<g class="gp ${kind} ${extra}" transform="translate(${x} ${y})"><rect width="${w}" height="34" rx="17"/><circle cx="16" cy="17" r="4"/><text x="28" y="21.5">${scx(label)}</text></g>`;
  };
  const asks = ys.map((y, i) => pill('ok', tr(ask[i]), 36, y, 'ca')).join('');
  const reps = ys.map((y, i) => pill('ok', tr(rep[i]), 420, y, 'cr')).join('');
  const cl = ys.map((y) => `<path class="cl" pathLength="1" stroke-dasharray="1" d="M244 ${y + 17} L286 220" fill="none" stroke="rgba(11,16,32,.3)" stroke-width="1.4"/>`).join('');
  const cr = ys.map((y) => `<path class="cl2" d="M354 220 L${414} ${y + 17}" fill="none" stroke="${GOLD}" stroke-opacity=".6" stroke-dasharray="3 5"/>`).join('');
  const wt = ys.map((y) => `<g class="wt" transform="translate(262 ${y + 17})" opacity="0">${scIcon('clock', 0, 0, 16, 'sc-red')}</g>`).join('');
  return `${status(d, tr)}
    <text class="sc-lbl muted" x="36" y="78">${scx(tr(d.src).toUpperCase())}</text>
    ${cl}${cr}${asks}${wt}${reps}
    <g class="ag" transform="translate(320 220)"><circle class="ag-glow" r="46" fill="${GOLD}" opacity=".16"/><circle r="34" fill="#fff" stroke="${GOLD}" stroke-width="1.6"/>${scIcon('bot', 0, 0, 26, 'sc-ink')}<text class="sc-cap" y="62" text-anchor="middle">${scx(tr(d.agent))}</text></g>
    <g class="spd" transform="translate(320 166)"><rect x="-44" y="-12" width="88" height="24" rx="12" fill="#fff" stroke="${GOLD}" stroke-opacity=".8"/><text class="sc-lbl" text-anchor="middle" y="4" fill="${INK}">${scx(tr(d.speed))}</text></g>
    <g class="ld" transform="translate(420 330)"><rect width="196" height="42" rx="12" fill="#fff" stroke="rgba(11,16,32,.2)"/>${scIcon('users', 22, 21, 16, 'sc-red')}<text class="sc-lbl" x="40" y="25" fill="${INK}">${scx(tr(d.lead))}</text></g>`;
}
function chatTL(svg, T) {
  const q = (x) => svg.querySelectorAll(x);
  q('.ca').forEach((el, i) => {
    T.fromTo(el, { x: -220, opacity: 0 }, { x: 36, opacity: 1, duration: 1.1, ease: 'power2.out' }, .2 + i * .45)
     .fromTo(el.querySelector('rect'), { stroke: RED, fill: 'rgba(227,30,36,.07)' }, { stroke: 'rgba(11,16,32,.22)', fill: '#fff', duration: .5 }, 4.7 + i * .2)
     .fromTo(el.querySelector('circle'), { fill: RED }, { fill: '#636b80', duration: .5 }, 4.7 + i * .2)
     .fromTo(el.querySelector('text'), { fill: '#8e1216' }, { fill: INK, duration: .5 }, 4.7 + i * .2);
  });
  T.fromTo(q('.wt'), { opacity: 0, scale: 0, transformOrigin: '50% 50%' }, { opacity: 1, scale: 1, duration: .35, stagger: .3, ease: 'back.out(2)' }, 1.6)
   .to(q('.wt'), { opacity: 0, scale: 0, duration: .3, stagger: .1 }, 4.4)
   .fromTo(q('.ag'), { opacity: 0, scale: .4, transformOrigin: '50% 50%' }, { opacity: 1, scale: 1, duration: .8, ease: 'back.out(1.6)' }, 3.7)
   .fromTo(q('.cl'), { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: .5, stagger: .12 }, 4.0)
   .fromTo(q('.cl2'), { opacity: 0 }, { opacity: 1, duration: .4, stagger: .12 }, 4.5)
   .fromTo(q('.cr'), { x: 384, opacity: 0 }, { x: 420, opacity: 1, duration: .6, stagger: .3, ease: 'power3.out' }, 4.7)
   .fromTo(q('.spd'), { opacity: 0, y: 176 }, { opacity: 1, y: 166, duration: .5 }, 4.3)
   .fromTo(q('.ld'), { opacity: 0, scale: .6, transformOrigin: '0% 50%' }, { opacity: 1, scale: 1, duration: .5, ease: 'back.out(2)' }, 6.1)
   .fromTo(q('.st-b'), { opacity: 0 }, { opacity: 1, duration: .4 }, .8).to(q('.st-b'), { opacity: 0, duration: .3 }, 3.7)
   .fromTo(q('.st-a'), { opacity: 0 }, { opacity: 1, duration: .5 }, 4.9)
   .fromTo(q('.ag-glow'), { opacity: .1 }, { opacity: .34, duration: .8, yoyo: true, repeat: 4, ease: 'sine.inOut' }, 5.2);
}

const BUILD = { gate: [gateSVG, gateTL], mask: [maskSVG, maskTL], perimeter: [perimeterSVG, perimeterTL], scan: [scanSVG, scanTL], wave: [waveSVG, waveTL], chat: [chatSVG, chatTL] };

// d = merged scene data (ui defaults + chapter overrides), tr = translator, name = solution shown on the shield
export function sceneSVG(kind, d, tr, name = '') {
  scUid++;
  const [draw] = BUILD[kind] || BUILD.gate;
  const label = `${tr(d.alt) || ''}`.trim();
  return `<svg class="scene sc-${kind}" viewBox="0 0 640 400" role="img" aria-label="${scx(label)}" preserveAspectRatio="xMidYMid meet">${draw({ ...d, gateName: name }, tr)}</svg>`;
}

// 10-unit timeline for an <svg class="scene">; nest it into a parent timeline (.add(tl, 0)) or scrub/loop it.
export function sceneTimeline(svg, kind) {
  const T = gsap.timeline();
  (BUILD[kind] || BUILD.gate)[1](svg, T);
  T.to({}, { duration: .001 }, 9.999);
  return T;
}

// Pills and chips are sized from the real text (any language, any font): call after the SVGs are in the DOM and again once fonts load.
// Batched on purpose: all writes, then ONE layout for all reads, then all writes (interleaving them forces a layout per element).
export function fitScene(svgs) {
  const items = [...(svgs.querySelectorAll ? svgs.querySelectorAll('.gp, .chip, .sc-status > g') : [...svgs].flatMap((v) => [...v.querySelectorAll('.gp, .chip, .sc-status > g')]))]
    .map((g) => ({ g, rect: g.querySelector(':scope > rect'), text: g.querySelector(':scope > text') })).filter((i) => i.rect && i.text);
  items.forEach((i) => { i.text.style.fontSize = ''; });
  items.forEach((i) => { i.w = i.text.getBBox().width; i.fs = parseFloat(getComputedStyle(i.text).fontSize); });
  items.forEach((i) => {
    if (!i.w) return;
    const gp = i.g.classList.contains('gp'), chip = i.g.classList.contains('chip');
    const max = gp ? 198 : chip ? 148 : 260, pad = gp ? 44 : chip ? 40 : 44;
    let w = i.w;
    if (w + pad > max) { i.text.style.fontSize = `${(i.fs * (max - pad) / w).toFixed(2)}px`; w = w * (max - pad) / w; }
    i.rect.setAttribute('width', Math.ceil(w + pad));
  });
}
