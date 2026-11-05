import { css as y, LitElement as $, html as c } from "lit";
import { property as k, state as z } from "lit/decorators.js";
const j = y`
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
`, v = () => window.Salla, M = () => {
  var e, t, i, r, n;
  try {
    const s = ((t = (e = v()) == null ? void 0 : e.lang) == null ? void 0 : t.locale) ?? ((n = (r = (i = v()) == null ? void 0 : i.config) == null ? void 0 : r.get) == null ? void 0 : n.call(r, "user.language_code"));
    if (typeof s == "string" && s) return s.slice(0, 2);
  } catch {
  }
  return (document.documentElement.lang || "ar").slice(0, 2);
}, l = (e) => {
  if (e == null) return "";
  if (typeof e == "string") {
    const t = e.trim();
    if (t.startsWith("{") && t.endsWith("}"))
      try {
        return l(JSON.parse(t));
      } catch {
      }
    return e;
  }
  if (typeof e == "number" || typeof e == "boolean") return String(e);
  if (typeof e == "object") {
    const t = e, i = t[M()] ?? t.ar ?? t.en ?? Object.values(t).find((r) => typeof r == "string" && r);
    return typeof i == "string" ? i : "";
  }
  return "";
}, C = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
var S = Object.defineProperty, w = (e, t, i, r) => {
  for (var n = void 0, s = e.length - 1, p; s >= 0; s--)
    (p = e[s]) && (n = p(t, i, n) || n);
  return n && S(t, i, n), n;
};
const h = class h extends $ {
  constructor() {
    super(...arguments), this.i = 0, this.x0 = 0, this.vis = () => document.hidden ? clearInterval(this.timer) : this.play();
  }
  connectedCallback() {
    super.connectedCallback(), this.play(), document.addEventListener("visibilitychange", this.vis);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), clearInterval(this.timer), document.removeEventListener("visibilitychange", this.vis);
  }
  // Config arrives on the first update (after connectedCallback): restart autoplay whenever it changes.
  updated(t) {
    t.has("config") && this.play();
  }
  get slides() {
    var t;
    return (((t = this.config) == null ? void 0 : t.slides) ?? []).filter((i) => i == null ? void 0 : i.image);
  }
  get secs() {
    var t;
    return Math.max(3, Math.min(20, Number((t = this.config) == null ? void 0 : t.seconds) || 7));
  }
  play() {
    clearInterval(this.timer), this.slides.length > 1 && !C() && (this.timer = window.setInterval(() => this.go(this.i + 1), this.secs * 1e3));
  }
  go(t) {
    const i = this.slides.length;
    i && (this.i = (t + i) % i, this.play());
  }
  render() {
    var s, p, f, g, m, u, b, x;
    const t = this.slides;
    if (!t.length) return c`<div class="empty">أضف صور العرض السينمائي من إعدادات العنصر</div>`;
    const r = (Array.isArray((s = this.config) == null ? void 0 : s.align) ? (g = (f = (p = this.config) == null ? void 0 : p.align) == null ? void 0 : f[0]) == null ? void 0 : g.value : (m = this.config) == null ? void 0 : m.align) === "center", n = `--h:${Math.max(50, Math.min(100, Number((u = this.config) == null ? void 0 : u.height) || 78))}vh;--o:${Math.max(0, Math.min(85, Number(((b = this.config) == null ? void 0 : b.overlay) ?? 55))) / 100};--dur:${this.secs}s;--ji:${r ? "center" : "start"};--ta:${r ? "center" : "start"};${(x = this.config) != null && x.color ? `--tf-custom:${this.config.color}` : ""}`;
    return c`<section class="hero" style=${n} @mouseenter=${() => clearInterval(this.timer)} @mouseleave=${() => this.play()}
      @touchstart=${(a) => this.x0 = a.touches[0].clientX} @touchend=${(a) => {
      const o = a.changedTouches[0].clientX - this.x0;
      Math.abs(o) > 40 && this.go(this.i + (o < 0 ? 1 : -1));
    }}>
      ${t.map((a, o) => c`<div class="s ${o === this.i ? "on" : ""}" aria-hidden=${o !== this.i}>
        <img src=${a.image} alt=${l(a.title)} loading=${o ? "lazy" : "eager"} />
        <div class="shade"></div>
        <div class="txt">${l(a.title) ? c`<h2>${l(a.title)}</h2>` : ""}${l(a.subtitle) ? c`<p>${l(a.subtitle)}</p>` : ""}
          ${l(a.button) && a.link ? c`<a class="btn" href=${a.link}>${l(a.button)} ←</a>` : ""}</div></div>`)}
      ${t.length > 1 ? c`<div class="bars">${t.map((a, o) => c`<button class="bar ${o === this.i ? "on" : o < this.i ? "done" : ""}" aria-label=${`الشريحة ${o + 1}`} @click=${() => this.go(o)}><i></i></button>`)}</div>` : ""}
    </section>`;
  }
};
h.styles = [j, y`
    .hero { position: relative; overflow: hidden; height: var(--h, 78vh); min-height: 420px; max-height: 900px; color: #fff; background: #0f0c18; border-radius: 0; }
    .s { position: absolute; inset: 0; opacity: 0; transition: opacity 1.2s ease; }
    .s.on { opacity: 1; }
    .s img { width: 100%; height: 100%; object-fit: cover; transform: scale(1.04); }
    .s.on img { animation: kb var(--dur, 7s) linear forwards; }
    @keyframes kb { from { transform: scale(1.04); } to { transform: scale(1.14) translate(-1.5%, -1%); } }
    .shade { position: absolute; inset: 0; background: linear-gradient(0deg, rgba(10,8,18,var(--o,.55)) 0, rgba(10,8,18,calc(var(--o,.55) * .35)) 55%, transparent 100%); }
    .txt { position: absolute; inset: auto 0 0 0; padding: clamp(24px, 6vw, 80px); display: grid; gap: 14px; justify-items: var(--ji, start); text-align: var(--ta, start); }
    .txt h2 { margin: 0; font-size: clamp(30px, 5.6vw, 72px); line-height: 1.12; font-weight: 800; max-width: 16ch; text-shadow: 0 6px 30px #0008;
      opacity: 0; transform: translateY(18px); transition: all .9s .25s; }
    .txt p { margin: 0; max-width: 46ch; font-size: clamp(15px, 1.8vw, 20px); line-height: 1.8; opacity: 0; transform: translateY(18px); transition: all .9s .45s; color: #f2ecff; }
    .txt .btn { opacity: 0; transform: translateY(18px); transition: all .9s .6s, box-shadow .25s; }
    .s.on .txt h2, .s.on .txt p, .s.on .txt .btn { opacity: 1; transform: none; }
    .bars { position: absolute; z-index: 2; inset: 18px clamp(18px, 4vw, 48px) auto; display: flex; gap: 8px; }
    .bar { flex: 1; height: 3px; border-radius: 3px; background: #fff4; overflow: hidden; cursor: pointer; border: 0; padding: 0; }
    .bar i { display: block; height: 100%; width: 0; background: var(--tf-accent); }
    .bar.done i { width: 100%; } .bar.on i { animation: fill var(--dur, 7s) linear forwards; }
    @keyframes fill { to { width: 100%; } }
    .empty { display: grid; place-items: center; height: 300px; color: var(--tf-mut); background: #0f0c18; border: 1px dashed #c9a45c66; }
  `];
let d = h;
w([
  k({ type: Object })
], d.prototype, "config");
w([
  z()
], d.prototype, "i");
typeof d < "u" && d.registerSallaComponent("salla-tuhfa-hero");
export {
  d as default
};
