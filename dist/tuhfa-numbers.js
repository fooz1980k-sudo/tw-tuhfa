import { css as f, LitElement as g, html as c } from "lit";
import { property as m, state as b } from "lit/decorators.js";
const h = f`
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
`, d = () => window.Salla, x = () => {
  var n, t, r, e, i;
  try {
    const a = ((t = (n = d()) == null ? void 0 : n.lang) == null ? void 0 : t.locale) ?? ((i = (e = (r = d()) == null ? void 0 : r.config) == null ? void 0 : e.get) == null ? void 0 : i.call(e, "user.language_code"));
    if (typeof a == "string" && a) return a.slice(0, 2);
  } catch {
  }
  return (document.documentElement.lang || "ar").slice(0, 2);
}, o = (n) => {
  if (n == null) return "";
  if (typeof n == "string") {
    const t = n.trim();
    if (t.startsWith("{") && t.endsWith("}"))
      try {
        return o(JSON.parse(t));
      } catch {
      }
    return n;
  }
  if (typeof n == "number" || typeof n == "boolean") return String(n);
  if (typeof n == "object") {
    const t = n, r = t[x()] ?? t.ar ?? t.en ?? Object.values(t).find((e) => typeof e == "string" && e);
    return typeof r == "string" ? r : "";
  }
  return "";
}, k = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
var y = Object.defineProperty, u = (n, t, r, e) => {
  for (var i = void 0, a = n.length - 1, p; a >= 0; a--)
    (p = n[a]) && (i = p(t, r, i) || i);
  return i && y(t, r, i), i;
};
const l = class l extends g {
  constructor() {
    super(...arguments), this.k = 0;
  }
  firstUpdated() {
    this.io = new IntersectionObserver((t) => {
      var r;
      t[0].isIntersecting && ((r = this.io) == null || r.disconnect(), this.run());
    }, { threshold: 0.3 }), this.io.observe(this);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this.io) == null || t.disconnect();
  }
  run() {
    if (k()) {
      this.k = 1;
      return;
    }
    const t = performance.now(), r = 1600, e = (i) => {
      this.k = Math.min(1, (i - t) / r), this.k < 1 && requestAnimationFrame(e);
    };
    requestAnimationFrame(e);
  }
  fmt(t) {
    return Math.round(t * (1 - Math.pow(1 - this.k, 3))).toLocaleString("en");
  }
  render() {
    const t = this.config ?? {}, r = (t.items ?? []).filter((e) => e && (e.number != null || o(e.label)));
    return c`<section class=${t.light ? "light" : "dark"} style=${t.color ? `--tf-custom:${t.color}` : ""}><div class="wrap">
      ${o(t.title) ? c`<span class="eyebrow">✦ بالأرقام</span><h2 class="title">${o(t.title)}</h2>` : ""}${o(t.subtitle) ? c`<p class="sub">${o(t.subtitle)}</p>` : ""}
      <div class="g">${r.map((e) => c`<div class="it">${e.icon ? c`<div class="ic" aria-hidden="true">${e.icon}</div>` : ""}
        <span class="n">${this.fmt(Number(e.number) || 0)}${o(e.suffix)}</span><span class="l">${o(e.label)}</span></div>`)}</div>
    </div></section>`;
  }
};
l.styles = [h, f`
    .g { display: grid; gap: 16px; grid-template-columns: repeat(auto-fit, minmax(min(200px, 42vw), 1fr)); }
    .it { position: relative; padding: 26px 20px; border-radius: 22px; text-align: center; background: #ffffff08; border: 1px solid #ffffff14; overflow: hidden; }
    .light .it { background: #fff; border-color: #0001; }
    .it::before { content: ''; position: absolute; inset: -40% -40% auto auto; width: 140px; height: 140px; border-radius: 50%; background: var(--tf-accent); opacity: .12; filter: blur(20px); }
    .ic { font-size: 30px; color: var(--tf-accent); }
    .n { display: block; margin: 8px 0 4px; font-size: clamp(32px, 5vw, 52px); font-weight: 800; font-variant-numeric: tabular-nums; background: var(--tf-gold); -webkit-background-clip: text; background-clip: text; color: transparent; }
    .l { font-size: 15px; opacity: .75; }
    .light { background: #faf7f1; color: #1b1408; }
  `];
let s = l;
u([
  m({ type: Object })
], s.prototype, "config");
u([
  b()
], s.prototype, "k");
typeof s < "u" && s.registerSallaComponent("salla-tuhfa-numbers");
export {
  s as default
};
