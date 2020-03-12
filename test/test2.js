const puppeteer = require('puppeteer');

async ()=>{}

(async () => {
  const browser = await puppeteer.launch({
      "headless": false
  });
  const page = await browser.newPage();
  await page.goto('http://executeautomation.com/demosite/Login.html');
  
  // get name of input
  await page.focus("input[name=UserName]");
  await page.focus("input[name=Password]");
  // use keyboard to type values
  await page.keyboard.type('jeno');
  await page.keyboard.type('jeno');

  await page.click('input[name=Login]');

  await page.waitFor(3000);
  await browser.close();
})();