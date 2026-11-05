import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { base } from '../../shared/styles';
import { reduced, localizedString } from '../../shared/salla';

interface Item { icon?: string; number?: number; suffix?: unknown; label?: unknown }
/** «Our store in numbers»: animated count-up the moment the section scrolls into view. */
export default class TuhfaNumbers extends LitElement {
  @property({ type: Object }) config?: { title?: unknown; subtitle?: unknown; items?: Item[]; light?: boolean; color?: string };
  @state() private k = 0;
  private io?: IntersectionObserver;

  static styles = [base, css`
    .g { display: grid; gap: 16px; grid-template-columns: repeat(auto-fit, minmax(min(200px, 42vw), 1fr)); }
    .it { position: relative; padding: 26px 20px; border-radius: 22px; text-align: center; background: #ffffff08; border: 1px solid #ffffff14; overflow: hidden; }
    .light .it { background: #fff; border-color: #0001; }
    .it::before { content: ''; position: absolute; inset: -40% -40% auto auto; width: 140px; height: 140px; border-radius: 50%; background: var(--tf-accent); opacity: .12; filter: blur(20px); }
    .ic { font-size: 30px; color: var(--tf-accent); }
    .n { display: block; margin: 8px 0 4px; font-size: clamp(32px, 5vw, 52px); font-weight: 800; font-variant-numeric: tabular-nums; background: var(--tf-gold); -webkit-background-clip: text; background-clip: text; color: transparent; }
    .l { font-size: 15px; opacity: .75; }
    .light { background: #faf7f1; color: #1b1408; }
  `];

  firstUpdated() {
    this.io = new IntersectionObserver((e) => { if (e[0].isIntersecting) { this.io?.disconnect(); this.run(); } }, { threshold: .3 });
    this.io.observe(this);
  }
  disconnectedCallback() { super.disconnectedCallback(); this.io?.disconnect(); }
  private run() {
    if (reduced()) { this.k = 1; return; }
    const t0 = performance.now(), D = 1600;
    const f = (t: number) => { this.k = Math.min(1, (t - t0) / D); if (this.k < 1) requestAnimationFrame(f); };
    requestAnimationFrame(f);
  }
  private fmt(n: number) { const v = Math.round(n * (1 - Math.pow(1 - this.k, 3))); return v.toLocaleString('en'); }

  render() {
    const c = this.config ?? {};
    const items = (c.items ?? []).filter((i) => i && (i.number != null || localizedString(i.label)));
    return html`<section class=${c.light ? 'light' : 'dark'} style=${c.color ? `--tf-custom:${c.color}` : ''}><div class="wrap">
      ${localizedString(c.title) ? html`<span class="eyebrow">✦ بالأرقام</span><h2 class="title">${localizedString(c.title)}</h2>` : ''}${localizedString(c.subtitle) ? html`<p class="sub">${localizedString(c.subtitle)}</p>` : ''}
      <div class="g">${items.map((i) => html`<div class="it">${i.icon ? html`<div class="ic" aria-hidden="true">${i.icon}</div>` : ''}
        <span class="n">${this.fmt(Number(i.number) || 0)}${localizedString(i.suffix)}</span><span class="l">${localizedString(i.label)}</span></div>`)}</div>
    </div></section>`;
  }
}
