// V-TECH FOUNDRY landing engine. No build step, no libraries: plain ES module.
// Motion follows the Apple product-page model: native scrolling (no smooth-scroll hijack, no pinned/scrubbed scenes);
// things reveal once, on a timer, when they enter the viewport; navigation is a sticky local nav, a carousel and click-driven controls.
// Routing is hash based (#home, #industry-bfsi, #solution-dlp) so the whole site works as a single page.
import { CONFIG } from './config.js';
import { ICONS } from './icons.js';
import { scene, banner, thumb, ribbons } from './art.js';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* storage unavailable */ } }
};
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const state = {
  lang: store.get('vth-lang') || 'en',
  route: parseRoute(), ui: null, solutions: new Map(), industries: [], experts: [], images: {}, menu: null
};
const t = (o) => (typeof o === 'string' ? o : (o && (o[state.lang] ?? o.en)) ?? '');
const ui = (path) => path.split('.').reduce((o, k) => o?.[k], state.ui);
const u = (path) => t(ui(path));
const ic = (name, cls = '') => `<svg class="ic ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.box}</svg>`;
const motionOK = !matchMedia('(prefers-reduced-motion: reduce)').matches;
let cleanups = [];

/* ---------------------------------------------------------------- routing */
function parseRoute() {
  const h = (location.hash || '').replace(/^#/, '');
  const m = h.match(/^(industry|solution)-([\w-]+)$/);
  return m ? { page: m[1], id: m[2] } : { page: 'home', id: '' };
}
const hashOf = (r) => (r.page === 'home' ? 'home' : `${r.page}-${r.id}`);
function go(hash, after) {
  const h = hash.replace(/^#/, '');
  const m = h.match(/^(industry|solution)-([\w-]+)$/);
  state.route = m ? { page: m[1], id: m[2] } : { page: 'home', id: '' };
  try { history.replaceState(null, '', '#' + hashOf(state.route)); } catch { /* sandboxed frame */ }
  teardownMotion(); render(); window.scrollTo(0, 0);
  if (after) setTimeout(() => scrollToEl($(after)), 450);
}
addEventListener('hashchange', () => {
  const r = parseRoute();
  if (hashOf(r) !== hashOf(state.route)) { state.route = r; teardownMotion(); render(); scrollTo(0, 0); }
});

/* ---------------------------------------------------------------- data */
async function loadData() {
  let raw = window.__DATA__;
  if (!raw) {
    const j = (p) => fetch(p).then((r) => { if (!r.ok) throw new Error(p); return r.json(); });
    const [uiData, solutions, experts, images, menu, ...inds] = await Promise.all([j('data/ui.json'), j('data/solutions.json'), j('data/experts.json').catch(() => []), j('data/images.json').catch(() => ({})), j('data/solutionmenu.json').catch(() => null), ...CONFIG.industries.map((id) => j(`data/industries/${id}.json`).catch(() => null))]);
    raw = { ui: uiData, solutions, experts, images, menu, industries: inds.filter(Boolean) };
  }
  state.ui = raw.ui;
  state.experts = raw.experts || [];
  state.images = raw.images || {};
  state.menu = raw.menu || null;
  state.industries = [...raw.industries].sort((a, b) => a.order - b.order);
  raw.solutions.forEach((s) => state.solutions.set(s.id, s));
  state.industries.forEach((i) => (i.newSolutions || []).forEach((s) => { if (!state.solutions.has(s.id)) state.solutions.set(s.id, s); }));
}
const industryOf = (id) => state.industries.find((i) => i.id === id);
const sol = (id) => state.solutions.get(id) || { id, name: id, icon: 'box', tagline: {}, description: {} };
const link = (hash, inner, cls = '', extra = '') => `<a href="#${hash}" data-go="${hash}" class="${cls}" ${extra}>${inner}</a>`;
const roman = (n) => String(n).padStart(2, '0');

/* ---------------------------------------------------------------- shared chrome */
// "Solutions Architecture" mega menu: the catalogue grouped as Engineer / Operate. Entries without a page yet render as "Soon".
function megaMenu() {
  const m = state.menu; if (!m) return '';
  const item = (it) => {
    const label = esc(t(it.name));
    if (it.id && state.solutions.has(it.id)) return link(`solution-${it.id}`, `<span>${label}</span>${ic('chevron-right')}`, 'mega-item');
    return `<span class="mega-item soon" aria-disabled="true"><span>${label}</span><em>${esc(t(m.soon))}</em></span>`;
  };
  const groups = m.groups.map((g) => `<section class="mega-card"><span class="mega-label">${esc(t(g.label))}</span>
    <div class="mega-cols" style="--cols:${g.columns.length}">${g.columns.map((c) => `<div><h3>${esc(t(c.title))}</h3><div class="mega-list${c.split ? ' two' : ''}">${c.items.map(item).join('')}</div></div>`).join('')}</div></section>`).join('');
  return `<div class="mega-in"><div class="mega-head"><h2>${esc(t(m.title))}</h2><span class="mega-tag">${esc(t(m.tag))}</span>
    <button type="button" class="mega-close" data-mega-close>${ic('x')}<span>${esc(t(m.close))}</span></button></div><div class="mega-groups">${groups}</div></div>`;
}


function header() {
  const cur = state.route.page === 'industry' ? state.route.id : '';
  const inds = state.industries.map((i) => link(`industry-${i.id}`, `${ic(i.icon)}<span>${esc(t(i.name))}<small>${esc(t(i.tagline))}</small></span>`)).join('');
  const sols = [...state.solutions.values()].map((s) => link(`solution-${s.id}`, `${ic(s.icon)}<span>${esc(s.name)}<small>${esc(t(s.tagline))}</small></span>`)).join('');
  return `<header class="hdr" id="hdr"><div class="wrap">
    ${link('home', '<b>V-TECH</b><span>FOUNDRY</span>', 'logo', 'aria-label="V-TECH FOUNDRY"')}
    <nav class="nav" id="nav" aria-label="Primary">
      <div class="dd mega-dd"><button class="nav-btn ${state.route.page === 'solution' ? 'on' : ''}" aria-expanded="false" aria-haspopup="true">${u('nav.solutions')} ${ic('chevron-down')}</button><div class="mega">${state.menu ? megaMenu() : `<div class="panel wide">${sols}</div>`}</div></div>
      <div class="dd"><button class="nav-btn ${cur ? 'on' : ''}" aria-expanded="false" aria-haspopup="true">${u('nav.industry')} ${ic('chevron-down')}</button><div class="panel wide">${inds}</div></div>
      <div class="dd"><button class="nav-btn" aria-expanded="false" aria-haspopup="true">${u('nav.meet')} ${ic('chevron-down')}</button>
        <div class="panel"><a href="${CONFIG.website}" target="_blank" rel="noopener">${ic('building')}<span>${u('nav.about')}</span></a>
        <a href="#experts" data-scroll="#experts">${ic('users')}<span>${u('nav.expert')}</span></a></div></div>
    </nav>
    <div class="tools">
      <div class="lang" role="group" aria-label="Language"><button data-lang="en" class="${state.lang === 'en' ? 'on' : ''}">EN</button><span>|</span><button data-lang="vi" class="${state.lang === 'vi' ? 'on' : ''}">VI</button></div>
      <a class="btn btn-red" href="#contact" data-scroll="#contact">${u('nav.request')}</a>
      <button class="burger" id="burger" aria-label="${u('nav.menu')}" aria-expanded="false">${ic('menu')}</button>
    </div></div></header>`;
}

const field = (name, label, type, ac) => `<div class="field"><label for="f-${name}">${u(label)}</label><input id="f-${name}" name="${name}" type="${type}" autocomplete="${ac}" required><span class="em" aria-live="polite"></span></div>`;
const copyRow = (label, value, href) => `<div class="row"><div><small>${label}</small>${href ? `<a class="v" href="${href}">${esc(value)}</a>` : `<span class="v">${esc(value)}</span>`}</div>
  <button type="button" class="copy" data-copy="${esc(value)}">${ic('copy')}<span>${u('cta.copy')}</span></button></div>`;

function contact(preset = '') {
  const opts = state.industries.map((i) => `<option value="${i.id}" ${i.id === preset ? 'selected' : ''}>${esc(t(i.name))}</option>`).join('');
  return `<section class="contact" id="contact"><div class="wrap"><div class="contact-box glass rv" id="cbox">
    <div>
      <span class="eyebrow">${u('cta.kicker')}</span>
      <h2 class="h2">${u('cta.title')}</h2>
      <p class="lede">${u('cta.p')}</p>
      <div class="direct">
        ${copyRow(u('cta.call'), CONFIG.phoneDisplay, `tel:${CONFIG.phone}`)}
        ${copyRow('Zalo', CONFIG.phoneDisplay, CONFIG.zalo)}
        ${copyRow(u('cta.mail'), CONFIG.email, `mailto:${CONFIG.email}`)}
      </div>
    </div>
    <div>
      <div class="tabs" role="tablist"><button type="button" class="on" data-mode="book" role="tab">${u('cta.tabBook')}</button><button type="button" data-mode="brief" role="tab">${u('cta.tabBrief')}</button></div>
      <form id="lead" novalidate>
        <div class="fg">
          ${field('name', 'cta.name', 'text', 'name')}${field('company', 'cta.company', 'text', 'organization')}
          ${field('email', 'cta.email', 'email', 'email')}${field('phone', 'cta.phone', 'tel', 'tel')}
          <div class="field full"><label for="f-industry">${u('cta.industry')}</label><select id="f-industry" name="industry"><option value="">${u('cta.select')}</option>${opts}<option value="other">${u('cta.other')}</option></select></div>
          <div class="field full" id="need-wrap"><label for="f-need">${u('cta.need')}</label><textarea id="f-need" name="need" rows="3"></textarea></div>
        </div>
        <input class="hp" type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">
        <label class="consent"><input id="f-consent" type="checkbox" name="consent" required> <span>${u('cta.consent')}</span></label>
        ${CONFIG.leadEndpoint ? '' : `<p class="demo-note">${u('cta.demo')}</p>`}
        <div><button class="btn btn-red" type="submit" id="send"><span>${u('cta.sendBook')}</span> ${ic('arrow-right')}</button></div>
      </form>
      <div class="thanks" role="status"><div class="ok">${ic('check')}</div><h3>${u(CONFIG.leadEndpoint ? 'cta.thanksT' : 'cta.thanksDemoT')}</h3><p class="lede">${u(CONFIG.leadEndpoint ? 'cta.thanksP' : 'cta.demo')}</p></div>
    </div></div></div></section>`;
}

function footer() {
  return `<footer class="foot"><div class="wrap">
    <div class="cols">
      <div>${link('home', '<b>V-TECH</b><span>FOUNDRY</span>', 'logo')}<p style="margin-top:1.2rem">${u('foot.powered')} <a href="${CONFIG.website}" target="_blank" rel="noopener"><b>VNETWORK</b></a></p></div>
      <div class="list"><span>${esc(CONFIG.phoneDisplay)}</span><span>${esc(CONFIG.email)}</span><a href="${CONFIG.website}" target="_blank" rel="noopener">vnetwork.vn</a></div>
      <div class="list">${CONFIG.offices.map((o) => `<p>${esc(o)}</p>`).join('')}</div>
    </div>
    <div class="fine"><span>\u00a9 2013 VNETWORK JSC. ${u('foot.rights')}</span><span><a href="${CONFIG.website}" target="_blank" rel="noopener">${u('foot.terms')}</a> \u00b7 <a href="${CONFIG.website}" target="_blank" rel="noopener">${u('foot.privacy')}</a></span></div>
  </div></footer>`;
}

const art = (kind, icon, id) => scene(kind, ICONS[icon] || ICONS.box, id);
const fill = (str, o) => str.replace(/\{(\w+)\}/g, (_, k) => o[k] ?? '');

/* ---------------------------------------------------------------- photography (Unsplash, with resilient fallback)
   Every photo sits on top of an always-rendered fallback layer (mesh gradient + pattern + icon, or a supplied illustration).
   The <img> stays transparent until it has really loaded, tries the next candidate URL on error, and is removed if all fail,
   so a broken-image icon or an empty/black frame can never show. */
const fbArt = (icon) => `<svg class="ph-pat" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><pattern id="phg" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0H0V28" fill="none" stroke="#1d2140" stroke-opacity=".07"/></pattern></defs>
  <rect width="400" height="240" fill="url(#phg)"/><g fill="none" stroke="#e32f1e" stroke-opacity=".28" stroke-width="1.4"><circle cx="300" cy="70" r="90"/><circle cx="300" cy="70" r="140" stroke-opacity=".16"/><path d="M0 190c80-40 150 30 230-10s120-10 170-50"/></g></svg>${ic(icon || 'building-2', 'ph-ic')}`;
function photo(key, o = {}) {
  const im = state.images[key];
  const fb = o.fb || fbArt(im?.icon);
  if (!im || !im.src?.length) return `<figure class="ph fail ${o.cls || ''}" ${o.ratio ? `style="aspect-ratio:${o.ratio}"` : ''}><div class="ph-fb">${fb}</div></figure>`;
  const srcs = im.src.map((x) => x.replace('{w}', o.w || 1200));
  const local = /^(data:|assets\/)/.test(srcs[0]); // inline/own-file photos cannot be slow, so show them without waiting for the load event
  return `<figure class="ph${local ? ' ok' : ''} ${o.cls || ''}" ${o.ratio ? `style="aspect-ratio:${o.ratio}"` : ''}><div class="ph-fb">${fb}</div>
    <img class="ph-img" ${im.pos ? `style="object-position:${esc(im.pos)}"` : ''} src="${esc(srcs[0])}" data-srcs="${esc(srcs.slice(1).join('|'))}" alt="${esc(t(im.alt))}" loading="${o.eager ? 'eager' : 'lazy'}" decoding="async" referrerpolicy="no-referrer">
    ${o.nocap ? '' : `<figcaption>${ic(im.icon)}<span>${esc(t(o.caption ?? im.caption))}</span></figcaption>`}</figure>`;
}
const aura = (inner, cls = '') => `<div class="aura ${cls}">${inner}</div>`;
function phLoaded(img) { img.closest('.ph')?.classList.add('ok'); }
function phFailed(img) {
  const rest = (img.dataset.srcs || '').split('|').filter(Boolean);
  if (rest.length) { img.dataset.srcs = rest.slice(1).join('|'); img.src = rest[0]; return; }
  const f = img.closest('.ph'); f?.classList.remove('ok'); f?.classList.add('fail'); img.remove();
}
// error/load do not bubble, so listen in the capture phase once for the whole document
document.addEventListener('error', (e) => { if (e.target?.classList?.contains('ph-img')) phFailed(e.target); }, true);
document.addEventListener('load', (e) => { if (e.target?.classList?.contains('ph-img')) phLoaded(e.target); }, true);
function phCheck() { $$('.ph-img').forEach((i) => { if (i.complete) { if (i.naturalWidth) phLoaded(i); else phFailed(i); } }); }

function experts() {
  const cards = state.experts.map((x) => {
    const av = x.photo ? `<img src="${esc(x.photo)}" alt="${esc(x.name)}" width="130" height="130" loading="lazy">` : ic('user-round');
    const bio = t(x.bio);
    return `<article class="xp rv"><div class="xp-top"><span class="xp-av">${av}</span></div>
      <div class="xp-body"><h3>${esc(x.name)}</h3><p class="xp-role">${esc(t(x.role))}</p>${bio ? `<p class="xp-bio">${esc(bio)}</p>` : ''}</div></article>`;
  }).join('');
  return `<section class="sec" id="experts"><div class="wrap"><div class="sec-head"><span class="eyebrow rv">${u('expert.kicker')}</span><h2 class="h2 rv">${u('expert.title')}</h2><p class="lede rv">${u('expert.p')}</p></div>
    <div class="xps">${cards}</div></div></section>`;
}

/* ---------------------------------------------------------------- pages */
function homePage() {
  const rows = state.industries.map((i) => link(`industry-${i.id}`,
    `${ic(i.icon, 'lead')}<h3>${esc(t(i.name))}</h3><p>${esc(t(i.tagline))}</p><span class="go">${ic('arrow-right')}</span>`, 'ix rv')).join('');
  const steps = ui('home.steps').map((s, k) => `<div class="col rv"><span class="n">${roman(k + 1)}</span><h3>${t(s.t)}</h3><p>${t(s.d)}</p></div>`).join('');
  const tiles = [...state.solutions.values()].map((s, k) => link(`solution-${s.id}`,
    `<div class="tile-ph">${photo(state.images.bySolution?.[s.id] || '', { w: 700, ratio: '240 / 190', nocap: true, fb: thumb(ICONS[s.icon] || ICONS.box, `home${k}`, k, true) })}</div>${ic(s.icon, 'lead')}<h3>${esc(s.name)}</h3><p>${esc(t(s.tagline))}</p><div class="foot"><span>${u('ind.learn')}</span>${ic('arrow-up-right')}</div>`, 'tile glass rv')).join('');
  return `
  <section class="hero hero-c"><div class="hero-glow" aria-hidden="true"></div><div class="ribbons" aria-hidden="true">${ribbons()}</div>
    <div class="wrap">
      <span class="eyebrow hero-in">${u('home.eyebrow')}</span>
      <h1 class="display hero-in" style="animation-delay:.08s">${u('home.heroA')} <em class="uline">${u('home.heroB')}</em></h1>
      <p class="lede hero-in" style="animation-delay:.16s">${u('home.heroP')}</p>
      <div class="actions hero-in" style="animation-delay:.24s"><a class="btn btn-red" href="#industries" data-scroll="#industries">${u('home.explore')} ${ic('arrow-right')}</a>
        <a class="btn btn-line" href="#contact" data-scroll="#contact">${ic('message-square')} ${u('nav.request')}</a></div>
      <div class="hero-scene hero-in" style="animation-delay:.32s" aria-hidden="true">${art('cloud', 'cloud', 'h')}</div>
    </div>
    <a class="scroll-cue" href="#alliance" data-scroll="#alliance" aria-label="${u('ind.scroll')}"><span>${ic('arrow-down')}</span></a></section>
  ${alliance()}
  <section class="sec" id="industries" style="padding-top:clamp(2rem,4vw,3rem)"><div class="wrap">
    <div class="sec-head"><span class="eyebrow rv">${u('home.indKicker')}</span><h2 class="h2 rv">${u('home.indLead')}</h2><p class="lede rv">${u('home.indP')}</p></div>
    <div class="index">${rows}</div></div></section>
  <section class="sec"><div class="wrap"><div class="sec-head"><span class="eyebrow rv">${u('home.stepsKicker')}</span></div><div class="cols3">${steps}</div></div></section>
  <section class="sec"><div class="wrap"><div class="sec-head"><span class="eyebrow rv">${u('home.solKicker')}</span><h2 class="h2 rv">${u('home.solTitle')}</h2></div><div class="tiles">${tiles}</div></div></section>
  ${experts()}
  ${contact()}`;
}

function alliance() {
  const n = state.industries.length;
  const kpis = [[n, 'home.kIndustries'], [state.solutions.size, 'home.kSolutions'], [14, 'ind.stPoc'], [1, 'ind.stReply']]
    .map(([v, k]) => `<div><strong>${v}</strong><span>${u(k)}</span></div>`).join('');
  return `<section class="alliance" id="alliance"><div class="wrap">
    ${aura(photo('skyline', { w: 1600, ratio: '1200 / 400', cls: 'ph-wide', eager: true, fb: banner('bfsi', [ICONS['mail-check'], ICONS['shield-check'], ICONS.database], 'a') }) + `<div class="al-card glass"><span class="eyebrow">${u('home.allKicker')}</span><h2>${esc(fill(u('home.allTitle'), { n }))}</h2><p>${u('home.allP')}</p></div>`, 'al-frame rv')}
    <div class="kpis rv">${kpis}</div></div></section>`;
}

function industryPage() {
  const id = state.route.id;
  const d = industryOf(id);
  if (!d) return notFound(u('ind.notFound'));
  const name = t(d.name);
  const chips = (d.regulations || []).map((r) => `<span class="chip">${ic('shield')} ${esc(t(r))}</span>`).join('');
  const n = d.chapters.length;
  const picks = d.chapters.map((c, k) => `<button data-goto="${k}"><b>${roman(k + 1)}</b><span>${esc(t(c.challenge.title))}</span>${ic('arrow-right')}</button>`).join('');
  const lnav = [['overview', 'ind.lnOverview'], ['story', 'ind.chKicker'], ['bundle', 'ind.lnSolutions'], ['why', 'ind.lnWhy'], ['approach', 'ind.lnApproach'], ['experts', 'ind.lnExperts'], ['faq', 'ind.lnFaq']]
    .map(([k, key]) => `<a href="#${k}" data-scroll="#${k}" data-spy="${k}">${u(key)}</a>`).join('');

  const chapters = d.chapters.map((c, k) => {
    const chips2 = c.solutions.map((s) => `<a href="#solution-${s}" data-go="solution-${s}">${ic(sol(s).icon)} ${esc(sol(s).name)}</a>`).join('');
    const pts = (c.response.points || []).map((p) => `<li class="pt">${ic('check')}<span>${esc(t(p))}</span></li>`).join('');
    const stat = c.challenge.stat ? `<div class="stat"><strong>${esc(c.challenge.stat.value)}</strong><span>${esc(t(c.challenge.stat.label))}</span></div>` : '';
    const m = c.response.metric ? `<div class="metric"><strong data-count="${esc(c.response.metric.value)}">${esc(c.response.metric.value)}</strong><span>${esc(t(c.response.metric.label))}</span></div>` : '';
    const cm = state.images.byChapter?.[`${id}/${c.id}`] || [];
    const media = cm.length ? `<div class="ch-media" style="--n:${cm.length}">${cm.map((key) => photo(key, { w: 800, ratio: '16 / 10' })).join('')}</div>` : '';
    return `<section class="chapter" id="ch-${k}"><div class="wrap"><div class="stage">
      <div class="numeral" aria-hidden="true">${roman(k + 1)}</div>
      <article class="pain">${media}<span class="tag">${u('ind.challenge')} <i>${roman(k + 1)} / ${roman(n)}</i></span>
        <h3>${esc(t(c.challenge.title))}</h3><p>${esc(t(c.challenge.body))}</p>${stat}
        <div class="persona">${ic('user-round')}<span>${u('ind.felt')} <b>${esc(t(c.persona))}</b></span></div></article>
      <div class="bridge" aria-hidden="true"></div>
      <article class="ans glass"><div class="ans-in"><span class="tag">${u('ind.answer')}</span>
        <div class="solchips"><span class="sr">${u('ind.solvedBy')}</span>${chips2}</div>
        <h3>${esc(t(c.response.title))}</h3><p>${esc(t(c.response.body))}</p>
        <ul class="points">${pts}</ul>${m}</div></article>
    </div></div></section>`;
  }).join('');

  // Flow (borrowing the logic of enterprise-services pages, not their look): who we are for you -> proof points -> your challenges
  // -> the packaged answers -> why us -> how we work / PoC -> people -> FAQ -> other sectors -> contact.
  const stats = [[n, 'ind.stChallenges'], [d.bundle.length, 'ind.stSolutions'], [14, 'ind.stPoc'], [1, 'ind.stReply']]
    .map(([v, key]) => `<div><strong>${v}</strong><span>${u(key)}</span></div>`).join('');

  const cards = d.bundle.map((s, k) => {
    const covers = d.chapters.map((c, j) => (c.solutions.includes(s) ? roman(j + 1) : '')).filter(Boolean).join(' · ');
    const x = sol(s);
    const th = thumb(ICONS[x.icon] || ICONS.box, `${id}${k}`, k);
    return link(`solution-${s}`, `<div class="sc-img">${state.images.bySolution?.[s] ? photo(state.images.bySolution[s], { w: 700, ratio: '1', nocap: true, fb: th }) : th}</div>
      <div class="sc-body"><h3>${esc(x.name)}</h3><p>${esc(t(x.description))}</p>
        <div class="sc-foot"><span>${u('ind.coversLabel')} <b>${covers}</b></span><span class="more"><i></i>${u('ind.learn')}</span></div></div>`, 'sc rv');
  }).join('');

  const why = d.outcomes.map((o, k) => `<div class="why-c rv"><span class="why-i">${ic(['shield-check', 'check-circle-2', 'zap'][k % 3])}</span><h3>${esc(t(o.title))}</h3><p>${esc(t(o.body))}</p></div>`).join('');
  const steps = ui('home.steps').map((st, k) => `<div class="col rv"><span class="n">${roman(k + 1)}</span><h3>${t(st.t)}</h3><p>${t(st.d)}</p></div>`).join('');
  const faq = d.faq.map((f) => `<details class="rv"><summary>${esc(t(f.q))}${ic('plus')}</summary><div class="a">${esc(t(f.a))}</div></details>`).join('');
  const others = state.industries.filter((i) => i.id !== id).map((i, k) => link(`industry-${i.id}`,
    `<div class="oc-img">${photo(state.images.heroByIndustry?.[i.id] || '', { w: 700, ratio: '240 / 190', nocap: true, fb: thumb(ICONS[i.icon] || ICONS.box, `o${i.id}`, k + 1, true) })}</div><div class="oc-b"><span>${esc(t(i.name))}</span>${ic('arrow-up-right')}</div>`, 'oc rv')).join('');

  return `
  <nav class="lnav" id="lnav" aria-label="${esc(name)}"><div class="wrap"><span class="lnav-t">${esc(name)}</span><div class="lnav-l">${lnav}</div>
    <a class="btn btn-red" href="#contact" data-scroll="#contact">${u('ind.talk')}</a></div></nav>
  <section class="hero ind-hero"><div class="wrap">
    <div class="crumbs hero-in">${link('home', 'V-TECH FOUNDRY')} / ${link('home', u('ind.crumbIndustry'))} / <span>${esc(name)}</span></div>
    <div class="ind-top"><div>
      <h1 class="display hero-in" style="animation-delay:.08s">${esc(t(d.title))}</h1>
      <p class="lede hero-in" style="animation-delay:.16s">${esc(t(d.tagline))}</p></div>
      <div class="ind-cta hero-in" style="animation-delay:.22s"><div class="chips">${chips}</div>
        <div class="actions"><a class="btn btn-red" href="#contact" data-scroll="#contact">${u('ind.talk')} ${ic('arrow-right')}</a>
        <a class="btn btn-line" href="#story" data-scroll="#story">${ic('arrow-down')} ${u('ind.scroll')}</a></div></div></div>
  </div></section>
  <section class="sec ov" id="overview"><div class="wrap">
    <div class="ov-row"><div class="ov-art rv">${aura(photo(state.images.heroByIndustry?.[id] || state.images.byIndustry?.[id] || 'skyline', { w: 1400, ratio: '4 / 3', eager: true, caption: d.name, fb: banner(id, d.bundle.map((s) => ICONS[sol(s).icon] || ICONS.box), 'h') }))}</div>
      <div class="ov-copy"><span class="eyebrow rv">${u('ind.ovKicker')}</span><h2 class="h2 rv">${u('ind.ovTitle')}</h2>
        <p class="ov-line rv">${esc(fill(u('ind.ovP1'), { n: d.bundle.length, name }))}</p><p class="ov-line sub rv">${u('ind.ovP2')}</p>
        <div class="kpis rv">${stats}</div></div></div></div></section>
  <section class="intro" id="intro"><div class="wrap"><div class="grid">
    <div><span class="eyebrow rv">${u('ind.chKicker')}</span><h2 class="h2 rv">${esc(fill(u('ind.chTitle'), { name }))}</h2><p class="lede rv">${esc(t(d.challengesIntro))}</p></div>
    <div class="pick rv"><span class="eyebrow">${u('ind.pick')}</span>${picks}</div></div></div></section>
  <div class="story" id="story">${chapters}</div>
  <section class="sec" id="bundle"><div class="wrap"><div class="sec-head"><span class="eyebrow rv">${u('ind.bundleKicker')}</span><h2 class="h2 rv">${u('ind.bundleTitle')}</h2></div><div class="scs">${cards}</div></div></section>
  <section class="sec why" id="why"><div class="wrap"><div class="sec-head"><span class="eyebrow rv">${u('ind.whyKicker')}</span><h2 class="h2 rv">${u('ind.whyTitle')}</h2></div><div class="whys">${why}</div></div></section>
  <section class="sec" id="approach"><div class="wrap"><div class="sec-head"><span class="eyebrow rv">${u('home.stepsKicker')}</span><h2 class="h2 rv">${u('ind.approachTitle')}</h2></div><div class="cols3">${steps}</div>
    <div class="poc glass rv" style="margin-top:clamp(2rem,4vw,3.5rem)"><div><span class="eyebrow">${u('ind.pocKicker')}</span><h2 class="h2">${u('ind.pocTitle')}</h2><p class="lede">${u('ind.pocP')}</p></div>
    <a class="btn btn-red" href="#contact" data-scroll="#contact" data-prefill="poc">${u('ind.pocBtn')} ${ic('arrow-right')}</a></div></div></section>
  ${experts()}
  <section class="sec" id="faq" style="padding-top:0"><div class="wrap"><div class="sec-head"><span class="eyebrow rv">${u('ind.faqKicker')}</span></div><div class="faq">${faq}</div></div></section>
  <section class="sec" id="others" style="padding-top:0"><div class="wrap"><div class="sec-head"><span class="eyebrow rv">${u('ind.otherIndustries')}</span><h2 class="h2 rv">${u('ind.othersTitle')}</h2></div><div class="ocs">${others}</div></div></section>
  ${contact(id)}`;
}

function solutionPage() {
  const id = state.route.id;
  const s = state.solutions.get(id);
  if (!s) return notFound(u('sol.notFound'));
  const dt = s.detail;
  const uses = state.industries.flatMap((i) => i.chapters.filter((c) => c.solutions.includes(id)).map((c) => ({ i, c })));
  const tiles = uses.map(({ i, c }) => link(`industry-${i.id}`, `${ic(i.icon, 'lead')}<span class="chip">${esc(t(i.name))}</span><h3>${esc(t(c.challenge.title))}</h3><p>${esc(t(c.response.title))}</p><div class="foot"><span>${u('home.read')}</span>${ic('arrow-up-right')}</div>`, 'tile glass rv')).join('');
  const stories = uses.length ? `<section class="sec" id="stories" style="padding-top:0"><div class="wrap"><div class="sec-head"><span class="eyebrow rv">${u('sol.where')}</span></div><div class="tiles">${tiles}</div></div></section>` : '';

  // Solutions with rich detail follow a buyer's path: what is it -> proof -> which problem is mine -> is it for people like me -> stories -> try it -> talk.
  let lnav = '', stats = '', overview = '', solve = '', modules = '', who = '', poc = '';
  if (dt) {
    const links = [['overview', 'sol.lnOverview'], ['solve', 'sol.lnSolve'], ...(dt.modules ? [['modules', 'sol.lnModules']] : []), ['who', 'sol.lnWho'], ...(uses.length ? [['stories', 'sol.lnStories']] : [])]
      .map(([k, key]) => `<a href="#${k}" data-scroll="#${k}" data-spy="${k}">${u(key)}</a>`).join('');
    lnav = `<nav class="lnav" id="lnav" aria-label="${esc(s.name)}"><div class="wrap"><span class="lnav-t">${esc(s.name)}</span><div class="lnav-l">${links}</div>
      <a class="btn btn-red" href="#contact" data-scroll="#contact">${u('ind.talk')}</a></div></nav>`;
    stats = `<div class="statband hero-in" style="animation-delay:.34s">${(dt.stats || []).map((x) => `<div><strong>${esc(x.value)}</strong><span>${esc(t(x.label))}</span></div>`).join('')}</div>`;
    overview = `<section class="sec ov" id="overview"><div class="wrap"><div class="ov-grid"><div><span class="eyebrow rv">${u('sol.overview')}</span></div>
      <div><p class="ov-text rv">${esc(t(s.description))}</p><div class="chips rv">${(dt.capabilities || []).map((c) => `<span class="chip">${ic('check')} ${esc(t(c))}</span>`).join('')}</div></div></div></div></section>`;
    const pairs = (dt.pairs || []).map((p, k) => {
      const m = p.module;
      return `<article class="pair rv"><div class="pair-q"><span class="tag">${u('sol.challenge')} ${roman(k + 1)}</span><h3>${esc(t(p.challenge.title))}</h3>
        <p class="impact"><b>${u('sol.impact')}</b> ${esc(t(p.challenge.impact))}</p></div>
        <div class="pair-go" aria-hidden="true">${ic('arrow-right')}</div>
        <div class="pair-a glass"><span class="num">${roman(k + 1)}</span><div><span class="tag">${u('sol.answer')}</span><h4>${esc(t(m.title))}</h4><p>${esc(t(m.body))}</p>
          ${m.metric ? `<div class="metric sm"><strong>${esc(m.metric.value)}</strong><span>${esc(t(m.metric.label))}</span></div>` : ''}</div></div></article>`;
    }).join('');
    const sk = dt.problemsKicker || { en: u('sol.solveKicker') }, st = dt.problemsTitle;
    const probs = (dt.problems || []).map((p, k) => `<article class="prob rv"><span class="num">${roman(k + 1)}</span><div><h3>${esc(t(p.title))}</h3><p class="impact"><b>${u('sol.impact')}</b> ${esc(t(p.impact))}</p></div></article>`).join('');
    solve = dt.problems
      ? `<section class="sec" id="solve"><div class="wrap"><div class="sec-head"><span class="eyebrow rv">${esc(t(sk))}</span><h2 class="h2 rv">${esc(t(st))}</h2></div><div class="probs">${probs}</div></div></section>`
      : `<section class="sec" id="solve"><div class="wrap"><div class="sec-head"><span class="eyebrow rv">${u('sol.solveKicker')}</span><h2 class="h2 rv">${u('sol.solveTitle')}</h2><p class="lede rv">${u('sol.solveP')}</p></div><div class="pairs">${pairs}</div></div></section>`;

    const mods = (dt.modules || []).map((m, k) => `<article class="mod rv"><span class="num">${roman(k + 1)}</span><div><h3>${esc(t(m.title))}</h3><p>${esc(t(m.body))}</p></div></article>`).join('');
    modules = dt.modules ? `<section class="sec" id="modules" style="padding-top:0"><div class="wrap"><div class="sec-head"><span class="eyebrow rv">${esc(t(dt.modulesKicker))}</span><h2 class="h2 rv">${esc(t(dt.modulesTitle))}</h2></div><div class="mods">${mods}</div></div></section>` : '';
    const aud = (dt.audiences || []).map((a) => {
      const ind = a.industry && industryOf(a.industry);
      const inner = `${ic(a.icon || 'box', 'lead')}<h3>${esc(t(a.name))}</h3><p>${esc(t(a.body))}</p>${ind ? `<div class="foot"><span>${u('sol.seeStory')}</span>${ic('arrow-up-right')}</div>` : ''}`;
      return ind ? link(`industry-${ind.id}`, inner, 'tile glass rv') : `<div class="tile glass rv">${inner}</div>`;
    }).join('');
    who = `<section class="sec" id="who" style="padding-top:0"><div class="wrap"><div class="sec-head"><span class="eyebrow rv">${u('sol.whoKicker')}</span><h2 class="h2 rv">${u('sol.whoTitle')}</h2><p class="lede rv">${u('sol.whoP')}</p></div><div class="tiles t3">${aud}</div></div></section>`;
    poc = `<section class="sec" style="padding-top:0"><div class="wrap"><div class="poc glass rv"><div><span class="eyebrow">${u('ind.pocKicker')}</span><h2 class="h2">${u('ind.pocTitle')}</h2><p class="lede">${u('ind.pocP')}</p></div>
      <a class="btn btn-red" href="#contact" data-scroll="#contact" data-prefill="poc">${u('ind.pocBtn')} ${ic('arrow-right')}</a></div></div></section>`;
  }
  return `
  ${lnav}
  <section class="hero ind-hero"><div class="wrap"><div class="hero-grid"><div class="hero-copy">
    <div class="crumbs hero-in">${link('home', 'V-TECH FOUNDRY')} / <span>${u('sol.kicker')}</span> / <span>${esc(s.name)}</span></div>
    <h1 class="display hero-in" style="animation-delay:.08s">${esc(s.title ? t(s.title) : s.name)}</h1><p class="lede hero-in" style="animation-delay:.16s">${esc(t(dt ? dt.lead : s.description))}</p>
    <div class="actions hero-in" style="margin-top:2rem;animation-delay:.24s"><a class="btn btn-red" href="#contact" data-scroll="#contact">${u('ind.talk')} ${ic('arrow-right')}</a>
      ${dt ? `<a class="btn btn-line" href="#solve" data-scroll="#solve">${ic('arrow-down')} ${u('sol.seeSolve')}</a>` : ''}</div></div>
    <div class="hero-art hero-in" style="animation-delay:.2s">${aura(photo(state.images.bySolution?.[id] || 'conference', { w: 1200, ratio: '4 / 3', eager: true, fb: art('tile', s.icon, 's') }))}</div></div>${stats}</div></section>
  ${overview}${solve}${modules}${who}${stories}${poc}
  ${experts()}
  ${contact()}`;
}
const notFound = (msg) => `<section class="hero"><div class="wrap"><h1 class="display">${esc(msg)}</h1><p class="lede" style="margin-top:1.4rem">${link('home', '\u2190 V-TECH FOUNDRY', 'red')}</p></div></section>`;

/* ---------------------------------------------------------------- behaviour */
function bindChrome() {
  const hdr = $('#hdr');
  const onScroll = () => hdr.classList.toggle('solid', scrollY > 24);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  const dds = $$('.dd');
  const closeAll = () => dds.forEach((d) => { d.classList.remove('open'); $('.nav-btn', d).setAttribute('aria-expanded', 'false'); });
  const hoverable = () => matchMedia('(hover:hover) and (min-width:961px)').matches;
  dds.forEach((d) => {
    const b = $('.nav-btn', d);
    const set = (o) => { closeAll(); d.classList.toggle('open', o); b.setAttribute('aria-expanded', String(o)); };
    b.addEventListener('click', (e) => { e.stopPropagation(); set(!d.classList.contains('open')); });
    if (!d.classList.contains('mega-dd')) { // the mega menu opens on click and closes with its button, ESC or an outside click
      d.addEventListener('mouseenter', () => hoverable() && set(true));
      d.addEventListener('mouseleave', () => hoverable() && set(false));
    }
  });
  $('#burger').addEventListener('click', (e) => { const o = $('#nav').classList.toggle('open'); e.currentTarget.setAttribute('aria-expanded', String(o)); });
  $$('[data-lang]').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));
  state.closeAll = closeAll;
}
// one delegated handler for the whole document (links, smooth scroll, copy buttons, dismissals)
document.addEventListener('click', (e) => {
  if (!e.target.closest('.dd')) state.closeAll?.();
  if (e.target.closest('[data-mega-close]')) { state.closeAll?.(); return; }
  const nav = e.target.closest('[data-go]');
  if (nav) { e.preventDefault(); state.closeAll?.(); $('#nav')?.classList.remove('open'); go(nav.dataset.go); return; }
  const a = e.target.closest('[data-scroll]');
  if (a) {
    const target = $(a.dataset.scroll); if (!target) return;
    e.preventDefault(); $('#nav')?.classList.remove('open'); state.closeAll?.();
    if (a.dataset.prefill === 'poc') { const nn = $('#f-need'); if (nn && !nn.value) nn.value = 'PoC sandbox'; }
    scrollToEl(target); return;
  }
  const cp = e.target.closest('[data-copy]');
  if (cp) {
    const done = () => { const s = $('span', cp); s.textContent = u('cta.copied'); setTimeout(() => { s.textContent = u('cta.copy'); }, 1400); };
    const sel = () => { const v = cp.previousElementSibling?.querySelector('.v'); if (v) { const r = document.createRange(); r.selectNodeContents(v); getSelection().removeAllRanges(); getSelection().addRange(r); } done(); };
    (navigator.clipboard?.writeText(cp.dataset.copy) ?? Promise.reject()).then(done, sel);
  }
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') state.closeAll?.(); });

function scrollToEl(el, offset) {
  if (!el) return;
  const hdr = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 78;
  const off = offset ?? hdr + ($('#lnav') ? $('#lnav').offsetHeight : 0) + 16;
  scrollTo({ top: Math.max(0, el.getBoundingClientRect().top + scrollY - off), behavior: motionOK ? 'smooth' : 'auto' });
}

function bindForm() {
  const form = $('#lead'); if (!form) return;
  let mode = 'book';
  $$('.tabs button').forEach((b) => b.addEventListener('click', () => {
    mode = b.dataset.mode;
    $$('.tabs button').forEach((x) => x.classList.toggle('on', x === b));
    $('#need-wrap').hidden = mode === 'brief';
    $('#send span').textContent = u(mode === 'brief' ? 'cta.sendBrief' : 'cta.sendBook');
  }));
  const validate = () => {
    let ok = true;
    $$('.field', form).forEach((f) => {
      const i = $('input,select', f); const em = $('.em', f);
      if (!i || !i.required) return;
      let msg = '';
      if (!i.value.trim()) msg = u('cta.required');
      else if (i.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i.value)) msg = u('cta.badEmail');
      f.classList.toggle('err', !!msg); if (em) em.textContent = msg; if (msg) ok = false;
    });
    if (!form.consent.checked) ok = false;
    return ok;
  };
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (form.website.value) return; // honeypot
    if (!validate()) { ($('.err input', form) || form.consent).focus(); return; }
    const payload = { mode, lang: state.lang, page: hashOf(state.route), ts: new Date().toISOString(), ...Object.fromEntries(new FormData(form).entries()) };
    delete payload.website;
    const btn = $('#send'); btn.disabled = true;
    try {
      if (CONFIG.leadEndpoint) {
        const r = await fetch(CONFIG.leadEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(payload) });
        if (!r.ok) throw new Error(r.status);
      } else console.info('[lead: no endpoint configured]', payload);
      $('#cbox').classList.add('sent');
    } catch (err) { btn.disabled = false; const note = $('.demo-note', form) || btn.parentElement; note.textContent = u('cta.errorT'); }
  });
}

/* ---------------------------------------------------------------- motion */
// Everything here is time-based and fires once when an element enters the viewport (IntersectionObserver).
// Nothing is tied to scroll position, nothing is pinned, and the browser's own scrolling is left alone.
function countUp(el) {
  const m = String(el.dataset.count).match(/^([^\d]*)([\d.,]+)(.*)$/);
  if (!m) return;
  const target = parseFloat(m[2].replace(',', '.')); const dec = (m[2].split(/[.,]/)[1] || '').length;
  const t0 = performance.now(); const dur = 1100;
  el.textContent = m[1] + (0).toFixed(dec) + m[3];
  const tick = (now) => {
    const k = Math.min(1, (now - t0) / dur);
    el.textContent = m[1] + (target * (1 - Math.pow(1 - k, 3))).toFixed(dec) + m[3];
    if (k < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function watch(els, opts, cb) {
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => cb(entries.filter((e) => e.isIntersecting), io), opts);
  els.forEach((e) => io.observe(e));
  cleanups.push(() => io.disconnect());
}

function initMotion(instant) {
  const root = document.documentElement;
  root.classList.toggle('motion', motionOK && !!window.IntersectionObserver);
  if (!motionOK || !window.IntersectionObserver) return;
  if (instant) { $$('.rv, .chapter').forEach((e) => e.classList.add('in')); $$('[data-count]').forEach((e) => { e.textContent = e.dataset.count; }); }

  // 1. generic reveal: fade + rise, a short stagger between siblings that arrive together
  watch($$('.rv:not(.in)'), { rootMargin: '0px 0px -6% 0px', threshold: .08 }, (hits, io) => {
    hits.forEach((e, i) => {
      const el = e.target; const d = i * 90;
      el.style.transitionDelay = `${d}ms`; el.classList.add('in'); io.unobserve(el);
      setTimeout(() => { el.style.transitionDelay = ''; }, d + 1100);
    });
  });
  // 2. story chapters: challenge appears, then the answer resolves (one timed sequence per chapter)
  watch($$('.chapter:not(.in)'), { rootMargin: '0px 0px -18% 0px', threshold: .2 }, (hits, io) => {
    hits.forEach((e) => {
      e.target.classList.add('in'); io.unobserve(e.target);
      const c = $('[data-count]', e.target); if (c) setTimeout(() => countUp(c), 300);
    });
  });
  $$('.chapter:not(.in) [data-count]').forEach((c) => { c.textContent = c.dataset.count.replace(/[\d.,]+/, '0'); });
}

// sticky local nav (industry page): highlights the section on screen, like Apple's product sub-nav
function initLocalNav() {
  const links = $$('[data-spy]'); if (!links.length || !window.IntersectionObserver) return;
  const map = new Map(links.map((a) => [a.dataset.spy, a]));
  const on = (id) => links.forEach((a) => a.classList.toggle('on', a.dataset.spy === id));
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) on(map.has(e.target.id) ? e.target.id : null); }), { rootMargin: '-35% 0px -60% 0px' });
  [...map.keys(), 'others', 'contact'].forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
  cleanups.push(() => io.disconnect());
  const nav = $('#lnav'); const bar = () => nav.classList.toggle('stuck', nav.getBoundingClientRect().top <= (parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 78) + 1);
  addEventListener('scroll', bar, { passive: true }); bar();
  cleanups.push(() => removeEventListener('scroll', bar));
  // the chapter picker in the intro jumps straight to the matching chapter
  $$('[data-goto]').forEach((b) => b.addEventListener('click', () => scrollToEl($(`#ch-${b.dataset.goto}`))));
}

// FAQ: height eases open/closed instead of snapping
function initFaq() {
  $$('.faq details').forEach((d) => {
    const sum = $('summary', d); const body = $('.a', d);
    sum.addEventListener('click', (e) => {
      if (!motionOK || !d.animate) return;
      e.preventDefault();
      d.style.overflow = 'hidden';
      const opening = !d.open;
      const from = d.offsetHeight;
      if (opening) d.open = true;
      const to = opening ? sum.offsetHeight + body.offsetHeight : sum.offsetHeight;
      const a = d.animate({ height: [`${from}px`, `${to}px`] }, { duration: 420, easing: 'cubic-bezier(.2,.8,.2,1)' });
      a.onfinish = () => { if (!opening) d.open = false; d.style.overflow = ''; };
    });
  });
}

/* ---------------------------------------------------------------- lifecycle */
function teardownMotion() {
  cleanups.forEach((f) => f()); cleanups = [];
}

function render(instant = false) {
  document.documentElement.lang = state.lang;
  const { page, id } = state.route;
  const d = page === 'industry' ? industryOf(id) : null;
  const s = page === 'solution' ? state.solutions.get(id) : null;
  document.title = d ? `${t(d.name)} | V-TECH FOUNDRY` : s ? `${s.name} | V-TECH FOUNDRY` : 'V-TECH FOUNDRY';
  const body = page === 'industry' ? industryPage() : page === 'solution' ? solutionPage() : homePage();
  $('#app').innerHTML = `<div class="ambient" aria-hidden="true"><i></i><i></i><i></i></div><div class="grain" aria-hidden="true"></div>${header()}<main>${body}</main>${footer()}`;
  bindChrome(); bindForm(); initLocalNav(); initFaq();
  initMotion(instant);
  phCheck();
}

function setLang(l) {
  if (l === state.lang) return;
  state.lang = l; store.set('vth-lang', l);
  const y = scrollY; teardownMotion(); render(true); scrollTo(0, y);
}

loadData().then(() => { render(); }).catch((e) => {
  $('#app').innerHTML = '<section class="hero"><div class="wrap"><h1 class="display">Unable to load content</h1><p class="lede">Serve this folder over HTTP (for example <code>python3 -m http.server</code>); JSON cannot be fetched from file://.</p></div></section>';
  console.error(e);
});
