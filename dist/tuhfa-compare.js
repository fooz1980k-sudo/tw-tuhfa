import { css as h, LitElement as w, html as l } from "lit";
import { property as $, state as k } from "lit/decorators.js";
const q = h`
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
`, g = () => window.Salla, y = async () => {
  var t, i;
  try {
    await ((i = (t = g()) == null ? void 0 : t.onReady) == null ? void 0 : i.call(t));
  } catch {
  }
}, x = (t, i) => (document.documentElement.lang || "ar").startsWith("en") ? i : t, c = (t) => {
  const i = typeof t == "object" && t ? t.amount : t, e = Number(i);
  return Number.isFinite(e) ? e : 0;
};
function _(t) {
  var r, n, o, s, a, d;
  const i = c(t == null ? void 0 : t.sale_price) && c(t == null ? void 0 : t.sale_price) < c((t == null ? void 0 : t.regular_price) ?? (t == null ? void 0 : t.price)) ? c(t == null ? void 0 : t.sale_price) : c(t == null ? void 0 : t.price), e = Math.max(c(t == null ? void 0 : t.regular_price), c(t == null ? void 0 : t.price), i);
  return {
    id: Number(t == null ? void 0 : t.id),
    name: String((t == null ? void 0 : t.name) ?? ""),
    url: String((t == null ? void 0 : t.url) ?? "#"),
    image: String(((r = t == null ? void 0 : t.image) == null ? void 0 : r.url) ?? (t == null ? void 0 : t.main_image) ?? (t == null ? void 0 : t.thumbnail) ?? ((o = (n = t == null ? void 0 : t.images) == null ? void 0 : n[0]) == null ? void 0 : o.url) ?? ""),
    price: i,
    regular: e,
    rating: c(((s = t == null ? void 0 : t.rating) == null ? void 0 : s.stars) ?? ((a = t == null ? void 0 : t.rating) == null ? void 0 : a.rate) ?? (t == null ? void 0 : t.rating)),
    ratingCount: c((d = t == null ? void 0 : t.rating) == null ? void 0 : d.count),
    qty: (t == null ? void 0 : t.quantity) == null || t != null && t.unlimited_quantity ? null : c(t == null ? void 0 : t.quantity),
    available: (t == null ? void 0 : t.is_available) !== !1 && (t == null ? void 0 : t.status) !== "out"
  };
}
const z = (t) => (Array.isArray(t) ? t : []).map((i) => Number(typeof i == "object" && i ? i.value : i)).filter((i) => Number.isFinite(i) && i > 0);
async function S(t) {
  return await y(), (await Promise.all(z(t).map((e) => {
    var r, n, o, s;
    return (s = (o = (n = (r = g()) == null ? void 0 : r.product) == null ? void 0 : n.api) == null ? void 0 : o.getDetails) == null ? void 0 : s.call(o, e).then((a) => _(a == null ? void 0 : a.data)).catch(() => null);
  }))).filter((e) => !!e && !!e.name);
}
const b = (t) => {
  var i, e;
  try {
    return ((e = (i = g()) == null ? void 0 : i.money) == null ? void 0 : e.call(i, t)) ?? `${t} ${x("ر.س", "SAR")}`;
  } catch {
    return `${t} ${x("ر.س", "SAR")}`;
  }
};
async function p(t) {
  var i, e, r;
  await y();
  try {
    await ((r = (e = (i = g()) == null ? void 0 : i.cart) == null ? void 0 : e.addItem) == null ? void 0 : r.call(e, { id: t, quantity: 1 }));
  } catch {
    location.href = `${location.origin}/p${t}`;
  }
}
function j(t) {
  var i, e;
  try {
    (e = (i = g()) == null ? void 0 : i.success) == null || e.call(i, t);
  } catch {
  }
}
const f = (t) => String(t && typeof t == "object" ? t[(document.documentElement.lang || "ar").slice(0, 2)] ?? t.ar ?? "" : t ?? "");
var M = Object.defineProperty, v = (t, i, e, r) => {
  for (var n = void 0, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (n = s(i, e, n) || n);
  return n && M(i, e, n), n;
};
const m = class m extends w {
  constructor() {
    super(...arguments), this.list = null, this.seq = 0;
  }
  willUpdate(i) {
    var e;
    if (i.has("config")) {
      const r = ++this.seq;
      this.list = null, S((e = this.config) == null ? void 0 : e.products).then((n) => {
        r === this.seq && (this.list = n.slice(0, 4));
      });
    }
  }
  render() {
    const i = this.config ?? {}, e = this.list;
    if (e && e.length < 2) return l`<div class="wrap"><p class="sub">اختر منتجين على الأقل للمقارنة من إعدادات العنصر.</p></div>`;
    const r = e ? Math.min(...e.map((a) => a.price)) : 0, n = e ? Math.max(...e.map((a) => a.rating)) : 0, o = (a) => a.regular - a.price, s = e == null ? void 0 : e.filter((a) => a.available).reduce((a, d) => !a || (d.rating || 3) / Math.max(1, d.price) > (a.rating || 3) / Math.max(1, a.price) ? d : a, null);
    return l`<section class=${i.dark ? "dark" : ""} style=${i.color ? `--tf-custom:${i.color}` : ""}><div class="wrap">
      <span class="eyebrow">⚖️ قارن قبل ما تشتري</span><h2 class="title">${f(i.title) || "أيهم يناسبك؟"}</h2>${f(i.subtitle) ? l`<p class="sub">${f(i.subtitle)}</p>` : ""}
      ${e == null ? l`<div class="skel" style="height:420px"></div>` : l`<div class="t" style=${`--n:${e.length}`}>${e.map((a) => l`
        <article class="col ${a === s ? "win" : ""}">${a === s ? l`<span class="crown">👑 الاختيار الذكي</span>` : ""}
          <img src=${a.image} alt=${a.name} loading="lazy" /><h3>${a.name}</h3>
          <dl><div><dt>السعر</dt><dd class=${a.price === r ? "best" : ""}>${b(a.price)}${a.price === r ? " ✓" : ""}</dd></div>
            <div><dt>التوفير</dt><dd>${o(a) > 0 ? b(Math.round(o(a) * 100) / 100) : "—"}</dd></div>
            <div><dt>التقييم</dt><dd class=${a.rating && a.rating === n ? "best" : ""}>${a.rating ? `${a.rating.toFixed(1)} ★ (${a.ratingCount})` : "—"}</dd></div>
            <div><dt>التوفر</dt><dd>${a.available ? a.qty != null && a.qty <= 5 ? `آخر ${a.qty}` : "متوفر" : "نفد"}</dd></div></dl>
          <button class="btn ${a === s ? "" : "ghost"}" ?disabled=${!a.available} @click=${async () => {
      await p(a.id), j(`انضاف «${a.name}» للسلة`);
    }}>أضف للسلة</button>
        </article>`)}</div>`}
    </div></section>`;
  }
};
m.styles = [q, h`
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
let u = m;
v([
  $({ type: Object })
], u.prototype, "config");
v([
  k()
], u.prototype, "list");
typeof u < "u" && u.registerSallaComponent("salla-tuhfa-compare");
export {
  u as default
};
