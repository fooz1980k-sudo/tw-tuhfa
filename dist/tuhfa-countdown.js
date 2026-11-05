import { css as g, LitElement as m, html as o } from "lit";
import { property as x, state as b } from "lit/decorators.js";
const v = g`
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
`, p = () => window.Salla;
function y(i) {
  var t, e;
  try {
    (e = (t = p()) == null ? void 0 : t.success) == null || e.call(t, i);
  } catch {
  }
}
const k = () => {
  var i, t, e, n, r;
  try {
    const a = ((t = (i = p()) == null ? void 0 : i.lang) == null ? void 0 : t.locale) ?? ((r = (n = (e = p()) == null ? void 0 : e.config) == null ? void 0 : n.get) == null ? void 0 : r.call(n, "user.language_code"));
    if (typeof a == "string" && a) return a.slice(0, 2);
  } catch {
  }
  return (document.documentElement.lang || "ar").slice(0, 2);
}, c = (i) => {
  if (i == null) return "";
  if (typeof i == "string") {
    const t = i.trim();
    if (t.startsWith("{") && t.endsWith("}"))
      try {
        return c(JSON.parse(t));
      } catch {
      }
    return i;
  }
  if (typeof i == "number" || typeof i == "boolean") return String(i);
  if (typeof i == "object") {
    const t = i, e = t[k()] ?? t.ar ?? t.en ?? Object.values(t).find((n) => typeof n == "string" && n);
    return typeof e == "string" ? e : "";
  }
  return "";
};
var w = Object.defineProperty, f = (i, t, e, n) => {
  for (var r = void 0, a = i.length - 1, l; a >= 0; a--)
    (l = i[a]) && (r = l(t, e, r) || r);
  return r && w(t, e, r), r;
};
const u = class u extends m {
  constructor() {
    super(...arguments), this.left = 0, this.copied = !1;
  }
  connectedCallback() {
    super.connectedCallback(), this.tick(), this.timer = window.setInterval(() => this.tick(), 1e3);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), clearInterval(this.timer);
  }
  end() {
    var e;
    const t = Date.parse(((e = this.config) == null ? void 0 : e.end) ?? "");
    return Number.isFinite(t) ? t : 0;
  }
  tick() {
    var t;
    this.left = Math.max(0, Math.floor((this.end() - Date.now()) / 1e3)), !this.left && ((t = this.config) == null ? void 0 : t.hide_after) !== !1 && this.end() && (this.hidden = !0, clearInterval(this.timer));
  }
  async copy() {
    var e;
    const t = ((e = this.config) == null ? void 0 : e.coupon) ?? "";
    try {
      await navigator.clipboard.writeText(t);
    } catch {
    }
    this.copied = !0, y(`تم نسخ الكود ${t}`), setTimeout(() => this.copied = !1, 1800);
  }
  render() {
    const t = this.config ?? {};
    if (!this.end()) return o`<div class="wrap"><p class="sub">حدد تاريخ ونهاية العرض من إعدادات العنصر.</p></div>`;
    const e = this.left, n = Math.floor(e / 86400), r = Math.floor(e % 86400 / 3600), a = Math.floor(e % 3600 / 60), l = e % 60, d = (h) => String(h).padStart(2, "0");
    return o`<div class="wrap"><div class="box dark ${e ? "" : "ended"}" style=${t.color ? `--tf-custom:${t.color}` : ""}>
      <div class="in"><span class="eyebrow">⏳ عرض لفترة محدودة</span>
        <h2 class="title">${c(t.title) || "عرض خاص"}</h2>${c(t.subtitle) ? o`<p class="sub" style="margin:0">${c(t.subtitle)}</p>` : ""}
        ${e ? o`<div class="clock ${e < 3600 ? "urgent" : ""}" role="timer" aria-label="الوقت المتبقي">${n ? o`<div class="u"><b>${n}</b><span>يوم</span></div>` : ""}
          <div class="u"><b>${d(r)}</b><span>ساعة</span></div><div class="u"><b>${d(a)}</b><span>دقيقة</span></div><div class="u"><b>${d(l)}</b><span>ثانية</span></div></div>` : o`<b>انتهى العرض</b>`}
        ${t.coupon && e ? o`<button class="cp" @click=${this.copy}>الكود <code>${t.coupon}</code> <small>${this.copied ? "تم النسخ ✓" : "اضغط للنسخ"}</small></button>` : ""}
        ${c(t.button) && t.link && e ? o`<a class="btn" href=${t.link}>${c(t.button)} ←</a>` : ""}</div>
      ${t.image ? o`<div class="media"><img src=${t.image} alt="" loading="lazy" /></div>` : ""}
    </div></div>`;
  }
};
u.styles = [v, g`
    .box { position: relative; overflow: hidden; border-radius: 26px; display: grid; grid-template-columns: 1.1fr .9fr; min-height: 340px; }
    @media (max-width: 760px) { .box { grid-template-columns: 1fr; } .media { height: 220px; order: -1; } }
    .media { position: relative; } .media img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
    .media::after { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, #0f0c18 0, transparent 40%); }
    :host-context([dir=ltr]) .media::after { background: linear-gradient(270deg, #0f0c18 0, transparent 40%); }
    .in { padding: clamp(24px, 4vw, 48px); display: grid; gap: 16px; align-content: center; position: relative; z-index: 1; }
    .clock { display: flex; gap: 10px; direction: ltr; justify-content: flex-end; } :host-context([dir=ltr]) .clock { justify-content: flex-start; }
    .u { min-width: 72px; padding: 12px 6px; border-radius: 16px; text-align: center; background: #ffffff0f; border: 1px solid #ffffff1f; }
    .u b { display: block; font-size: clamp(26px, 4vw, 38px); font-variant-numeric: tabular-nums; background: var(--tf-gold); -webkit-background-clip: text; background-clip: text; color: transparent; }
    .u span { font-size: 12px; color: var(--tf-mut); }
    .urgent .u { border-color: #e5484d88; animation: pulse 1.2s infinite; } @keyframes pulse { 50% { box-shadow: 0 0 0 6px #e5484d22; } }
    .cp { display: inline-flex; gap: 10px; align-items: center; border: 1px dashed var(--tf-accent); border-radius: 14px; padding: 10px 14px; background: transparent; color: inherit; font: inherit; cursor: pointer; width: fit-content; }
    .cp code { font-size: 20px; letter-spacing: .15em; font-weight: 800; direction: ltr; }
    .ended { opacity: .8; }
  `];
let s = u;
f([
  x({ type: Object })
], s.prototype, "config");
f([
  b()
], s.prototype, "left");
f([
  b()
], s.prototype, "copied");
typeof s < "u" && s.registerSallaComponent("salla-tuhfa-countdown");
export {
  s as default
};
