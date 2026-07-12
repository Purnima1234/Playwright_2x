import {chromium, Browser,BrowserContext, Page} from 'playwright';

async function run() {
// launch the browser
 let browser: Browser= await chromium.launch();
 console.log("Browser launched successfully");

//open browser context

let context1: BrowserContext= await browser.newContext();
let context2: BrowserContext= await browser.newContext();
console.log("Browser context created successfully");

//open new page

let page: Page= await context1.newPage();
console.log("New page opened successfully");

//navigate .to the URL
await page.goto("https://app.vwo.com");
console.log("Navigated to the URL successfully");

//cleanup
await page.close();
await context1.close();
await context2.close();
await browser.close();


}

run();