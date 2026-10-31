import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { base } from '../../shared/styles';
import { toast, txt } from '../../shared/salla';

/** Luxury offer banner with a live countdown and one-tap coupon copy. Hides itself when the offer ends. */
export default class TuhfaCountdown extends LitElement {
  @property({ type: Object }) config?: { title?: unknown; subtitle?: unknown; end?: string; coupon?: string; image?: string; button?: unknown; link?: string; color?: string; hide_after?: boolean };
  @state() private left = 0;
  @state() private copied = false;
  private timer?: number;

  static styles = [base, css`
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

  connectedCallback() { super.connectedCallback(); this.tick(); this.timer = window.setInterval(() => this.tick(), 1000); }
  disconnectedCallback() { super.disconnectedCallback(); clearInterval(this.timer); }
  private end() { const t = Date.parse(this.config?.end ?? ''); return Number.isFinite(t) ? t : 0; }
  private tick() { this.left = Math.max(0, Math.floor((this.end() - Date.now()) / 1000)); if (!this.left && this.config?.hide_after !== false && this.end()) { this.hidden = true; clearInterval(this.timer); } }
  private async copy() { const c = this.config?.coupon ?? ''; try { await navigator.clipboard.writeText(c); } catch { /* old browsers */ } this.copied = true; toast(`تم نسخ الكود ${c}`); setTimeout(() => (this.copied = false), 1800); }

  render() {
    const c = this.config ?? {};
    if (!this.end()) return html`<div class="wrap"><p class="sub">حدد تاريخ ونهاية العرض من إعدادات العنصر.</p></div>`;
    const s = this.left, d = Math.floor(s / 86400), h = Math.floor((s % 86400) / 3600), m = Math.floor((s % 3600) / 60), x = s % 60;
    const p = (n: number) => String(n).padStart(2, '0');
    return html`<div class="wrap"><div class="box dark ${s ? '' : 'ended'}" style=${c.color ? `--tf-custom:${c.color}` : ''}>
      <div class="in"><span class="eyebrow">⏳ عرض لفترة محدودة</span>
        <h2 class="title">${txt(c.title) || 'عرض خاص'}</h2>${txt(c.subtitle) ? html`<p class="sub" style="margin:0">${txt(c.subtitle)}</p>` : ''}
        ${s ? html`<div class="clock ${s < 3600 ? 'urgent' : ''}" role="timer" aria-label="الوقت المتبقي">${d ? html`<div class="u"><b>${d}</b><span>يوم</span></div>` : ''}
          <div class="u"><b>${p(h)}</b><span>ساعة</span></div><div class="u"><b>${p(m)}</b><span>دقيقة</span></div><div class="u"><b>${p(x)}</b><span>ثانية</span></div></div>`
          : html`<b>انتهى العرض</b>`}
        ${c.coupon && s ? html`<button class="cp" @click=${this.copy}>الكود <code>${c.coupon}</code> <small>${this.copied ? 'تم النسخ ✓' : 'اضغط للنسخ'}</small></button>` : ''}
        ${txt(c.button) && c.link && s ? html`<a class="btn" href=${c.link}>${txt(c.button)} ←</a>` : ''}</div>
      ${c.image ? html`<div class="media"><img src=${c.image} alt="" loading="lazy" /></div>` : ''}
    </div></div>`;
  }
}
