const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1920,height:1080}});
await p.goto('file://'+__dirname+'/cover.html');await p.waitForTimeout(2500);
await p.screenshot({path:__dirname+'/cover-1920x1080.jpg',type:'jpeg',quality:90});
await p.setViewportSize({width:512,height:512});await p.goto('file://'+__dirname+'/icon.html');await p.waitForTimeout(2000);await p.screenshot({path:__dirname+'/icon-512.jpg',type:'jpeg',quality:92});
await b.close()})();
