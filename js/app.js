// V-TECH HUB landing engine. No build step: plain ES module + GSAP/ScrollTrigger + Lenis (vendored).
import { CONFIG } from './config.js';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* storage unavailable */ } }
};
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const params = new URLSearchParams(location.search);

const state = {
  lang: ['en', 'vi'].includes(params.get('lang')) ? params.get('lang') : (store.get('vth-lang') || 'en'),
  theme: store.get('vth-theme') || 'light',
  ui: null, solutions: new Map(), industries: []
};
const t = (o) => (o && (o[state.lang] ?? o.en)) ?? '';
const ui = (path) => path.split('.').reduce((o, k) => o?.[k], state.ui);
const u = (path) => t(ui(path));
const ic = (name, cls = '') => `<i data-lucide="${esc(name || 'box')}" class="${cls}" aria-hidden="true"></i>`;
const page = document.body.dataset.page;
const motionOK = !matchMedia('(prefers-reduced-motion: reduce)').matches;
const hasGsap = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
let lenis = null;
let mm = null;

/* ---------------------------------------------------------------- data */
async function loadData() {
  const j = (p) => fetch(p).then((r) => { if (!r.ok) throw new Error(p); return r.json(); });
  const [uiData, sols, ...inds] = await Promise.all([
    j('data/ui.json'), j('data/solutions.json'),
    ...CONFIG.industries.map((id) => j(`data/industries/${id}.json`).catch(() => null))
  ]);
  state.ui = uiData;
  state.industries = inds.filter(Boolean).sort((a, b) => a.order - b.order);
  sols.forEach((s) => state.solutions.set(s.id, s));
  state.industries.forEach((i) => (i.newSolutions || []).forEach((s) => { if (!state.solutions.has(s.id)) state.solutions.set(s.id, s); }));
}
const industryOf = (id) => state.industries.find((i) => i.id === id);
const sol = (id) => state.solutions.get(id) || { id, name: id, icon: 'box', tagline: {}, description: {} };

/* ---------------------------------------------------------------- shared chrome */
function header() {
  const cur = page === 'industry' ? params.get('i') : '';
  const inds = state.industries.map((i) => `<a href="industry.html?i=${i.id}">
      <span class="ico">${ic(i.icon)}</span><span>${esc(t(i.name))}<small>${esc(t(i.tagline))}</small></span></a>`).join('');
  const sols = [...state.solutions.values()].map((s) => `<a href="solution.html?s=${s.id}">
      <span class="ico">${ic(s.icon)}</span><span>${esc(s.name)}<small>${esc(t(s.tagline))}</small></span></a>`).join('');
  return `<header class="hdr" id="hdr"><div class="wrap">
    <a class="logo" href="index.html" aria-label="V-TECH HUB"><b>V-TECH</b><span>HUB</span></a>
    <nav class="nav" id="nav" aria-label="Primary">
      <div class="dd"><button class="nav-btn ${page === 'solution' ? 'on' : ''}" aria-expanded="false" aria-haspopup="true">${u('nav.solutions')} ${ic('chevron-down')}</button>
        <div class="panel glass wide">${sols}</div></div>
      <div class="dd"><button class="nav-btn ${cur ? 'on' : ''}" aria-expanded="false" aria-haspopup="true">${u('nav.industry')} ${ic('chevron-down')}</button>
        <div class="panel glass wide">${inds}</div></div>
      <div class="dd"><button class="nav-btn" aria-expanded="false" aria-haspopup="true">${u('nav.meet')} ${ic('chevron-down')}</button>
        <div class="panel glass"><a href="${CONFIG.website}" target="_blank" rel="noopener"><span class="ico">${ic('building')}</span><span>${u('nav.about')}</span></a>
          <a href="#contact" data-scroll><span class="ico">${ic('users')}</span><span>${u('nav.expert')}</span></a></div></div>
    </nav>
    <div class="tools">
      <div class="lang" role="group" aria-label="Language"><button data-lang="en" class="${state.lang === 'en' ? 'on' : ''}">EN</button><button data-lang="vi" class="${state.lang === 'vi' ? 'on' : ''}">VI</button></div>
      <button class="icon-btn" id="theme" aria-label="Toggle theme">${ic(state.theme === 'dark' ? 'sun' : 'moon')}</button>
      <a class="btn btn-red" href="#contact" data-scroll>${u('nav.request')}</a>
      <button class="icon-btn burger" id="burger" aria-label="${u('nav.menu')}" aria-expanded="false">${ic('menu')}</button>
    </div></div></header>`;
}

function contact(presetIndustry = '') {
  const opts = state.industries.map((i) => `<option value="${i.id}" ${i.id === presetIndustry ? 'selected' : ''}>${esc(t(i.name))}</option>`).join('');
  return `<section class="contact" id="contact"><div class="wrap"><div class="contact-box glass rv" id="cbox">
    <div>
      <span class="kicker">${u('cta.kicker')}</span>
      <h2 class="h2">${u('cta.title')}</h2>
      <p class="lede">${u('cta.p')}</p>
      <div class="direct">
        <a href="tel:${CONFIG.phone}"><span class="ico">${ic('phone')}</span><span><small>${u('cta.call')}</small>${esc(CONFIG.phoneDisplay)}</span></a>
        <a href="${CONFIG.zalo}" target="_blank" rel="noopener"><span class="ico">${ic('message-circle')}</span><span><small>${u('cta.zalo')}</small>Zalo</span></a>
        <a href="mailto:${CONFIG.email}"><span class="ico">${ic('mail')}</span><span><small>${u('cta.mail')}</small>${esc(CONFIG.email)}</span></a>
      </div>
    </div>
    <div>
      <div class="tabs" role="tablist"><button type="button" class="on" data-mode="book" role="tab">${u('cta.tabBook')}</button><button type="button" data-mode="brief" role="tab">${u('cta.tabBrief')}</button></div>
      <form id="lead" novalidate>
        <div class="fg">
          ${field('name', 'cta.name', 'text', 'name')}${field('company', 'cta.company', 'text', 'organization')}
          ${field('email', 'cta.email', 'email', 'email')}${field('phone', 'cta.phone', 'tel', 'tel')}
          <div class="field full"><label for="f-industry">${u('cta.industry')}</label>
            <select id="f-industry" name="industry"><option value="">${u('cta.select')}</option>${opts}<option value="other">${u('cta.other')}</option></select></div>
          <div class="field full" id="need-wrap"><label for="f-need">${u('cta.need')}</label><textarea id="f-need" name="need" rows="3"></textarea></div>
        </div>
        <input class="hp" type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">
        <label class="consent"><input type="checkbox" name="consent" required> <span>${u('cta.consent')}</span></label>
        <button class="btn btn-red" type="submit" id="send">${u('cta.sendBook')} ${ic('arrow-right')}</button>
      </form>
      <div class="thanks" role="status"><div class="ok">${ic('check')}</div><h3>${u('cta.thanksT')}</h3><p class="lede">${u('cta.thanksP')}</p></div>
    </div></div></div></section>`;
}
const field = (name, label, type, ac) => `<div class="field"><label for="f-${name}">${u(label)}</label>
  <input id="f-${name}" name="${name}" type="${type}" autocomplete="${ac}" required><span class="em" aria-live="polite"></span></div>`;

function footer() {
  return `<footer class="foot"><div class="wrap">
    <div class="cols">
      <div><a class="logo" href="index.html"><b>V-TECH</b><span>HUB</span></a>
        <p style="margin-top:1rem">${u('foot.powered')} <a href="${CONFIG.website}" target="_blank" rel="noopener"><b>VNETWORK</b></a></p></div>
      <div class="list"><a href="tel:${CONFIG.phone}">${esc(CONFIG.phoneDisplay)}</a><a href="mailto:${CONFIG.email}">${esc(CONFIG.email)}</a><a href="${CONFIG.website}" target="_blank" rel="noopener">vnetwork.vn</a></div>
      <div class="list">${CONFIG.offices.map((o) => `<p>${esc(o)}</p>`).join('')}</div>
    </div>
    <div class="fine"><span>© 2013 VNETWORK JSC. ${u('foot.rights')}</span><span><a href="${CONFIG.website}" target="_blank" rel="noopener">${u('foot.terms')}</a> · <a href="${CONFIG.website}" target="_blank" rel="noopener">${u('foot.privacy')}</a></span></div>
  </div></footer>`;
}

/* ---------------------------------------------------------------- pages */
function homePage() {
  const cards = state.industries.map((i) => `<a class="card glass rv" href="industry.html?i=${i.id}">
      <span class="ico">${ic(i.icon)}</span><h3>${esc(t(i.name))}</h3><p>${esc(t(i.tagline))}</p>
      <span class="more">${u('home.read')} ${ic('arrow-right')}</span></a>`).join('');
  const solCards = [...state.solutions.values()].map((s) => `<a class="card glass rv" href="solution.html?s=${s.id}">
      <span class="ico">${ic(s.icon)}</span><h3>${esc(s.name)}</h3><p>${esc(t(s.tagline))}</p><span class="more">${u('ind.learn')} ${ic('arrow-right')}</span></a>`).join('');
  const steps = ui('home.steps').map((s) => `<div class="step glass rv"><h3>${t(s.t)}</h3><p>${t(s.d)}</p></div>`).join('');
  return `
  <section class="hero"><div class="wrap">
    <h1 class="rv-h">${u('home.heroA')}<br><em>${u('home.heroB')}</em></h1>
    <p class="lede rv">${u('home.heroP')}</p>
    <div class="actions rv"><a class="btn btn-red" href="#industries" data-scroll>${u('home.explore')} ${ic('arrow-right')}</a>
      <a class="btn btn-glass" href="#contact" data-scroll>${ic('message-square')} ${u('nav.request')}</a></div></div>
    <div class="scroll-cue">${u('ind.scroll')}</div></section>
  <section class="sec" id="industries"><div class="wrap">
    <div class="sec-head center"><span class="kicker rv">${u('home.indKicker')}</span><h2 class="h2 rv">${u('home.indTitle')}</h2><p class="lede rv">${u('home.indP')}</p></div>
    <div class="cards">${cards}</div></div></section>
  <section class="sec"><div class="wrap"><div class="sec-head"><span class="kicker rv">${u('home.stepsKicker')}</span></div><div class="steps">${steps}</div></div></section>
  <section class="sec"><div class="wrap">
    <div class="sec-head"><span class="kicker rv">${u('home.solKicker')}</span><h2 class="h2 rv">${u('home.solTitle')}</h2></div>
    <div class="cards">${solCards}</div></div></section>
  ${contact()}`;
}

function industryPage() {
  const id = params.get('i') || 'bfsi';
  const d = industryOf(id);
  if (!d) return notFound(u('ind.notFound'));
  const chips = (d.regulations || []).map((r) => `<span class="chip">${ic('shield')} ${esc(r)}</span>`).join('');
  const sw = state.industries.map((i) => `<a href="industry.html?i=${i.id}" class="${i.id === id ? 'on' : ''}">${ic(i.icon)} ${esc(t(i.name))}</a>`).join('');
  const n = d.chapters.length;
  const picks = d.chapters.map((c, k) => `<button data-goto="${k}"><b>0${k + 1}</b>${esc(t(c.challenge.title))}</button>`).join('');
  const dots = d.chapters.map((c, k) => `<button data-goto="${k}" aria-label="${esc(t(c.challenge.title))}">${k + 1}</button>`).join('');

  const chapters = d.chapters.map((c, k) => {
    const chips2 = c.solutions.map((s) => `<a href="solution.html?s=${s}">${ic(sol(s).icon)} ${esc(sol(s).name)}</a>`).join('');
    const pts = (c.response.points || []).map((p) => `<li class="pt">${ic('check-circle-2')}<span>${esc(t(p))}</span></li>`).join('');
    const stat = c.challenge.stat ? `<div class="stat"><strong>${esc(c.challenge.stat.value)}</strong><span>${esc(t(c.challenge.stat.label))}</span></div>` : '';
    const m = c.response.metric ? `<div class="metric"><strong data-count="${esc(c.response.metric.value)}">${esc(c.response.metric.value)}</strong><span>${esc(t(c.response.metric.label))}</span></div>` : '';
    return `<section class="chapter" id="ch-${k}" data-title="${esc(t(c.challenge.title))}"><div class="wrap"><div class="stage">
      <div class="numeral" aria-hidden="true">0${k + 1}</div>
      <article class="pane pain glass"><span class="tag">${u('ind.challenge')}</span>
        <h3>${esc(t(c.challenge.title))}</h3><p>${esc(t(c.challenge.body))}</p>${stat}
        <div class="persona">${ic('user-round')}<span>${u('ind.felt')} <b>${esc(t(c.persona))}</b></span></div></article>
      <div class="bridge" aria-hidden="true">${ic('arrow-right')}</div>
      <article class="pane ans glass"><span class="tag">${u('ind.answer')}</span>
        <div class="solchips"><span class="sr">${u('ind.solvedBy')}</span>${chips2}</div>
        <h3>${esc(t(c.response.title))}</h3><p>${esc(t(c.response.body))}</p>
        <ul class="points">${pts}</ul>${m}</article>
    </div></div></section>`;
  }).join('');

  const bundle = d.bundle.map((s) => {
    const covers = d.chapters.map((c, k) => c.solutions.includes(s) ? `<i>0${k + 1}</i>` : '').join('');
    const x = sol(s);
    return `<a class="card glass rv" href="solution.html?s=${s}"><span class="ico">${ic(x.icon)}</span><h3>${esc(x.name)}</h3><p>${esc(t(x.description))}</p>
      <div class="covers" title="${u('ind.covers')}">${covers}</div><span class="more">${u('ind.learn')} ${ic('arrow-right')}</span></a>`;
  }).join('');
  const outcomes = d.outcomes.map((o, k) => `<div class="card glass rv" data-n="0${k + 1}"><h3>${esc(t(o.title))}</h3><p>${esc(t(o.body))}</p></div>`).join('');
  const faq = d.faq.map((f) => `<details class="glass rv"><summary>${esc(t(f.q))}${ic('plus')}</summary><div class="a">${esc(t(f.a))}</div></details>`).join('');

  return `
  <section class="hero ind-hero"><div class="wrap">
    <div class="crumbs rv"><a href="index.html">V-TECH HUB</a> / <a href="index.html#industries">${u('ind.crumbIndustry')}</a> / <span>${esc(t(d.name))}</span></div>
    <h1 class="rv-h">${esc(t(d.title))}</h1>
    <p class="tag rv">${esc(t(d.tagline))}</p>
    <div class="row rv">${chips}</div>
    <div class="actions rv"><a class="btn btn-red" href="#contact" data-scroll>${u('ind.talk')} ${ic('arrow-right')}</a>
      <a class="btn btn-glass" href="#story" data-scroll>${ic('arrow-down')} ${u('ind.scroll')}</a></div>
    <nav class="switcher rv" aria-label="${u('ind.otherIndustries')}">${sw}</nav></div></section>
  <section class="intro" id="intro"><div class="wrap">
    <div><span class="kicker rv">${u('ind.chKicker')}</span><p class="h2 rv" style="margin-top:1rem;max-width:30ch">${esc(t(d.name))}</p><p class="lede rv" style="margin-top:1.2rem">${esc(t(d.challengesIntro))}</p></div>
    <div class="pick rv"><span>${u('ind.pick')}</span><div>${picks}</div></div></div></section>
  <div class="story" id="story">
    <div class="story-bar"><div class="wrap"><div class="story-pill"><span class="now" id="now">${u('ind.chapter')} 1/${n}</span><span class="name" id="nowname">${esc(t(d.chapters[0].challenge.title))}</span><div class="dots">${dots}</div></div></div>
      <div class="progress"><i id="prog"></i></div></div>
    ${chapters}</div>
  <section class="sec" id="bundle"><div class="wrap"><div class="sec-head"><span class="kicker rv">${u('ind.bundleKicker')}</span><h2 class="h2 rv">${u('ind.bundleTitle')}</h2></div><div class="bundle-grid">${bundle}</div></div></section>
  <section class="sec"><div class="wrap"><div class="sec-head"><span class="kicker rv">${u('ind.whyKicker')}</span><h2 class="h2 rv">${esc(t(d.name))}</h2></div><div class="why">${outcomes}</div></div></section>
  <section class="sec"><div class="wrap"><div class="sec-head center"><span class="kicker rv">${u('ind.faqKicker')}</span></div><div class="faq">${faq}</div></div></section>
  <section class="sec" style="padding-top:0"><div class="wrap"><div class="poc glass rv"><div><span class="kicker">${u('ind.pocKicker')}</span><h2 class="h2">${u('ind.pocTitle')}</h2><p class="lede">${u('ind.pocP')}</p></div>
    <a class="btn btn-red" href="#contact" data-scroll data-prefill="poc">${u('ind.pocBtn')} ${ic('arrow-right')}</a></div></div></section>
  ${contact(id)}`;
}

function solutionPage() {
  const id = params.get('s');
  const s = state.solutions.get(id);
  if (!s) return notFound(u('sol.notFound'));
  const uses = state.industries.flatMap((i) => i.chapters.filter((c) => c.solutions.includes(id)).map((c) => ({ i, c })));
  const cards = uses.map(({ i, c }) => `<a class="card glass rv" href="industry.html?i=${i.id}#story"><span class="ico">${ic(i.icon)}</span>
      <span class="chip">${esc(t(i.name))}</span><h3>${esc(t(c.challenge.title))}</h3><p>${esc(t(c.response.title))}</p><span class="more">${u('home.read')} ${ic('arrow-right')}</span></a>`).join('');
  return `
  <section class="hero ind-hero"><div class="wrap">
    <div class="crumbs rv"><a href="index.html">V-TECH HUB</a> / <span>${u('sol.kicker')}</span> / <span>${esc(s.name)}</span></div>
    <h1 class="rv-h">${esc(s.name)}</h1><p class="tag rv">${esc(t(s.description))}</p>
    <div class="actions rv"><a class="btn btn-red" href="#contact" data-scroll>${u('ind.talk')} ${ic('arrow-right')}</a></div></div></section>
  <section class="sec"><div class="wrap"><div class="sec-head"><span class="kicker rv">${u('sol.where')}</span></div><div class="cards">${cards}</div></div></section>
  ${contact()}`;
}
const notFound = (msg) => `<section class="hero"><div class="wrap"><h1>${esc(msg)}</h1><p class="lede" style="margin-top:1.4rem"><a class="red" href="index.html">← V-TECH HUB</a></p></div></section>`;

/* ---------------------------------------------------------------- behaviour */
function bindChrome() {
  const hdr = $('#hdr');
  const onScroll = () => hdr.classList.toggle('solid', scrollY > 24);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  const dds = $$('.dd');
  const closeAll = () => dds.forEach((d) => { d.classList.remove('open'); $('.nav-btn', d).setAttribute('aria-expanded', 'false'); });
  dds.forEach((d) => {
    const b = $('.nav-btn', d);
    const set = (o) => { closeAll(); d.classList.toggle('open', o); b.setAttribute('aria-expanded', String(o)); };
    b.addEventListener('click', (e) => { e.stopPropagation(); set(!d.classList.contains('open')); });
    d.addEventListener('mouseenter', () => matchMedia('(hover:hover) and (min-width:961px)').matches && set(true));
    d.addEventListener('mouseleave', () => matchMedia('(hover:hover) and (min-width:961px)').matches && set(false));
  });
  document.addEventListener('click', (e) => { if (!e.target.closest('.dd')) closeAll(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAll(); });
  $('#burger').addEventListener('click', (e) => { const o = $('#nav').classList.toggle('open'); e.currentTarget.setAttribute('aria-expanded', String(o)); });

  $$('[data-lang]').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));
  $('#theme').addEventListener('click', () => setTheme(state.theme === 'dark' ? 'light' : 'dark'));
  document.addEventListener('click', (e) => {
    const a = e.target.closest('[data-scroll]');
    if (!a) return;
    const target = $(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault(); $('#nav').classList.remove('open'); closeAll();
    if (a.dataset.prefill === 'poc') { const n = $('#f-need'); if (n && !n.value) n.value = 'PoC sandbox'; }
    scrollToEl(target);
  });
}
function scrollToEl(el, offset = -(parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 76) - 40) {
  if (lenis) lenis.scrollTo(el, { offset, duration: 1.4 });
  else el.scrollIntoView({ behavior: motionOK ? 'smooth' : 'auto', block: 'start' });
}

function bindForm() {
  const form = $('#lead'); if (!form) return;
  let mode = 'book';
  $$('.tabs button').forEach((b) => b.addEventListener('click', () => {
    mode = b.dataset.mode;
    $$('.tabs button').forEach((x) => x.classList.toggle('on', x === b));
    $('#need-wrap').style.display = mode === 'brief' ? 'none' : '';
    $('#send').firstChild.textContent = u(mode === 'brief' ? 'cta.sendBrief' : 'cta.sendBook') + ' ';
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
    if (!validate()) { const bad = $('.err input', form) || form.consent; bad.focus(); return; }
    const payload = { mode, lang: state.lang, page: location.pathname + location.search, ts: new Date().toISOString(),
      ...Object.fromEntries(new FormData(form).entries()) };
    delete payload.website;
    const btn = $('#send'); btn.disabled = true;
    try {
      if (CONFIG.leadEndpoint) {
        const r = await fetch(CONFIG.leadEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(payload) });
        if (!r.ok) throw new Error(r.status);
      } else console.info('[lead — no endpoint configured]', payload);
      $('#cbox').classList.add('sent');
    } catch (err) { alert(u('cta.errorT')); btn.disabled = false; }
  });
}

/* ---------------------------------------------------------------- motion */
function initLenis() {
  if (lenis || !motionOK || typeof window.Lenis === 'undefined') return;
  lenis = new window.Lenis({ duration: 1.15, smoothWheel: true });
  if (hasGsap) {
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  } else { const raf = (t0) => { lenis.raf(t0); requestAnimationFrame(raf); }; requestAnimationFrame(raf); }
}

function countUp(el, tl, at) {
  const m = String(el.dataset.count).match(/^([^\d]*)([\d.,]+)(.*)$/);
  if (!m) return;
  const target = parseFloat(m[2].replace(',', '.')); const dec = (m[2].split(/[.,]/)[1] || '').length;
  const o = { v: 0 }; el.textContent = m[1] + (0).toFixed(dec) + m[3];
  tl.to(o, { v: target, duration: .9, ease: 'power1.out', onUpdate: () => { el.textContent = m[1] + o.v.toFixed(dec) + m[3]; } }, at);
}

function initMotion() {
  if (!hasGsap || !motionOK) return;
  gsap.registerPlugin(ScrollTrigger);
  initLenis();
  document.documentElement.classList.add('js-motion');
  mm = gsap.matchMedia();

  // generic reveals (all sizes)
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    $$('.rv-h').forEach((h) => gsap.from(h, { y: 50, opacity: 0, duration: 1.1, ease: 'power3.out', delay: .1 }));
    ScrollTrigger.batch('.rv', { start: 'top 90%', once: true,
      onEnter: (els) => gsap.fromTo(els, { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: .9, ease: 'power3.out', stagger: .08, overwrite: true, clearProps: 'transform' }) });
    gsap.to('.ambient i:nth-child(1)', { yPercent: 25, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 1 } });
    gsap.to('.ambient i:nth-child(2)', { yPercent: -30, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 1 } });
  });

  const story = $('#story');
  if (story) {
    const chapters = $$('.chapter', story);
    const setActive = (k) => {
      $('#now').textContent = `${u('ind.chapter')} ${k + 1}/${chapters.length}`;
      $('#nowname').textContent = chapters[k].dataset.title;
      $$('.dots button').forEach((b, j) => { b.classList.toggle('on', j === k); b.classList.toggle('done', j < k); });
    };
    setActive(0);
    $$('[data-goto]').forEach((b) => b.addEventListener('click', () => {
      const k = +b.dataset.goto; const ch = chapters[k];
      // with pinning the chapter's trigger start is where its pain card is fully shown
      const st = ch._st; scrollToEl(st ? st.start + 2 : ch, st ? 0 : undefined);
    }));
    ScrollTrigger.create({ trigger: story, start: 'top 60%', end: 'bottom bottom', scrub: true, onUpdate: (s) => { $('#prog').style.width = `${s.progress * 100}%`; } });

    // desktop: pinned, scrubbed problem -> answer transformation
    mm.add('(min-width: 961px) and (prefers-reduced-motion: no-preference)', () => {
      chapters.forEach((ch, k) => {
        const pain = $('.pain', ch), ans = $('.ans', ch), bridge = $('.bridge', ch), num = $('.numeral', ch);
        const items = $$('.solchips > a, .ans h3, .ans > p, .pt, .metric', ans);
        const counter = $('[data-count]', ch);
        const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' },
          scrollTrigger: { trigger: ch, start: 'top top+=60', end: '+=170%', pin: true, scrub: .6, anticipatePin: 1,
            onToggle: (s) => s.isActive && setActive(k), onRefresh: (s) => { ch._st = s; } } });
        tl.fromTo(num, { opacity: 0, xPercent: -8 }, { opacity: 1, xPercent: 0, duration: 1 }, 0)
          .fromTo(pain, { opacity: 0, y: 70, scale: .96 }, { opacity: 1, y: 0, scale: 1, duration: 1 }, 0)
          .fromTo(ans, { opacity: 0, x: 90, scale: .96 }, { opacity: .18, x: 40, scale: .98, duration: 1 }, .2)
          .to({}, { duration: .9 })                                  // hold on the pain
          .fromTo(bridge, { scale: 0, rotate: -120 }, { scale: 1, rotate: 0, duration: .6, ease: 'back.out(2)' })
          .to(pain, { opacity: .5, scale: .97, x: -14, duration: .8 }, '<')
          .to(ans, { opacity: 1, x: 0, scale: 1, duration: .8 }, '<+.1')
          .fromTo(items, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: .5, stagger: .14 }, '-=.3');
        if (counter) countUp(counter, tl, '-=.5');
        tl.to({}, { duration: .5 });                                  // breathe before unpinning
      });
      return () => { /* matchMedia reverts all tweens + triggers */ };
    });

    // mobile: simple, readable reveals, no pinning
    mm.add('(max-width: 960px) and (prefers-reduced-motion: no-preference)', () => {
      chapters.forEach((ch, k) => {
        ScrollTrigger.create({ trigger: ch, start: 'top 50%', end: 'bottom 50%', onToggle: (s) => s.isActive && setActive(k) });
        const counter = $('[data-count]', ch);
        gsap.from($('.pain', ch), { opacity: 0, y: 40, duration: .8, scrollTrigger: { trigger: ch, start: 'top 80%', once: true } });
        const tl = gsap.timeline({ scrollTrigger: { trigger: $('.ans', ch), start: 'top 80%', once: true } });
        tl.from($('.bridge', ch), { scale: 0, duration: .4, ease: 'back.out(2)' })
          .from($('.ans', ch), { opacity: 0, y: 40, duration: .7 }, '<.1');
        if (counter) countUp(counter, tl, '>-.3');
      });
    });
  }
}

/* ---------------------------------------------------------------- lifecycle */
function teardownMotion() {
  if (mm) { mm.revert(); mm = null; }
  if (hasGsap) { ScrollTrigger.getAll().forEach((s) => s.kill()); }
  document.documentElement.classList.remove('js-motion');
}

function render() {
  document.documentElement.lang = state.lang;
  document.documentElement.dataset.theme = state.theme;
  const d = page === 'industry' ? industryOf(params.get('i') || 'bfsi') : null;
  const s = page === 'solution' ? state.solutions.get(params.get('s')) : null;
  document.title = d ? `${t(d.name)} | V-TECH HUB` : s ? `${s.name} | V-TECH HUB` : 'V-TECH HUB | The Tech Alliance Driving Vertical Solutions';
  const body = page === 'industry' ? industryPage() : page === 'solution' ? solutionPage() : homePage();
  $('#app').innerHTML = `<div class="ambient" aria-hidden="true"><i></i><i></i><i></i></div><div class="grain" aria-hidden="true"></div>${header()}<main>${body}</main>${footer()}`;
  if (window.lucide) lucide.createIcons();
  bindChrome(); bindForm();
  initMotion();
  if (hasGsap && motionOK) ScrollTrigger.refresh();
}

function setLang(l) {
  if (l === state.lang) return;
  state.lang = l; store.set('vth-lang', l);
  const y = scrollY; teardownMotion(); render(); scrollTo(0, y);
}
function setTheme(th) {
  state.theme = th; store.set('vth-theme', th);
  document.documentElement.dataset.theme = th;
  $('#theme').innerHTML = ic(th === 'dark' ? 'sun' : 'moon'); if (window.lucide) lucide.createIcons();
}

loadData().then(() => {
  render();
  if (location.hash) { const el = $(location.hash); if (el) setTimeout(() => scrollToEl(el), 400); }
}).catch((e) => {
  $('#app').innerHTML = `<section class="hero"><div class="wrap"><h1>Unable to load content</h1><p class="lede">Serve this folder over HTTP (e.g. <code>python3 -m http.server</code>) — JSON files cannot be fetched from file://.</p></div></section>`;
  console.error(e);
});
