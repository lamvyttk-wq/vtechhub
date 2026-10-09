// V-TECH FOUNDRY landing page: one self-contained React component (Tailwind core classes + lucide-react).
// GENERATED FILE: edit react/template.jsx, react/overlay.mjs or data/*.json, then run `node build-react.mjs`.
import React, { useState, useEffect } from 'react';
import {
  Menu, X, ChevronRight, ArrowRight, ArrowUpRight, Check, Copy, Phone, Mail, MapPin, Globe, Landmark, Building2, ShieldCheck,
  Shield, ShieldAlert, Database, MailCheck, Scale, Factory, HeartPulse, ShoppingBag, Truck, Clapperboard, GraduationCap, Zap,
  Target, Bot, Filter, FileSearch, Megaphone, Boxes
} from 'lucide-react';

/*__DATA__*/

const ICONS = {
  landmark: Landmark, 'building-2': Building2, 'heart-pulse': HeartPulse, 'shopping-bag': ShoppingBag, factory: Factory,
  truck: Truck, clapperboard: Clapperboard, 'graduation-cap': GraduationCap, 'mail-check': MailCheck, scale: Scale,
  'shield-check': ShieldCheck, shield: Shield, 'shield-alert': ShieldAlert, database: Database, zap: Zap, globe: Globe,
  bot: Bot, target: Target, filter: Filter, 'file-search': FileSearch, megaphone: Megaphone
};
const Ic = ({ name, ...p }) => { const C = ICONS[name] || Boxes; return <C aria-hidden="true" {...p} />; };

/* [English, Vietnamese] pairs keep both languages in lockstep: a key cannot exist in only one. */
const UI = {
  'nav.industries': ['Industries', 'Ngành'],
  'nav.solutions': ['Solutions', 'Giải pháp'],
  'nav.alliance': ['Alliance', 'Liên minh'],
  'nav.leadership': ['Leadership', 'Lãnh đạo'],
  'nav.request': ['Request Consultation', 'Đăng ký tư vấn'],
  'nav.menu': ['Menu', 'Menu'],
  'nav.close': ['Close', 'Đóng'],
  'nav.primary': ['Primary', 'Điều hướng chính'],
  'nav.lang': ['Language', 'Ngôn ngữ'],
  'hero.eyebrow': ['A VNETWORK technology alliance', 'Liên minh công nghệ của VNETWORK'],
  'hero.title': ['Next-Gen Technology Alliance Delivering Mission-Critical Enterprise Solutions', 'Liên minh Công nghệ Tiên phong Kiến tạo Giải pháp Chuyên sâu cho Doanh nghiệp'],
  'hero.sub': ['Packaged, industry-ready solutions from one alliance.', 'Giải pháp đóng gói theo ngành từ một liên minh.'],
  'hero.explore': ['Explore industries', 'Khám phá các ngành'],
  'ind.pick': ['Choose your sector', 'Chọn lĩnh vực của bạn'],
  'ind.glance': ['A story in one glance', 'Câu chuyện trong một cái nhìn'],
  'ind.entry': ['Entry-point countermeasure', 'Biện pháp chặn cửa ngõ'],
  'ind.solution': ['Packaged solution', 'Gói giải pháp'],
  'ind.outcomes': ['Outcomes', 'Kết quả'],
  'ind.more': ['Read the full story', 'Xem đầy đủ câu chuyện'],
  'ind.less': ['Show less', 'Thu gọn'],
  'ind.illustrative': ['Illustrative scenario', 'Tình huống minh họa'],
  'sol.kicker': ['Featured solution', 'Giải pháp nổi bật'],
  'sol.partner': ['Solution partner', 'Đối tác giải pháp'],
  'sol.talk': ['Talk to an expert', 'Trao đổi với chuyên gia'],
  'sol.more': ['More from the portfolio', 'Thêm từ danh mục giải pháp'],
  'ally.kicker': ['Strategic alliance signing', 'Lễ ký kết liên minh chiến lược'],
  'ally.title': ['VPBank - VNETWORK Alliance', 'Liên minh VPBank - VNETWORK'],
  'ally.body': ['Aligning banking and technology leaders on secure, sovereign digital infrastructure.', 'Kết nối ngân hàng và công nghệ trên nền hạ tầng số an toàn, chủ quyền.'],
  'ally.alt': ['Representatives of VPBank and VNETWORK at the strategic alliance signing', 'Đại diện VPBank và VNETWORK tại lễ ký kết liên minh chiến lược'],
  'ally.glance': ['The alliance at a glance', 'Liên minh trong những con số'],
  'ally.sectors': ['Industry sectors', 'Lĩnh vực ngành'],
  'ally.solutions': ['Packaged solutions', 'Giải pháp đóng gói'],
  'ally.poc': ['Business days to a PoC environment', 'Ngày làm việc để có môi trường PoC'],
  'ally.offices': ['Offices: Ho Chi Minh City and Singapore', 'Văn phòng: TP. Hồ Chí Minh và Singapore'],
  'ldr.kicker': ['Leadership', 'Lãnh đạo'],
  'ldr.title': ['Experts & Advisory Board', 'Chuyên gia & Hội đồng cố vấn'],
  'ldr.years': ['years of experience', 'năm kinh nghiệm'],
  'ldr.domain': ['Domain', 'Lĩnh vực'],
  'ldr.bio': ['Read bio', 'Xem tiểu sử'],
  'ldr.hide': ['Hide bio', 'Ẩn tiểu sử'],
  'ldr.pending': ['Profile to be added from the existing site.', 'Hồ sơ sẽ được bổ sung từ trang hiện có.'],
  'cta.title': ['Ready to start with the right alliance?', 'Sẵn sàng bắt đầu cùng liên minh phù hợp?'],
  'cta.sub': ['An expert replies within one business day.', 'Chuyên gia phản hồi trong một ngày làm việc.'],
  'cta.call': ['Call us', 'Gọi cho chúng tôi'],
  'cta.mail': ['Email sales', 'Email bộ phận kinh doanh'],
  'cta.copy': ['Copy', 'Sao chép'],
  'cta.copied': ['Copied', 'Đã chép'],
  'foot.powered': ['Powered by', 'Vận hành bởi'],
  'foot.terms': ['Terms of Service', 'Điều khoản dịch vụ'],
  'foot.privacy': ['Privacy Policy', 'Chính sách bảo mật'],
  'foot.rights': ['All rights reserved.', 'Bảo lưu mọi quyền.']
};

const CONTACT = {
  phone: '+842873068789', phoneDisplay: '(+84) 28 7306 8789', email: 'contact@vnetwork.vn', website: 'https://vnetwork.vn',
  offices: [
    { en: 'Level 23, UOA Tower, 6 Tan Trao, Tan My Ward, Ho Chi Minh City, Vietnam', vi: 'Tầng 23, Tòa nhà UOA, 6 Tân Trào, Phường Tân Mỹ, TP. Hồ Chí Minh, Việt Nam' },
    { en: '111 North Bridge Road #17-06 Peninsula Plaza, Singapore', vi: '111 North Bridge Road #17-06 Peninsula Plaza, Singapore' }
  ]
};
const POC_DAYS = '14';

const FONT_HREF = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500..800&family=Inter:wght@400..700&display=swap';
const CSS = `
.vt{font-family:Inter,"Be Vietnam Pro",system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;color:#0f172a;background:#fff;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}
.vt-d{font-family:"Plus Jakarta Sans",Inter,"Be Vietnam Pro",system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;font-weight:800;letter-spacing:-0.02em;text-wrap:balance}
.vt-fade{animation:vtFade .2s ease-out both}
@keyframes vtFade{from{opacity:0}to{opacity:1}}
@media (prefers-reduced-motion:reduce){.vt-fade{animation:none}.vt *{transition:none!important}}
.vt button:focus-visible,.vt a:focus-visible{outline:2px solid #dc2626;outline-offset:2px}
.vt [id]{scroll-margin-top:4.5rem}
`;

const SOL_BY_ID = Object.fromEntries(DATA.solutions.map((s) => [s.id, s]));
const FEATURED = SOL_BY_ID['ai-agent'];
const OTHER_SOLS = DATA.solutions.filter((s) => s.id !== 'ai-agent');
const wrap = 'mx-auto w-full max-w-6xl px-4 sm:px-6';
const hairline = 'border-slate-200/80';

/* ---------------------------------------------------------------- visuals */
/* Always-present base layer: a slate gradient with a circuit-style SVG pattern, so a photo that is slow or blocked never leaves a void. */
function TechArt({ icon, label }) {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200" role={label ? 'img' : undefined} aria-label={label}>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <pattern id="vtf-circuit" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 20H14M26 20H40M20 0V14M20 26V40" fill="none" stroke="#cbd5e1" strokeWidth="1" />
            <circle cx="20" cy="20" r="3" fill="none" stroke="#94a3b8" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#vtf-circuit)" opacity="0.7" />
        <path d="M40 240H140L170 210H260L290 240H360" fill="none" stroke="#94a3b8" strokeWidth="1.5" opacity="0.55" />
        <path d="M40 70H110L140 100H230" fill="none" stroke="#94a3b8" strokeWidth="1.5" opacity="0.55" />
        <circle cx="360" cy="240" r="4" fill="#dc2626" opacity="0.8" />
        <circle cx="230" cy="100" r="4" fill="#dc2626" opacity="0.8" />
      </svg>
      {icon && (
        <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-slate-800 shadow-sm ring-1 ring-slate-200 sm:right-5 sm:top-5 sm:h-14 sm:w-14"><Ic name={icon} className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.5} /></div>
      )}
    </div>
  );
}

/* Tries each URL in turn over the TechArt base. The photo fades in only once it has loaded; the scrim and white caption
   render through `children(loaded)` only then, so they never darken the fallback. */
function Photo({ srcs, alt, icon, art, className = '', children }) {
  const list = srcs.filter(Boolean);
  const sig = list.join('|');
  const [i, setI] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setI(0); setLoaded(false); }, [sig]);
  return (
    <div className={`relative overflow-hidden bg-slate-100 ${className}`}>
      {art || <TechArt icon={icon} label={alt} />}
      {i < list.length && (
        <img key={list[i]} src={list[i]} alt={alt} loading="lazy" referrerPolicy="no-referrer" onLoad={() => setLoaded(true)}
          onError={() => { setLoaded(false); setI((n) => n + 1); }}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-200 ${loaded ? 'opacity-100' : 'opacity-0'}`} />
      )}
      {loaded && children && <span className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-slate-900/70 to-transparent" />}
      {children && children(loaded)}
    </div>
  );
}

function Fade({ k, children, className = '' }) { return <div key={k} className={`vt-fade ${className}`}>{children}</div>; }
function Kicker({ children }) { return <p className="text-xs font-bold uppercase tracking-widest text-red-600">{children}</p>; }
function H2({ children }) { return <h2 className="vt-d mt-3 text-3xl tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">{children}</h2>; }

/* ---------------------------------------------------------------- main component */
export default function VTechFoundry() {
  const [lang, setLang] = useState(() => { try { return localStorage.getItem('vtf-lang') === 'vi' ? 'vi' : 'en'; } catch { return 'en'; } });
  const [mobile, setMobile] = useState(false);
  const [indId, setIndId] = useState(DATA.industries[0].id);
  const [full, setFull] = useState(false);
  const [bioOpen, setBioOpen] = useState('');
  const [copied, setCopied] = useState('');

  const u = (k) => (UI[k] ? UI[k][lang === 'vi' ? 1 : 0] : k);
  const tx = (o) => (o == null ? '' : typeof o === 'string' ? o : o[lang] ?? '');

  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem('vtf-lang', lang); } catch { /* storage unavailable */ }
  }, [lang]);

  useEffect(() => {
    if (!document.querySelector('link[data-vtf-fonts]')) {
      const l = document.createElement('link');
      l.rel = 'stylesheet'; l.href = FONT_HREF; l.setAttribute('data-vtf-fonts', '1');
      document.head.appendChild(l);
    }
  }, []);

  useEffect(() => {
    const esc = (e) => { if (e.key === 'Escape') setMobile(false); };
    document.addEventListener('keydown', esc);
    return () => document.removeEventListener('keydown', esc);
  }, []);

  const ind = DATA.industries.find((i) => i.id === indId);

  const goTo = (id) => {
    setMobile(false);
    requestAnimationFrame(() => { const el = document.getElementById(id); if (el) el.scrollIntoView({ block: 'start' }); });
  };
  const pickIndustry = (id) => { setIndId(id); setFull(false); };

  const copy = async (text, key) => {
    try { await navigator.clipboard.writeText(text); } catch {
      try {
        const ta = document.createElement('textarea'); ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
      } catch { /* copy unavailable: the text stays selectable on screen */ }
    }
    setCopied(key); setTimeout(() => setCopied(''), 1500);
  };

  const links = [['industries', u('nav.industries')], ['solutions', u('nav.solutions')], ['alliance', u('nav.alliance')], ['leadership', u('nav.leadership')]];
  const pill = 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200';

  return (
    <div className="vt min-h-screen">
      <style>{CSS}</style>

      {/* ---- Header ---- */}
      <header className={`sticky top-0 z-40 border-b ${hairline} bg-white/90 backdrop-blur`}>
        <div className={`${wrap} flex h-16 items-center justify-between gap-3`}>
          <button type="button" onClick={() => goTo('top')} className="flex items-center gap-2" aria-label="V-TECH FOUNDRY">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-red-600 text-sm font-extrabold text-white">V</span>
            <span className="vt-d text-base tracking-tight text-slate-900">V-TECH FOUNDRY</span>
          </button>
          <nav className="hidden items-center gap-8 lg:flex" aria-label={u('nav.primary')}>
            {links.map(([id, label]) => (
              <button key={id} type="button" onClick={() => goTo(id)} className="text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-slate-900">{label}</button>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <div className={`flex items-center rounded-full border ${hairline} p-0.5 text-xs font-bold`} role="group" aria-label={u('nav.lang')}>
              {['en', 'vi'].map((l) => (
                <button key={l} type="button" aria-pressed={lang === l} onClick={() => setLang(l)}
                  className={`rounded-full px-3 py-1.5 transition-colors duration-200 ${lang === l ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'}`}>{l.toUpperCase()}</button>
              ))}
            </div>
            <button type="button" onClick={() => goTo('contact')} className={`${pill} hidden bg-slate-900 py-2.5 text-white hover:bg-slate-700 sm:inline-flex`}>{u('nav.request')}</button>
            <button type="button" className={`inline-flex h-10 w-10 items-center justify-center rounded-full border ${hairline} lg:hidden`} aria-label={mobile ? u('nav.close') : u('nav.menu')} aria-expanded={mobile} onClick={() => setMobile((m) => !m)}>
              {mobile ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
        {mobile && (
          <div className={`vt-fade border-t ${hairline} bg-white lg:hidden`}>
            <div className={`${wrap} flex flex-col py-2`}>
              {[...links, ['contact', u('nav.request')]].map(([id, label]) => (
                <button key={id} type="button" onClick={() => goTo(id)} className="py-3 text-left text-sm font-semibold text-slate-800">{label}</button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="top">
        {/* ---- 1. Hero & industry showcase ---- */}
        <section className="bg-white py-16 sm:py-24">
          <div className={wrap}>
            <div className="max-w-4xl">
              <Kicker>{u('hero.eyebrow')}</Kicker>
              <h1 className="vt-d mt-4 text-4xl tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">{u('hero.title')}</h1>
              <p className="mt-5 text-lg text-slate-600 sm:text-xl">{u('hero.sub')}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button type="button" onClick={() => goTo('industries')} className={`${pill} bg-slate-900 text-white hover:bg-slate-700`}>{u('hero.explore')}<ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
                <button type="button" onClick={() => goTo('contact')} className={`${pill} border ${hairline} bg-white text-slate-900 hover:bg-slate-50`}>{u('nav.request')}</button>
              </div>
            </div>

            <div id="industries" className={`mt-16 grid gap-8 border-t ${hairline} pt-10 lg:mt-20 lg:grid-cols-12 lg:gap-12`}>
              <div className="min-w-0 lg:col-span-4">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{u('ind.pick')}</p>
                <div className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:gap-0" role="tablist" aria-label={u('ind.pick')}>
                  {DATA.industries.map((i) => {
                    const on = i.id === indId;
                    return (
                      <button key={i.id} type="button" role="tab" aria-selected={on} onClick={() => pickIndustry(i.id)}
                        className={`group flex items-center justify-between gap-3 rounded-full border px-4 py-2 text-left text-sm font-semibold transition-colors duration-200 lg:rounded-none lg:border-0 lg:border-b lg:px-0 lg:py-4 lg:text-base ${on ? 'border-slate-900 bg-slate-900 text-white lg:bg-transparent lg:text-slate-900' : `${hairline} text-slate-600 hover:text-slate-900`} ${hairline}`}>
                        <span className="flex items-center gap-3"><Ic name={i.icon} className={`h-5 w-5 ${on ? 'lg:text-red-600' : ''}`} strokeWidth={1.75} />{tx(i.name)}</span>
                        <ChevronRight className={`hidden h-4 w-4 lg:block ${on ? 'text-red-600' : 'text-slate-300'}`} aria-hidden="true" />
                      </button>
                    );
                  })}
                </div>
              </div>

              <Fade k={ind.id} className={`min-w-0 overflow-hidden rounded-2xl border ${hairline} bg-white lg:col-span-8`}>
                <Photo srcs={[ind.image]} alt={tx(ind.name)} icon={ind.icon} className="h-48 sm:h-64">
                  {(ok) => <span className={`absolute inset-x-5 bottom-4 text-lg font-bold sm:text-xl ${ok ? 'text-white' : 'text-slate-900'}`}>{tx(ind.name)}</span>}
                </Photo>
                <div className="divide-y divide-slate-200/80">
                  <div className="p-5 sm:p-7">
                    <p className="text-xs font-bold uppercase tracking-widest text-amber-700">{u('ind.glance')}</p>
                    <p className="vt-d mt-2 text-xl tracking-tight text-slate-900 sm:text-2xl">{tx(ind.story.context.title)}</p>
                    {full && <p className="vt-fade mt-3 text-sm leading-relaxed text-slate-600">{tx(ind.story.context.body)} <span className="text-slate-400">({u('ind.illustrative')})</span></p>}
                  </div>
                  <div className="p-5 sm:p-7">
                    <p className="text-xs font-bold uppercase tracking-widest text-red-600">{u('ind.entry')}</p>
                    <p className="vt-d mt-2 text-xl tracking-tight text-slate-900 sm:text-2xl">{tx(ind.story.entry.title)}</p>
                    {full && <p className="vt-fade mt-3 text-sm leading-relaxed text-slate-600">{tx(ind.story.entry.body)}</p>}
                  </div>
                  <div className="p-5 sm:p-7">
                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">{u('ind.solution')}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {ind.bundle.map((id) => (
                        <span key={id} className={`inline-flex items-center gap-2 rounded-full border ${hairline} bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-800`}>
                          <Ic name={SOL_BY_ID[id].icon} className="h-3.5 w-3.5 text-red-600" strokeWidth={1.75} />{SOL_BY_ID[id].name}
                        </span>
                      ))}
                    </div>
                    <p className="mt-5 text-xs font-bold uppercase tracking-widest text-slate-500">{u('ind.outcomes')}</p>
                    <ul className="mt-2 grid gap-2 sm:grid-cols-3">
                      {ind.outcomes.map((o, k) => (
                        <li key={k} className="flex gap-2 text-sm font-semibold text-slate-800"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" /><span>{tx(o)}</span></li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-5 py-4 sm:px-7">
                    <button type="button" aria-expanded={full} onClick={() => setFull((f) => !f)} className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:underline">
                      {full ? u('ind.less') : u('ind.more')}<ChevronRight className={`h-4 w-4 transition-transform duration-200 ${full ? '-rotate-90' : 'rotate-90'}`} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </section>

        {/* ---- 2. Featured solutions ---- */}
        <section id="solutions" className={`border-t ${hairline} bg-slate-50 py-16 sm:py-24`}>
          <div className={wrap}>
            <Kicker>{u('sol.kicker')}</Kicker>
            <div className="mt-3 grid gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="min-w-0 lg:col-span-6">
                <h2 className="vt-d text-3xl tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">{FEATURED.name}</h2>
                <p className="mt-4 text-base text-slate-600 sm:text-lg">{tx(FEATURED.description)}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {FEATURED.tags.map((tg) => (
                    <span key={tg.tag} className={`rounded-full border ${hairline} bg-white px-3 py-1 text-xs font-semibold text-slate-700`}>{tg.tag}{lang === 'en' ? <span className="font-normal text-slate-500"> · {tg.en}</span> : null}</span>
                  ))}
                </div>
                <p className="mt-5 text-sm text-slate-600">{u('sol.partner')}: <span className="font-semibold text-slate-900">{FEATURED.provider}</span></p>
                <button type="button" onClick={() => goTo('contact')} className={`${pill} mt-6 bg-slate-900 text-white hover:bg-slate-700`}>{u('sol.talk')}<ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
              </div>
              <ul className={`min-w-0 divide-y divide-slate-200/80 self-start rounded-2xl border ${hairline} bg-white lg:col-span-6`}>
                {FEATURED.features.map((f, k) => (
                  <li key={k} className="flex items-center gap-4 px-5 py-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-red-600"><Ic name={f.icon} className="h-5 w-5" strokeWidth={1.75} /></span>
                    <span className="text-sm font-semibold text-slate-900 sm:text-base">{tx(f)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <dl className={`mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border ${hairline} bg-slate-200/80 lg:grid-cols-4`}>
              {FEATURED.metrics.map((m, k) => (
                <div key={k} className="min-w-0 bg-white p-5 sm:p-7">
                  <dd className="vt-d text-4xl tracking-tight text-slate-900 tabular-nums sm:text-5xl">{m.value}</dd>
                  <dt className="mt-2 text-sm font-semibold text-slate-900">{tx(m)}</dt>
                  {m.sub && <p className="mt-1 text-xs text-slate-500">{tx(m.sub)}</p>}
                </div>
              ))}
            </dl>

            <p className="mt-14 text-xs font-bold uppercase tracking-widest text-slate-500">{u('sol.more')}</p>
            <div className={`mt-4 grid gap-px overflow-hidden rounded-2xl border ${hairline} bg-slate-200/80 sm:grid-cols-2 lg:grid-cols-4`}>
              {OTHER_SOLS.map((s) => (
                <div key={s.id} className="min-w-0 bg-white p-5">
                  <Ic name={s.icon} className="h-6 w-6 text-red-600" strokeWidth={1.5} />
                  <p className="mt-3 text-sm font-bold text-slate-900">{s.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">{tx(s.tagline)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- 3. Strategic alliance & proof ---- */}
        <section id="alliance" className={`border-t ${hairline} bg-white py-16 sm:py-24`}>
          <div className={wrap}>
            <Photo srcs={DATA.signing.srcs} alt={u('ally.alt')} icon="landmark" className={`h-64 rounded-2xl border ${hairline} sm:h-96`}>
              {(ok) => (
                <div className={`absolute inset-x-5 bottom-5 sm:inset-x-8 sm:bottom-7 ${ok ? 'text-white' : 'text-slate-900'}`}>
                  <span className={`block text-xs font-bold uppercase tracking-widest ${ok ? 'text-white/80' : 'text-slate-500'}`}>{u('ally.kicker')}</span>
                  <span className="vt-d mt-1 block text-2xl tracking-tight sm:text-4xl">{u('ally.title')}</span>
                  <span className={`mt-2 block max-w-xl text-sm ${ok ? 'text-white/90' : 'text-slate-600'}`}>{u('ally.body')}</span>
                </div>
              )}
            </Photo>
            <p className="mt-12 text-xs font-bold uppercase tracking-widest text-slate-500">{u('ally.glance')}</p>
            <dl className={`mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border ${hairline} bg-slate-200/80 lg:grid-cols-4`}>
              {[
                [String(DATA.industries.length), u('ally.sectors')],
                [String(DATA.solutions.length), u('ally.solutions')],
                [POC_DAYS, u('ally.poc')],
                [String(CONTACT.offices.length), u('ally.offices')]
              ].map(([v, label]) => (
                <div key={label} className="min-w-0 bg-white p-5 sm:p-7">
                  <dd className="vt-d text-4xl tracking-tight text-slate-900 tabular-nums sm:text-5xl">{v}</dd>
                  <dt className="mt-2 text-sm font-semibold text-slate-900">{label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ---- 4. Leadership ---- */}
        <section id="leadership" className={`border-t ${hairline} bg-slate-50 py-16 sm:py-24`}>
          <div className={wrap}>
            <Kicker>{u('ldr.kicker')}</Kicker>
            <H2>{u('ldr.title')}</H2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {DATA.experts.map((e) => (
                <article key={e.id} className={`flex min-w-0 flex-col rounded-2xl border ${hairline} bg-white p-6`}>
                  <div className="flex items-start justify-between gap-3">
                    <Photo srcs={[e.photo]} alt={tx(e.name)} className="h-16 w-16 shrink-0 rounded-full"
                      art={<div className="vt-d absolute inset-0 flex items-center justify-center bg-slate-900 text-lg text-white" role="img" aria-label={tx(e.name)}>{e.initials}</div>} />
                    {e.years && (
                      <p className="text-right"><span className="vt-d block text-3xl tracking-tight text-slate-900 tabular-nums">{e.years}</span><span className="block text-xs text-slate-500">{u('ldr.years')}</span></p>
                    )}
                  </div>
                  <h3 className="vt-d mt-5 text-xl tracking-tight text-slate-900">{tx(e.name)}</h3>
                  {e.role && <p className="mt-1 text-sm font-semibold text-slate-600">{tx(e.role)}</p>}
                  {e.domain && <p className="mt-3 text-xs font-semibold leading-relaxed text-red-700"><span className="uppercase tracking-widest">{u('ldr.domain')}</span>: {tx(e.domain)}</p>}
                  {e.summary ? <p className="mt-3 text-sm leading-relaxed text-slate-600">{tx(e.summary)}</p> : <p className="mt-3 text-sm italic text-slate-400">{u('ldr.pending')}</p>}
                  {e.bio && (
                    <>
                      {bioOpen === e.id && <p className="vt-fade mt-3 border-t border-slate-200/80 pt-3 text-sm leading-relaxed text-slate-600">{tx(e.bio)}</p>}
                      <button type="button" aria-expanded={bioOpen === e.id} onClick={() => setBioOpen(bioOpen === e.id ? '' : e.id)} className="mt-4 inline-flex items-center gap-1 self-start text-sm font-semibold text-slate-900 hover:underline">
                        {bioOpen === e.id ? u('ldr.hide') : u('ldr.bio')}<ChevronRight className={`h-4 w-4 transition-transform duration-200 ${bioOpen === e.id ? '-rotate-90' : 'rotate-90'}`} aria-hidden="true" />
                      </button>
                    </>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Contact band ---- */}
        <section id="contact" className={`border-t ${hairline} bg-white py-16 sm:py-24`}>
          <div className={`${wrap} grid gap-8 lg:grid-cols-12 lg:items-center`}>
            <div className="min-w-0 lg:col-span-6">
              <h2 className="vt-d text-3xl tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">{u('cta.title')}</h2>
              <p className="mt-4 text-base text-slate-600 sm:text-lg">{u('cta.sub')}</p>
            </div>
            <div className="min-w-0 space-y-3 lg:col-span-6">
              {[
                ['call', u('cta.call'), CONTACT.phoneDisplay, `tel:${CONTACT.phone}`, Phone],
                ['mail', u('cta.mail'), CONTACT.email, `mailto:${CONTACT.email}`, Mail]
              ].map(([key, label, value, href, Icon]) => (
                <div key={key} className={`flex items-center justify-between gap-3 rounded-2xl border ${hairline} p-4`}>
                  <div className="flex min-w-0 items-center gap-3">
                    <Icon className="h-5 w-5 shrink-0 text-red-600" strokeWidth={1.75} aria-hidden="true" />
                    <div className="min-w-0"><p className="text-xs text-slate-500">{label}</p><a href={href} className="block break-all text-base font-semibold text-slate-900 hover:underline">{value}</a></div>
                  </div>
                  <button type="button" onClick={() => copy(value, key)} className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border ${hairline} px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-50`}>
                    {copied === key ? <Check className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}{copied === key ? u('cta.copied') : u('cta.copy')}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ---- Footer ---- */}
      <footer className={`border-t ${hairline} bg-slate-50`}>
        <div className={`${wrap} py-12`}>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2"><span className="flex h-8 w-8 items-center justify-center rounded-md bg-red-600 text-sm font-extrabold text-white">V</span><span className="vt-d text-base tracking-tight text-slate-900">V-TECH FOUNDRY</span></div>
              <p className="mt-4 text-sm text-slate-600">{u('foot.powered')} <a href={CONTACT.website} target="_blank" rel="noopener noreferrer" className="font-bold text-slate-900 hover:underline">VNETWORK</a></p>
            </div>
            <div className="min-w-0 space-y-2 text-sm text-slate-600">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-red-600" aria-hidden="true" />{CONTACT.phoneDisplay}</p>
              <p className="flex items-center gap-2 break-all"><Mail className="h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />{CONTACT.email}</p>
              <p className="flex items-center gap-2"><Globe className="h-4 w-4 text-red-600" aria-hidden="true" /><a href={CONTACT.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline">vnetwork.vn<ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></a></p>
            </div>
            <div className="min-w-0 space-y-3 text-sm text-slate-600">
              {CONTACT.offices.map((o, k) => <p key={k} className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />{tx(o)}</p>)}
            </div>
          </div>
          <div className={`mt-10 flex flex-wrap items-center justify-between gap-3 border-t ${hairline} pt-6 text-xs text-slate-500`}>
            <span>© 2013 VNETWORK JSC. {u('foot.rights')}</span>
            <span><a href={CONTACT.website} target="_blank" rel="noopener noreferrer" className="hover:underline">{u('foot.terms')}</a> · <a href={CONTACT.website} target="_blank" rel="noopener noreferrer" className="hover:underline">{u('foot.privacy')}</a></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
