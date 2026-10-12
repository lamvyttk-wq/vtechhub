// V-TECH HUB landing engine. No build step, no libraries: plain ES module.
// Motion follows the Apple product-page model: native scrolling (no smooth-scroll hijack, no pinned/scrubbed scenes);
// things reveal once, on a timer, when they enter the viewport; navigation is a sticky local nav, a carousel and click-driven controls.
// Routing is hash based (#home, #industry-bfsi, #solution-dlp) so the whole site works as a single page.
import { CONFIG } from './config.js';
import { ICONS } from './icons.js';
import { scene } from './art.js';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* storage unavailable */ } }
};
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const state = {
  lang: store.get('vth-lang') || 'en',
  route: parseRoute(), ui: null, solutions: new Map(), industries: [], experts: []
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
    const [uiData, solutions, experts, ...inds] = await Promise.all([j('data/ui.json'), j('data/solutions.json'), j('data/experts.json').catch(() => []), ...CONFIG.industries.map((id) => j(`data/industries/${id}.json`).catch(() => null))]);
    raw = { ui: uiData, solutions, experts, industries: inds.filter(Boolean) };
  }
  state.ui = raw.ui;
  state.experts = raw.experts || [];
  state.industries = [...raw.industries].sort((a, b) => a.order - b.order);
  raw.solutions.forEach((s) => state.solutions.set(s.id, s));
  state.industries.forEach((i) => (i.newSolutions || []).forEach((s) => { if (!state.solutions.has(s.id)) state.solutions.set(s.id, s); }));
}
const industryOf = (id) => state.industries.find((i) => i.id === id);
const sol = (id) => state.solutions.get(id) || { id, name: id, icon: 'box', tagline: {}, description: {} };
const link = (hash, inner, cls = '', extra = '') => `<a href="#${hash}" data-go="${hash}" class="${cls}" ${extra}>${inner}</a>`;
const roman = (n) => String(n).padStart(2, '0');

/* ---------------------------------------------------------------- shared chrome */
function header() {
  const cur = state.route.page === 'industry' ? state.route.id : '';
  const inds = state.industries.map((i) => link(`industry-${i.id}`, `${ic(i.icon)}<span>${esc(t(i.name))}<small>${esc(t(i.tagline))}</small></span>`)).join('');
  const sols = [...state.solutions.values()].map((s) => link(`solution-${s.id}`, `${ic(s.icon)}<span>${esc(s.name)}<small>${esc(t(s.tagline))}</small></span>`)).join('');
  return `<header class="hdr" id="hdr"><div class="wrap">
    ${link('home', '<b>V-TECH</b><span>HUB</span>', 'logo', 'aria-label="V-TECH HUB"')}
    <nav class="nav" id="nav" aria-label="Primary">
      <div class="dd"><button class="nav-btn ${state.route.page === 'solution' ? 'on' : ''}" aria-expanded="false" aria-haspopup="true">${u('nav.solutions')} ${ic('chevron-down')}</button><div class="panel wide">${sols}</div></div>
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
      <div>${link('home', '<b>V-TECH</b><span>HUB</span>', 'logo')}<p style="margin-top:1.2rem">${u('foot.powered')} <a href="${CONFIG.website}" target="_blank" rel="noopener"><b>VNETWORK</b></a></p></div>
      <div class="list"><span>${esc(CONFIG.phoneDisplay)}</span><span>${esc(CONFIG.email)}</span><a href="${CONFIG.website}" target="_blank" rel="noopener">vnetwork.vn</a></div>
      <div class="list">${CONFIG.offices.map((o) => `<p>${esc(o)}</p>`).join('')}</div>
    </div>
    <div class="fine"><span>\u00a9 2013 VNETWORK JSC. ${u('foot.rights')}</span><span><a href="${CONFIG.website}" target="_blank" rel="noopener">${u('foot.terms')}</a> \u00b7 <a href="${CONFIG.website}" target="_blank" rel="noopener">${u('foot.privacy')}</a></span></div>
  </div></footer>`;
}

const art = (kind, icon, id) => scene(kind, ICONS[icon] || ICONS.box, id);

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
  const bfsi = industryOf('bfsi') || state.industries[0];
  const c0 = bfsi.chapters[0];
  const rows = state.industries.map((i) => link(`industry-${i.id}`,
    `${ic(i.icon, 'lead')}<h3>${esc(t(i.name))}</h3><p>${esc(t(i.tagline))}</p><span class="go">${ic('arrow-right')}</span>`, 'ix rv')).join('');
  const steps = ui('home.steps').map((s, k) => `<div class="col rv"><span class="n">${roman(k + 1)}</span><h3>${t(s.t)}</h3><p>${t(s.d)}</p></div>`).join('');
  const tiles = [...state.solutions.values()].map((s) => link(`solution-${s.id}`,
    `${ic(s.icon, 'lead')}<h3>${esc(s.name)}</h3><p>${esc(t(s.tagline))}</p><div class="foot"><span>${u('ind.learn')}</span>${ic('arrow-up-right')}</div>`, 'tile glass rv')).join('');
  return `
  <section class="hero"><div class="wrap"><div class="grid">
    <div>
      <span class="eyebrow hero-in">${u('home.eyebrow')}</span>
      <h1 class="display hero-in" style="animation-delay:.08s">${u('home.heroA')} <em>${u('home.heroB')}</em></h1>
      <p class="lede hero-in" style="animation-delay:.16s">${u('home.heroP')}</p>
      <div class="actions hero-in" style="animation-delay:.24s"><a class="btn btn-red" href="#industries" data-scroll="#industries">${u('home.explore')} ${ic('arrow-right')}</a>
        <a class="btn btn-line" href="#contact" data-scroll="#contact">${u('nav.request')}</a></div>
    </div>
    <aside class="preview hero-in" style="animation-delay:.3s" aria-label="${u('home.previewKicker')}">
      ${art('cloud', 'cloud', 'h')}
      <div class="glass card-a">
        <div class="lbl"><span class="eyebrow">${esc(t(bfsi.name))}</span><span class="chip">${u('home.previewKicker')}</span></div>
        <p class="was">${esc(t(c0.challenge.title))}</p>
        <div class="rule">${ic('arrow-down')}<i></i></div>
        <p class="now">${esc(t(c0.response.title))}</p>
        <div class="sol solchips">${c0.solutions.map((s) => `<a href="#solution-${s}" data-go="solution-${s}">${ic(sol(s).icon)} ${esc(sol(s).name)}</a>`).join('')}</div>
        <p class="cap">${u('home.previewP')}</p>
      </div>
      <div class="glass card-b" aria-hidden="true"></div>
    </aside>
  </div></div></section>
  <section class="sec" id="industries" style="padding-top:clamp(2rem,4vw,3rem)"><div class="wrap">
    <div class="sec-head"><span class="eyebrow rv">${u('home.indKicker')}</span><h2 class="h2 rv">${u('home.indLead')}</h2><p class="lede rv">${u('home.indP')}</p></div>
    <div class="index">${rows}</div></div></section>
  <section class="sec"><div class="wrap"><div class="sec-head"><span class="eyebrow rv">${u('home.stepsKicker')}</span></div><div class="cols3">${steps}</div></div></section>
  <section class="sec"><div class="wrap"><div class="sec-head"><span class="eyebrow rv">${u('home.solKicker')}</span><h2 class="h2 rv">${u('home.solTitle')}</h2></div><div class="tiles">${tiles}</div></div></section>
  ${experts()}
  ${contact()}`;
}

function industryPage() {
  const id = state.route.id;
  const d = industryOf(id);
  if (!d) return notFound(u('ind.notFound'));
  const chips = (d.regulations || []).map((r) => `<span class="chip">${ic('shield')} ${esc(t(r))}</span>`).join('');
  const sw = state.industries.map((i) => link(`industry-${i.id}`, esc(t(i.name)), i.id === id ? 'on' : '')).join('');
  const n = d.chapters.length;
  const picks = d.chapters.map((c, k) => `<button data-goto="${k}"><b>${roman(k + 1)}</b><span>${esc(t(c.challenge.title))}</span>${ic('arrow-right')}</button>`).join('');
  const lnav = [['intro', 'ind.lnOverview'], ['story', 'ind.chKicker'], ['bundle', 'ind.lnSolutions'], ['why', 'ind.whyKicker'], ['faq', 'ind.lnFaq']]
    .map(([id, key]) => `<a href="#${id}" data-scroll="#${id}" data-spy="${id}">${u(key)}</a>`).join('');

  const chapters = d.chapters.map((c, k) => {
    const chips2 = c.solutions.map((s) => `<a href="#solution-${s}" data-go="solution-${s}">${ic(sol(s).icon)} ${esc(sol(s).name)}</a>`).join('');
    const pts = (c.response.points || []).map((p) => `<li class="pt">${ic('check')}<span>${esc(t(p))}</span></li>`).join('');
    const stat = c.challenge.stat ? `<div class="stat"><strong>${esc(c.challenge.stat.value)}</strong><span>${esc(t(c.challenge.stat.label))}</span></div>` : '';
    const m = c.response.metric ? `<div class="metric"><strong data-count="${esc(c.response.metric.value)}">${esc(c.response.metric.value)}</strong><span>${esc(t(c.response.metric.label))}</span></div>` : '';
    return `<section class="chapter" id="ch-${k}"><div class="wrap"><div class="stage">
      <div class="numeral" aria-hidden="true">${roman(k + 1)}</div>
      <article class="pain"><span class="tag">${u('ind.challenge')} <i>${roman(k + 1)} / ${roman(n)}</i></span>
        <h3>${esc(t(c.challenge.title))}</h3><p>${esc(t(c.challenge.body))}</p>${stat}
        <div class="persona">${ic('user-round')}<span>${u('ind.felt')} <b>${esc(t(c.persona))}</b></span></div></article>
      <div class="bridge" aria-hidden="true"></div>
      <article class="ans glass"><div class="ans-in"><span class="tag">${u('ind.answer')}</span>
        <div class="solchips"><span class="sr">${u('ind.solvedBy')}</span>${chips2}</div>
        <h3>${esc(t(c.response.title))}</h3><p>${esc(t(c.response.body))}</p>
        <ul class="points">${pts}</ul>${m}</div></article>
    </div></div></section>`;
  }).join('');

  const bundle = d.bundle.map((s) => {
    const covers = d.chapters.map((c, k) => (c.solutions.includes(s) ? roman(k + 1) : '')).filter(Boolean).join(' \u00b7 ');
    const x = sol(s);
    return link(`solution-${s}`, `${ic(x.icon, 'lead')}<h3>${esc(x.name)}</h3><p>${esc(t(x.description))}</p>
      <div class="foot"><span>${u('ind.coversLabel')} <b>${covers}</b></span>${ic('arrow-up-right')}</div>`, 'tile glass');
  }).join('');
  const outcomes = d.outcomes.map((o, k) => `<div class="col rv"><span class="n">${roman(k + 1)}</span><h3>${esc(t(o.title))}</h3><p>${esc(t(o.body))}</p></div>`).join('');
  const faq = d.faq.map((f) => `<details class="rv"><summary>${esc(t(f.q))}${ic('plus')}</summary><div class="a">${esc(t(f.a))}</div></details>`).join('');

  return `
  <nav class="lnav" id="lnav" aria-label="${esc(t(d.name))}"><div class="wrap"><span class="lnav-t">${esc(t(d.name))}</span><div class="lnav-l">${lnav}</div>
    <a class="btn btn-red" href="#contact" data-scroll="#contact">${u('ind.talk')}</a></div></nav>
  <section class="hero ind-hero"><div class="wrap"><div class="hero-grid"><div class="hero-copy">
    <div class="crumbs hero-in">${link('home', 'V-TECH HUB')} / ${link('home', u('ind.crumbIndustry'))} / <span>${esc(t(d.name))}</span></div>
    <h1 class="display hero-in" style="animation-delay:.08s">${esc(t(d.title))}</h1>
    <p class="lede hero-in" style="animation-delay:.16s">${esc(t(d.tagline))}</p>
    <div class="chips hero-in" style="animation-delay:.2s">${chips}</div>
    <div class="actions hero-in" style="animation-delay:.24s"><a class="btn btn-red" href="#contact" data-scroll="#contact">${u('ind.talk')} ${ic('arrow-right')}</a>
      <a class="btn btn-line" href="#story" data-scroll="#story">${ic('arrow-down')} ${u('ind.scroll')}</a></div>
    <nav class="switcher hero-in" style="animation-delay:.3s" aria-label="${u('ind.otherIndustries')}">${sw}</nav></div>
    <div class="hero-art hero-in" style="animation-delay:.2s">${art('tile', d.icon, 'i')}</div></div></div></section>
  <section class="intro" id="intro"><div class="wrap"><div class="grid">
    <div><span class="eyebrow rv">${u('ind.chKicker')}</span><h2 class="h2 rv">${esc(t(d.name))}</h2><p class="lede rv">${esc(t(d.challengesIntro))}</p></div>
    <div class="pick rv"><span class="eyebrow">${u('ind.pick')}</span>${picks}</div></div></div></section>
  <div class="story" id="story">
    ${chapters}</div>
  <section class="sec" id="bundle"><div class="wrap"><div class="sec-head"><span class="eyebrow rv">${u('ind.bundleKicker')}</span><h2 class="h2 rv">${u('ind.bundleTitle')}</h2></div></div>
    <div class="carousel rv" id="rail" aria-roledescription="carousel" aria-label="${u('ind.bundleKicker')}"><div class="rail" tabindex="0">${bundle}</div>
      <div class="wrap rail-ctl"><div class="dots" aria-hidden="true">${d.bundle.map(() => '<i></i>').join('')}</div>
        <div class="arrows"><button type="button" data-rail="-1" aria-label="${u('ind.prev')}">${ic('arrow-left')}</button><button type="button" data-rail="1" aria-label="${u('ind.next')}">${ic('arrow-right')}</button></div></div></div></section>
  <section class="sec" id="why" style="padding-top:0"><div class="wrap"><div class="sec-head"><span class="eyebrow rv">${u('ind.whyKicker')}</span></div><div class="cols3">${outcomes}</div></div></section>
  <section class="sec" id="faq" style="padding-top:0"><div class="wrap"><div class="sec-head"><span class="eyebrow rv">${u('ind.faqKicker')}</span></div><div class="faq">${faq}</div></div></section>
  <section class="sec" style="padding-top:0"><div class="wrap"><div class="poc glass rv"><div><span class="eyebrow">${u('ind.pocKicker')}</span><h2 class="h2">${u('ind.pocTitle')}</h2><p class="lede">${u('ind.pocP')}</p></div>
    <a class="btn btn-red" href="#contact" data-scroll="#contact" data-prefill="poc">${u('ind.pocBtn')} ${ic('arrow-right')}</a></div></div></section>
  ${experts()}
  ${contact(id)}`;
}

function solutionPage() {
  const id = state.route.id;
  const s = state.solutions.get(id);
  if (!s) return notFound(u('sol.notFound'));
  const uses = state.industries.flatMap((i) => i.chapters.filter((c) => c.solutions.includes(id)).map((c) => ({ i, c })));
  const tiles = uses.map(({ i, c }) => link(`industry-${i.id}`, `${ic(i.icon, 'lead')}<span class="chip">${esc(t(i.name))}</span><h3>${esc(t(c.challenge.title))}</h3><p>${esc(t(c.response.title))}</p><div class="foot"><span>${u('home.read')}</span>${ic('arrow-up-right')}</div>`, 'tile glass rv')).join('');
  return `
  <section class="hero ind-hero"><div class="wrap"><div class="hero-grid"><div class="hero-copy">
    <div class="crumbs hero-in">${link('home', 'V-TECH HUB')} / <span>${u('sol.kicker')}</span> / <span>${esc(s.name)}</span></div>
    <h1 class="display hero-in" style="animation-delay:.08s">${esc(s.name)}</h1><p class="lede hero-in" style="animation-delay:.16s">${esc(t(s.description))}</p>
    <div class="actions hero-in" style="margin-top:2rem;animation-delay:.24s"><a class="btn btn-red" href="#contact" data-scroll="#contact">${u('ind.talk')} ${ic('arrow-right')}</a></div></div>
    <div class="hero-art hero-in" style="animation-delay:.2s">${art('tile', s.icon, 's')}</div></div></div></section>
  <section class="sec" style="padding-top:0"><div class="wrap"><div class="sec-head"><span class="eyebrow rv">${u('sol.where')}</span></div><div class="tiles">${tiles}</div></div></section>
  ${experts()}
  ${contact()}`;
}
const notFound = (msg) => `<section class="hero"><div class="wrap"><h1 class="display">${esc(msg)}</h1><p class="lede" style="margin-top:1.4rem">${link('home', '\u2190 V-TECH HUB', 'red')}</p></div></section>`;

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
    d.addEventListener('mouseenter', () => hoverable() && set(true));
    d.addEventListener('mouseleave', () => hoverable() && set(false));
  });
  $('#burger').addEventListener('click', (e) => { const o = $('#nav').classList.toggle('open'); e.currentTarget.setAttribute('aria-expanded', String(o)); });
  $$('[data-lang]').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));
  state.closeAll = closeAll;
}
// one delegated handler for the whole document (links, smooth scroll, copy buttons, dismissals)
document.addEventListener('click', (e) => {
  if (!e.target.closest('.dd')) state.closeAll?.();
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
      const c = $('[data-count]', e.target); if (c) setTimeout(() => countUp(c), 1300);
    });
  });
  $$('.chapter:not(.in) [data-count]').forEach((c) => { c.textContent = c.dataset.count.replace(/[\d.,]+/, '0'); });
}

// sticky local nav (industry page): highlights the section on screen, like Apple's product sub-nav
function initLocalNav() {
  const links = $$('[data-spy]'); if (!links.length || !window.IntersectionObserver) return;
  const map = new Map(links.map((a) => [a.dataset.spy, a]));
  const on = (id) => links.forEach((a) => a.classList.toggle('on', a.dataset.spy === id));
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) on(e.target.id); }), { rootMargin: '-35% 0px -60% 0px' });
  map.forEach((_, id) => { const el = document.getElementById(id); if (el) io.observe(el); });
  cleanups.push(() => io.disconnect());
  const nav = $('#lnav'); const bar = () => nav.classList.toggle('stuck', nav.getBoundingClientRect().top <= (parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 78) + 1);
  addEventListener('scroll', bar, { passive: true }); bar();
  cleanups.push(() => removeEventListener('scroll', bar));
  // the chapter picker in the intro jumps straight to the matching chapter
  $$('[data-goto]').forEach((b) => b.addEventListener('click', () => scrollToEl($(`#ch-${b.dataset.goto}`))));
}

// Apple-style "highlights" rail: native horizontal scroll-snap, plus arrows and progress dots
function initRail() {
  const rail = $('#rail .rail'); if (!rail) return;
  const dots = $$('#rail .dots i'); const [prev, next] = $$('#rail [data-rail]');
  const items = [...rail.children];
  const sync = () => {
    const max = rail.scrollWidth - rail.clientWidth;
    let cur = 0, best = 1e9;
    items.forEach((it, i) => { const d = Math.abs(it.offsetLeft - rail.offsetLeft - rail.scrollLeft - parseFloat(getComputedStyle(rail).paddingLeft)); if (d < best) { best = d; cur = i; } });
    if (rail.scrollLeft >= max - 4) cur = items.length - 1;
    dots.forEach((d, i) => d.classList.toggle('on', i === cur));
    prev.disabled = rail.scrollLeft <= 4; next.disabled = rail.scrollLeft >= max - 4;
    $('#rail').classList.toggle('static', max <= 4);
  };
  const step = (dir) => rail.scrollBy({ left: dir * (items[0].offsetWidth + 20), behavior: motionOK ? 'smooth' : 'auto' });
  prev.addEventListener('click', () => step(-1)); next.addEventListener('click', () => step(1));
  rail.addEventListener('scroll', sync, { passive: true });
  addEventListener('resize', sync); cleanups.push(() => removeEventListener('resize', sync));
  rail.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight') { e.preventDefault(); step(1); } if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); } });
  sync();
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
  document.title = d ? `${t(d.name)} | V-TECH HUB` : s ? `${s.name} | V-TECH HUB` : 'V-TECH HUB';
  const body = page === 'industry' ? industryPage() : page === 'solution' ? solutionPage() : homePage();
  $('#app').innerHTML = `<div class="ambient" aria-hidden="true"><i></i><i></i><i></i></div><div class="grain" aria-hidden="true"></div>${header()}<main>${body}</main>${footer()}`;
  bindChrome(); bindForm(); initLocalNav(); initRail(); initFaq();
  initMotion(instant);
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
