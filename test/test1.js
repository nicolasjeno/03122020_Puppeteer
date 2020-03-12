const puppeteer = require('puppeteer');

async ()=>{}

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.com');
  await page.screenshot({path: 'example.png'});
  // other actions...
  await browser.close();
})();