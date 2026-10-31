const { chromium } = require('playwright'); const path = require('path');
(async () => { const b = await chromium.launch(); const errs = [];
  for (const [w, h, tag] of [[1440, 900, 'd'], [390, 844, 'm']]) {
    const p = await b.newPage({ viewport: { width: w, height: h } }); p.on('pageerror', e => errs.push(e.message)); p.on('console', m => m.type() === 'error' && errs.push(m.text()));
    await p.goto('http://localhost:8811/index.html'); await p.waitForFunction(() => window.__ready); await p.waitForTimeout(2500);
    for (const id of ['hero', 'sp', 'cd', 'nu', 'cmp', 'rv', 'cat']) { const el = await p.$('#' + id); await el.scrollIntoViewIfNeeded(); await p.waitForTimeout(id === 'nu' ? 1900 : 700); await el.screenshot({ path: `shots/${tag}-${id}.png` }); }
    await p.close(); }
  console.log('errors:', errs); await b.close(); })();
