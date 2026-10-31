import { css as y, LitElement as $, html as d } from "lit";
import { property as k, state as v } from "lit/decorators.js";
const p = y`
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
`, g = () => window.Salla, w = async () => {
  var t, a;
  try {
    await ((a = (t = g()) == null ? void 0 : t.onReady) == null ? void 0 : a.call(t));
  } catch {
  }
}, x = (t, a) => (document.documentElement.lang || "ar").startsWith("en") ? a : t, c = (t) => {
  const a = typeof t == "object" && t ? t.amount : t, e = Number(a);
  return Number.isFinite(e) ? e : 0;
};
function z(t) {
  var i, r, o, l, n, s;
  const a = c(t == null ? void 0 : t.sale_price) && c(t == null ? void 0 : t.sale_price) < c((t == null ? void 0 : t.regular_price) ?? (t == null ? void 0 : t.price)) ? c(t == null ? void 0 : t.sale_price) : c(t == null ? void 0 : t.price), e = Math.max(c(t == null ? void 0 : t.regular_price), c(t == null ? void 0 : t.price), a);
  return {
    id: Number(t == null ? void 0 : t.id),
    name: String((t == null ? void 0 : t.name) ?? ""),
    url: String((t == null ? void 0 : t.url) ?? "#"),
    image: String(((i = t == null ? void 0 : t.image) == null ? void 0 : i.url) ?? (t == null ? void 0 : t.main_image) ?? (t == null ? void 0 : t.thumbnail) ?? ((o = (r = t == null ? void 0 : t.images) == null ? void 0 : r[0]) == null ? void 0 : o.url) ?? ""),
    price: a,
    regular: e,
    rating: c(((l = t == null ? void 0 : t.rating) == null ? void 0 : l.stars) ?? ((n = t == null ? void 0 : t.rating) == null ? void 0 : n.rate) ?? (t == null ? void 0 : t.rating)),
    ratingCount: c((s = t == null ? void 0 : t.rating) == null ? void 0 : s.count),
    qty: (t == null ? void 0 : t.quantity) == null || t != null && t.unlimited_quantity ? null : c(t == null ? void 0 : t.quantity),
    available: (t == null ? void 0 : t.is_available) !== !1 && (t == null ? void 0 : t.status) !== "out"
  };
}
const q = (t) => (Array.isArray(t) ? t : []).map((a) => Number(typeof a == "object" && a ? a.value : a)).filter((a) => Number.isFinite(a) && a > 0);
async function _(t) {
  return await w(), (await Promise.all(q(t).map((e) => {
    var i, r, o, l;
    return (l = (o = (r = (i = g()) == null ? void 0 : i.product) == null ? void 0 : r.api) == null ? void 0 : o.getDetails) == null ? void 0 : l.call(o, e).then((n) => z(n == null ? void 0 : n.data)).catch(() => null);
  }))).filter((e) => !!e && !!e.name);
}
const b = (t) => {
  var a, e;
  try {
    return ((e = (a = g()) == null ? void 0 : a.money) == null ? void 0 : e.call(a, t)) ?? `${t} ${x("ر.س", "SAR")}`;
  } catch {
    return `${t} ${x("ر.س", "SAR")}`;
  }
};
async function C(t) {
  var a, e, i;
  await w();
  try {
    await ((i = (e = (a = g()) == null ? void 0 : a.cart) == null ? void 0 : e.addItem) == null ? void 0 : i.call(e, { id: t, quantity: 1 }));
  } catch {
    location.href = `${location.origin}/p${t}`;
  }
}
function S(t) {
  var a, e;
  try {
    (e = (a = g()) == null ? void 0 : a.success) == null || e.call(a, t);
  } catch {
  }
}
const f = (t) => String(t && typeof t == "object" ? t[(document.documentElement.lang || "ar").slice(0, 2)] ?? t.ar ?? "" : t ?? "");
var j = Object.defineProperty, m = (t, a, e, i) => {
  for (var r = void 0, o = t.length - 1, l; o >= 0; o--)
    (l = t[o]) && (r = l(a, e, r) || r);
  return r && j(a, e, r), r;
};
const h = class h extends $ {
  constructor() {
    super(...arguments), this.list = null, this.busy = 0, this.seq = 0;
  }
  willUpdate(a) {
    var e;
    if (a.has("config")) {
      const i = ++this.seq;
      this.list = null, _((e = this.config) == null ? void 0 : e.products).then((r) => {
        i === this.seq && (this.list = r);
      });
    }
  }
  badges(a, e) {
    const i = [], r = a.regular > a.price ? Math.round((1 - a.price / a.regular) * 100) : 0;
    return r >= 5 && i.push([`خصم ${r}٪`, "hot"]), a.qty != null && a.qty > 0 && a.qty <= 5 && i.push([`آخر ${a.qty} قطع`, ""]), e.reduce((n, s) => s.rating * Math.log2(2 + s.ratingCount) > n.rating * Math.log2(2 + n.ratingCount) ? s : n, e[0]) === a && a.rating >= 4 && i.push(["الأعلى تقييماً", "gold"]), e.reduce((n, s) => s.regular - s.price > n.regular - n.price ? s : n, e[0]) === a && a.regular - a.price > 0 && !i.some((n) => n[1] === "gold") && i.push(["الأوفر", "gold"]), a.available || i.unshift(["نفد", ""]), i.slice(0, 3);
  }
  async add(a) {
    this.busy = a.id, await C(a.id), this.busy = 0, S(`انضاف «${a.name}» للسلة`);
  }
  render() {
    const a = this.config ?? {}, e = this.list;
    return d`<section class=${a.dark ? "dark" : ""} style=${a.color ? `--tf-custom:${a.color}` : ""}><div class="wrap">
      ${f(a.title) ? d`<span class="eyebrow">✦ مختارات</span><h2 class="title">${f(a.title)}</h2>` : ""}${f(a.subtitle) ? d`<p class="sub">${f(a.subtitle)}</p>` : ""}
      <div class="grid">${e == null ? [1, 2, 3, 4].map(() => d`<div class="skel" style="aspect-ratio:.72"></div>`) : e.length ? e.map((i) => d`<article class="c">
          <a class="img" href=${i.url}><img src=${i.image} alt=${i.name} loading="lazy" /></a>
          <div class="badges">${this.badges(i, e).map(([r, o]) => d`<span class="b ${o}">${r}</span>`)}</div>
          <div class="body"><a class="n" href=${i.url}>${i.name}</a>
            ${i.rating ? d`<span class="stars">${"★".repeat(Math.round(i.rating))}${"☆".repeat(5 - Math.round(i.rating))} <small>(${i.ratingCount})</small></span>` : ""}
            <div class="p"><b>${b(i.price)}</b>${i.regular > i.price ? d`<s>${b(i.regular)}</s><span class="save">وفّر ${b(Math.round((i.regular - i.price) * 100) / 100)}</span>` : ""}</div>
            <button class="btn" ?disabled=${!i.available || this.busy === i.id} @click=${() => this.add(i)}>${this.busy === i.id ? "..." : i.available ? "أضف للسلة" : "غير متوفر"}</button></div>
        </article>`) : d`<p class="sub">اختر المنتجات من إعدادات العنصر.</p>`}</div></div></section>`;
  }
};
h.styles = [p, y`
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
let u = h;
m([
  k({ type: Object })
], u.prototype, "config");
m([
  v()
], u.prototype, "list");
m([
  v()
], u.prototype, "busy");
typeof u < "u" && u.registerSallaComponent("salla-tuhfa-smart-products");
export {
  u as default
};
