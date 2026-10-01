// V-TECH HUB landing engine. No build step: ES modules + GSAP/ScrollTrigger + Lenis.
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
  route: parseRoute(), ui: null, solutions: new Map(), industries: [], ctx: null
};
const t = (o) => (typeof o === 'string' ? o : (o && (o[state.lang] ?? o.en)) ?? '');
const ui = (path) => path.split('.').reduce((o, k) => o?.[k], state.ui);
const u = (path) => t(ui(path));
const ic = (name, cls = '') => `<svg class="ic ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.box}</svg>`;
const motionOK = !matchMedia('(prefers-reduced-motion: reduce)').matches;
const hasGsap = () => typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
let lenis = null;
let mm = null;
let tickerFn = null;

/* ---------------------------------------------------------------- routing */
function parseRoute() {
  const h = (location.hash || '').replace(/^#/, '');
  const m = h.match(/^(industry|solution)-([\w-]+)$/);
  return m ? { page: m[1], id: m[2] } : { page: 'home', id: '' };
}
const hashOf = (r) => (r.page === 'home' ? 'home' : `${r.page}-${r.id}`);
function swapPage(after) {
  teardownMotion(); render();
  window.scrollTo(0, 0); lenis?.scrollTo(0, { immediate: true, force: true });
  document.body.classList.remove('leaving');
  if (after) setTimeout(() => scrollToEl($(after)), 420);
}
function go(hash, after) {
  const h = hash.replace(/^#/, '');
  const m = h.match(/^(industry|solution)-([\w-]+)$/);
  state.route = m ? { page: m[1], id: m[2] } : { page: 'home', id: '' };
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
    const [uiData, solutions, ...inds] = await Promise.all([j('data/ui.json'), j('data/solutions.json'), ...CONFIG.industries.map((id) => j(`data/industries/${id}.json`).catch(() => null))]);
    raw = { ui: uiData, solutions, industries: inds.filter(Boolean) };
  }
  state.ui = raw.ui;
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
    ${link('home', '<b>V-TECH</b><span>HUB</span>', 'logo', 'aria-label="V-TECH HUB"')}
    <nav class="nav" id="nav" aria-label="Primary">
      <div class="dd mega-dd"><button class="nav-btn ${state.route.page === 'solution' || cur ? 'on' : ''}" aria-expanded="false" aria-haspopup="true">${u('nav.solutions')} ${ic('chevron-down')}</button>
        <div class="panel mega"><div class="m-left"><span class="eyebrow">${u('nav.byIndustry')}</span>${left}</div><div class="m-right">${panes}</div>
        <div class="m-foot"><span class="eyebrow">${u('nav.catalog')}</span><div>${catalog}</div></div></div></div>
      <a class="nav-btn plain" href="#home" data-go="home" data-after="#how">${u('nav.how')}</a>
      <div class="dd"><button class="nav-btn" aria-expanded="false" aria-haspopup="true">${u('nav.meet')} ${ic('chevron-down')}</button>
        <div class="panel"><a href="${CONFIG.website}" target="_blank" rel="noopener">${ic('building')}<span>${u('nav.about')}</span></a>
        <a href="#contact" data-scroll="#contact">${ic('users')}<span>${u('nav.expert')}</span></a></div></div>
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
  return `<section class="contact" id="contact"><div class="wrap"><div class="contact-box glass spot rv" id="cbox">
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
const floatCta = () => `<a class="fab btn btn-red" id="fab" href="#contact" data-scroll="#contact">${ic('phone')}<span>${u('cta.float')}</span></a>`;

function footer() {
  return `<footer class="foot"><div class="wrap">
    <div class="cols">
      <div>${link('home', '<b>V-TECH</b><span>HUB</span>', 'logo')}<p style="margin-top:1.2rem">${u('foot.powered')} <a href="${CONFIG.website}" target="_blank" rel="noopener"><b>VNETWORK</b></a></p></div>
      <div class="list"><a href="tel:${CONFIG.phone}">${esc(CONFIG.phoneDisplay)}</a><a href="mailto:${CONFIG.email}">${esc(CONFIG.email)}</a><a href="${CONFIG.website}" target="_blank" rel="noopener">vnetwork.vn</a></div>
      <div class="list">${CONFIG.offices.map((o) => `<p>${esc(o)}</p>`).join('')}</div>
    </div>
    <div class="fine"><span>© 2013 VNETWORK JSC. ${u('foot.rights')}</span><span><a href="${CONFIG.website}" target="_blank" rel="noopener">${u('foot.terms')}</a> · <a href="${CONFIG.website}" target="_blank" rel="noopener">${u('foot.privacy')}</a></span></div>
  </div></footer>`;
}

/* ---------------------------------------------------------------- pages */
function homePage() {
  const first = state.industries[0];
  const sectors = state.industries.map((i, k) => `<a class="sector glass ${k === 0 ? 'on' : ''}" href="#industry-${i.id}" data-go="industry-${i.id}" data-sector>
      <span class="s-vert"><b>${num(k + 1)}</b><span>${esc(t(i.name))}</span></span>
      <span class="s-body"><span class="s-top">${ic(i.icon, 'lead')}<b>${num(k + 1)}</b></span>
        <h3>${esc(t(i.name))}</h3><p>${esc(t(i.tagline))}</p>
        <span class="solchips plain">${i.bundle.slice(0, 4).map((s) => `<em>${ic(sol(s).icon)} ${esc(sol(s).name)}</em>`).join('')}</span>
        <span class="s-go">${i.chapters.length} ${u('home.chapters')} · ${u('home.read')} ${ic('arrow-right')}</span></span></a>`).join('');
  const steps = ui('home.steps').map((s, k) => `<div class="col rv"><span class="n">${num(k + 1)}</span><h3>${t(s.t)}</h3><p>${t(s.d)}</p></div>`).join('');
  const tiles = [...state.solutions.values()].map((s) => link(`solution-${s.id}`,
    `${ic(s.icon, 'lead')}<h3>${esc(s.name)}</h3><p>${esc(t(s.tagline))}</p><div class="foot"><span>${u('ind.learn')}</span>${ic('arrow-up-right')}</div>`, 'tile glass spot rv')).join('');
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
      <div class="glass spot demo card-a" id="demo" data-i="0">
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
    <div class="sectors rv" id="sectors">${sectors}</div><p class="hint rv">${u('home.sectorsHint')}</p></div></section>
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
    const m = c.response.metric ? `<div class="metric"><strong data-count="${esc(c.response.metric.value)}">${esc(c.response.metric.value)}</strong><span>${esc(t(c.response.metric.label))}</span></div>` : '';
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
      <div class="foot"><span>${u('ind.coversLabel')} <b>${covers}</b></span>${ic('arrow-up-right')}</div>`, 'tile glass spot rv');
  }).join('');
  const outcomes = d.outcomes.map((o, k) => `<div class="col rv"><span class="n">${num(k + 1)}</span><h3>${esc(t(o.title))}</h3><p>${esc(t(o.body))}</p></div>`).join('');
  const faq = d.faq.map((f) => `<details class="rv"><summary>${esc(t(f.q))}${ic('plus')}</summary><div class="a">${esc(t(f.a))}</div></details>`).join('');

  return `
  <section class="hero ind-hero"><div class="wrap"><div class="grid">
    <div>
      <div class="crumbs hero-in">${link('home', 'V-TECH HUB')} / ${link('home', u('ind.crumbIndustry'), '', 'data-after="#industries"')} / <span>${esc(t(d.name))}</span></div>
      <h1 class="display">${words(t(d.title))}</h1>
      <p class="lede hero-in" style="animation-delay:.5s">${esc(t(d.tagline))}</p>
      <div class="chips hero-in" style="animation-delay:.56s">${chips}</div>
      <div class="actions hero-in" style="animation-delay:.62s"><a class="btn btn-red" href="#story" data-scroll="#story">${u('ind.begin')} ${ic('arrow-down')}</a>
        <a class="btn btn-line" href="#contact" data-scroll="#contact">${u('ind.talk')}</a></div>
    </div>
    <aside class="match glass spot hero-in" style="animation-delay:.45s"><span class="eyebrow">${u('ind.match')}</span><p>${u('ind.matchSub')}</p><div class="m-list">${match}</div></aside>
  </div>
    <nav class="switcher hero-in" style="animation-delay:.7s" aria-label="${u('ind.otherIndustries')}">${sw}</nav></div></section>
  <section class="intro" id="intro"><div class="wrap"><span class="eyebrow rv">${u('ind.whyNow')}</span><p class="statement rv">${esc(t(d.challengesIntro))}</p></div></section>
  <div class="story" id="story">
    <div class="story-bar"><div class="wrap"><span class="now" id="now">${u('ind.chapter')} 01 ${u('ind.of')} ${num(n)}</span><span class="name" id="nowname">${esc(t(d.chapters[0].challenge.title))}</span><div class="ticks">${ticks}</div></div><div class="progress"><i id="prog"></i></div></div>
    ${chapters}</div>
  <section class="sec resolved" id="bundle"><div class="wrap"><div class="sec-head"><span class="eyebrow rv">${u('ind.bundleKicker')}</span><h2 class="h2 rv">${u('ind.resolved')}</h2><p class="lede rv">${u('ind.resolvedP')}</p></div><div class="tiles">${bundle}</div></div></section>
  <section class="sec" style="padding-top:0"><div class="wrap"><div class="sec-head"><span class="eyebrow rv">${u('ind.whyKicker')}</span></div><div class="cols3">${outcomes}</div></div></section>
  <section class="sec" style="padding-top:0"><div class="wrap"><div class="sec-head"><span class="eyebrow rv">${u('ind.faqKicker')}</span></div><div class="faq">${faq}</div></div></section>
  <section class="sec" style="padding-top:0"><div class="wrap"><div class="poc glass spot rv"><div><span class="eyebrow">${u('ind.pocKicker')}</span><h2 class="h2">${u('ind.pocTitle')}</h2><p class="lede">${u('ind.pocP')}</p></div>
    <a class="btn btn-red" href="#contact" data-scroll="#contact" data-prefill="poc">${u('ind.pocBtn')} ${ic('arrow-right')}</a></div></div></section>
  ${contact(id)}`;
}

function solutionPage() {
  const id = state.route.id;
  const s = state.solutions.get(id);
  if (!s) return notFound(u('sol.notFound'));
  const kind = SCENE_KINDS[id] || 'gate';
  const uses = state.industries.flatMap((i) => i.chapters.filter((c) => c.solutions.includes(id)).map((c) => ({ i, c })));
  const tiles = uses.map(({ i, c }) => link(`industry-${i.id}`, `${ic(i.icon, 'lead')}<span class="chip">${esc(t(i.name))}</span><h3>${esc(t(c.challenge.title))}</h3><p>${esc(t(c.response.title))}</p><div class="foot"><span>${u('home.read')}</span>${ic('arrow-up-right')}</div>`, 'tile glass spot rv')).join('');
  return `
  <section class="hero ind-hero"><div class="wrap"><div class="grid">
    <div>
      <div class="crumbs hero-in">${link('home', 'V-TECH HUB')} / <span>${u('sol.kicker')}</span> / <span>${esc(s.name)}</span></div>
      <h1 class="display">${words(s.name)}</h1><p class="lede hero-in" style="animation-delay:.5s">${esc(t(s.description))}</p>
      <div class="actions hero-in" style="margin-top:2rem;animation-delay:.6s"><a class="btn btn-red" href="#contact" data-scroll="#contact">${u('ind.talk')} ${ic('arrow-right')}</a></div></div>
    <figure class="frame loop glass hero-in" style="animation-delay:.4s" data-kind="${kind}">${sceneFor(kind, {}, s.name)}<figcaption><i></i>${u('scenes.label')}</figcaption></figure>
  </div></div></section>
  <section class="sec" style="padding-top:0"><div class="wrap"><div class="sec-head"><span class="eyebrow rv">${u('sol.where')}</span></div><div class="tiles">${tiles}</div></div></section>
  ${contact()}`;
}
const notFound = (msg) => `<section class="hero"><div class="wrap"><h1 class="display">${esc(msg)}</h1><p class="lede" style="margin-top:1.4rem">${link('home', '← V-TECH HUB', 'red')}</p></div></section>`;

/* ---------------------------------------------------------------- behaviour */
function bindChrome() {
  const hdr = $('#hdr'), bar = $('#pgbar'), fab = $('#fab'), box = () => $('#contact');
  let ticking = false;
  const onScroll = () => {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      hdr.classList.toggle('solid', scrollY > 24);
      const max = document.documentElement.scrollHeight - innerHeight;
      if (bar) bar.style.transform = `scaleX(${max > 0 ? Math.min(1, scrollY / max) : 0})`;
      if (fab) { const c = box(); const hide = c && c.getBoundingClientRect().top < innerHeight * .75; fab.classList.toggle('show', scrollY > 520 && !hide); }
      trackChapters();
    });
    clearTimeout(state.settle); state.settle = setTimeout(trackChapters, 160); // after a long jump, pins settle a frame later
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  state.offScroll = () => removeEventListener('scroll', onScroll);

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

  // sector explorer (home): hover/focus expands; on touch the first tap expands, the second opens
  $$('[data-sector]').forEach((s) => {
    const on = () => $$('[data-sector]').forEach((x) => x.classList.toggle('on', x === s));
    s.addEventListener('mouseenter', on); s.addEventListener('focus', on);
    s.addEventListener('click', (e) => { if (matchMedia('(hover:none)').matches && !s.classList.contains('on')) { e.preventDefault(); e.stopPropagation(); on(); } });
  });
  // hero demo: the pain blurs away and the answer resolves; swap the copy each time the CSS loop restarts
  const demo = $('#demo');
  if (demo) {
    $('.was', demo).addEventListener('animationiteration', () => {
      const i = (+demo.dataset.i + 1) % state.industries.length; demo.dataset.i = i;
      const ind = state.industries[i], c = ind.chapters[0];
      $('.d-ind', demo).textContent = t(ind.name); $('.was', demo).textContent = t(c.challenge.title);
      $('.now', demo).textContent = t(c.response.title); $('.d-sol', demo).innerHTML = demoChips(c);
    });
  }
  // magnetic primary buttons
  if (matchMedia('(hover:hover)').matches && motionOK) {
    $$('.btn-red').forEach((b) => {
      b.addEventListener('pointermove', (e) => { const r = b.getBoundingClientRect(); b.style.setProperty('--tx', `${((e.clientX - r.left - r.width / 2) * .16).toFixed(1)}px`); b.style.setProperty('--ty', `${((e.clientY - r.top - r.height / 2) * .26).toFixed(1)}px`); });
      b.addEventListener('pointerleave', () => { b.style.removeProperty('--tx'); b.style.removeProperty('--ty'); });
    });
  }
  bindStory();
}
// one delegated handler for the whole document (links, smooth scroll, copy buttons, dismissals, glass spotlight)
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
  const cp = e.target.closest('[data-copy]');
  if (cp) {
    const done = () => { const s = $('span', cp); s.textContent = u('cta.copied'); setTimeout(() => { s.textContent = u('cta.copy'); }, 1400); };
    const sel = () => { const v = cp.previousElementSibling?.querySelector('.v'); if (v) { const r = document.createRange(); r.selectNodeContents(v); getSelection().removeAllRanges(); getSelection().addRange(r); } done(); };
    (navigator.clipboard?.writeText(cp.dataset.copy) ?? Promise.reject()).then(done, sel);
  }
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') state.closeAll?.(); });
document.addEventListener('pointermove', (e) => {
  const g = e.target.closest?.('.spot'); if (!g) return;
  const r = g.getBoundingClientRect(); g.style.setProperty('--mx', `${e.clientX - r.left}px`); g.style.setProperty('--my', `${e.clientY - r.top}px`);
}, { passive: true });

function scrollToEl(el, offset) {
  if (!el) return;
  const off = offset ?? -(parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 78) - 24;
  if (lenis) lenis.scrollTo(el, { offset: off, duration: 1.4 });
  else el.scrollIntoView({ behavior: motionOK ? 'smooth' : 'auto', block: 'start' });
}

/* chapter bookkeeping (works with or without GSAP): active chapter, progress bar, contact context, jump buttons */
function trackChapters() {
  const chs = $$('.chapter'); if (!chs.length) return;
  const mid = innerHeight * .5, sts = hasGsap() ? chs.map((_, j) => ScrollTrigger.getById(`ch${j}`)) : [];
  let k = 0;
  // pinned (desktop): decide from the scroll triggers, so a long jump can't be fooled by half-applied pins
  if (sts.length && sts.every(Boolean)) chs.forEach((_, j) => { if (scrollY >= sts[j].start - mid) k = j; });
  else chs.forEach((ch, j) => { if (ch.getBoundingClientRect().top <= mid + 40) k = j; });
  if (state.ctx?.k === k && state.ctx.lang === state.lang) { setProgress(); return; }
  const ch = chs[k];
  state.ctx = { k, lang: state.lang, title: ch.dataset.title, sols: ch.dataset.sols };
  $('#now').textContent = `${u('ind.chapter')} ${num(k + 1)} ${u('ind.of')} ${num(chs.length)}`;
  $('#nowname').textContent = ch.dataset.title;
  $$('.ticks button').forEach((b, j) => { b.classList.toggle('on', j === k); b.classList.toggle('done', j < k); });
  const c = $('#ctx'); if (c) { c.hidden = false; c.innerHTML = ctxHTML(); }
  setProgress();
}
function setProgress() {
  const story = $('#story'), p = $('#prog'); if (!story || !p) return;
  const r = story.getBoundingClientRect(), total = r.height - innerHeight * .3;
  p.style.width = `${Math.max(0, Math.min(1, (innerHeight * .7 - r.top) / total)) * 100}%`;
}
function bindStory() {
  $$('[data-goto]').forEach((b) => b.addEventListener('click', () => {
    const k = +b.dataset.goto, ch = $$('.chapter')[k]; if (!ch) return;
    const st = hasGsap() ? ScrollTrigger.getById(`ch${k}`) : null;
    if (st) { if (lenis) lenis.scrollTo(st.start + 4, { duration: 1.6 }); else window.scrollTo({ top: st.start + 4, behavior: 'smooth' }); }
    else scrollToEl(ch);
  }));
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
function initLenis() {
  if (lenis || !motionOK || typeof window.Lenis === 'undefined') return;
  lenis = new window.Lenis({ duration: 1.15, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  tickerFn = (time) => lenis.raf(time * 1000);
  gsap.ticker.add(tickerFn);
  gsap.ticker.lagSmoothing(0);
}

function countUp(el, tl, at) {
  const m = String(el.dataset.count).match(/^([^\d]*)([\d.,]+)(.*)$/);
  if (!m) return;
  const target = parseFloat(m[2].replace(',', '.')); const dec = (m[2].split(/[.,]/)[1] || '').length;
  const o = { v: 0 }; el.textContent = m[1] + (0).toFixed(dec) + m[3];
  tl.to(o, { v: target, duration: .9, ease: 'power1.out', onUpdate: () => { el.textContent = m[1] + o.v.toFixed(dec) + m[3]; } }, at);
}

function initMotion() {
  if (!hasGsap() || !motionOK) return;
  gsap.registerPlugin(ScrollTrigger);
  initLenis();
  mm = gsap.matchMedia();

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    ScrollTrigger.batch('.rv', { start: 'top 96%', once: true,
      onEnter: (els) => gsap.fromTo(els, { y: 34, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: .09, overwrite: true, clearProps: 'transform,opacity' }) });
    gsap.to('.ambient i:nth-child(1)', { yPercent: 28, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 1 } });
    gsap.to('.ambient i:nth-child(2)', { yPercent: -32, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 1 } });
    // how-it-works: the numbers light up in sequence
    $$('.steps .col').forEach((c) => gsap.fromTo($('.n', c), { color: '#c9ccd6' }, { color: '#e31e24', duration: .5, scrollTrigger: { trigger: c, start: 'top 80%', toggleActions: 'play none none reverse' } }));
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
      const counter = $('[data-count]', ch);
      const svg = $('svg.scene', frame), kind = frame.dataset.kind;
      const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' },
        scrollTrigger: { id: `ch${k}`, trigger: ch, start: 'top top+=70', end: '+=260%', pin: true, scrub: .6, anticipatePin: 1 } });
      tl.fromTo(num_, { opacity: 0, xPercent: -6 }, { opacity: 1, xPercent: 0, duration: 1 }, 0)
        .fromTo(meta, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: .8 }, 0)
        .fromTo(frame, { opacity: 0, y: 56, scale: .965 }, { opacity: 1, y: 0, scale: 1, duration: 1.3 }, .1)
        .fromTo(pain, { autoAlpha: 0, y: 40, filter: 'blur(10px)' }, { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 1 }, .3)
        .add(sceneTimeline(svg, kind), 0)
        .to(pain, { autoAlpha: 0, y: -34, filter: 'blur(12px)', duration: 1 }, 3.7)
        .fromTo(ans, { autoAlpha: 0, y: 40, filter: 'blur(12px)' }, { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 1 }, 4.2)
        .fromTo(items, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: .5, stagger: .14 }, 5);
      if (counter) countUp(counter, tl, 6.2);
      gsap.set(ans, { autoAlpha: 0 });
    });
    return () => story.classList.remove('pinned');
  });

  // mobile / tablet: no pinning. Pain, then the scene scrubbed by scroll, then the answer.
  mm.add('(max-width: 960px) and (prefers-reduced-motion: no-preference)', () => {
    chapters.forEach((ch) => {
      const counter = $('[data-count]', ch), frame = $('.frame', ch), svg = $('svg.scene', frame);
      gsap.timeline({ scrollTrigger: { trigger: frame, start: 'top 82%', end: 'bottom 30%', scrub: .5 } }).add(sceneTimeline(svg, frame.dataset.kind), 0);
      gsap.from($('.pain', ch), { opacity: 0, y: 30, duration: .9, scrollTrigger: { trigger: ch, start: 'top 85%', once: true } });
      const tl = gsap.timeline({ scrollTrigger: { trigger: $('.ans', ch), start: 'top 85%', once: true } });
      tl.from($('.ans', ch), { opacity: 0, y: 40, filter: 'blur(10px)', duration: .9 });
      if (counter) countUp(counter, tl, '>-.3');
    });
  });
}

/* ---------------------------------------------------------------- lifecycle */
function teardownMotion() {
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
  document.title = d ? `${t(d.name)} | V-TECH HUB` : s ? `${s.name} | V-TECH HUB` : 'V-TECH HUB';
  const body = page === 'industry' ? industryPage() : page === 'solution' ? solutionPage() : homePage();
  $('#app').innerHTML = `<div class="ambient" aria-hidden="true"><i></i><i></i><i></i></div><div class="grain" aria-hidden="true"></div>${header()}<main>${body}</main>${footer()}${floatCta()}`;
  const fit = () => $$('svg.scene').forEach(fitScene);
  fit(); document.fonts?.ready.then(fit);
  bindChrome(); bindForm();
  initMotion();
  if (hasGsap() && motionOK) ScrollTrigger.refresh();
}

function setLang(l) {
  if (l === state.lang) return;
  state.lang = l; store.set('vth-lang', l);
  const y = scrollY; teardownMotion(); render(); scrollTo(0, y);
}

loadData().then(() => { render(); }).catch((e) => {
  $('#app').innerHTML = '<section class="hero"><div class="wrap"><h1 class="display">Unable to load content</h1><p class="lede">Serve this folder over HTTP (for example <code>python3 -m http.server</code>); JSON cannot be fetched from file://.</p></div></section>';
  console.error(e);
});
