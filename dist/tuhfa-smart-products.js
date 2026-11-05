import { css as x, LitElement as $, html as d } from "lit";
import { property as k, state as v } from "lit/decorators.js";
const p = x`
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
`, u = () => window.Salla, w = async () => {
  var t, a;
  try {
    await ((a = (t = u()) == null ? void 0 : t.onReady) == null ? void 0 : a.call(t));
  } catch {
  }
}, y = (t, a) => (document.documentElement.lang || "ar").startsWith("en") ? a : t, c = (t) => {
  const a = typeof t == "object" && t ? t.amount : t, r = Number(a);
  return Number.isFinite(r) ? r : 0;
};
function z(t) {
  var e, i, n, l, o, s;
  const a = c(t == null ? void 0 : t.sale_price) && c(t == null ? void 0 : t.sale_price) < c((t == null ? void 0 : t.regular_price) ?? (t == null ? void 0 : t.price)) ? c(t == null ? void 0 : t.sale_price) : c(t == null ? void 0 : t.price), r = Math.max(c(t == null ? void 0 : t.regular_price), c(t == null ? void 0 : t.price), a);
  return {
    id: Number(t == null ? void 0 : t.id),
    name: String((t == null ? void 0 : t.name) ?? ""),
    url: String((t == null ? void 0 : t.url) ?? "#"),
    image: String(((e = t == null ? void 0 : t.image) == null ? void 0 : e.url) ?? (t == null ? void 0 : t.main_image) ?? (t == null ? void 0 : t.thumbnail) ?? ((n = (i = t == null ? void 0 : t.images) == null ? void 0 : i[0]) == null ? void 0 : n.url) ?? ""),
    price: a,
    regular: r,
    rating: c(((l = t == null ? void 0 : t.rating) == null ? void 0 : l.stars) ?? ((o = t == null ? void 0 : t.rating) == null ? void 0 : o.rate) ?? (t == null ? void 0 : t.rating)),
    ratingCount: c((s = t == null ? void 0 : t.rating) == null ? void 0 : s.count),
    qty: (t == null ? void 0 : t.quantity) == null || t != null && t.unlimited_quantity ? null : c(t == null ? void 0 : t.quantity),
    available: (t == null ? void 0 : t.is_available) !== !1 && (t == null ? void 0 : t.status) !== "out"
  };
}
const q = (t) => (Array.isArray(t) ? t : []).map((a) => Number(typeof a == "object" && a ? a.value : a)).filter((a) => Number.isFinite(a) && a > 0);
async function _(t) {
  return await w(), (await Promise.all(q(t).map((r) => {
    var e, i, n, l;
    return (l = (n = (i = (e = u()) == null ? void 0 : e.product) == null ? void 0 : i.api) == null ? void 0 : n.getDetails) == null ? void 0 : l.call(n, r).then((o) => z(o == null ? void 0 : o.data)).catch(() => null);
  }))).filter((r) => !!r && !!r.name);
}
const b = (t) => {
  var a, r;
  try {
    return ((r = (a = u()) == null ? void 0 : a.money) == null ? void 0 : r.call(a, t)) ?? `${t} ${y("ر.س", "SAR")}`;
  } catch {
    return `${t} ${y("ر.س", "SAR")}`;
  }
};
async function S(t) {
  var a, r, e;
  await w();
  try {
    await ((e = (r = (a = u()) == null ? void 0 : a.cart) == null ? void 0 : r.addItem) == null ? void 0 : e.call(r, { id: t, quantity: 1 }));
  } catch {
    location.href = `${location.origin}/p${t}`;
  }
}
function j(t) {
  var a, r;
  try {
    (r = (a = u()) == null ? void 0 : a.success) == null || r.call(a, t);
  } catch {
  }
}
const C = () => {
  var t, a, r, e, i;
  try {
    const n = ((a = (t = u()) == null ? void 0 : t.lang) == null ? void 0 : a.locale) ?? ((i = (e = (r = u()) == null ? void 0 : r.config) == null ? void 0 : e.get) == null ? void 0 : i.call(e, "user.language_code"));
    if (typeof n == "string" && n) return n.slice(0, 2);
  } catch {
  }
  return (document.documentElement.lang || "ar").slice(0, 2);
}, g = (t) => {
  if (t == null) return "";
  if (typeof t == "string") {
    const a = t.trim();
    if (a.startsWith("{") && a.endsWith("}"))
      try {
        return g(JSON.parse(a));
      } catch {
      }
    return t;
  }
  if (typeof t == "number" || typeof t == "boolean") return String(t);
  if (typeof t == "object") {
    const a = t, r = a[C()] ?? a.ar ?? a.en ?? Object.values(a).find((e) => typeof e == "string" && e);
    return typeof r == "string" ? r : "";
  }
  return "";
};
var M = Object.defineProperty, m = (t, a, r, e) => {
  for (var i = void 0, n = t.length - 1, l; n >= 0; n--)
    (l = t[n]) && (i = l(a, r, i) || i);
  return i && M(a, r, i), i;
};
const h = class h extends $ {
  constructor() {
    super(...arguments), this.list = null, this.busy = 0, this.seq = 0;
  }
  willUpdate(a) {
    var r;
    if (a.has("config")) {
      const e = ++this.seq;
      this.list = null, _((r = this.config) == null ? void 0 : r.products).then((i) => {
        e === this.seq && (this.list = i);
      });
    }
  }
  badges(a, r) {
    const e = [], i = a.regular > a.price ? Math.round((1 - a.price / a.regular) * 100) : 0;
    return i >= 5 && e.push([`خصم ${i}٪`, "hot"]), a.qty != null && a.qty > 0 && a.qty <= 5 && e.push([`آخر ${a.qty} قطع`, ""]), r.reduce((o, s) => s.rating * Math.log2(2 + s.ratingCount) > o.rating * Math.log2(2 + o.ratingCount) ? s : o, r[0]) === a && a.rating >= 4 && e.push(["الأعلى تقييماً", "gold"]), r.reduce((o, s) => s.regular - s.price > o.regular - o.price ? s : o, r[0]) === a && a.regular - a.price > 0 && !e.some((o) => o[1] === "gold") && e.push(["الأوفر", "gold"]), a.available || e.unshift(["نفد", ""]), e.slice(0, 3);
  }
  async add(a) {
    this.busy = a.id, await S(a.id), this.busy = 0, j(`انضاف «${a.name}» للسلة`);
  }
  render() {
    const a = this.config ?? {}, r = this.list;
    return d`<section class=${a.dark ? "dark" : ""} style=${a.color ? `--tf-custom:${a.color}` : ""}><div class="wrap">
      ${g(a.title) ? d`<span class="eyebrow">✦ مختارات</span><h2 class="title">${g(a.title)}</h2>` : ""}${g(a.subtitle) ? d`<p class="sub">${g(a.subtitle)}</p>` : ""}
      <div class="grid">${r == null ? [1, 2, 3, 4].map(() => d`<div class="skel" style="aspect-ratio:.72"></div>`) : r.length ? r.map((e) => d`<article class="c">
          <a class="img" href=${e.url}><img src=${e.image} alt=${e.name} loading="lazy" /></a>
          <div class="badges">${this.badges(e, r).map(([i, n]) => d`<span class="b ${n}">${i}</span>`)}</div>
          <div class="body"><a class="n" href=${e.url}>${e.name}</a>
            ${e.rating ? d`<span class="stars">${"★".repeat(Math.round(e.rating))}${"☆".repeat(5 - Math.round(e.rating))} <small>(${e.ratingCount})</small></span>` : ""}
            <div class="p"><b>${b(e.price)}</b>${e.regular > e.price ? d`<s>${b(e.regular)}</s><span class="save">وفّر ${b(Math.round((e.regular - e.price) * 100) / 100)}</span>` : ""}</div>
            <button class="btn" ?disabled=${!e.available || this.busy === e.id} @click=${() => this.add(e)}>${this.busy === e.id ? "..." : e.available ? "أضف للسلة" : "غير متوفر"}</button></div>
        </article>`) : d`<p class="sub">اختر المنتجات من إعدادات العنصر.</p>`}</div></div></section>`;
  }
};
h.styles = [p, x`
    .grid { display: grid; gap: 18px; grid-template-columns: repeat(auto-fill, minmax(min(240px, 44vw), 1fr)); }
    .c { position: relative; border-radius: 20px; overflow: hidden; background: var(--card, #fff); color: inherit; border: 1px solid #8882; transition: transform .35s, box-shadow .35s; display: flex; flex-direction: column; }
    .dark .c { --card: #17122b; border-color: #2b2348; }
    .c:hover { transform: translateY(-6px); box-shadow: 0 24px 50px -24px #0006; }
    .img { aspect-ratio: 1; overflow: hidden; background: #8881; } .img img { width: 100%; height: 100%; object-fit: cover; transition: transform .8s; } .c:hover .img img { transform: scale(1.07); }
    .badges { position: absolute; inset: 12px 12px auto; display: flex; gap: 6px; flex-wrap: wrap; }
    .b { font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 999px; background: #0f0c18cc; color: #fff; backdrop-filter: blur(6px); }
    .b.gold { background: var(--tf-gold); color: #1a1033; } .b.hot { background: #e5484d; }
    .body { padding: 14px 16px 16px; display: grid; gap: 8px; flex: 1; }
    .n { margin: 0; font-size: 15px; font-weight: 700; line-height: 1.5; color: inherit; text-decoration: none; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
    .p { display: flex; gap: 8px; align-items: baseline; flex-wrap: wrap; } .p b { font-size: 18px; color: var(--tf-accent); } .p s { opacity: .5; font-size: 13px; }
    .save { font-size: 12px; color: #16a34a; font-weight: 700; } .stars { font-size: 13px; color: #f5b301; }
    .btn { justify-content: center; margin-top: auto; padding: 11px; }
  `];
let f = h;
m([
  k({ type: Object })
], f.prototype, "config");
m([
  v()
], f.prototype, "list");
m([
  v()
], f.prototype, "busy");
typeof f < "u" && f.registerSallaComponent("salla-tuhfa-smart-products");
export {
  f as default
};
