import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { base } from '../../shared/styles';
import { reduced, localizedString } from '../../shared/salla';

interface Review { name?: unknown; city?: unknown; text?: unknown; stars?: number }
interface Badge { emoji?: string; text?: unknown }
/** Trust wall: endless marquee of customer words + computed average + trust badges. */
export default class TuhfaReviews extends LitElement {
  @property({ type: Object }) config?: { title?: unknown; reviews?: Review[]; badges?: Badge[]; dark?: boolean; color?: string };

  static styles = [base, css`
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

  render() {
    const c = this.config ?? {};
    const R = (c.reviews ?? []).filter((r) => localizedString(r?.text));
    const avg = R.length ? R.reduce((s, r) => s + Math.max(1, Math.min(5, Number(r.stars) || 5)), 0) / R.length : 0;
    const card = (r: Review) => { const n = localizedString(r.name) || 'عميل'; const st = Math.max(1, Math.min(5, Math.round(Number(r.stars) || 5)));
      return html`<figure class="r"><span class="stars" aria-label=${`${st} من 5`}>${'★'.repeat(st)}${'☆'.repeat(5 - st)}</span><p>«${localizedString(r.text)}»</p>
        <figcaption class="who"><span class="av">${n.trim()[0]}</span>${n}${localizedString(r.city) ? ` · ${localizedString(r.city)}` : ''}</figcaption></figure>`; };
    const loop = R.length > 2 && !reduced();
    return html`<section class=${c.dark ? 'dark' : ''} style=${c.color ? `--tf-custom:${c.color}` : ''}><div class="wrap">
      <div class="head"><div><span class="eyebrow">✦ ثقة عملائنا</span><h2 class="title">${localizedString(c.title) || 'وش يقولون عنا'}</h2></div>
        ${R.length ? html`<div class="avg"><b>${avg.toFixed(1)}</b><div><div class="stars">★★★★★</div><small>من ${R.length} تقييم مختار</small></div></div>` : ''}</div>
      ${R.length ? html`<div class="rail"><div class="track" style=${`--d:${Math.max(20, R.length * 8)}s;${loop ? '' : 'animation:none;flex-wrap:wrap;width:auto'}`}>${R.map(card)}${loop ? R.map(card) : ''}</div></div>`
        : html`<p class="sub">أضف آراء عملائك من إعدادات العنصر.</p>`}
      ${(c.badges ?? []).length ? html`<div class="badges">${(c.badges ?? []).map((b) => html`<span class="bd">${b.emoji ?? '✓'} ${localizedString(b.text)}</span>`)}</div>` : ''}
    </div></section>`;
  }
}
