const puppeteer = require('puppeteer');
const url = 'https://projectstream.google.com/speedtest';
const timeout = 300000; // 5 minutes in milliseconds 
const tries = 60;

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const viewPort={width:1280, height:720};
  await page.setViewport(viewPort);
  await page.setDefaultTimeout(90000)
  await page.goto(url);

  for(var i=0;i<tries;i++){
    var [button] = await page.$x("//*[contains(text(),'CHECK NOW')]");
    if (button) {
      await button.click();
    } 
    await page.waitForXPath("//*[contains(text(),'About your result.')]"); 
    var [speedString] = await page.evaluate(() => Array.from(document.querySelectorAll('strong'), element => element.textContent));
    var stringToPrint = new Date().toLocaleTimeString() + ' Your speed is: ' + speedString;
    if(parseFloat(speedString.split(' ')[0]) < 35.0){
      stringToPrint+=" WARNING: 35 Mbps requred to play 4k!"
    }
    await console.log(stringToPrint);
    await page.reload();
    await sleep(timeout)
  }
  
  await browser.close();
})();

function sleep(ms){
  return new Promise(resolve=>{
      setTimeout(resolve,ms)
  })
}