import {test, expect,Locator} from '@playwright/test';

test("Verify drag and drop functionality", async ({page}) => {
    
        await page.goto("https://app.thetestingacademy.com/playwright/widgets/context-menu");
        await page.locator('span.context-menu-one').first().click({button:'right'});
    const alloptions:string[]= await page.locator('ul.context-menu-list span').allInnerTexts();
    console.log("All options in context menu:", alloptions);
    await page.getByText('Copy',{exact:true}).click();
})