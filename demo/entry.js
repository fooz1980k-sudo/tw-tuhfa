import { LitElement } from 'lit';
// Salla's runtime provides this; the demo stubs it.
LitElement.registerSallaComponent = function (name) { if (!customElements.get(name)) customElements.define(name, this); };
await import('../dist/tuhfa-hero.js'); await import('../dist/tuhfa-smart-products.js'); await import('../dist/tuhfa-countdown.js');
await import('../dist/tuhfa-numbers.js'); await import('../dist/tuhfa-compare.js'); await import('../dist/tuhfa-reviews.js'); await import('../dist/tuhfa-categories.js');
window.__ready = true;
