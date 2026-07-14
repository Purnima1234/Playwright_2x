import {test, expect} from '@playwright/test';

test("goto with different wait until options", async ({page}) => {

    await page.goto("https://app.vwo.com", {waitUntil: 'commit'});
    console.log("commit");

    // wait for HTML to be Parsed
     await page.goto("https://app.vwo.com", {waitUntil: 'domcontentloaded'});

     //default wait for every thing (images, css, js, fonts, etc)
  
     await page.goto("https://app.vwo.com", {waitUntil: 'load'});

       //slowest wait for all netwrok activity to be stopped
  
     await page.goto("https://app.vwo.com", {waitUntil: 'networkidle'});
});