import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { base } from '../../shared/styles';
import { addToCart, money, products, toast, localizedString, type Prod } from '../../shared/salla';

/** Products that sell themselves: live data from the store + automatic smart badges. */
export default class TuhfaSmartProducts extends LitElement {
  @property({ type: Object }) config?: { title?: unknown; subtitle?: unknown; products?: unknown; dark?: boolean; color?: string };
  @state() private list: Prod[] | null = null;
  @state() private busy = 0;

  static styles = [base, css`
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

  // Load when the merchant's config arrives (Lit applies it on first update, after connectedCallback) and whenever it changes.
  private seq = 0;
  willUpdate(ch: Map<string, unknown>) { if (ch.has('config')) { const n = ++this.seq; this.list = null; products(this.config?.products).then((l) => { if (n === this.seq) this.list = l; }); } }

  private badges(p: Prod, all: Prod[]) {
    const out: [string, string][] = [];
    const off = p.regular > p.price ? Math.round((1 - p.price / p.regular) * 100) : 0;
    if (off >= 5) out.push([`خصم ${off}٪`, 'hot']);
    if (p.qty != null && p.qty > 0 && p.qty <= 5) out.push([`آخر ${p.qty} قطع`, '']);
    const best = all.reduce((m, x) => (x.rating * Math.log2(2 + x.ratingCount) > m.rating * Math.log2(2 + m.ratingCount) ? x : m), all[0]);
    if (best === p && p.rating >= 4) out.push(['الأعلى تقييماً', 'gold']);
    const saver = all.reduce((m, x) => (x.regular - x.price > m.regular - m.price ? x : m), all[0]);
    if (saver === p && p.regular - p.price > 0 && !out.some((b) => b[1] === 'gold')) out.push(['الأوفر', 'gold']);
    if (!p.available) out.unshift(['نفد', '']);
    return out.slice(0, 3);
  }
  private async add(p: Prod) { this.busy = p.id; await addToCart(p.id); this.busy = 0; toast(`انضاف «${p.name}» للسلة`); }

  render() {
    const c = this.config ?? {};
    const L = this.list;
    return html`<section class=${c.dark ? 'dark' : ''} style=${c.color ? `--tf-custom:${c.color}` : ''}><div class="wrap">
      ${localizedString(c.title) ? html`<span class="eyebrow">✦ مختارات</span><h2 class="title">${localizedString(c.title)}</h2>` : ''}${localizedString(c.subtitle) ? html`<p class="sub">${localizedString(c.subtitle)}</p>` : ''}
      <div class="grid">${L == null ? [1, 2, 3, 4].map(() => html`<div class="skel" style="aspect-ratio:.72"></div>`)
        : !L.length ? html`<p class="sub">اختر المنتجات من إعدادات العنصر.</p>`
        : L.map((p) => html`<article class="c">
          <a class="img" href=${p.url}><img src=${p.image} alt=${p.name} loading="lazy" /></a>
          <div class="badges">${this.badges(p, L).map(([t, k]) => html`<span class="b ${k}">${t}</span>`)}</div>
          <div class="body"><a class="n" href=${p.url}>${p.name}</a>
            ${p.rating ? html`<span class="stars">${'★'.repeat(Math.round(p.rating))}${'☆'.repeat(5 - Math.round(p.rating))} <small>(${p.ratingCount})</small></span>` : ''}
            <div class="p"><b>${money(p.price)}</b>${p.regular > p.price ? html`<s>${money(p.regular)}</s><span class="save">وفّر ${money(Math.round((p.regular - p.price) * 100) / 100)}</span>` : ''}</div>
            <button class="btn" ?disabled=${!p.available || this.busy === p.id} @click=${() => this.add(p)}>${this.busy === p.id ? '...' : p.available ? 'أضف للسلة' : 'غير متوفر'}</button></div>
        </article>`)}</div></div></section>`;
  }
}
