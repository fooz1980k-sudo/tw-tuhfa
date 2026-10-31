import { css as f, LitElement as m, html as i } from "lit";
import { property as x } from "lit/decorators.js";
const b = f`
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
`, s = (n) => String(n && typeof n == "object" ? n[(document.documentElement.lang || "ar").slice(0, 2)] ?? n.ar ?? "" : n ?? ""), h = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
var u = Object.defineProperty, v = (n, e, t, g) => {
  for (var r = void 0, o = n.length - 1, a; o >= 0; o--)
    (a = n[o]) && (r = a(e, t, r) || r);
  return r && u(e, t, r), r;
};
const l = class l extends m {
  render() {
    const e = this.config ?? {}, t = (e.reviews ?? []).filter((a) => s(a == null ? void 0 : a.text)), g = t.length ? t.reduce((a, d) => a + Math.max(1, Math.min(5, Number(d.stars) || 5)), 0) / t.length : 0, r = (a) => {
      const d = s(a.name) || "عميل", c = Math.max(1, Math.min(5, Math.round(Number(a.stars) || 5)));
      return i`<figure class="r"><span class="stars" aria-label=${`${c} من 5`}>${"★".repeat(c)}${"☆".repeat(5 - c)}</span><p>«${s(a.text)}»</p>
        <figcaption class="who"><span class="av">${d.trim()[0]}</span>${d}${s(a.city) ? ` · ${s(a.city)}` : ""}</figcaption></figure>`;
    }, o = t.length > 2 && !h();
    return i`<section class=${e.dark ? "dark" : ""} style=${e.color ? `--tf-custom:${e.color}` : ""}><div class="wrap">
      <div class="head"><div><span class="eyebrow">✦ ثقة عملائنا</span><h2 class="title">${s(e.title) || "وش يقولون عنا"}</h2></div>
        ${t.length ? i`<div class="avg"><b>${g.toFixed(1)}</b><div><div class="stars">★★★★★</div><small>من ${t.length} تقييم مختار</small></div></div>` : ""}</div>
      ${t.length ? i`<div class="rail"><div class="track" style=${`--d:${Math.max(20, t.length * 8)}s;${o ? "" : "animation:none;flex-wrap:wrap;width:auto"}`}>${t.map(r)}${o ? t.map(r) : ""}</div></div>` : i`<p class="sub">أضف آراء عملائك من إعدادات العنصر.</p>`}
      ${(e.badges ?? []).length ? i`<div class="badges">${(e.badges ?? []).map((a) => i`<span class="bd">${a.emoji ?? "✓"} ${s(a.text)}</span>`)}</div>` : ""}
    </div></section>`;
  }
};
l.styles = [b, f`
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
let p = l;
v([
  x({ type: Object })
], p.prototype, "config");
typeof p < "u" && p.registerSallaComponent("salla-tuhfa-reviews");
export {
  p as default
};
