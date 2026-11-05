import { css as h, LitElement as w, html as l } from "lit";
import { property as $, state as k } from "lit/decorators.js";
const p = h`
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
`, d = () => window.Salla, y = async () => {
  var t, a;
  try {
    await ((a = (t = d()) == null ? void 0 : t.onReady) == null ? void 0 : a.call(t));
  } catch {
  }
}, b = (t, a) => (document.documentElement.lang || "ar").startsWith("en") ? a : t, c = (t) => {
  const a = typeof t == "object" && t ? t.amount : t, e = Number(a);
  return Number.isFinite(e) ? e : 0;
};
function _(t) {
  var r, n, o, s, i, u;
  const a = c(t == null ? void 0 : t.sale_price) && c(t == null ? void 0 : t.sale_price) < c((t == null ? void 0 : t.regular_price) ?? (t == null ? void 0 : t.price)) ? c(t == null ? void 0 : t.sale_price) : c(t == null ? void 0 : t.price), e = Math.max(c(t == null ? void 0 : t.regular_price), c(t == null ? void 0 : t.price), a);
  return {
    id: Number(t == null ? void 0 : t.id),
    name: String((t == null ? void 0 : t.name) ?? ""),
    url: String((t == null ? void 0 : t.url) ?? "#"),
    image: String(((r = t == null ? void 0 : t.image) == null ? void 0 : r.url) ?? (t == null ? void 0 : t.main_image) ?? (t == null ? void 0 : t.thumbnail) ?? ((o = (n = t == null ? void 0 : t.images) == null ? void 0 : n[0]) == null ? void 0 : o.url) ?? ""),
    price: a,
    regular: e,
    rating: c(((s = t == null ? void 0 : t.rating) == null ? void 0 : s.stars) ?? ((i = t == null ? void 0 : t.rating) == null ? void 0 : i.rate) ?? (t == null ? void 0 : t.rating)),
    ratingCount: c((u = t == null ? void 0 : t.rating) == null ? void 0 : u.count),
    qty: (t == null ? void 0 : t.quantity) == null || t != null && t.unlimited_quantity ? null : c(t == null ? void 0 : t.quantity),
    available: (t == null ? void 0 : t.is_available) !== !1 && (t == null ? void 0 : t.status) !== "out"
  };
}
const q = (t) => (Array.isArray(t) ? t : []).map((a) => Number(typeof a == "object" && a ? a.value : a)).filter((a) => Number.isFinite(a) && a > 0);
async function z(t) {
  return await y(), (await Promise.all(q(t).map((e) => {
    var r, n, o, s;
    return (s = (o = (n = (r = d()) == null ? void 0 : r.product) == null ? void 0 : n.api) == null ? void 0 : o.getDetails) == null ? void 0 : s.call(o, e).then((i) => _(i == null ? void 0 : i.data)).catch(() => null);
  }))).filter((e) => !!e && !!e.name);
}
const x = (t) => {
  var a, e;
  try {
    return ((e = (a = d()) == null ? void 0 : a.money) == null ? void 0 : e.call(a, t)) ?? `${t} ${b("ر.س", "SAR")}`;
  } catch {
    return `${t} ${b("ر.س", "SAR")}`;
  }
};
async function S(t) {
  var a, e, r;
  await y();
  try {
    await ((r = (e = (a = d()) == null ? void 0 : a.cart) == null ? void 0 : e.addItem) == null ? void 0 : r.call(e, { id: t, quantity: 1 }));
  } catch {
    location.href = `${location.origin}/p${t}`;
  }
}
function j(t) {
  var a, e;
  try {
    (e = (a = d()) == null ? void 0 : a.success) == null || e.call(a, t);
  } catch {
  }
}
const M = () => {
  var t, a, e, r, n;
  try {
    const o = ((a = (t = d()) == null ? void 0 : t.lang) == null ? void 0 : a.locale) ?? ((n = (r = (e = d()) == null ? void 0 : e.config) == null ? void 0 : r.get) == null ? void 0 : n.call(r, "user.language_code"));
    if (typeof o == "string" && o) return o.slice(0, 2);
  } catch {
  }
  return (document.documentElement.lang || "ar").slice(0, 2);
}, f = (t) => {
  if (t == null) return "";
  if (typeof t == "string") {
    const a = t.trim();
    if (a.startsWith("{") && a.endsWith("}"))
      try {
        return f(JSON.parse(a));
      } catch {
      }
    return t;
  }
  if (typeof t == "number" || typeof t == "boolean") return String(t);
  if (typeof t == "object") {
    const a = t, e = a[M()] ?? a.ar ?? a.en ?? Object.values(a).find((r) => typeof r == "string" && r);
    return typeof e == "string" ? e : "";
  }
  return "";
};
var N = Object.defineProperty, v = (t, a, e, r) => {
  for (var n = void 0, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (n = s(a, e, n) || n);
  return n && N(a, e, n), n;
};
const m = class m extends w {
  constructor() {
    super(...arguments), this.list = null, this.seq = 0;
  }
  willUpdate(a) {
    var e;
    if (a.has("config")) {
      const r = ++this.seq;
      this.list = null, z((e = this.config) == null ? void 0 : e.products).then((n) => {
        r === this.seq && (this.list = n.slice(0, 4));
      });
    }
  }
  render() {
    const a = this.config ?? {}, e = this.list;
    if (e && e.length < 2) return l`<div class="wrap"><p class="sub">اختر منتجين على الأقل للمقارنة من إعدادات العنصر.</p></div>`;
    const r = e ? Math.min(...e.map((i) => i.price)) : 0, n = e ? Math.max(...e.map((i) => i.rating)) : 0, o = (i) => i.regular - i.price, s = e == null ? void 0 : e.filter((i) => i.available).reduce((i, u) => !i || (u.rating || 3) / Math.max(1, u.price) > (i.rating || 3) / Math.max(1, i.price) ? u : i, null);
    return l`<section class=${a.dark ? "dark" : ""} style=${a.color ? `--tf-custom:${a.color}` : ""}><div class="wrap">
      <span class="eyebrow">⚖️ قارن قبل ما تشتري</span><h2 class="title">${f(a.title) || "أيهم يناسبك؟"}</h2>${f(a.subtitle) ? l`<p class="sub">${f(a.subtitle)}</p>` : ""}
      ${e == null ? l`<div class="skel" style="height:420px"></div>` : l`<div class="t" style=${`--n:${e.length}`}>${e.map((i) => l`
        <article class="col ${i === s ? "win" : ""}">${i === s ? l`<span class="crown">👑 الاختيار الذكي</span>` : ""}
          <img src=${i.image} alt=${i.name} loading="lazy" /><h3>${i.name}</h3>
          <dl><div><dt>السعر</dt><dd class=${i.price === r ? "best" : ""}>${x(i.price)}${i.price === r ? " ✓" : ""}</dd></div>
            <div><dt>التوفير</dt><dd>${o(i) > 0 ? x(Math.round(o(i) * 100) / 100) : "—"}</dd></div>
            <div><dt>التقييم</dt><dd class=${i.rating && i.rating === n ? "best" : ""}>${i.rating ? `${i.rating.toFixed(1)} ★ (${i.ratingCount})` : "—"}</dd></div>
            <div><dt>التوفر</dt><dd>${i.available ? i.qty != null && i.qty <= 5 ? `آخر ${i.qty}` : "متوفر" : "نفد"}</dd></div></dl>
          <button class="btn ${i === s ? "" : "ghost"}" ?disabled=${!i.available} @click=${async () => {
      await S(i.id), j(`انضاف «${i.name}» للسلة`);
    }}>أضف للسلة</button>
        </article>`)}</div>`}
    </div></section>`;
  }
};
m.styles = [p, h`
    .t { display: grid; gap: 14px; grid-template-columns: repeat(var(--n, 3), minmax(200px, 1fr)); overflow-x: auto; padding-bottom: 6px; scroll-snap-type: x mandatory; }
    .col { scroll-snap-align: start; position: relative; border-radius: 22px; border: 1px solid #8883; background: var(--card, #fff); overflow: hidden; display: flex; flex-direction: column; }
    .dark .col { --card: #17122b; border-color: #2b2348; }
    .col.win { border: 2px solid var(--tf-accent); box-shadow: 0 20px 50px -26px var(--tf-accent); }
    .crown { position: absolute; inset: 12px 12px auto auto; background: var(--tf-gold); color: #1a1033; font-weight: 800; font-size: 12px; padding: 5px 12px; border-radius: 999px; }
    img { width: 100%; aspect-ratio: 4/3; object-fit: cover; background: #8881; }
    h3 { margin: 12px 16px 6px; font-size: 15px; line-height: 1.5; }
    dl { margin: 0; padding: 0 16px; display: grid; } dl div { display: flex; justify-content: space-between; gap: 8px; padding: 10px 0; border-top: 1px dashed #8883; font-size: 14px; }
    dt { opacity: .65; } dd { margin: 0; font-weight: 700; } .best { color: #16a34a; }
    .btn { margin: 14px 16px 16px; justify-content: center; }
  `];
let g = m;
v([
  $({ type: Object })
], g.prototype, "config");
v([
  k()
], g.prototype, "list");
typeof g < "u" && g.registerSallaComponent("salla-tuhfa-compare");
export {
  g as default
};
