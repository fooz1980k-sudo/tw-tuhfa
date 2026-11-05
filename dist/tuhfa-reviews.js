import { css as m, LitElement as x, html as p } from "lit";
import { property as b } from "lit/decorators.js";
const h = m`
  :host { display: block; --tf-accent: var(--tf-custom, var(--color-primary, #c9a45c)); --tf-ink: #0f0c18; --tf-ivory: #f6f1e7; --tf-mut: #a59bc2;
    --tf-gold: linear-gradient(135deg, #f5d68a, #c9a45c 55%, #9a7634); font-family: inherit; direction: inherit; }
  :host([hidden]) { display: none; }
  *, *::before, *::after { box-sizing: border-box; }
  .wrap { max-width: 1240px; margin: 0 auto; padding: clamp(28px, 5vw, 64px) clamp(16px, 4vw, 32px); }
  .eyebrow { display: inline-block; letter-spacing: .28em; font-size: 12px; text-transform: uppercase; color: var(--tf-accent); margin-bottom: 10px; }
  h2.title { margin: 0 0 8px; font-size: clamp(24px, 3.4vw, 40px); line-height: 1.25; font-weight: 800; }
  .sub { margin: 0 0 28px; opacity: .7; font-size: clamp(14px, 1.6vw, 17px); line-height: 1.8; }
  .btn { display: inline-flex; align-items: center; gap: 8px; border: 0; cursor: pointer; text-decoration: none; font: inherit; font-weight: 700;
    padding: 13px 26px; border-radius: 999px; background: var(--tf-accent); color: #fff; transition: transform .25s, box-shadow .25s; }
  .btn:hover { transform: translateY(-2px); box-shadow: 0 14px 30px -12px var(--tf-accent); }
  .btn.ghost { background: transparent; color: inherit; border: 1px solid currentColor; }
  .dark { background: radial-gradient(1000px 500px at 85% -10%, #2c1d55 0, transparent 60%), #0f0c18; color: var(--tf-ivory); }
  .skel { background: linear-gradient(90deg, #8881 0, #8882 50%, #8881 100%); background-size: 200% 100%; animation: sk 1.4s infinite; border-radius: 14px; }
  @keyframes sk { to { background-position: -200% 0; } }
  @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }
`, g = () => window.Salla, u = () => {
  var r, t, a, i, n;
  try {
    const o = ((t = (r = g()) == null ? void 0 : r.lang) == null ? void 0 : t.locale) ?? ((n = (i = (a = g()) == null ? void 0 : a.config) == null ? void 0 : i.get) == null ? void 0 : n.call(i, "user.language_code"));
    if (typeof o == "string" && o) return o.slice(0, 2);
  } catch {
  }
  return (document.documentElement.lang || "ar").slice(0, 2);
}, s = (r) => {
  if (r == null) return "";
  if (typeof r == "string") {
    const t = r.trim();
    if (t.startsWith("{") && t.endsWith("}"))
      try {
        return s(JSON.parse(t));
      } catch {
      }
    return r;
  }
  if (typeof r == "number" || typeof r == "boolean") return String(r);
  if (typeof r == "object") {
    const t = r, a = t[u()] ?? t.ar ?? t.en ?? Object.values(t).find((i) => typeof i == "string" && i);
    return typeof a == "string" ? a : "";
  }
  return "";
}, y = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
var v = Object.defineProperty, k = (r, t, a, i) => {
  for (var n = void 0, o = r.length - 1, e; o >= 0; o--)
    (e = r[o]) && (n = e(t, a, n) || n);
  return n && v(t, a, n), n;
};
const f = class f extends x {
  render() {
    const t = this.config ?? {}, a = (t.reviews ?? []).filter((e) => s(e == null ? void 0 : e.text)), i = a.length ? a.reduce((e, l) => e + Math.max(1, Math.min(5, Number(l.stars) || 5)), 0) / a.length : 0, n = (e) => {
      const l = s(e.name) || "عميل", d = Math.max(1, Math.min(5, Math.round(Number(e.stars) || 5)));
      return p`<figure class="r"><span class="stars" aria-label=${`${d} من 5`}>${"★".repeat(d)}${"☆".repeat(5 - d)}</span><p>«${s(e.text)}»</p>
        <figcaption class="who"><span class="av">${l.trim()[0]}</span>${l}${s(e.city) ? ` · ${s(e.city)}` : ""}</figcaption></figure>`;
    }, o = a.length > 2 && !y();
    return p`<section class=${t.dark ? "dark" : ""} style=${t.color ? `--tf-custom:${t.color}` : ""}><div class="wrap">
      <div class="head"><div><span class="eyebrow">✦ ثقة عملائنا</span><h2 class="title">${s(t.title) || "وش يقولون عنا"}</h2></div>
        ${a.length ? p`<div class="avg"><b>${i.toFixed(1)}</b><div><div class="stars">★★★★★</div><small>من ${a.length} تقييم مختار</small></div></div>` : ""}</div>
      ${a.length ? p`<div class="rail"><div class="track" style=${`--d:${Math.max(20, a.length * 8)}s;${o ? "" : "animation:none;flex-wrap:wrap;width:auto"}`}>${a.map(n)}${o ? a.map(n) : ""}</div></div>` : p`<p class="sub">أضف آراء عملائك من إعدادات العنصر.</p>`}
      ${(t.badges ?? []).length ? p`<div class="badges">${(t.badges ?? []).map((e) => p`<span class="bd">${e.emoji ?? "✓"} ${s(e.text)}</span>`)}</div>` : ""}
    </div></section>`;
  }
};
f.styles = [h, m`
    .head { display: flex; flex-wrap: wrap; gap: 18px; align-items: center; justify-content: space-between; margin-bottom: 26px; }
    .avg { display: flex; align-items: center; gap: 12px; } .avg b { font-size: 46px; background: var(--tf-gold); -webkit-background-clip: text; background-clip: text; color: transparent; }
    .stars { color: #f5b301; letter-spacing: 2px; }
    .rail { overflow: hidden; mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent); -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent); }
    .track { display: flex; gap: 16px; width: max-content; animation: m var(--d, 40s) linear infinite; } .rail:hover .track { animation-play-state: paused; }
    @keyframes m { to { transform: translateX(calc(-50% - 8px)); } } :host-context([dir=rtl]) .track { animation-name: mr; } @keyframes mr { to { transform: translateX(calc(50% + 8px)); } }
    .r { width: min(340px, 78vw); padding: 20px; border-radius: 20px; background: var(--card, #fff); border: 1px solid #8882; display: grid; gap: 10px; }
    .dark .r { --card: #17122b; border-color: #2b2348; }
    .r p { margin: 0; line-height: 1.8; font-size: 15px; } .who { display: flex; gap: 10px; align-items: center; font-size: 13px; opacity: .8; }
    .av { width: 34px; height: 34px; border-radius: 50%; display: grid; place-items: center; background: var(--tf-gold); color: #1a1033; font-weight: 800; }
    .badges { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 26px; justify-content: center; }
    .bd { display: flex; gap: 8px; align-items: center; padding: 10px 16px; border-radius: 999px; border: 1px solid #8883; font-size: 14px; }
  `];
let c = f;
k([
  b({ type: Object })
], c.prototype, "config");
typeof c < "u" && c.registerSallaComponent("salla-tuhfa-reviews");
export {
  c as default
};
