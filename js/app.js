// V-TECH FOUNDRY landing engine. No build step: ES modules; GSAP/ScrollTrigger drive the pinned story only. Scrolling is native (no scroll hijacking).
// Routing is hash based (#home, #industry-bfsi, #solution-dlp) so the whole site works as a single page.
import { CONFIG } from './config.js';
import { ICONS } from './icons.js';
import { SCENE_KINDS, sceneKindOf, sceneSVG, sceneTimeline, fitScene } from './scenes.js';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* storage unavailable */ } }
};
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const state = {
  lang: store.get('vth-lang') || 'en',
  route: parseRoute(), ui: null, solutions: new Map(), industries: [], experts: [], ctx: null
};
const t = (o) => (typeof o === 'string' ? o : (o && (o[state.lang] ?? o.en)) ?? '');
const ui = (path) => path.split('.').reduce((o, k) => o?.[k], state.ui);
const u = (path) => t(ui(path));
const ic = (name, cls = '') => `<svg class="ic ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.box}</svg>`;
const motionOK = !matchMedia('(prefers-reduced-motion: reduce)').matches;
const hasGsap = () => typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
const view = { max: 0, contactTop: Infinity, bundleTop: 0, chs: [], sts: [], storyTop: 0, storyH: 0 };   // layout read once per refresh, never per scroll frame
let mm = null;

/* ---------------------------------------------------------------- routing */
function routeOf(hash) {
  const h = String(hash || '').replace(/^#/, '');
  const m = h.match(/^(industry|solution)-([\w-]+)$/);
  if (m) return { page: m[1], id: m[2] };
  return h === 'experts' ? { page: 'experts', id: '' } : { page: 'home', id: '' };
}
function parseRoute() { return routeOf(location.hash); }
const hashOf = (r) => (r.page === 'home' ? 'home' : r.page === 'experts' ? 'experts' : `${r.page}-${r.id}`);
function swapPage(after) {
  teardownMotion(); render();
  window.scrollTo(0, 0);
  document.body.classList.remove('leaving');
  if (after) setTimeout(() => scrollToEl($(after)), 420);
}
function go(hash, after) {
  state.route = routeOf(hash);
  try { history.replaceState(null, '', '#' + hashOf(state.route)); } catch { /* sandboxed frame */ }
  if (!motionOK) return swapPage(after);
  document.body.classList.add('leaving');           // frosted fade-out, then the new page rises in
  setTimeout(() => swapPage(after), 280);
}
addEventListener('hashchange', () => {
  const r = parseRoute();
  if (hashOf(r) !== hashOf(state.route)) { state.route = r; swapPage(); }
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
const num = (n) => String(n).padStart(2, '0');
// split a phrase into words that rise one by one (CSS-only animation, see .w in styles.css)
const words = (s, from = 0) => String(s).split(/\s+/).filter(Boolean).map((w, i) => `<span class="w" style="--i:${from + i}"><i>${esc(w)}</i></span>`).join(' ');
const nWords = (s) => String(s).split(/\s+/).filter(Boolean).length;

// scene = ui defaults for its kind, overridden by whatever the story supplies
function sceneFor(kind, over = {}, solutionName = '') {
  const d = { alt: ui('scenes.alt'), ...(ui(`scenes.${kind}`) || {}), ...over };
  return sceneSVG(kind, d, t, solutionName);
}

/* ---------------------------------------------------------------- shared chrome */
function header() {
  const cur = state.route.page === 'industry' ? state.route.id : '';
  const inds = state.industries;
  const left = inds.map((i, k) => link(`industry-${i.id}`, `${ic(i.icon)}<span>${esc(t(i.name))}</span>${ic('arrow-right')}`, `m-i ${k === 0 ? 'on' : ''}`, `data-pane="${i.id}"`)).join('');
  const panes = inds.map((i, k) => `<div class="m-pane ${k === 0 ? 'on' : ''}" data-pane="${i.id}">
      <div class="m-head"><div><b>${esc(t(i.name))}</b><small>${esc(t(i.tagline))}</small></div>${link(`industry-${i.id}`, `${u('nav.readStory')} ${ic('arrow-up-right')}`, 'm-story')}</div>
      <span class="eyebrow">${u('nav.bundle')}</span>
      <div class="m-sols">${i.bundle.map((s) => link(`solution-${s}`, `${ic(sol(s).icon)}<span>${esc(sol(s).name)}<small>${esc(t(sol(s).tagline))}</small></span>`)).join('')}</div></div>`).join('');
  const catalog = [...state.solutions.values()].map((s) => link(`solution-${s.id}`, `${ic(s.icon)} ${esc(s.name)}`)).join('');
  return `<header class="hdr" id="hdr"><div class="wrap">
    ${link('home', '<b>V-TECH</b><span>FOUNDRY</span>', 'logo', 'aria-label="V-TECH FOUNDRY"')}
    <nav class="nav" id="nav" aria-label="Primary">
      <div class="dd mega-dd"><button class="nav-btn ${state.route.page === 'solution' || cur ? 'on' : ''}" aria-expanded="false" aria-haspopup="true">${u('nav.solutions')} ${ic('chevron-down')}</button>
        <div class="panel mega"><div class="m-left"><span class="eyebrow">${u('nav.byIndustry')}</span>${left}</div><div class="m-right">${panes}</div>
        <div class="m-foot"><span class="eyebrow">${u('nav.catalog')}</span><div>${catalog}</div></div></div></div>
      <a class="nav-btn plain" href="#home" data-go="home" data-after="#how">${u('nav.how')}</a>
      <div class="dd"><button class="nav-btn ${state.route.page === 'experts' ? 'on' : ''}" aria-expanded="false" aria-haspopup="true">${u('nav.meet')} ${ic('chevron-down')}</button>
        <div class="panel"><a href="${CONFIG.website}" target="_blank" rel="noopener">${ic('building')}<span>${u('nav.about')}</span></a>
        ${link('experts', `${ic('users')}<span>${u('nav.expert')}</span>`)}</div></div>
    </nav>
    <div class="tools">
      <div class="lang" role="group" aria-label="Language"><button data-lang="en" class="${state.lang === 'en' ? 'on' : ''}">EN</button><span>|</span><button data-lang="vi" class="${state.lang === 'vi' ? 'on' : ''}">VI</button></div>
      <a class="btn btn-red" href="#contact" data-scroll="#contact">${u('nav.request')}</a>
      <button class="burger" id="burger" aria-label="${u('nav.menu')}" aria-expanded="false">${ic('menu')}</button>
    </div></div><i class="pgbar" id="pgbar"></i></header>`;
}

const field = (name, label, type, ac) => `<div class="field"><label for="f-${name}">${u(label)}</label><input id="f-${name}" name="${name}" type="${type}" autocomplete="${ac}" required><span class="em" aria-live="polite"></span></div>`;
const copyRow = (icon, label, value, href) => `<div class="row"><span class="ri">${ic(icon)}</span><div><small>${label}</small>${href ? `<a class="v" href="${href}">${esc(value)}</a>` : `<span class="v">${esc(value)}</span>`}</div>
  <button type="button" class="copy" data-copy="${esc(value)}">${ic('copy')}<span>${u('cta.copy')}</span></button></div>`;

function contact(preset = '') {
  const opts = state.industries.map((i) => `<option value="${i.id}" ${i.id === preset ? 'selected' : ''}>${esc(t(i.name))}</option>`).join('');
  return `<section class="contact" id="contact"><div class="wrap"><div class="contact-box glass rv" id="cbox">
    <div>
      <span class="eyebrow">${u('cta.kicker')}</span>
      <h2 class="h2">${u('cta.title')}</h2>
      <p class="lede">${u('cta.p')}</p>
      <div class="direct">
        ${copyRow('phone', u('cta.call'), CONFIG.phoneDisplay, `tel:${CONFIG.phone}`)}
        ${copyRow('message-circle', 'Zalo', CONFIG.phoneDisplay, CONFIG.zalo)}
        ${copyRow('mail', u('cta.mail'), CONFIG.email, `mailto:${CONFIG.email}`)}
      </div>
    </div>
    <div>
      <div class="ctx" id="ctx" ${state.ctx ? '' : 'hidden'}>${ctxHTML()}</div>
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
    </div></div>
    <p class="offices rv">${CONFIG.offices.map((o) => `<span>${ic('building')} ${esc(o)}</span>`).join('')}</p></div></section>`;
}
// "You were reading ..." chip: the contact form always knows which chapter sent the visitor here
function ctxHTML() {
  const c = state.ctx; if (!c) return '';
  return `<span class="eyebrow">${u('cta.context')}</span><b>${u('ind.chOf')} ${num(c.k + 1)} · ${esc(c.title)}</b><i>${esc(c.sols)}</i>`;
}
const qvButton = () => `<button class="qvbtn" type="button" data-qv aria-haspopup="dialog">${ic('layers')}<span>${u('qv.open')}</span></button>`;
const floatCta = () => `<a class="fab btn btn-red" id="fab" href="#contact" data-scroll="#contact">${ic('phone')}<span>${u('cta.float')}</span></a>`;

function footer() {
  return `<footer class="foot"><div class="wrap">
    <div class="cols">
      <div>${link('home', '<b>V-TECH</b><span>FOUNDRY</span>', 'logo')}<p style="margin-top:1.2rem">${u('foot.powered')} <a href="${CONFIG.website}" target="_blank" rel="noopener"><b>VNETWORK</b></a></p></div>
      <div class="list">${link('experts', u('exp.expert'))}<a href="tel:${CONFIG.phone}">${esc(CONFIG.phoneDisplay)}</a><a href="mailto:${CONFIG.email}">${esc(CONFIG.email)}</a><a href="${CONFIG.website}" target="_blank" rel="noopener">vnetwork.vn</a></div>
      <div class="list">${CONFIG.offices.map((o) => `<p>${esc(o)}</p>`).join('')}</div>
    </div>
    <div class="fine"><span>© 2013 VNETWORK JSC. ${u('foot.rights')}</span><span><a href="${CONFIG.website}" target="_blank" rel="noopener">${u('foot.terms')}</a> · <a href="${CONFIG.website}" target="_blank" rel="noopener">${u('foot.privacy')}</a></span></div>
  </div></footer>`;
}

/* ---------------------------------------------------------------- pages */
function homePage() {
  const first = state.industries[0];
  const sectorList = state.industries.map((i, k) => `<a class="sector ${k === 0 ? 'on' : ''}" href="#industry-${i.id}" data-go="industry-${i.id}" data-sector><span class="s-no">${num(k + 1)}</span><span class="s-nm">${esc(t(i.name))}</span>${ic('arrow-right')}</a>`).join('');
  const sectorPanes = state.industries.map((i, k) => `<div class="s-pane ${k === 0 ? 'on' : ''}">${ic(i.icon, 'lead')}<h3>${esc(t(i.name))}</h3><p>${esc(t(i.tagline))}</p>
      <span class="solchips plain">${i.bundle.slice(0, 4).map((x) => `<em>${ic(sol(x).icon)} ${esc(sol(x).name)}</em>`).join('')}</span>
      ${link(`industry-${i.id}`, `${i.chapters.length} ${u('home.chapters')} \u00b7 ${u('home.read')} ${ic('arrow-right')}`, 's-go')}</div>`).join('');
  const steps = ui('home.steps').map((s, k) => `<div class="col rv"><span class="n">${num(k + 1)}</span><h3>${t(s.t)}</h3><p>${t(s.d)}</p></div>`).join('');
  const tiles = [...state.solutions.values()].map((s) => link(`solution-${s.id}`,
    `${ic(s.icon, 'lead')}<h3>${esc(s.name)}</h3><p>${esc(t(s.tagline))}</p><div class="foot"><span>${u('ind.learn')}</span>${ic('arrow-up-right')}</div>`, 'tile glass rv')).join('');
  const names = state.industries.map((i) => esc(t(i.name))).join(' <i>✦</i> ');
  const hA = u('home.heroA'), hB = u('home.heroB');
  return `
  <section class="hero"><div class="wrap"><div class="grid">
    <div>
      <span class="eyebrow hero-in">${u('home.eyebrow')}</span>
      <h1 class="display">${words(hA)} <em>${words(hB, nWords(hA))}</em></h1>
      <p class="lede hero-in" style="animation-delay:.5s">${u('home.heroP')}</p>
      <div class="actions hero-in" style="animation-delay:.62s"><a class="btn btn-red" href="#industries" data-scroll="#industries">${u('home.explore')} ${ic('arrow-right')}</a>
        <a class="btn btn-line" href="#contact" data-scroll="#contact">${u('nav.request')}</a></div>
    </div>
    <aside class="preview hero-in" style="animation-delay:.4s" aria-label="${u('home.demoKicker')}">
      <div class="glass demo card-a" id="demo" data-i="0">
        <div class="lbl"><span class="eyebrow d-ind">${esc(t(first.name))}</span><span class="chip">${u('home.demoKicker')}</span></div>
        <p class="was">${esc(t(first.chapters[0].challenge.title))}</p>
        <div class="rule">${ic('arrow-down')}<i></i></div>
        <p class="now">${esc(t(first.chapters[0].response.title))}</p>
        <div class="sol solchips d-sol">${demoChips(first.chapters[0])}</div>
        <p class="cap">${u('home.previewP')}</p>
      </div>
      <div class="glass card-b" aria-hidden="true"></div>
    </aside>
  </div></div></section>
  <div class="marq" aria-hidden="true"><div class="marq-t"><span>${names} <i>✦</i> </span><span>${names} <i>✦</i> </span></div></div>
  <section class="sec" id="industries"><div class="wrap">
    <div class="sec-head"><span class="eyebrow rv">${u('home.indKicker')}</span><h2 class="h2 rv">${u('home.indLead')}</h2><p class="lede rv">${u('home.indP')}</p></div>
    <div class="sectors rv" id="sectors"><div class="sec-list">${sectorList}</div><div class="sec-detail">${sectorPanes}</div></div><p class="hint rv">${u('home.sectorsHint')}</p></div></section>
  <section class="sec" id="how" style="padding-top:0"><div class="wrap"><div class="sec-head"><span class="eyebrow rv">${u('home.stepsKicker')}</span></div><div class="cols3 steps">${steps}</div></div></section>
  <section class="sec" style="padding-top:0"><div class="wrap"><div class="sec-head"><span class="eyebrow rv">${u('home.solKicker')}</span><h2 class="h2 rv">${u('home.solTitle')}</h2></div><div class="tiles">${tiles}</div></div></section>
  ${contact()}`;
}
const demoChips = (c) => c.solutions.map((s) => `<span>${ic(sol(s).icon)} ${esc(sol(s).name)}</span>`).join('');

function industryPage() {
  const id = state.route.id;
  const d = industryOf(id);
  if (!d) return notFound(u('ind.notFound'));
  const chips = (d.regulations || []).map((r) => `<span class="chip">${ic('shield')} ${esc(t(r))}</span>`).join('');
  const sw = state.industries.map((i) => link(`industry-${i.id}`, esc(t(i.name)), i.id === id ? 'on' : '')).join('');
  const n = d.chapters.length;
  const match = d.chapters.map((c, k) => `<button class="m-opt" data-goto="${k}"><b>${num(k + 1)}</b><span><em>${esc(t(c.persona))}</em>${esc(t(c.challenge.title))}</span>${ic('arrow-right')}</button>`).join('');
  const ticks = d.chapters.map((c, k) => `<button data-goto="${k}" aria-label="${esc(t(c.challenge.title))}"></button>`).join('');

  const chapters = d.chapters.map((c, k) => {
    const chips2 = c.solutions.map((s) => `<a href="#solution-${s}" data-go="solution-${s}">${ic(sol(s).icon)} ${esc(sol(s).name)}</a>`).join('');
    const pts = (c.response.points || []).map((p) => `<li class="pt">${ic('check')}<span>${esc(t(p))}</span></li>`).join('');
    const stat = c.challenge.stat ? `<div class="stat"><strong>${esc(c.challenge.stat.value)}</strong><span>${esc(t(c.challenge.stat.label))}</span></div>` : '';
    const ml = c.response.metrics || (c.response.metric ? [c.response.metric] : []);
    const one = (x) => `<div class="metric"><strong ${/^\d/.test(t(x.value)) ? `data-count="${esc(t(x.value))}"` : ''}>${esc(t(x.value))}</strong><span>${esc(t(x.label))}</span></div>`;
    const m = ml.length > 1 ? `<div class="metrics">${ml.map(one).join('')}</div><p class="vnote">${u('ind.vendorNote')}</p>` : ml.length ? one(ml[0]) : '';
    const scn = c.scenario ? `<p class="scn"><span>${u('ind.moment')}</span>${esc(t(c.scenario))}</p>` : '';
    const kind = sceneKindOf(c);
    return `<section class="chapter" id="ch-${k}" data-title="${esc(t(c.challenge.title))}" data-sols="${esc(c.solutions.map((s) => sol(s).name).join(' + '))}"><div class="wrap"><div class="stage">
      <div class="numeral" aria-hidden="true">${num(k + 1)}</div>
      <div class="meta"><span class="chno">${u('ind.chOf')} ${num(k + 1)}</span><span class="who">${ic('user-round')}<span>${u('ind.felt')} <b>${esc(t(c.persona))}</b></span></span></div>
      <div class="narr">
        <article class="pain"><span class="tag">${u('ind.challenge')}</span>
          <h3>${esc(t(c.challenge.title))}</h3>${scn}<p>${esc(t(c.challenge.body))}</p>${stat}</article>
        <article class="ans"><span class="tag">${u('ind.answer')}</span>
          <div class="solchips"><span class="sr">${u('ind.solvedBy')}</span>${chips2}</div>
          <h3>${esc(t(c.response.title))}</h3><p>${esc(t(c.response.body))}</p>
          <ul class="points">${pts}</ul>${m}</article>
      </div>
      <figure class="frame glass" data-kind="${kind}">${sceneFor(kind, c.scene, sol(c.solutions[0]).name)}<figcaption><i></i>${u('scenes.label')}</figcaption></figure>
    </div></div></section>`;
  }).join('');

  const bundle = d.bundle.map((s) => {
    const covers = d.chapters.map((c, k) => (c.solutions.includes(s) ? num(k + 1) : '')).filter(Boolean).join(' · ');
    const x = sol(s);
    return link(`solution-${s}`, `${ic(x.icon, 'lead')}<h3>${esc(x.name)}</h3><p>${esc(t(x.description))}</p>
      <div class="foot"><span>${u('ind.coversLabel')} <b>${covers}</b></span>${ic('arrow-up-right')}</div>`, 'tile glass rv');
  }).join('');
  const outcomes = d.outcomes.map((o, k) => `<div class="col rv"><span class="n">${num(k + 1)}</span><h3>${esc(t(o.title))}</h3><p>${esc(t(o.body))}</p></div>`).join('');
  const faq = d.faq.map((f) => `<details class="rv"><summary>${esc(t(f.q))}${ic('plus')}</summary><div class="a">${esc(t(f.a))}</div></details>`).join('');

  return `
  <section class="hero ind-hero"><div class="wrap"><div class="grid">
    <div>
      <div class="crumbs hero-in">${link('home', 'V-TECH FOUNDRY')} / ${link('home', u('ind.crumbIndustry'), '', 'data-after="#industries"')} / <span>${esc(t(d.name))}</span></div>
      <h1 class="display">${words(t(d.title))}</h1>
      <p class="lede hero-in" style="animation-delay:.5s">${esc(t(d.tagline))}</p>
      <div class="chips hero-in" style="animation-delay:.56s">${chips}</div>
      <div class="actions hero-in" style="animation-delay:.62s"><a class="btn btn-red" href="#story" data-scroll="#story">${u('ind.begin')} ${ic('arrow-down')}</a>
        <button class="btn btn-line" type="button" data-qv aria-haspopup="dialog">${ic('layers')} ${u('qv.open')}</button>
        <a class="btn btn-line" href="#contact" data-scroll="#contact">${u('ind.talk')}</a></div>
    </div>
    <aside class="match glass hero-in" style="animation-delay:.45s"><span class="eyebrow">${u('ind.match')}</span><p>${u('ind.matchSub')}</p><div class="m-list">${match}</div></aside>
  </div>
    <nav class="switcher hero-in" style="animation-delay:.7s" aria-label="${u('ind.otherIndustries')}">${sw}</nav></div></section>
  <section class="intro" id="intro"><div class="wrap"><span class="eyebrow rv">${u('ind.whyNow')}</span><p class="statement rv">${esc(t(d.challengesIntro))}</p></div></section>
  <div class="story" id="story">
    <div class="story-bar"><div class="wrap"><span class="now" id="now">${u('ind.chapter')} 01 ${u('ind.of')} ${num(n)}</span><span class="name" id="nowname">${esc(t(d.chapters[0].challenge.title))}</span>${qvButton()}<div class="ticks">${ticks}</div></div><div class="progress"><i id="prog"></i></div></div>
    ${chapters}</div>
  <section class="sec resolved" id="bundle"><div class="wrap"><div class="sec-head"><span class="eyebrow rv">${u('ind.bundleKicker')}</span><h2 class="h2 rv">${u('ind.resolved')}</h2><p class="lede rv">${u('ind.resolvedP')}</p></div><div class="tiles">${bundle}</div></div></section>
  <section class="sec" style="padding-top:0"><div class="wrap"><div class="sec-head"><span class="eyebrow rv">${u('ind.whyKicker')}</span></div><div class="cols3">${outcomes}</div></div></section>
  <section class="sec" style="padding-top:0"><div class="wrap"><div class="sec-head"><span class="eyebrow rv">${u('ind.faqKicker')}</span></div><div class="faq">${faq}</div></div></section>
  <section class="sec" style="padding-top:0"><div class="wrap"><div class="poc glass rv"><div><span class="eyebrow">${u('ind.pocKicker')}</span><h2 class="h2">${u('ind.pocTitle')}</h2><p class="lede">${u('ind.pocP')}</p></div>
    <a class="btn btn-red" href="#contact" data-scroll="#contact" data-prefill="poc">${u('ind.pocBtn')} ${ic('arrow-right')}</a></div></div></section>
  ${contact(id)}`;
}

function solutionPage() {
  const id = state.route.id;
  const s = state.solutions.get(id);
  if (!s) return notFound(u('sol.notFound'));
  const kind = SCENE_KINDS[id] || 'gate';
  const uses = state.industries.flatMap((i) => i.chapters.filter((c) => c.solutions.includes(id)).map((c) => ({ i, c })));
  const tiles = uses.map(({ i, c }) => link(`industry-${i.id}`, `${ic(i.icon, 'lead')}<span class="chip">${esc(t(i.name))}</span><h3>${esc(t(c.challenge.title))}</h3><p>${esc(t(c.response.title))}</p><div class="foot"><span>${u('home.read')}</span>${ic('arrow-up-right')}</div>`, 'tile glass rv')).join('');
  const serves = [...new Map(uses.map(({ i }) => [i.id, i])).values()];
  const tags = (s.tags || []).map((x) => `<span class="chip hashtag">${esc(x)}</span>`).join('');
  const servesRow = serves.length ? `<div class="serves"><span class="eyebrow">${u('sol.serves')}</span>${serves.map((i) => link(`industry-${i.id}`, `${ic(i.icon)} ${esc(t(i.name))}`, 'chip')).join('')}</div>` : '';
  const caps = (s.capabilities || []).map((c) => `<div class="cap glass rv">${ic(c.icon || 'check', 'lead')}<h3>${esc(t(c.title))}</h3><p>${esc(t(c.body))}</p></div>`).join('');
  const kpis = (s.results || []).map((r) => `<div class="kpi rv"><strong>${esc(t(r.value))}</strong><span>${esc(t(r.label))}</span></div>`).join('');
  return `
  <section class="hero ind-hero"><div class="wrap"><div class="grid">
    <div>
      <div class="crumbs hero-in">${link('home', 'V-TECH FOUNDRY')} / <span>${u('sol.kicker')}</span> / <span>${esc(s.name)}</span></div>
      <h1 class="display">${words(s.name)}</h1>${tags ? `<div class="chips hero-in" style="animation-delay:.45s">${tags}</div>` : ''}<p class="lede hero-in" style="animation-delay:.5s">${esc(t(s.description))}</p>
      ${servesRow}
      <div class="actions hero-in" style="margin-top:2rem;animation-delay:.6s"><a class="btn btn-red" href="#contact" data-scroll="#contact">${u('ind.talk')} ${ic('arrow-right')}</a></div></div>
    <figure class="frame loop glass hero-in" style="animation-delay:.4s" data-kind="${kind}">${sceneFor(kind, {}, s.name)}<figcaption><i></i>${u('scenes.label')}</figcaption></figure>
  </div></div></section>
  ${caps ? `<section class="sec" style="padding-top:0"><div class="wrap"><div class="sec-head"><span class="eyebrow rv">${u('sol.capabilities')}</span></div><div class="caps">${caps}</div></div></section>` : ''}
  ${kpis ? `<section class="sec" style="padding-top:0"><div class="wrap"><div class="sec-head"><span class="eyebrow rv">${u('sol.results')}</span></div><div class="kpis">${kpis}</div><p class="vnote rv">${u('sol.vendorNote')}</p></div></section>` : ''}
  <section class="sec" style="padding-top:0"><div class="wrap"><div class="sec-head"><span class="eyebrow rv">${u('sol.where')}</span></div><div class="tiles">${tiles}</div></div></section>
  ${contact()}`;
}

/* ---- Experts & Advisory Board (Meet V-Tech Foundry > Expert) */
function expertCard(e) {
  const name = esc(t(e.name));
  const photo = e.photo ? `<img class="xav" src="${esc(e.photo)}" alt="${name}" width="104" height="104" loading="lazy" decoding="async">` : `<span class="xav ph" aria-hidden="true">${ic('user-round')}</span>`;
  const sols = (e.solutions || []).map((x) => link(`solution-${x}`, `${ic(sol(x).icon)} ${esc(sol(x).name)}`, 'chip')).join('');
  return `<article class="xcard glass rv"><div class="xph">${photo}</div><div class="xbody">
    <h3>${name}</h3>${e.role ? `<p class="xrole">${esc(t(e.role))}</p>` : ''}
    ${e.focus ? `<p class="xfocus"><span>${u('exp.focus')}</span>${esc(t(e.focus))}</p>` : ''}
    <p class="xbio ${e.bio ? '' : 'pending'}">${esc(e.bio ? t(e.bio) : u('exp.pending'))}</p>
    ${sols ? `<div class="xsols">${sols}</div>` : ''}</div></article>`;
}
function expertsPage() {
  return `
  <section class="hero ind-hero exp-hero"><div class="wrap">
    <div class="exp-top"><div class="crumbs hero-in" style="margin:0">${link('home', u('exp.home'))} / <span>${u('exp.meet')}</span> / <b class="red">${u('exp.expert')}</b></div>
      <div class="seg hero-in" role="navigation"><a href="${CONFIG.website}" target="_blank" rel="noopener">${u('exp.about')}</a><span class="on" aria-current="page">${u('exp.expert')}</span></div></div>
    <h1 class="display">${words(u('exp.title'))}</h1>
    <p class="lede hero-in" style="animation-delay:.5s">${u('exp.sub')}</p></div></section>
  <section class="sec" style="padding-top:0"><div class="wrap"><div class="experts">${state.experts.map(expertCard).join('')}</div></div></section>
  ${contact()}`;
}
const notFound = (msg) => `<section class="hero"><div class="wrap"><h1 class="display">${esc(msg)}</h1><p class="lede" style="margin-top:1.4rem">${link('home', '← V-TECH FOUNDRY', 'red')}</p></div></section>`;

/* ---------------------------------------------------------------- behaviour */
function bindChrome() {
  const hdr = $('#hdr'), bar = $('#pgbar'), fab = $('#fab');
  let ticking = false;
  const onScroll = () => {
    state.scrollTs = performance.now();
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      hdr.classList.toggle('solid', scrollY > 24);
      if (bar) bar.style.transform = `scaleX(${view.max > 0 ? Math.min(1, scrollY / view.max) : 0})`;
      if (fab) fab.classList.toggle('show', scrollY > 520 && view.contactTop - scrollY > innerHeight * .75);
      trackChapters();
    });
    clearTimeout(state.settle); state.settle = setTimeout(trackChapters, 160); // after a long jump, pins settle a frame later
  };
  addEventListener('scroll', onScroll, { passive: true });
  state.offScroll = () => removeEventListener('scroll', onScroll);
  onScroll();                       // layout is measured after the first paint (see render), never in the critical path

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
  // mega menu: hovering / focusing an industry shows its packaged solutions
  const pane = (id) => $$('.m-i, .m-pane').forEach((e) => e.classList.toggle('on', e.dataset.pane === id));
  $$('.m-i').forEach((a) => { a.addEventListener('mouseenter', () => pane(a.dataset.pane)); a.addEventListener('focus', () => pane(a.dataset.pane)); });
  $('#burger').addEventListener('click', (e) => { const o = $('#nav').classList.toggle('open'); e.currentTarget.setAttribute('aria-expanded', String(o)); });
  $$('[data-lang]').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));
  state.closeAll = closeAll;

  // sector explorer (home): hovering / focusing a sector shows its detail (cross-fade). On touch laptops the first tap previews, the second opens; phones just navigate.
  const secs = $$('[data-sector]');
  if (secs.length) {
    const panes = $$('.s-pane');
    const setOn = (k) => { secs.forEach((x, j) => x.classList.toggle('on', j === k)); panes.forEach((x, j) => x.classList.toggle('on', j === k)); };
    secs.forEach((el, k) => {
      el.addEventListener('mouseenter', () => setOn(k)); el.addEventListener('focus', () => setOn(k));
      el.addEventListener('click', (e) => { if (matchMedia('(hover:none) and (min-width:961px)').matches && !el.classList.contains('on')) { e.preventDefault(); e.stopPropagation(); setOn(k); } });
    });
  }
  // hero demo: the pain fades back and the answer rises in; swap the copy each time the CSS loop restarts
  const demo = $('#demo');
  if (demo) {
    $('.was', demo).addEventListener('animationiteration', () => {
      const i = (+demo.dataset.i + 1) % state.industries.length; demo.dataset.i = i;
      const ind = state.industries[i], c = ind.chapters[0];
      $('.d-ind', demo).textContent = t(ind.name); $('.was', demo).textContent = t(c.challenge.title);
      $('.now', demo).textContent = t(c.response.title); $('.d-sol', demo).innerHTML = demoChips(c);
    });
  }
  bindStory();
}
// one delegated handler for the whole document (links, smooth scroll, copy buttons, dismissals)
document.addEventListener('click', (e) => {
  if (!e.target.closest('.dd')) state.closeAll?.();
  const nav = e.target.closest('[data-go]');
  if (nav) {
    e.preventDefault(); state.closeAll?.(); $('#nav')?.classList.remove('open');
    if (nav.dataset.after && nav.dataset.go === hashOf(state.route)) scrollToEl($(nav.dataset.after)); else go(nav.dataset.go, nav.dataset.after);
    return;
  }
  const a = e.target.closest('[data-scroll]');
  if (a) {
    const target = $(a.dataset.scroll); if (!target) return;
    e.preventDefault(); $('#nav')?.classList.remove('open'); state.closeAll?.();
    if (a.dataset.prefill === 'poc') { const nn = $('#f-need'); if (nn && !nn.value) nn.value = 'PoC sandbox'; }
    scrollToEl(target); return;
  }
  if (e.target.closest('[data-qv]')) { qvOpen(); return; }
  if (e.target.closest('[data-qv-close]')) { qvClose(); return; }
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
  const off = offset ?? -(parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 72) - 24;
  window.scrollTo({ top: el.getBoundingClientRect().top + scrollY + off, behavior: motionOK ? 'smooth' : 'auto' });
}

/* chapter bookkeeping (works with or without GSAP): active chapter, progress bar, contact context, jump buttons */
function measure() {
  view.max = document.documentElement.scrollHeight - innerHeight;
  const c = $('#contact'); view.contactTop = c ? c.getBoundingClientRect().top + scrollY : Infinity;
  const b = $('#bundle'); view.bundleTop = b ? b.getBoundingClientRect().top + scrollY : 0;
  view.chs = $$('.chapter');
  view.sts = hasGsap() ? view.chs.map((_, j) => ScrollTrigger.getById(`ch${j}`)).filter(Boolean) : [];
  const st = $('#story'); if (st) { const r = st.getBoundingClientRect(); view.storyTop = r.top + scrollY; view.storyH = r.height; }
}
function trackChapters() {
  const chs = view.chs; if (!chs.length) return;
  const mid = innerHeight * .5;
  let k = 0;
  // pinned (desktop): decide from the scroll triggers, so a long jump can't be fooled by half-applied pins
  if (view.sts.length === chs.length) view.sts.forEach((st, j) => { if (scrollY >= st.start - mid) k = j; });
  else chs.forEach((ch, j) => { if (ch.getBoundingClientRect().top <= mid + 40) k = j; });
  setProgress();
  if (state.ctx?.k === k && state.ctx.lang === state.lang) return;
  const ch = chs[k];
  state.ctx = { k, lang: state.lang, title: ch.dataset.title, sols: ch.dataset.sols };
  chs.forEach((c, j) => c.classList.toggle('on', j === k));
  $('#now').textContent = `${u('ind.chapter')} ${num(k + 1)} ${u('ind.of')} ${num(chs.length)}`;
  $('#nowname').textContent = ch.dataset.title;
  $$('.ticks button').forEach((b, j) => { b.classList.toggle('on', j === k); b.classList.toggle('done', j < k); });
  const c = $('#ctx'); if (c) { c.hidden = false; c.innerHTML = ctxHTML(); }
}
function setProgress() {
  const p = $('#prog'); if (!p || !view.storyH) return;
  const f = (scrollY + innerHeight * .7 - view.storyTop) / (view.storyH - innerHeight * .3);
  p.style.transform = `scaleX(${Math.max(0, Math.min(1, f)).toFixed(4)})`;
}
function bindStory() {
  $$('[data-goto]').forEach((b) => b.addEventListener('click', () => {
    const k = +b.dataset.goto, ch = $$('.chapter')[k]; if (!ch) return;
    const st = hasGsap() ? ScrollTrigger.getById(`ch${k}`) : null;
    if (st) window.scrollTo({ top: st.start + 4, behavior: motionOK ? 'smooth' : 'auto' });
    else scrollToEl(ch);
  }));
}

/* adaptive quality: if the device can't hold ~30fps while the visitor scrolls, drop to "lite" (no backdrop blur / text blur) and remember it */
const setLite = (on, persist) => { document.documentElement.classList.toggle('lite', on); if (persist) store.set('vth-lite', on ? '1' : '0'); };
if (store.get('vth-lite') === '1' || navigator.connection?.saveData) setLite(true);
(function governor() {
  let last = 0, n = 0, sum = 0, skip = 6;
  const t0 = performance.now();
  const probe = (t) => {
    if (last && t - (state.scrollTs || 0) < 120 && t - t0 > 800) {
      const d = t - last;
      if (d < 250 && skip-- <= 0) { sum += d; n++; }
      if (n >= 40) { if (sum / n > 28) setLite(true, true); return; }
    }
    last = t; requestAnimationFrame(probe);
  };
  requestAnimationFrame(probe);
})();

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
    if (state.ctx) payload.context = { chapter: state.ctx.k + 1, title: state.ctx.title, solutions: state.ctx.sols };
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
function countUp(el, tl, at) {
  const m = String(el.dataset.count).match(/^([^\d]*)(\d[\d.,]*)(.*)$/);
  if (!m) return;
  const grp = /^\d{1,3}([.,]\d{3})+$/.test(m[2]) ? m[2].match(/[.,]/)[0] : null;          // "2,000+" / "2.000+": thousands separator, not a decimal
  const dec = grp ? 0 : (m[2].split(/[.,]/)[1] || '').length;
  const target = grp ? parseInt(m[2].replace(/[.,]/g, ''), 10) : parseFloat(m[2].replace(',', '.'));
  const fmt = (v) => (grp ? Math.round(v).toString().replace(/\B(?=(\d{3})+(?!\d))/g, grp) : v.toFixed(dec));
  const o = { v: 0 }; el.textContent = m[1] + fmt(0) + m[3];
  tl.to(o, { v: target, duration: .9, ease: 'power1.out', onUpdate: () => { el.textContent = m[1] + fmt(o.v) + m[3]; } }, at);
}

function initMotion() {
  if (!hasGsap() || !motionOK) return;
  gsap.registerPlugin(ScrollTrigger);
  if (!state.refreshBound) { ScrollTrigger.addEventListener('refresh', measure); state.refreshBound = true; }
  ScrollTrigger.config({ ignoreMobileResize: true });     // phone address bars must not trigger re-layout of the pins
  mm = gsap.matchMedia();

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    // solution page: the scene loops, only while it is on screen
    $$('.frame.loop').forEach((fr) => {
      const svg = $('svg.scene', fr); if (!svg) return;
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.6 }).add(sceneTimeline(svg, fr.dataset.kind), 0).timeScale(1.35);
      ScrollTrigger.create({ trigger: fr, start: 'top 95%', end: 'bottom 5%', onToggle: (st) => (st.isActive ? tl.play() : tl.pause()) });
    });
  });

  const story = $('#story');
  if (!story) return;
  const chapters = $$('.chapter', story);

  // desktop: pinned, scrubbed chapters. Reading order = the challenge, the scene plays out, the turn, the answer.
  mm.add('(min-width: 961px) and (prefers-reduced-motion: no-preference)', () => {
    story.classList.add('pinned');
    chapters.forEach((ch, k) => {
      const pain = $('.pain', ch), ans = $('.ans', ch), num_ = $('.numeral', ch), meta = $('.meta', ch), frame = $('.frame', ch);
      const items = $$('.solchips > a, .ans h3, .ans > p, .pt, .metric', ans);
      const counters = $$('[data-count]', ch);
      const svg = $('svg.scene', frame), kind = frame.dataset.kind;
      const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' },
        scrollTrigger: { id: `ch${k}`, trigger: ch, start: 'top top+=70', end: '+=220%', pin: true, scrub: .5, anticipatePin: 1 } });
      tl.fromTo(num_, { opacity: 0, xPercent: -6 }, { opacity: 1, xPercent: 0, duration: 1 }, 0)
        .fromTo(meta, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: .8 }, 0)
        .fromTo(frame, { opacity: 0, y: 56, scale: .965 }, { opacity: 1, y: 0, scale: 1, duration: 1.3 }, .1)
        .fromTo(pain, { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 1 }, .3)
        .add(sceneTimeline(svg, kind), 0)
        .to(pain, { autoAlpha: 0, y: -24, duration: 1 }, 3.7)
        .fromTo(ans, { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 1 }, 4.2)
        .fromTo(items, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: .5, stagger: .14 }, 5);
      counters.forEach((cn) => countUp(cn, tl, 6.2));
      gsap.set(ans, { autoAlpha: 0 });
    });
    return () => story.classList.remove('pinned');
  });

  // mobile / tablet: no pinning. Pain, then the scene scrubbed by scroll, then the answer.
  mm.add('(max-width: 960px) and (prefers-reduced-motion: no-preference)', () => {
    chapters.forEach((ch) => {
      const counters = $$('[data-count]', ch), frame = $('.frame', ch), svg = $('svg.scene', frame);
      const play = gsap.timeline({ paused: true }).add(sceneTimeline(svg, frame.dataset.kind), 0).timeScale(2.4);   // ~4s, then holds on the resolved state
      ScrollTrigger.create({ trigger: frame, start: 'top 78%', end: 'bottom 15%', onEnter: () => play.restart(), onEnterBack: () => play.restart(), onLeave: () => play.pause(), onLeaveBack: () => play.pause(0) });
      gsap.from($('.pain', ch), { opacity: 0, y: 30, duration: .9, scrollTrigger: { trigger: ch, start: 'top 85%', once: true } });
      const tl = gsap.timeline({ scrollTrigger: { trigger: $('.ans', ch), start: 'top 85%', once: true } });
      tl.from($('.ans', ch), { opacity: 0, y: 28, duration: .7, ease: 'power3.out' });
      counters.forEach((cn) => countUp(cn, tl, '>-.3'));
    });
  });
}

/* scroll reveal: a light fade + rise (CSS transition), armed only when IntersectionObserver exists. Once shown, the class is dropped so hover states take over. */
function initReveal() {
  const els = $$('.rv'); if (!els.length || !document.documentElement.classList.contains('rv-on')) return;
  const seen = new Map();
  els.forEach((el) => { const n = seen.get(el.parentElement) || 0; seen.set(el.parentElement, n + 1); el.style.setProperty('--d', Math.min(n, 5)); });
  state.rvio = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target; state.rvio.unobserve(el); el.classList.add('in');
    setTimeout(() => el.classList.remove('rv', 'in'), 900 + (+el.style.getPropertyValue('--d') || 0) * 70);
  }), { rootMargin: '0px 0px -6% 0px', threshold: .04 });
  els.forEach((el) => state.rvio.observe(el));
}

/* ---------------------------------------------------------------- quick view: an explicit, opt-in carousel of the chapters.
   Native scroll-snap does the swiping; Prev/Next, dots, arrow keys and Esc are there for everyone else. Nothing here moves on its own. */
const qv = { el: null, i: 0, tl: null, prevFocus: null, onKey: null };
function qvOpen() {
  const d = industryOf(state.route.id); if (!d || qv.el) return;
  const n = d.chapters.length;
  const slides = d.chapters.map((c, k) => {
    const kind = sceneKindOf(c);
    const chips = c.solutions.map((x) => `<a href="#solution-${x}" data-go="solution-${x}">${ic(sol(x).icon)} ${esc(sol(x).name)}</a>`).join('');
    const pts = (c.response.points || []).map((x) => `<li class="pt">${ic('check')}<span>${esc(t(x))}</span></li>`).join('');
    const scn = c.scenario ? `<p class="scn"><span>${u('ind.moment')}</span>${esc(t(c.scenario))}</p>` : `<p>${esc(t(c.challenge.body))}</p>`;
    return `<section class="qv-slide" data-k="${k}" aria-label="${num(k + 1)} / ${num(n)}">
      <div class="qv-txt"><span class="who">${ic('user-round')}<span>${u('ind.felt')} <b>${esc(t(c.persona))}</b></span></span>
        <h3>${esc(t(c.challenge.title))}</h3>${scn}
        <span class="eyebrow qv-tag">${u('ind.answer')}</span><div class="solchips">${chips}</div>
        <p class="ans-h">${esc(t(c.response.title))}</p><ul class="points">${pts}</ul></div>
      <div class="qv-pic"><figure class="frame glass" data-kind="${kind}">${sceneFor(kind, c.scene, sol(c.solutions[0]).name)}<figcaption><i></i>${u('scenes.label')}</figcaption></figure></div></section>`;
  }).join('');
  const dots = d.chapters.map((c, k) => `<button type="button" data-qv-go="${k}" aria-label="${num(k + 1)}: ${esc(t(c.challenge.title))}"></button>`).join('');
  const el = document.createElement('div');
  el.className = 'qv'; el.id = 'qv'; el.setAttribute('role', 'dialog'); el.setAttribute('aria-modal', 'true'); el.setAttribute('aria-label', u('qv.title'));
  el.innerHTML = `<div class="qv-back" data-qv-close></div><div class="qv-card">
    <div class="qv-top"><span class="eyebrow" id="qvcount"></span><button class="qv-x" type="button" data-qv-close aria-label="${esc(u('qv.close'))}">${ic('x')}</button></div>
    <div class="qv-track" id="qvtrack">${slides}</div>
    <div class="qv-nav"><button class="btn btn-line" type="button" id="qvprev">${ic('arrow-left')} ${u('qv.prev')}</button><div class="qv-dots">${dots}</div><button class="btn btn-red" type="button" id="qvnext">${u('qv.next')} ${ic('arrow-right')}</button></div></div>`;
  document.body.appendChild(el);
  qv.el = el; qv.i = -1; qv.prevFocus = document.activeElement;
  document.documentElement.style.overflow = 'hidden';
  fitScene($$('svg.scene', el));
  const track = $('#qvtrack'), go = (k) => track.scrollTo({ left: Math.max(0, Math.min(n - 1, k)) * track.clientWidth, behavior: motionOK ? 'smooth' : 'auto' });
  const show = (k) => {
    if (k === qv.i) return; qv.i = k;
    $('#qvcount').textContent = `${u('qv.title')} · ${num(k + 1)} ${u('ind.of')} ${num(n)}`;
    $$('.qv-dots button', el).forEach((b, j) => b.classList.toggle('on', j === k));
    $('#qvprev').disabled = k === 0; $('#qvnext').disabled = k === n - 1;
    qv.tl?.kill(); qv.tl = null;
    const svg = $('svg.scene', $$('.qv-slide', el)[k]);
    if (svg && motionOK && hasGsap()) qv.tl = gsap.timeline().add(sceneTimeline(svg, svg.closest('.frame').dataset.kind), 0).timeScale(2);   // plays once when its slide appears
  };
  let raf = 0;
  track.addEventListener('scroll', () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => show(Math.round(track.scrollLeft / track.clientWidth))); }, { passive: true });
  el.addEventListener('click', (e) => { const b = e.target.closest('[data-qv-go]'); if (b) go(+b.dataset.qvGo); });
  $('#qvprev').addEventListener('click', () => go(qv.i - 1));
  $('#qvnext').addEventListener('click', () => go(qv.i + 1));
  qv.onKey = (e) => {
    if (e.key === 'Escape') qvClose();
    else if (e.key === 'ArrowRight') go(qv.i + 1);
    else if (e.key === 'ArrowLeft') go(qv.i - 1);
    else if (e.key === 'Tab') {                                     // keep focus inside the dialog
      const f = $$('button, a[href]', el).filter((x) => !x.disabled && x.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); } else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  };
  document.addEventListener('keydown', qv.onKey);
  const start = Math.max(0, state.ctx?.k || 0);                     // open on the chapter the visitor was reading
  track.style.scrollSnapType = 'none'; track.scrollLeft = start * track.clientWidth; track.style.scrollSnapType = '';
  show(start); $('.qv-x', el).focus();
}
function qvClose() {
  if (!qv.el) return;
  qv.tl?.kill(); qv.tl = null; document.removeEventListener('keydown', qv.onKey);
  qv.el.remove(); qv.el = null; document.documentElement.style.overflow = '';
  qv.prevFocus?.focus?.(); qv.prevFocus = null;
}


/* ---------------------------------------------------------------- lifecycle */
function teardownMotion() {
  qvClose(); state.io?.disconnect(); state.rvio?.disconnect();
  state.offScroll?.(); state.offScroll = null;
  if (mm) { mm.revert(); mm = null; }
  if (hasGsap()) ScrollTrigger.getAll().forEach((s) => s.kill());
  state.ctx = null;
}

function render() {
  document.documentElement.lang = state.lang;
  const { page, id } = state.route;
  const d = page === 'industry' ? industryOf(id) : null;
  const s = page === 'solution' ? state.solutions.get(id) : null;
  document.title = d ? `${t(d.name)} | V-TECH FOUNDRY` : s ? `${s.name} | V-TECH FOUNDRY` : page === 'experts' ? `${u('exp.title')} | V-TECH FOUNDRY` : 'V-TECH FOUNDRY';
  const body = page === 'industry' ? industryPage() : page === 'solution' ? solutionPage() : page === 'experts' ? expertsPage() : homePage();
  $('#app').innerHTML = `<div class="ambient" aria-hidden="true"><i></i><i></i><i></i></div>${header()}<main>${body}</main>${footer()}${floatCta()}`;
  document.documentElement.classList.toggle('rv-on', motionOK && 'IntersectionObserver' in window);   // armed before paint so nothing flashes
  bindChrome(); bindForm();
  // everything heavy (pins, timelines, measuring) starts after the first paint, so the hero is never waiting on it
  const rid = state.rid = (state.rid || 0) + 1;
  requestAnimationFrame(() => setTimeout(() => {
    if (rid !== state.rid) return;
    initReveal();
    initMotion();
    if (hasGsap() && motionOK) ScrollTrigger.refresh(); else measure();
    if (state.restoreY != null) { const y = state.restoreY; state.restoreY = null; window.scrollTo(0, y); }
    // pause infinite CSS animations (marquee, hero demo, pulses) while they are offscreen
    if ('IntersectionObserver' in window) {
      state.io = new IntersectionObserver((es) => es.forEach((e) => e.target.classList.toggle('off', !e.isIntersecting)), { rootMargin: '80px' });
      $$('.marq, .demo, .chapter').forEach((el) => state.io.observe(el));
    }
    const fit = () => fitScene($$('svg.scene'));
    fit();
    document.fonts?.ready.then(() => { if (rid !== state.rid) return; fit(); if (hasGsap() && motionOK) ScrollTrigger.refresh(); else measure(); });
  }, 0));
}

function setLang(l) {
  if (l === state.lang) return;
  state.lang = l; store.set('vth-lang', l);
  state.restoreY = scrollY; teardownMotion(); render();   // the scroll position is restored once the pins exist again
}

loadData().then(() => { render(); }).catch((e) => {
  $('#app').innerHTML = '<section class="hero"><div class="wrap"><h1 class="display">Unable to load content</h1><p class="lede">Serve this folder over HTTP (for example <code>python3 -m http.server</code>); JSON cannot be fetched from file://.</p></div></section>';
  console.error(e);
});
