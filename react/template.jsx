// V-TECH FOUNDRY landing page: one self-contained React component (Tailwind core classes + lucide-react).
// GENERATED FILE: edit react/template.jsx, react/overlay.mjs or data/*.json, then run `node build-react.mjs`.
import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Menu, X, ChevronDown, ChevronLeft, ChevronRight, ArrowRight, Check, Copy, Phone, Mail, MessageCircle, MapPin,
  Building2, Users, Landmark, ShieldCheck, Shield, ShieldAlert, Database, MailCheck, Scale, Factory, HeartPulse,
  ShoppingBag, Truck, Clapperboard, GraduationCap, Zap, Gauge, Target, AlertTriangle, Layers, Package, Bot,
  TrendingUp, Star, FileSearch, Megaphone, Filter, Globe, Boxes, Quote, Award, Clock
} from 'lucide-react';

/*__DATA__*/

const ICONS = {
  landmark: Landmark, 'building-2': Building2, 'heart-pulse': HeartPulse, 'shopping-bag': ShoppingBag, factory: Factory,
  truck: Truck, clapperboard: Clapperboard, 'graduation-cap': GraduationCap, 'mail-check': MailCheck, scale: Scale,
  'shield-check': ShieldCheck, shield: Shield, 'shield-alert': ShieldAlert, database: Database, zap: Zap, globe: Globe,
  bot: Bot, target: Target, filter: Filter, 'file-search': FileSearch, megaphone: Megaphone, users: Users, gauge: Gauge,
  'trending-up': TrendingUp, star: Star
};
const Ic = ({ name, ...p }) => { const C = ICONS[name] || Boxes; return <C aria-hidden="true" {...p} />; };

/* [English, Vietnamese] pairs keep both languages in lockstep: a key cannot exist in only one. */
const UI = {
  'nav.solutions': ['Solutions', 'Giải pháp'],
  'nav.industry': ['Industry', 'Ngành'],
  'nav.meet': ['Meet V-Tech Foundry', 'Về V-Tech Foundry'],
  'nav.about': ['About Us', 'Về chúng tôi'],
  'nav.expert': ['Expert', 'Chuyên gia'],
  'nav.request': ['Request Consultation', 'Đăng ký tư vấn'],
  'nav.menu': ['Menu', 'Menu'],
  'nav.close': ['Close', 'Đóng'],
  'nav.primary': ['Primary', 'Điều hướng chính'],
  'nav.lang': ['Language', 'Ngôn ngữ'],
  'hero.eyebrow': ['A VNETWORK technology alliance', 'Liên minh công nghệ của VNETWORK'],
  'hero.title': ['Next-Gen Technology Alliance Delivering Mission-Critical Enterprise Solutions', 'Liên minh Công nghệ Tiên phong Kiến tạo Giải pháp Chuyên sâu cho Doanh nghiệp'],
  'hero.sub': ['V-TECH FOUNDRY leads a premier technology alliance, delivering packaged, vertical-tailored solutions to solve complex challenges and accelerate digital transformation for enterprises.', 'V-TECH FOUNDRY dẫn dắt liên minh công nghệ hàng đầu, cung cấp các gói giải pháp đo ni đóng giày theo ngành để giải quyết thách thức phức tạp và thúc đẩy chuyển đổi số doanh nghiệp.'],
  'hero.explore': ['Explore Industry Solutions', 'Khám phá giải pháp theo ngành'],
  'hero.tiles': ['Start with your sector', 'Bắt đầu từ lĩnh vực của bạn'],
  'hero.more': ['More sectors', 'Các lĩnh vực khác'],
  'flow.kicker': ['How every story is told', 'Mỗi câu chuyện được kể thế nào'],
  'flow.1t': ['The context', 'Bối cảnh'],
  'flow.1d': ['A real pain point from Vietnamese enterprises.', 'Một điểm nghẽn thật của doanh nghiệp Việt Nam.'],
  'flow.2t': ['The strategic entry point', 'Cửa ngõ chiến lược'],
  'flow.2d': ['The one place to stop it early.', 'Điểm duy nhất để chặn sớm.'],
  'flow.3t': ['The packaged solution', 'Gói giải pháp'],
  'flow.3d': ['Alliance technology, packaged by industry.', 'Công nghệ liên minh, đóng gói theo ngành.'],
  'ind.kicker': ['Choose your industry', 'Chọn ngành của bạn'],
  'ind.title': ['Context first, solution second', 'Bối cảnh trước, giải pháp sau'],
  'ind.sub': ['Pick your sector. We walk you from the real-world problem to the packaged solution in under two minutes.', 'Chọn lĩnh vực của bạn. Chúng tôi dẫn bạn từ vấn đề thực tế đến gói giải pháp trong chưa đầy hai phút.'],
  'ind.tabs': ['Industries', 'Các ngành'],
  'ind.glance': ['A story in one glance', 'Câu chuyện trong một cái nhìn'],
  'ind.illustrative': ['Illustrative scenario', 'Tình huống minh họa'],
  'ind.packaged': ['Packaged for this industry', 'Đóng gói cho ngành này'],
  'ind.regs': ['Regulatory context', 'Bối cảnh pháp lý'],
  'ind.archKicker': ['Alliance architecture', 'Kiến trúc liên minh'],
  'ind.archTitle': ['One package, three layers of defense', 'Một gói, ba lớp bảo vệ'],
  'ind.tierEdge': ['Edge & cloud', 'Biên & đám mây'],
  'ind.tierData': ['Data protection', 'Bảo vệ dữ liệu'],
  'ind.tierAi': ['AI & automation', 'AI & tự động hóa'],
  'ind.outcomes': ['Why choose V-Tech Foundry', 'Vì sao chọn V-Tech Foundry'],
  'ind.moreKicker': ['Go deeper', 'Đi sâu hơn'],
  'ind.moreTitle': ['More challenges in', 'Thêm thách thức trong ngành'],
  'ind.challenge': ['Challenge', 'Thách thức'],
  'ind.of': ['of', 'trên'],
  'ind.prev': ['Previous', 'Trước'],
  'ind.next': ['Next', 'Tiếp'],
  'ind.felt': ['Felt by', 'Người cảm nhận'],
  'ind.context': ['Context', 'Bối cảnh'],
  'ind.entry': ['Entry point', 'Cửa ngõ'],
  'ind.solution': ['Solution', 'Giải pháp'],
  'ind.faq': ['Frequently asked questions', 'Câu hỏi thường gặp'],
  'ind.pocKicker': ['Proof of concept', 'Thử nghiệm PoC'],
  'ind.pocTitle': ['Need a dedicated PoC test environment?', 'Cần môi trường PoC riêng để kiểm chứng?'],
  'ind.pocP': ['V-TECH FOUNDRY technical architects can deploy a custom Proof-of-Concept environment, load test, and security audit for your enterprise within 14 business days.', 'Kiến trúc sư V-TECH FOUNDRY có thể triển khai môi trường PoC riêng, kiểm thử tải và đánh giá an ninh cho doanh nghiệp của bạn trong vòng 14 ngày làm việc.'],
  'ind.pocBtn': ['Request PoC Sandbox', 'Yêu cầu môi trường PoC'],
  'ally.kicker': ['Strategic alliance signing', 'Lễ ký kết liên minh chiến lược'],
  'ally.title': ['VPBank - VNETWORK Alliance', 'Liên minh VPBank - VNETWORK'],
  'ally.body': ['Where a leading Vietnamese bank and VNETWORK align on secure, sovereign digital infrastructure for finance.', 'Nơi một ngân hàng hàng đầu Việt Nam và VNETWORK cùng hướng tới hạ tầng số an toàn, chủ quyền cho ngành tài chính.'],
  'ally.alt': ['Representatives of VPBank and VNETWORK at the strategic alliance signing', 'Đại diện VPBank và VNETWORK tại lễ ký kết liên minh chiến lược'],
  'sol.kicker': ['The portfolio', 'Danh mục giải pháp'],
  'sol.title': ['Building blocks, packaged by industry', 'Các khối giải pháp, đóng gói theo ngành'],
  'sol.all': ['All solutions', 'Tất cả giải pháp'],
  'sol.featured': ['Featured', 'Nổi bật'],
  'sol.overview': ['Overview', 'Tổng quan'],
  'sol.features': ['Core features', 'Tính năng cốt lõi'],
  'sol.results': ['Key results', 'Kết quả nổi bật'],
  'sol.provider': ['Solution partner', 'Đối tác giải pháp'],
  'sol.usedIn': ['Used in these industries', 'Được dùng trong các ngành'],
  'sol.talk': ['Talk to an expert', 'Trao đổi với chuyên gia'],
  'sol.layer': ['Layer', 'Lớp'],
  'exp.kicker': ['Meet V-Tech Foundry', 'Về V-Tech Foundry'],
  'exp.title': ['Experts & Advisory Board', 'Chuyên gia & Hội đồng cố vấn'],
  'exp.sub': ['The practitioners who shape our alliance and stand behind every packaged solution.', 'Những người làm nghề định hình liên minh và đứng sau từng gói giải pháp.'],
  'exp.domain': ['Domain', 'Lĩnh vực'],
  'exp.pending': ['Profile to be added from the existing site.', 'Hồ sơ sẽ được bổ sung từ trang hiện có.'],
  'cta.kicker': ['Get in touch', 'Liên hệ'],
  'cta.title': ["Ready to Scale on Vietnam's Most Trusted Tech Foundry?", 'Sẵn sàng phát triển cùng Tech Foundry đáng tin cậy nhất Việt Nam?'],
  'cta.p': ['Tell us your situation. A V-TECH FOUNDRY expert replies within one business day, or reach us instantly.', 'Hãy cho chúng tôi biết tình huống của bạn. Chuyên gia V-TECH FOUNDRY phản hồi trong một ngày làm việc, hoặc liên hệ ngay lập tức.'],
  'cta.tabBook': ['Book a consultation', 'Đặt lịch tư vấn'],
  'cta.tabBrief': ['Get the solution brief', 'Nhận tài liệu giải pháp'],
  'cta.name': ['Full name', 'Họ và tên'],
  'cta.company': ['Company', 'Công ty'],
  'cta.email': ['Work email', 'Email công việc'],
  'cta.phone': ['Phone / Zalo', 'Điện thoại / Zalo'],
  'cta.industry': ['Industry', 'Ngành'],
  'cta.need': ['What would you like to solve?', 'Bạn muốn giải quyết vấn đề gì?'],
  'cta.sendBook': ['Request consultation', 'Gửi yêu cầu tư vấn'],
  'cta.sendBrief': ['Send me the brief', 'Gửi tài liệu cho tôi'],
  'cta.consent': ['I agree to be contacted about V-TECH FOUNDRY solutions.', 'Tôi đồng ý được liên hệ về các giải pháp của V-TECH FOUNDRY.'],
  'cta.required': ['Please complete this field', 'Vui lòng điền thông tin này'],
  'cta.badEmail': ['Enter a valid email', 'Nhập email hợp lệ'],
  'cta.needConsent': ['Please tick the box to continue', 'Vui lòng đánh dấu để tiếp tục'],
  'cta.call': ['Call us', 'Gọi cho chúng tôi'],
  'cta.mail': ['Email sales', 'Email bộ phận kinh doanh'],
  'cta.select': ['Select…', 'Chọn…'],
  'cta.other': ['Other', 'Khác'],
  'cta.demo': ['Preview form: requests are not transmitted yet. Please call or email to reach the team.', 'Biểu mẫu xem trước: yêu cầu chưa được gửi đi. Vui lòng gọi điện hoặc email để liên hệ.'],
  'cta.copy': ['Copy', 'Sao chép'],
  'cta.copied': ['Copied', 'Đã chép'],
  'cta.thanksT': ['Request captured in this preview.', 'Yêu cầu đã được ghi nhận trong bản xem trước.'],
  'cta.again': ['Send another request', 'Gửi yêu cầu khác'],
  'foot.powered': ['Powered by', 'Vận hành bởi'],
  'foot.terms': ['Terms of Service', 'Điều khoản dịch vụ'],
  'foot.privacy': ['Privacy Policy', 'Chính sách bảo mật'],
  'foot.rights': ['All rights reserved.', 'Bảo lưu mọi quyền.']
};

const CONTACT = {
  phone: '+842873068789', phoneDisplay: '(+84) 28 7306 8789', email: 'contact@vnetwork.vn', website: 'https://vnetwork.vn',
  zalo: 'https://zalo.me/842873068789',
  offices: [
    { en: 'Level 23, UOA Tower, 6 Tan Trao, Tan My Ward, Ho Chi Minh City, Vietnam', vi: 'Tầng 23, Tòa nhà UOA, 6 Tân Trào, Phường Tân Mỹ, TP. Hồ Chí Minh, Việt Nam' },
    { en: '111 North Bridge Road #17-06 Peninsula Plaza, Singapore', vi: '111 North Bridge Road #17-06 Peninsula Plaza, Singapore' }
  ]
};

const FONT_HREF = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500..800&family=Inter:wght@400..700&display=swap';
const CSS = `
.vt{font-family:Inter,"Be Vietnam Pro",system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;color:#0f172a;background:#fff;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}
.vt-d{font-family:"Plus Jakarta Sans",Inter,"Be Vietnam Pro",system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;font-weight:800;letter-spacing:-0.02em;text-wrap:balance}
.vt-fade{animation:vtFade .2s ease-out both}
@keyframes vtFade{from{opacity:0}to{opacity:1}}
@media (prefers-reduced-motion:reduce){.vt-fade{animation:none}.vt *{transition:none!important}}
.vt button:focus-visible,.vt a:focus-visible,.vt input:focus-visible,.vt select:focus-visible,.vt textarea:focus-visible{outline:2px solid #dc2626;outline-offset:2px}
.vt [id]{scroll-margin-top:5.5rem}
.vt-dots{background-image:radial-gradient(#cbd5e1 1px,transparent 1px);background-size:18px 18px}
`;

const FLAG = { en: 'EN', vi: 'VI' };
const TONE = {
  manufacturing: 'from-amber-50 to-orange-100', healthcare: 'from-emerald-50 to-teal-100', bfsi: 'from-sky-50 to-blue-100',
  retail: 'from-rose-50 to-pink-100', government: 'from-slate-50 to-indigo-100', logistics: 'from-cyan-50 to-sky-100',
  media: 'from-fuchsia-50 to-rose-100', education: 'from-lime-50 to-emerald-100', alliance: 'from-slate-50 to-sky-100'
};
const SOL_BY_ID = Object.fromEntries(DATA.solutions.map((s) => [s.id, s]));
const IND_BY_ID = Object.fromEntries(DATA.industries.map((i) => [i.id, i]));
const KEY_IMAGED = DATA.industries.filter((i) => i.image);
const OTHERS = DATA.industries.filter((i) => !i.image);

/* ---------------------------------------------------------------- small pieces */
function Fade({ k, children, className = '' }) { return <div key={k} className={`vt-fade ${className}`}>{children}</div>; }

function Art({ icon, tone, label }) {
  return (
    <div className={`vt-dots relative flex h-full w-full items-center justify-center bg-gradient-to-br ${tone}`} role="img" aria-label={label}>
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-slate-800 shadow-lg ring-1 ring-slate-200">
        <Ic name={icon} className="h-10 w-10" strokeWidth={1.5} />
      </div>
    </div>
  );
}

/* Tries each URL in turn; if every one fails (offline, hotlink blocked, sandbox CSP) it shows the bright illustrated fallback.
   The scrim and white caption render through `children(loaded)` only once a real photo has loaded, so they never darken the fallback. */
function Photo({ srcs, alt, art, className = '', children }) {
  const list = srcs.filter(Boolean);
  const sig = list.join('|');
  const [i, setI] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setI(0); setLoaded(false); }, [sig]);
  const ok = i < list.length;
  return (
    <div className={`group relative overflow-hidden bg-slate-100 ${className}`}>
      {ok ? <img key={list[i]} src={list[i]} alt={alt} loading="lazy" referrerPolicy="no-referrer" onLoad={() => setLoaded(true)} onError={() => { setLoaded(false); setI((n) => n + 1); }} className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105" /> : art}
      {loaded && children && <span className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-slate-900/70 to-transparent" />}
      {children && children(loaded)}
    </div>
  );
}

function Kicker({ children }) { return <p className="text-xs font-bold uppercase tracking-widest text-red-600">{children}</p>; }
function H2({ children }) { return <h2 className="vt-d mt-2 text-3xl tracking-tight text-slate-900 sm:text-4xl">{children}</h2>; }
const wrap = 'mx-auto w-full max-w-6xl px-4 sm:px-6';

/* ---------------------------------------------------------------- main component */
export default function VTechFoundry() {
  const [lang, setLang] = useState(() => { try { return localStorage.getItem('vtf-lang') === 'vi' ? 'vi' : 'en'; } catch { return 'en'; } });
  const [menu, setMenu] = useState(null);
  const [mobile, setMobile] = useState(false);
  const [indId, setIndId] = useState(DATA.industries[0].id);
  const [chIdx, setChIdx] = useState(0);
  const [faqOpen, setFaqOpen] = useState(0);
  const [layer, setLayer] = useState('all');
  const [solId, setSolId] = useState('ai-agent');
  const [mode, setMode] = useState('book');
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', industry: '', need: '', consent: false });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState('');
  const navRef = useRef(null);

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
    const close = (e) => { if (navRef.current && !navRef.current.contains(e.target)) setMenu(null); };
    const esc = (e) => { if (e.key === 'Escape') { setMenu(null); setMobile(false); } };
    document.addEventListener('mousedown', close);
    document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('mousedown', close); document.removeEventListener('keydown', esc); };
  }, []);

  const ind = IND_BY_ID[indId];
  const ch = ind.chapters[chIdx];
  const sol = SOL_BY_ID[solId];

  const goTo = (id) => {
    setMenu(null); setMobile(false);
    requestAnimationFrame(() => { const el = document.getElementById(id); if (el) el.scrollIntoView({ block: 'start' }); });
  };
  const openIndustry = (id) => { setIndId(id); setChIdx(0); setFaqOpen(0); goTo('industries'); };
  const openSolution = (id) => { setSolId(id); setLayer('all'); goTo('solutions'); };
  const pickIndustry = (id) => { setIndId(id); setChIdx(0); setFaqOpen(0); };
  const stepCh = (d) => setChIdx((i) => (i + d + ind.chapters.length) % ind.chapters.length);

  const copy = async (text, key) => {
    try { await navigator.clipboard.writeText(text); } catch {
      try {
        const ta = document.createElement('textarea'); ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
      } catch { /* copy unavailable: the text stays selectable on screen */ }
    }
    setCopied(key); setTimeout(() => setCopied(''), 1500);
  };

  const setField = (k, v) => { setForm((f) => ({ ...f, [k]: v })); setErrors((e) => ({ ...e, [k]: '' })); };
  const submit = (e) => {
    e.preventDefault();
    const er = {};
    ['name', 'company', 'email', 'phone'].forEach((k) => { if (!form[k].trim()) er[k] = u('cta.required'); });
    if (!er.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) er.email = u('cta.badEmail');
    if (!form.consent) er.consent = u('cta.needConsent');
    setErrors(er);
    if (!Object.keys(er).length) setSent(true);
  };

  const glanceTiers = useMemo(() => {
    const tiers = [['edge', 'ind.tierEdge', 'shield-alert'], ['data', 'ind.tierData', 'database'], ['ai', 'ind.tierAi', 'bot']];
    return tiers.map(([key, label, icon]) => ({ key, label, icon, items: ind.bundle.map((id) => SOL_BY_ID[id]).filter((s) => s && s.layer === key) })).filter((t) => t.items.length);
  }, [ind]);

  const layers = [['all', u('sol.all')], ['edge', u('ind.tierEdge')], ['data', u('ind.tierData')], ['ai', u('ind.tierAi')]];
  const shownSols = DATA.solutions.filter((s) => layer === 'all' || s.layer === layer);

  /* ------------------------------------------------------------ render */
  const navBtn = 'inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900';
  const menuItem = 'flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left transition-colors duration-200 hover:bg-slate-50';

  return (
    <div className="vt min-h-screen">
      <style>{CSS}</style>

      {/* ---- Header ---- */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur">
        <div className={`${wrap} flex h-16 items-center justify-between gap-3`} ref={navRef}>
          <button type="button" onClick={() => goTo('top')} className="flex items-center gap-2" aria-label="V-TECH FOUNDRY">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600 text-sm font-extrabold text-white">V</span>
            <span className="vt-d text-base tracking-tight text-slate-900">V-TECH <span className="text-red-600">FOUNDRY</span></span>
          </button>

          <nav className="relative hidden items-center gap-1 lg:flex" aria-label={u('nav.primary')}>
            {[
              ['solutions', u('nav.solutions')],
              ['industry', u('nav.industry')],
              ['meet', u('nav.meet')]
            ].map(([key, label]) => (
              <div key={key} className="relative">
                <button type="button" className={navBtn} aria-expanded={menu === key} aria-haspopup="true" onClick={() => setMenu(menu === key ? null : key)}>
                  {label}<ChevronDown className={`h-4 w-4 transition-transform duration-200 ${menu === key ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                {menu === key && (
                  <div className="vt-fade absolute left-0 top-full mt-2 w-80 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                    {key === 'solutions' && DATA.solutions.map((s) => (
                      <button key={s.id} type="button" className={menuItem} onClick={() => openSolution(s.id)}>
                        <Ic name={s.icon} className="mt-0.5 h-5 w-5 shrink-0 text-red-600" strokeWidth={1.75} />
                        <span><span className="block text-sm font-semibold text-slate-900">{s.name}</span><span className="block text-xs text-slate-500">{tx(s.tagline)}</span></span>
                      </button>
                    ))}
                    {key === 'industry' && DATA.industries.map((i) => (
                      <button key={i.id} type="button" className={menuItem} onClick={() => openIndustry(i.id)}>
                        <Ic name={i.icon} className="mt-0.5 h-5 w-5 shrink-0 text-red-600" strokeWidth={1.75} />
                        <span><span className="block text-sm font-semibold text-slate-900">{tx(i.name)}</span></span>
                      </button>
                    ))}
                    {key === 'meet' && (
                      <>
                        <button type="button" className={menuItem} onClick={() => goTo('alliance')}>
                          <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-red-600" strokeWidth={1.75} aria-hidden="true" />
                          <span className="text-sm font-semibold text-slate-900">{u('nav.about')}</span>
                        </button>
                        <button type="button" className={menuItem} onClick={() => goTo('experts')}>
                          <Users className="mt-0.5 h-5 w-5 shrink-0 text-red-600" strokeWidth={1.75} aria-hidden="true" />
                          <span className="text-sm font-semibold text-slate-900">{u('nav.expert')}</span>
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="flex items-center rounded-full border border-slate-200 p-0.5 text-xs font-bold" role="group" aria-label={u('nav.lang')}>
              {['en', 'vi'].map((l) => (
                <button key={l} type="button" aria-pressed={lang === l} onClick={() => setLang(l)}
                  className={`rounded-full px-3 py-1.5 transition-colors duration-200 ${lang === l ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'}`}>{FLAG[l]}</button>
              ))}
            </div>
            <button type="button" onClick={() => goTo('contact')} className="hidden rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-red-700 sm:inline-flex">{u('nav.request')}</button>
            <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 lg:hidden" aria-label={mobile ? u('nav.close') : u('nav.menu')} aria-expanded={mobile} onClick={() => setMobile((m) => !m)}>
              {mobile ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
        {mobile && (
          <div className="vt-fade border-t border-slate-200 bg-white lg:hidden">
            <div className={`${wrap} flex flex-col gap-1 py-3`}>
              {[['industries', u('nav.industry')], ['solutions', u('nav.solutions')], ['alliance', u('nav.about')], ['experts', u('nav.expert')], ['contact', u('nav.request')]].map(([id, label]) => (
                <button key={id} type="button" onClick={() => goTo(id)} className="rounded-xl px-3 py-3 text-left text-sm font-semibold text-slate-800 hover:bg-slate-50">{label}</button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="top">
        {/* ---- Hero ---- */}
        <section className="bg-white">
          <div className={`${wrap} grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-12 lg:py-20`}>
            <div className="min-w-0 lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700">
                <span className="h-1.5 w-1.5 rounded-full bg-red-600" aria-hidden="true" />{u('hero.eyebrow')}
              </span>
              <h1 className="vt-d mt-5 text-3xl tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">{u('hero.title')}</h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">{u('hero.sub')}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <button type="button" onClick={() => goTo('industries')} className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-slate-700">{u('hero.explore')}<ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
                <button type="button" onClick={() => goTo('contact')} className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors duration-200 hover:bg-slate-50">{u('nav.request')}</button>
              </div>
              <div className="mt-10">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{u('flow.kicker')}</p>
                <ol className="mt-3 grid gap-3 sm:grid-cols-3">
                  {[['1', AlertTriangle], ['2', Target], ['3', Package]].map(([n, Icon]) => (
                    <li key={n} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <Icon className="h-5 w-5 text-red-600" strokeWidth={1.75} aria-hidden="true" />
                      <p className="mt-2 text-sm font-bold text-slate-900">{u(`flow.${n}t`)}</p>
                      <p className="mt-1 text-xs leading-relaxed text-slate-600">{u(`flow.${n}d`)}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="min-w-0 lg:col-span-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">{u('hero.tiles')}</p>
              <div className="grid grid-cols-2 gap-3">
                {KEY_IMAGED.map((i) => (
                  <button key={i.id} type="button" onClick={() => openIndustry(i.id)} className="block text-left">
                    <Photo srcs={[i.image]} alt={tx(i.name)} art={<Art icon={i.icon} tone={TONE[i.id]} label={tx(i.name)} />} className="h-40 rounded-2xl ring-1 ring-slate-200 sm:h-48">
                      {(ok) => <span className={`absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 text-sm font-bold ${ok ? 'text-white' : 'text-slate-900'}`}>{tx(i.name)}<ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" /></span>}
                    </Photo>
                  </button>
                ))}
              </div>
              <p className="mb-2 mt-5 text-xs font-bold uppercase tracking-widest text-slate-500">{u('hero.more')}</p>
              <div className="flex flex-wrap gap-2">
                {OTHERS.map((i) => (
                  <button key={i.id} type="button" onClick={() => openIndustry(i.id)} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition-colors duration-200 hover:border-slate-300 hover:bg-slate-50">
                    <Ic name={i.icon} className="h-4 w-4 text-red-600" strokeWidth={1.75} />{tx(i.name)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---- Industries: context -> entry point -> packaged solution ---- */}
        <section id="industries" className="bg-slate-50 py-16 sm:py-20">
          <div className={wrap}>
            <div className="max-w-2xl"><Kicker>{u('ind.kicker')}</Kicker><H2>{u('ind.title')}</H2><p className="mt-3 text-base leading-relaxed text-slate-600">{u('ind.sub')}</p></div>

            <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label={u('ind.tabs')}>
              {DATA.industries.map((i) => (
                <button key={i.id} type="button" role="tab" aria-selected={i.id === indId} onClick={() => pickIndustry(i.id)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-200 ${i.id === indId ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'}`}>
                  <Ic name={i.icon} className="h-4 w-4" strokeWidth={1.75} />{tx(i.name)}
                </button>
              ))}
            </div>

            <Fade k={ind.id} className="mt-8 space-y-6">
              <div className="grid gap-6 lg:grid-cols-12">
                {/* image + identity */}
                <div className="min-w-0 self-start overflow-hidden rounded-3xl border border-slate-200 bg-white lg:col-span-5">
                  <Photo srcs={[ind.image]} alt={tx(ind.name)} art={<Art icon={ind.icon} tone={TONE[ind.id]} label={tx(ind.name)} />} className="h-56 sm:h-72" />
                  <div className="p-6">
                    <h3 className="vt-d text-2xl tracking-tight text-slate-900">{tx(ind.title)}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{tx(ind.tagline)}</p>
                    {ind.regs.length > 0 && (
                      <>
                        <p className="mt-5 text-xs font-bold uppercase tracking-widest text-slate-500">{u('ind.regs')}</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {ind.regs.map((r, k) => <span key={k} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">{tx(r)}</span>)}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* story in one glance */}
                <div className="min-w-0 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:col-span-7">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-xs font-bold uppercase tracking-widest text-red-600">{u('ind.glance')}</p>
                    <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800 ring-1 ring-amber-200">{u('ind.illustrative')}</span>
                  </div>

                  <ol className="mt-6 space-y-6">
                    <li className="flex gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-700 ring-1 ring-amber-200"><AlertTriangle className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" /></span>
                      <div className="min-w-0">
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{u('flow.1t')}</p>
                        <h4 className="vt-d mt-1 text-xl tracking-tight text-slate-900">{tx(ind.story.context.title)}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{tx(ind.story.context.body)}</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600 ring-1 ring-red-200"><Target className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" /></span>
                      <div className="min-w-0 flex-1 rounded-2xl border border-red-200 bg-red-50/60 p-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-red-700">{u('flow.2t')}</p>
                        <h4 className="vt-d mt-1 text-xl tracking-tight text-slate-900">{tx(ind.story.entry.title)}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">{tx(ind.story.entry.body)}</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"><Package className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" /></span>
                      <div className="min-w-0">
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{u('flow.3t')}</p>
                        <p className="mt-1 text-sm font-semibold text-slate-900">{u('ind.packaged')}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {ind.bundle.map((id) => (
                            <button key={id} type="button" onClick={() => openSolution(id)} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-800 transition-colors duration-200 hover:border-slate-400">
                              <Ic name={SOL_BY_ID[id].icon} className="h-4 w-4 text-red-600" strokeWidth={1.75} />{SOL_BY_ID[id].name}
                            </button>
                          ))}
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>

              {/* challenge navigator */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div><Kicker>{u('ind.moreKicker')}</Kicker><h3 className="vt-d mt-1 text-2xl tracking-tight text-slate-900">{u('ind.moreTitle')} {tx(ind.name)}</h3></div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold tabular-nums text-slate-600">{u('ind.challenge')} {chIdx + 1} {u('ind.of')} {ind.chapters.length}</span>
                    <button type="button" onClick={() => stepCh(-1)} className="inline-flex h-10 items-center gap-1 rounded-full border border-slate-200 px-3 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-50" aria-label={u('ind.prev')}><ChevronLeft className="h-4 w-4" aria-hidden="true" /><span className="hidden sm:inline">{u('ind.prev')}</span></button>
                    <button type="button" onClick={() => stepCh(1)} className="inline-flex h-10 items-center gap-1 rounded-full bg-slate-900 px-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-slate-700" aria-label={u('ind.next')}><span className="hidden sm:inline">{u('ind.next')}</span><ChevronRight className="h-4 w-4" aria-hidden="true" /></button>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2" role="tablist" aria-label={u('ind.moreTitle')}>
                  {ind.chapters.map((c, k) => (
                    <button key={c.id} type="button" role="tab" aria-selected={k === chIdx} onClick={() => setChIdx(k)}
                      className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors duration-200 ${k === chIdx ? 'border-red-600 bg-red-50 text-red-700' : 'border-slate-200 text-slate-600 hover:border-slate-300'}`}>{tx(c.persona)}</button>
                  ))}
                </div>
                <Fade k={`${ind.id}-${ch.id}`} className="mt-6 grid gap-4 lg:grid-cols-3">
                  <div className="min-w-0 rounded-2xl bg-slate-50 p-5">
                    <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-700"><AlertTriangle className="h-4 w-4" aria-hidden="true" />{u('ind.context')}</p>
                    <h4 className="vt-d mt-2 text-lg tracking-tight text-slate-900">{tx(ch.challenge.title)}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{tx(ch.challenge.body)}</p>
                    <p className="mt-3 text-xs text-slate-500">{u('ind.felt')}: <span className="font-semibold text-slate-700">{tx(ch.persona)}</span></p>
                  </div>
                  <div className="min-w-0 rounded-2xl border border-red-200 bg-red-50/60 p-5">
                    <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-700"><Target className="h-4 w-4" aria-hidden="true" />{u('ind.entry')}</p>
                    <h4 className="vt-d mt-2 text-lg tracking-tight text-slate-900">{tx(ch.response.title)}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700">{tx(ch.response.body)}</p>
                  </div>
                  <div className="min-w-0 rounded-2xl bg-slate-50 p-5">
                    <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-700"><Package className="h-4 w-4" aria-hidden="true" />{u('ind.solution')}</p>
                    <ul className="mt-3 space-y-2">
                      {ch.response.points.map((p, k) => (
                        <li key={k} className="flex gap-2 text-sm text-slate-700"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" /><span>{tx(p)}</span></li>
                      ))}
                    </ul>
                    {ch.response.metric && (
                      <p className="mt-4 flex items-baseline gap-2"><span className="vt-d text-3xl tracking-tight text-slate-900">{ch.response.metric.value}</span><span className="text-xs text-slate-600">{tx(ch.response.metric.label)}</span></p>
                    )}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {ch.solutions.map((id) => (
                        <button key={id} type="button" onClick={() => openSolution(id)} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-800 transition-colors duration-200 hover:border-slate-400">
                          <Ic name={SOL_BY_ID[id].icon} className="h-3.5 w-3.5 text-red-600" strokeWidth={1.75} />{SOL_BY_ID[id].name}
                        </button>
                      ))}
                    </div>
                  </div>
                </Fade>
              </div>

              {/* alliance architecture + outcomes */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
                <Kicker>{u('ind.archKicker')}</Kicker>
                <h3 className="vt-d mt-1 text-2xl tracking-tight text-slate-900">{u('ind.archTitle')}</h3>
                <div className="mt-6 flex flex-col items-stretch gap-3 lg:flex-row">
                  {glanceTiers.map((t, k) => (
                    <React.Fragment key={t.key}>
                      {k > 0 && <div className="flex items-center justify-center text-slate-400"><ArrowRight className="hidden h-5 w-5 lg:block" aria-hidden="true" /><ChevronDown className="h-5 w-5 lg:hidden" aria-hidden="true" /></div>}
                      <div className="min-w-0 flex-1 rounded-2xl bg-slate-50 p-4">
                        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-600"><Ic name={t.icon} className="h-4 w-4 text-red-600" strokeWidth={1.75} />{u(t.label)}</p>
                        <div className="mt-3 space-y-2">
                          {t.items.map((s) => (
                            <button key={s.id} type="button" onClick={() => openSolution(s.id)} className="flex w-full items-start gap-3 rounded-xl border border-slate-200 bg-white p-3 text-left transition-colors duration-200 hover:border-slate-400">
                              <Ic name={s.icon} className="mt-0.5 h-5 w-5 shrink-0 text-red-600" strokeWidth={1.75} />
                              <span className="min-w-0"><span className="block text-sm font-semibold text-slate-900">{s.name}</span><span className="block text-xs leading-snug text-slate-500">{tx(s.tagline)}</span></span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
                <p className="mt-8 text-xs font-bold uppercase tracking-widest text-slate-500">{u('ind.outcomes')}</p>
                <div className="mt-3 grid gap-4 md:grid-cols-3">
                  {ind.outcomes.map((o, k) => (
                    <div key={k} className="rounded-2xl border border-slate-200 p-5">
                      <Award className="h-5 w-5 text-red-600" strokeWidth={1.75} aria-hidden="true" />
                      <h4 className="vt-d mt-3 text-base tracking-tight text-slate-900">{tx(o.title)}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{tx(o.body)}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ + PoC */}
              <div className="grid gap-6 lg:grid-cols-12">
                <div className="min-w-0 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:col-span-7">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{u('ind.faq')}</p>
                  <div className="mt-3 divide-y divide-slate-200">
                    {ind.faq.map((f, k) => (
                      <div key={k}>
                        <button type="button" className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-semibold text-slate-900 sm:text-base" aria-expanded={faqOpen === k} onClick={() => setFaqOpen(faqOpen === k ? -1 : k)}>
                          <span>{tx(f.q)}</span><ChevronDown className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 ${faqOpen === k ? 'rotate-180' : ''}`} aria-hidden="true" />
                        </button>
                        {faqOpen === k && <p className="vt-fade pb-4 text-sm leading-relaxed text-slate-600">{tx(f.a)}</p>}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="min-w-0 rounded-3xl bg-red-600 p-6 text-white sm:p-8 lg:col-span-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-red-100">{u('ind.pocKicker')}</p>
                  <h3 className="vt-d mt-2 text-2xl tracking-tight">{u('ind.pocTitle')}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-red-50">{u('ind.pocP')}</p>
                  <button type="button" onClick={() => { setForm((f) => ({ ...f, industry: ind.id })); goTo('contact'); }} className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-red-700 transition-colors duration-200 hover:bg-red-50">{u('ind.pocBtn')}<ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
                </div>
              </div>
            </Fade>
          </div>
        </section>

        {/* ---- Strategic alliance signing ---- */}
        <section id="alliance" className="bg-white py-16 sm:py-20">
          <div className={`${wrap} grid items-center gap-8 lg:grid-cols-12`}>
            <div className="min-w-0 lg:col-span-5">
              <Kicker>{u('ally.kicker')}</Kicker>
              <H2>{u('ally.title')}</H2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{u('ally.body')}</p>
              <button type="button" onClick={() => openIndustry('bfsi')} className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition-colors duration-200 hover:bg-slate-50">{tx(IND_BY_ID.bfsi.name)}<ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
            </div>
            <Photo srcs={DATA.signing.srcs} alt={u('ally.alt')} art={<Art icon="landmark" tone={TONE.alliance} label={u('ally.alt')} />} className="h-72 min-w-0 rounded-2xl ring-1 ring-slate-200 sm:h-96 lg:col-span-7">
              {(ok) => (
                <div className={`absolute inset-x-5 bottom-5 ${ok ? 'text-white' : 'text-slate-900'}`}>
                  <span className={`block text-xs font-bold uppercase tracking-widest ${ok ? 'text-white/80' : 'text-slate-500'}`}>{u('ally.kicker')}</span>
                  <span className="vt-d mt-1 block text-xl tracking-tight sm:text-2xl">{u('ally.title')}</span>
                </div>
              )}
            </Photo>
          </div>
        </section>

        {/* ---- Solutions ---- */}
        <section id="solutions" className="bg-slate-50 py-16 sm:py-20">
          <div className={wrap}>
            <div className="max-w-2xl"><Kicker>{u('sol.kicker')}</Kicker><H2>{u('sol.title')}</H2></div>
            <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label={u('sol.layer')}>
              {layers.map(([k, label]) => (
                <button key={k} type="button" role="tab" aria-selected={layer === k} onClick={() => setLayer(k)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-200 ${layer === k ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'}`}>{label}</button>
              ))}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {shownSols.map((s) => (
                <button key={s.id} type="button" onClick={() => setSolId(s.id)} aria-pressed={s.id === solId}
                  className={`flex min-w-0 items-start gap-4 rounded-2xl border bg-white p-5 text-left transition-colors duration-200 ${s.id === solId ? 'border-red-600 ring-1 ring-red-600' : 'border-slate-200 hover:border-slate-300'}`}>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-red-600"><Ic name={s.icon} className="h-6 w-6" strokeWidth={1.75} /></span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold text-slate-900">{s.name}</span>
                    <span className="mt-1 block text-xs leading-relaxed text-slate-600">{tx(s.tagline)}</span>
                    {s.id === 'ai-agent' && <span className="mt-2 inline-block rounded-full bg-red-50 px-2 py-0.5 text-xs font-semibold text-red-700">{u('sol.featured')}</span>}
                  </span>
                </button>
              ))}
            </div>

            <Fade k={sol.id} className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex min-w-0 items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white"><Ic name={sol.icon} className="h-7 w-7" strokeWidth={1.75} /></span>
                  <div className="min-w-0">
                    <h3 className="vt-d text-2xl tracking-tight text-slate-900 sm:text-3xl">{sol.name}</h3>
                    {sol.provider && <p className="mt-1 text-sm text-slate-600">{u('sol.provider')}: <span className="font-semibold text-slate-800">{sol.provider}</span></p>}
                  </div>
                </div>
                <button type="button" onClick={() => goTo('contact')} className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-red-700">{u('sol.talk')}<ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
              </div>

              {sol.tags && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {sol.tags.map((tg) => (
                    <span key={tg.tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{tg.tag}{lang === 'en' ? <span className="font-normal text-slate-500"> · {tg.en}</span> : null}</span>
                  ))}
                </div>
              )}

              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-slate-500">{u('sol.overview')}</p>
              <p className="mt-2 max-w-3xl text-base leading-relaxed text-slate-700">{tx(sol.description)}</p>

              {sol.pillars && (
                <>
                  <p className="mt-8 text-xs font-bold uppercase tracking-widest text-slate-500">{u('sol.features')}</p>
                  <ul className="mt-3 grid gap-3 md:grid-cols-2">
                    {sol.pillars.map((p, k) => (
                      <li key={k} className="flex min-w-0 gap-3 rounded-2xl bg-slate-50 p-4">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-red-600 ring-1 ring-slate-200"><Ic name={p.icon} className="h-5 w-5" strokeWidth={1.75} /></span>
                        <span className="text-sm leading-relaxed text-slate-700">{tx(p)}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {sol.metrics && (
                <>
                  <p className="mt-8 text-xs font-bold uppercase tracking-widest text-slate-500">{u('sol.results')}</p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {sol.metrics.map((m, k) => (
                      <div key={k} className="min-w-0 rounded-2xl border border-slate-200 p-5">
                        <Ic name={m.icon} className="h-5 w-5 text-red-600" strokeWidth={1.75} />
                        <p className="vt-d mt-3 text-3xl tracking-tight text-slate-900 tabular-nums">{m.value}</p>
                        <p className="mt-1 text-xs leading-relaxed text-slate-600">{tx(m)}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {(() => {
                const used = DATA.industries.filter((i) => i.bundle.includes(sol.id));
                return used.length ? (
                  <>
                    <p className="mt-8 text-xs font-bold uppercase tracking-widest text-slate-500">{u('sol.usedIn')}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {used.map((i) => (
                        <button key={i.id} type="button" onClick={() => openIndustry(i.id)} className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 transition-colors duration-200 hover:border-slate-400">
                          <Ic name={i.icon} className="h-4 w-4 text-red-600" strokeWidth={1.75} />{tx(i.name)}
                        </button>
                      ))}
                    </div>
                  </>
                ) : null;
              })()}
            </Fade>
          </div>
        </section>

        {/* ---- Experts ---- */}
        <section id="experts" className="bg-white py-16 sm:py-20">
          <div className={wrap}>
            <div className="max-w-2xl"><Kicker>{u('exp.kicker')}</Kicker><H2>{u('exp.title')}</H2><p className="mt-3 text-base leading-relaxed text-slate-600">{u('exp.sub')}</p></div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {DATA.experts.map((e) => (
                <article key={e.id} className="flex min-w-0 flex-col rounded-3xl border border-slate-200 bg-white p-6">
                  <div className="flex items-center gap-4">
                    <Photo srcs={[e.photo]} alt={tx(e.name)} className="h-16 w-16 shrink-0 rounded-full" art={<div className="vt-d flex h-full w-full items-center justify-center bg-slate-900 text-lg text-white" role="img" aria-label={tx(e.name)}>{e.initials}</div>} />
                    <div className="min-w-0">
                      <h3 className="vt-d text-lg tracking-tight text-slate-900">{tx(e.name)}</h3>
                      {e.role && <p className="mt-0.5 text-sm font-medium text-slate-600">{tx(e.role)}</p>}
                    </div>
                  </div>
                  {e.domain && (
                    <p className="mt-4 rounded-xl bg-red-50 px-3 py-2 text-xs font-semibold leading-relaxed text-red-700"><span className="uppercase tracking-widest">{u('exp.domain')}</span>: {tx(e.domain)}</p>
                  )}
                  {e.bio ? <p className="mt-4 text-sm leading-relaxed text-slate-600">{tx(e.bio)}</p> : <p className="mt-4 text-sm italic text-slate-400">{u('exp.pending')}</p>}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Contact ---- */}
        <section id="contact" className="bg-slate-50 py-16 sm:py-20">
          <div className={`${wrap} grid gap-8 rounded-3xl lg:grid-cols-2`}>
            <div className="min-w-0">
              <Kicker>{u('cta.kicker')}</Kicker>
              <H2>{u('cta.title')}</H2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{u('cta.p')}</p>
              <div className="mt-6 space-y-3">
                {[
                  ['call', u('cta.call'), CONTACT.phoneDisplay, `tel:${CONTACT.phone}`, Phone],
                  ['zalo', 'Zalo', CONTACT.phoneDisplay, CONTACT.zalo, MessageCircle],
                  ['mail', u('cta.mail'), CONTACT.email, `mailto:${CONTACT.email}`, Mail]
                ].map(([key, label, value, href, Icon]) => (
                  <div key={key} className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="flex min-w-0 items-center gap-3">
                      <Icon className="h-5 w-5 shrink-0 text-red-600" strokeWidth={1.75} aria-hidden="true" />
                      <div className="min-w-0"><p className="text-xs text-slate-500">{label}</p><a href={href} className="block break-all text-sm font-semibold text-slate-900 hover:underline">{value}</a></div>
                    </div>
                    <button type="button" onClick={() => copy(value, key)} className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-50">
                      {copied === key ? <Check className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}{copied === key ? u('cta.copied') : u('cta.copy')}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="min-w-0 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              {sent ? (
                <div className="vt-fade py-8 text-center" role="status">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"><Check className="h-6 w-6" aria-hidden="true" /></span>
                  <h3 className="vt-d mt-4 text-xl tracking-tight text-slate-900">{u('cta.thanksT')}</h3>
                  <p className="mx-auto mt-2 max-w-sm text-sm text-slate-600">{u('cta.demo')}</p>
                  <button type="button" onClick={() => { setSent(false); setForm({ name: '', company: '', email: '', phone: '', industry: '', need: '', consent: false }); }} className="mt-5 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50">{u('cta.again')}</button>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  <div className="flex gap-1 rounded-full bg-slate-100 p-1" role="tablist">
                    {[['book', u('cta.tabBook')], ['brief', u('cta.tabBrief')]].map(([k, label]) => (
                      <button key={k} type="button" role="tab" aria-selected={mode === k} onClick={() => setMode(k)} className={`flex-1 rounded-full px-3 py-2 text-xs font-semibold transition-colors duration-200 sm:text-sm ${mode === k ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'}`}>{label}</button>
                    ))}
                  </div>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {[['name', 'cta.name', 'text', 'name'], ['company', 'cta.company', 'text', 'organization'], ['email', 'cta.email', 'email', 'email'], ['phone', 'cta.phone', 'tel', 'tel']].map(([k, label, type, ac]) => (
                      <div key={k}>
                        <label htmlFor={`vtf-${k}`} className="text-xs font-semibold text-slate-700">{u(label)}</label>
                        <input id={`vtf-${k}`} type={type} autoComplete={ac} value={form[k]} onChange={(e) => setField(k, e.target.value)} aria-invalid={!!errors[k]}
                          className={`mt-1 w-full rounded-xl border bg-white px-3 py-2.5 text-sm text-slate-900 ${errors[k] ? 'border-red-500' : 'border-slate-300'}`} />
                        <p className="mt-1 min-h-4 text-xs text-red-600" aria-live="polite">{errors[k]}</p>
                      </div>
                    ))}
                    <div className="sm:col-span-2">
                      <label htmlFor="vtf-industry" className="text-xs font-semibold text-slate-700">{u('cta.industry')}</label>
                      <select id="vtf-industry" value={form.industry} onChange={(e) => setField('industry', e.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900">
                        <option value="">{u('cta.select')}</option>
                        {DATA.industries.map((i) => <option key={i.id} value={i.id}>{tx(i.name)}</option>)}
                        <option value="other">{u('cta.other')}</option>
                      </select>
                    </div>
                    {mode === 'book' && (
                      <div className="sm:col-span-2">
                        <label htmlFor="vtf-need" className="text-xs font-semibold text-slate-700">{u('cta.need')}</label>
                        <textarea id="vtf-need" rows={3} value={form.need} onChange={(e) => setField('need', e.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900" />
                      </div>
                    )}
                  </div>
                  <label htmlFor="vtf-consent" className="mt-2 flex items-start gap-2 text-xs text-slate-600">
                    <input id="vtf-consent" type="checkbox" checked={form.consent} onChange={(e) => setField('consent', e.target.checked)} className="mt-0.5 h-4 w-4" /><span>{u('cta.consent')}</span>
                  </label>
                  <p className="mt-1 min-h-4 text-xs text-red-600" aria-live="polite">{errors.consent}</p>
                  <p className="mt-2 text-xs text-slate-500">{u('cta.demo')}</p>
                  <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-red-700">{u(mode === 'book' ? 'cta.sendBook' : 'cta.sendBrief')}<ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* ---- Footer ---- */}
      <footer className="border-t border-slate-200 bg-white">
        <div className={`${wrap} py-12`}>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600 text-sm font-extrabold text-white">V</span><span className="vt-d text-base tracking-tight text-slate-900">V-TECH <span className="text-red-600">FOUNDRY</span></span></div>
              <p className="mt-4 text-sm text-slate-600">{u('foot.powered')} <a href={CONTACT.website} target="_blank" rel="noopener noreferrer" className="font-bold text-slate-900 hover:underline">VNETWORK</a></p>
            </div>
            <div className="min-w-0 space-y-2 text-sm text-slate-600">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-red-600" aria-hidden="true" />{CONTACT.phoneDisplay}</p>
              <p className="flex items-center gap-2 break-all"><Mail className="h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />{CONTACT.email}</p>
              <p className="flex items-center gap-2"><Globe className="h-4 w-4 text-red-600" aria-hidden="true" /><a href={CONTACT.website} target="_blank" rel="noopener noreferrer" className="hover:underline">vnetwork.vn</a></p>
            </div>
            <div className="min-w-0 space-y-3 text-sm text-slate-600">
              {CONTACT.offices.map((o, k) => <p key={k} className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />{tx(o)}</p>)}
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500">
            <span>© 2013 VNETWORK JSC. {u('foot.rights')}</span>
            <span><a href={CONTACT.website} target="_blank" rel="noopener noreferrer" className="hover:underline">{u('foot.terms')}</a> · <a href={CONTACT.website} target="_blank" rel="noopener noreferrer" className="hover:underline">{u('foot.privacy')}</a></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
