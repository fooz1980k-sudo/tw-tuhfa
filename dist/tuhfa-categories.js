import { css as f, LitElement as g, html as s } from "lit";
import { property as m } from "lit/decorators.js";
const u = f`
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
`, d = () => window.Salla, b = () => {
  var a, t, i, e, n;
  try {
    const o = ((t = (a = d()) == null ? void 0 : a.lang) == null ? void 0 : t.locale) ?? ((n = (e = (i = d()) == null ? void 0 : i.config) == null ? void 0 : e.get) == null ? void 0 : n.call(e, "user.language_code"));
    if (typeof o == "string" && o) return o.slice(0, 2);
  } catch {
  }
  return (document.documentElement.lang || "ar").slice(0, 2);
}, r = (a) => {
  if (a == null) return "";
  if (typeof a == "string") {
    const t = a.trim();
    if (t.startsWith("{") && t.endsWith("}"))
      try {
        return r(JSON.parse(t));
      } catch {
      }
    return a;
  }
  if (typeof a == "number" || typeof a == "boolean") return String(a);
  if (typeof a == "object") {
    const t = a, i = t[b()] ?? t.ar ?? t.en ?? Object.values(t).find((e) => typeof e == "string" && e);
    return typeof i == "string" ? i : "";
  }
  return "";
};
var x = Object.defineProperty, h = (a, t, i, e) => {
  for (var n = void 0, o = a.length - 1, p; o >= 0; o--)
    (p = a[o]) && (n = p(t, i, n) || n);
  return n && x(t, i, n), n;
};
const l = class l extends g {
  render() {
    const t = this.config ?? {}, i = (t.tiles ?? []).filter((e) => e == null ? void 0 : e.image);
    return s`<section style=${t.color ? `--tf-custom:${t.color}` : ""}><div class="wrap">
      ${r(t.title) ? s`<span class="eyebrow">✦ تسوّق حسب القسم</span><h2 class="title">${r(t.title)}</h2>` : ""}${r(t.subtitle) ? s`<p class="sub">${r(t.subtitle)}</p>` : ""}
      ${i.length ? s`<div class="g">${i.map((e) => s`<a href=${e.link || "#"}><img src=${e.image} alt=${r(e.title)} loading="lazy" />
        <span class="cap"><span class="line"></span><b>${r(e.title)}</b>${r(e.caption) ? s`<small>${r(e.caption)} ←</small>` : ""}</span></a>`)}</div>` : s`<p class="sub">أضف صور الأقسام من إعدادات العنصر.</p>`}
    </div></section>`;
  }
};
l.styles = [u, f`
    .g { display: grid; gap: 14px; grid-template-columns: repeat(4, 1fr); grid-auto-rows: clamp(150px, 20vw, 240px); }
    .g a:nth-child(6n+1) { grid-column: span 2; grid-row: span 2; } .g a:nth-child(6n+4) { grid-column: span 2; }
    @media (max-width: 760px) { .g { grid-template-columns: 1fr 1fr; } .g a:nth-child(6n+4) { grid-column: span 2; } }
    a { position: relative; overflow: hidden; border-radius: 22px; color: #fff; text-decoration: none; background: #0f0c18; isolation: isolate; }
    img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 1.2s cubic-bezier(.2,.7,.2,1); z-index: -1; }
    a::after { content: ''; position: absolute; inset: 0; background: linear-gradient(0deg, #0f0c18e6, transparent 60%); z-index: -1; transition: opacity .5s; }
    a:hover img, a:focus-visible img { transform: scale(1.1); }
    .cap { position: absolute; inset: auto 0 0; padding: 18px; display: grid; gap: 4px; }
    .cap b { font-size: clamp(16px, 2vw, 24px); } .cap small { opacity: 0; transform: translateY(8px); transition: all .5s; color: #f5d68a; }
    a:hover .cap small, a:focus-visible .cap small { opacity: 1; transform: none; }
    .line { width: 0; height: 2px; background: var(--tf-accent); transition: width .5s; } a:hover .line, a:focus-visible .line { width: 48px; }
  `];
let c = l;
h([
  m({ type: Object })
], c.prototype, "config");
typeof c < "u" && c.registerSallaComponent("salla-tuhfa-categories");
export {
  c as default
};
