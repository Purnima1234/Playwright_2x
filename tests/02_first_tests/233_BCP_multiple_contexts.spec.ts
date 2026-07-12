import {chromium} from 'playwright';

async function multiuUser() {

    let browser= await chromium.launch();

    let adminContext=  await browser.newContext();
    let adminpage= await adminContext.newPage();
    await adminpage.goto("https://app.vwo.com");

    let usercontext= await browser.newContext();
    let userpage= await usercontext.newPage();
    await userpage.goto('https://app.vwo.com');

    await adminpage.close();
    await adminContext.close();
    await userpage.close();
    await usercontext.close();
    await browser.close();

    


}

multiuUser();
