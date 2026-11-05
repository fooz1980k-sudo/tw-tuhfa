import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { base } from '../../shared/styles';
import { addToCart, money, products, toast, localizedString, type Prod } from '../../shared/salla';

/** «Compare before you buy»: 2–4 products side by side, the smart pick highlighted automatically. */
export default class TuhfaCompare extends LitElement {
  @property({ type: Object }) config?: { title?: unknown; subtitle?: unknown; products?: unknown; dark?: boolean; color?: string };
  @state() private list: Prod[] | null = null;

  static styles = [base, css`
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

  // Load when the merchant's config arrives (Lit applies it on first update, after connectedCallback) and whenever it changes.
  private seq = 0;
  willUpdate(ch: Map<string, unknown>) { if (ch.has('config')) { const n = ++this.seq; this.list = null; products(this.config?.products).then((l) => { if (n === this.seq) this.list = l.slice(0, 4); }); } }

  render() {
    const c = this.config ?? {}; const L = this.list;
    if (L && L.length < 2) return html`<div class="wrap"><p class="sub">اختر منتجين على الأقل للمقارنة من إعدادات العنصر.</p></div>`;
    const cheapest = L ? Math.min(...L.map((p) => p.price)) : 0;
    const topRated = L ? Math.max(...L.map((p) => p.rating)) : 0;
    const save = (p: Prod) => p.regular - p.price;
    // Smart pick: best rating-per-riyal among available products.
    const win = L?.filter((p) => p.available).reduce<Prod | null>((m, p) => (!m || (p.rating || 3) / Math.max(1, p.price) > (m.rating || 3) / Math.max(1, m.price) ? p : m), null);
    return html`<section class=${c.dark ? 'dark' : ''} style=${c.color ? `--tf-custom:${c.color}` : ''}><div class="wrap">
      <span class="eyebrow">⚖️ قارن قبل ما تشتري</span><h2 class="title">${localizedString(c.title) || 'أيهم يناسبك؟'}</h2>${localizedString(c.subtitle) ? html`<p class="sub">${localizedString(c.subtitle)}</p>` : ''}
      ${L == null ? html`<div class="skel" style="height:420px"></div>` : html`<div class="t" style=${`--n:${L.length}`}>${L.map((p) => html`
        <article class="col ${p === win ? 'win' : ''}">${p === win ? html`<span class="crown">👑 الاختيار الذكي</span>` : ''}
          <img src=${p.image} alt=${p.name} loading="lazy" /><h3>${p.name}</h3>
          <dl><div><dt>السعر</dt><dd class=${p.price === cheapest ? 'best' : ''}>${money(p.price)}${p.price === cheapest ? ' ✓' : ''}</dd></div>
            <div><dt>التوفير</dt><dd>${save(p) > 0 ? money(Math.round(save(p) * 100) / 100) : '—'}</dd></div>
            <div><dt>التقييم</dt><dd class=${p.rating && p.rating === topRated ? 'best' : ''}>${p.rating ? `${p.rating.toFixed(1)} ★ (${p.ratingCount})` : '—'}</dd></div>
            <div><dt>التوفر</dt><dd>${!p.available ? 'نفد' : p.qty != null && p.qty <= 5 ? `آخر ${p.qty}` : 'متوفر'}</dd></div></dl>
          <button class="btn ${p === win ? '' : 'ghost'}" ?disabled=${!p.available} @click=${async () => { await addToCart(p.id); toast(`انضاف «${p.name}» للسلة`); }}>أضف للسلة</button>
        </article>`)}</div>`}
    </div></section>`;
  }
}
