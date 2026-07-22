import {test, expect} from '@playwright/test';

test('verift the xpath of Webtable', async ({page}) =>{
    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    const pagecount=3;
    const allEmails:string[]=[];
     for (let p=1; p<=pagecount; p++){
        await page.getByTestId("employees-table_next").click();
      const emails=await page.locator('#employees-tbody tr td[data-col="email"]').allInnerTexts();
      allEmails.push(...emails);
     }

});