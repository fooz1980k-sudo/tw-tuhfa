import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { base } from '../../shared/styles';
import { reduced, txt } from '../../shared/salla';

interface Slide { image?: string; title?: unknown; subtitle?: unknown; button?: unknown; link?: string }
/** Cinematic hero: slow Ken-Burns crossfade, progress bars, swipe, pauses on hover/hidden tab. */
export default class TuhfaHero extends LitElement {
  @property({ type: Object }) config?: { slides?: Slide[]; height?: number; seconds?: number; overlay?: number; align?: { value?: string }[] | string; color?: string };
  @state() private i = 0;
  private timer?: number; private x0 = 0;

  static styles = [base, css`
    .hero { position: relative; overflow: hidden; height: var(--h, 78vh); min-height: 420px; max-height: 900px; color: #fff; background: #0f0c18; border-radius: 0; }
    .s { position: absolute; inset: 0; opacity: 0; transition: opacity 1.2s ease; }
    .s.on { opacity: 1; }
    .s img { width: 100%; height: 100%; object-fit: cover; transform: scale(1.04); }
    .s.on img { animation: kb var(--dur, 7s) linear forwards; }
    @keyframes kb { from { transform: scale(1.04); } to { transform: scale(1.14) translate(-1.5%, -1%); } }
    .shade { position: absolute; inset: 0; background: linear-gradient(0deg, rgba(10,8,18,var(--o,.55)) 0, rgba(10,8,18,calc(var(--o,.55) * .35)) 55%, transparent 100%); }
    .txt { position: absolute; inset: auto 0 0 0; padding: clamp(24px, 6vw, 80px); display: grid; gap: 14px; justify-items: var(--ji, start); text-align: var(--ta, start); }
    .txt h2 { margin: 0; font-size: clamp(30px, 5.6vw, 72px); line-height: 1.12; font-weight: 800; max-width: 16ch; text-shadow: 0 6px 30px #0008;
      opacity: 0; transform: translateY(18px); transition: all .9s .25s; }
    .txt p { margin: 0; max-width: 46ch; font-size: clamp(15px, 1.8vw, 20px); line-height: 1.8; opacity: 0; transform: translateY(18px); transition: all .9s .45s; color: #f2ecff; }
    .txt .btn { opacity: 0; transform: translateY(18px); transition: all .9s .6s, box-shadow .25s; }
    .s.on .txt h2, .s.on .txt p, .s.on .txt .btn { opacity: 1; transform: none; }
    .bars { position: absolute; z-index: 2; inset: 18px clamp(18px, 4vw, 48px) auto; display: flex; gap: 8px; }
    .bar { flex: 1; height: 3px; border-radius: 3px; background: #fff4; overflow: hidden; cursor: pointer; border: 0; padding: 0; }
    .bar i { display: block; height: 100%; width: 0; background: var(--tf-accent); }
    .bar.done i { width: 100%; } .bar.on i { animation: fill var(--dur, 7s) linear forwards; }
    @keyframes fill { to { width: 100%; } }
    .empty { display: grid; place-items: center; height: 300px; color: var(--tf-mut); background: #0f0c18; border: 1px dashed #c9a45c66; }
  `];

  connectedCallback() { super.connectedCallback(); this.play(); document.addEventListener('visibilitychange', this.vis); }
  disconnectedCallback() { super.disconnectedCallback(); clearInterval(this.timer); document.removeEventListener('visibilitychange', this.vis); }
  // Config arrives on the first update (after connectedCallback): restart autoplay whenever it changes.
  updated(ch: Map<string, unknown>) { if (ch.has('config')) this.play(); }
  private vis = () => (document.hidden ? clearInterval(this.timer) : this.play());
  private get slides() { return (this.config?.slides ?? []).filter((s) => s?.image); }
  private get secs() { return Math.max(3, Math.min(20, Number(this.config?.seconds) || 7)); }
  private play() { clearInterval(this.timer); if (this.slides.length > 1 && !reduced()) this.timer = window.setInterval(() => this.go(this.i + 1), this.secs * 1000); }
  private go(n: number) { const L = this.slides.length; if (L) { this.i = (n + L) % L; this.play(); } }

  render() {
    const sl = this.slides;
    if (!sl.length) return html`<div class="empty">أضف صور العرض السينمائي من إعدادات العنصر</div>`;
    const a = Array.isArray(this.config?.align) ? this.config?.align?.[0]?.value : this.config?.align;
    const center = a === 'center';
    const style = `--h:${Math.max(50, Math.min(100, Number(this.config?.height) || 78))}vh;--o:${Math.max(0, Math.min(85, Number(this.config?.overlay ?? 55))) / 100};--dur:${this.secs}s;--ji:${center ? 'center' : 'start'};--ta:${center ? 'center' : 'start'};${this.config?.color ? `--tf-custom:${this.config.color}` : ''}`;
    return html`<section class="hero" style=${style} @mouseenter=${() => clearInterval(this.timer)} @mouseleave=${() => this.play()}
      @touchstart=${(e: TouchEvent) => (this.x0 = e.touches[0].clientX)} @touchend=${(e: TouchEvent) => { const d = e.changedTouches[0].clientX - this.x0; if (Math.abs(d) > 40) this.go(this.i + (d < 0 ? 1 : -1)); }}>
      ${sl.map((s, k) => html`<div class="s ${k === this.i ? 'on' : ''}" aria-hidden=${k !== this.i}>
        <img src=${s.image!} alt=${txt(s.title)} loading=${k ? 'lazy' : 'eager'} />
        <div class="shade"></div>
        <div class="txt">${txt(s.title) ? html`<h2>${txt(s.title)}</h2>` : ''}${txt(s.subtitle) ? html`<p>${txt(s.subtitle)}</p>` : ''}
          ${txt(s.button) && s.link ? html`<a class="btn" href=${s.link}>${txt(s.button)} ←</a>` : ''}</div></div>`)}
      ${sl.length > 1 ? html`<div class="bars">${sl.map((_, k) => html`<button class="bar ${k === this.i ? 'on' : k < this.i ? 'done' : ''}" aria-label=${`الشريحة ${k + 1}`} @click=${() => this.go(k)}><i></i></button>`)}</div>` : ''}
    </section>`;
  }
}
