import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { base } from '../../shared/styles';
import { txt } from '../../shared/salla';

interface Tile { image?: string; title?: unknown; caption?: unknown; link?: string }
/** Editorial category tiles: asymmetric luxury grid, slow zoom + reveal on hover/focus. */
export default class TuhfaCategories extends LitElement {
  @property({ type: Object }) config?: { title?: unknown; subtitle?: unknown; tiles?: Tile[]; color?: string };

  static styles = [base, css`
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

  render() {
    const c = this.config ?? {}; const T = (c.tiles ?? []).filter((t) => t?.image);
    return html`<section style=${c.color ? `--tf-custom:${c.color}` : ''}><div class="wrap">
      ${txt(c.title) ? html`<span class="eyebrow">✦ تسوّق حسب القسم</span><h2 class="title">${txt(c.title)}</h2>` : ''}${txt(c.subtitle) ? html`<p class="sub">${txt(c.subtitle)}</p>` : ''}
      ${T.length ? html`<div class="g">${T.map((t) => html`<a href=${t.link || '#'}><img src=${t.image!} alt=${txt(t.title)} loading="lazy" />
        <span class="cap"><span class="line"></span><b>${txt(t.title)}</b>${txt(t.caption) ? html`<small>${txt(t.caption)} ←</small>` : ''}</span></a>`)}</div>`
        : html`<p class="sub">أضف صور الأقسام من إعدادات العنصر.</p>`}
    </div></section>`;
  }
}
