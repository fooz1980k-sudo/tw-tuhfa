const { chromium } = require('playwright');
(async () => { const b = await chromium.launch(); const p = await b.newPage(); p.on('console', m => console.log('C', m.text())); p.on('pageerror', e => console.log('E', e.message));
  await p.goto('http://localhost:8811/index.html'); await p.waitForFunction(() => window.__ready); await p.waitForTimeout(1500);
  console.log(await p.evaluate(async () => { const el = document.getElementById('sp'); return JSON.stringify({ cfg: !!el.config, own: Object.prototype.hasOwnProperty.call(el, 'config'), list: el.list && el.list.length, d: await Salla.product.api.getDetails(1).then(r => r.data.name) }); }));
  await b.close(); })();
