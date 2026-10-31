import { css as v, LitElement as $, html as s } from "lit";
import { property as w, state as k } from "lit/decorators.js";
const z = v`
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
`, o = (r) => String(r && typeof r == "object" ? r[(document.documentElement.lang || "ar").slice(0, 2)] ?? r.ar ?? "" : r ?? ""), M = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
var j = Object.defineProperty, y = (r, t, e, h) => {
  for (var n = void 0, c = r.length - 1, d; c >= 0; c--)
    (d = r[c]) && (n = d(t, e, n) || n);
  return n && j(t, e, n), n;
};
const p = class p extends $ {
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
    return (((t = this.config) == null ? void 0 : t.slides) ?? []).filter((e) => e == null ? void 0 : e.image);
  }
  get secs() {
    var t;
    return Math.max(3, Math.min(20, Number((t = this.config) == null ? void 0 : t.seconds) || 7));
  }
  play() {
    clearInterval(this.timer), this.slides.length > 1 && !M() && (this.timer = window.setInterval(() => this.go(this.i + 1), this.secs * 1e3));
  }
  go(t) {
    const e = this.slides.length;
    e && (this.i = (t + e) % e, this.play());
  }
  render() {
    var c, d, f, g, m, x, b, u;
    const t = this.slides;
    if (!t.length) return s`<div class="empty">أضف صور العرض السينمائي من إعدادات العنصر</div>`;
    const h = (Array.isArray((c = this.config) == null ? void 0 : c.align) ? (g = (f = (d = this.config) == null ? void 0 : d.align) == null ? void 0 : f[0]) == null ? void 0 : g.value : (m = this.config) == null ? void 0 : m.align) === "center", n = `--h:${Math.max(50, Math.min(100, Number((x = this.config) == null ? void 0 : x.height) || 78))}vh;--o:${Math.max(0, Math.min(85, Number(((b = this.config) == null ? void 0 : b.overlay) ?? 55))) / 100};--dur:${this.secs}s;--ji:${h ? "center" : "start"};--ta:${h ? "center" : "start"};${(u = this.config) != null && u.color ? `--tf-custom:${this.config.color}` : ""}`;
    return s`<section class="hero" style=${n} @mouseenter=${() => clearInterval(this.timer)} @mouseleave=${() => this.play()}
      @touchstart=${(i) => this.x0 = i.touches[0].clientX} @touchend=${(i) => {
      const a = i.changedTouches[0].clientX - this.x0;
      Math.abs(a) > 40 && this.go(this.i + (a < 0 ? 1 : -1));
    }}>
      ${t.map((i, a) => s`<div class="s ${a === this.i ? "on" : ""}" aria-hidden=${a !== this.i}>
        <img src=${i.image} alt=${o(i.title)} loading=${a ? "lazy" : "eager"} />
        <div class="shade"></div>
        <div class="txt">${o(i.title) ? s`<h2>${o(i.title)}</h2>` : ""}${o(i.subtitle) ? s`<p>${o(i.subtitle)}</p>` : ""}
          ${o(i.button) && i.link ? s`<a class="btn" href=${i.link}>${o(i.button)} ←</a>` : ""}</div></div>`)}
      ${t.length > 1 ? s`<div class="bars">${t.map((i, a) => s`<button class="bar ${a === this.i ? "on" : a < this.i ? "done" : ""}" aria-label=${`الشريحة ${a + 1}`} @click=${() => this.go(a)}><i></i></button>`)}</div>` : ""}
    </section>`;
  }
};
p.styles = [z, v`
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
let l = p;
y([
  w({ type: Object })
], l.prototype, "config");
y([
  k()
], l.prototype, "i");
typeof l < "u" && l.registerSallaComponent("salla-tuhfa-hero");
export {
  l as default
};
