import {chromium} from 'playwright';
async function savesession() {

    let browser= await chromium.launch({headless:false});
    let context= await browser.newContext();
    let page= await context.newPage();

    await page.goto("https://app.vwo.com");
    await page.waitForTimeout(5000);

    await page.fill("#login-username","opg73@singleuseemail.site")
    await page.fill("#login-password","wingyfy@4321");
    await page.waitForTimeout(5000);
   // await page.click ("#js-login-btn");

//await page.waitForURL(/#\/dashboard|home/, {timeout:15000});
//await page.waitForTimeout(3000);

await context.storageState({path:"./user-session.json"});
console.log("session saved to user-session.json file");
await page.waitForTimeout(3000);
    await browser.close();
}

savesession();


//session stored in user-session.json file can be used in other tests to avoid logging in again and again. You can use the storageState option in the browser context to load the session from the file.