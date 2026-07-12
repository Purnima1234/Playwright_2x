import {chromium} from 'playwright';

async function multiplePages() {
    let browser= await chromium.launch({headless:false});
    let context= await browser.newContext();

    //Tab1
    let page1= await context.newPage();
    await page1.goto("https://app.vwo.com");
    console.log("Page1 title: "+ await page1.title());

    //Tab2
    let page2= await context.newPage();
    await page2.goto("https://app.vwo.com");
    console.log("Page2 title: "+ await page2.title());

    await browser.close();
}

multiplePages();
