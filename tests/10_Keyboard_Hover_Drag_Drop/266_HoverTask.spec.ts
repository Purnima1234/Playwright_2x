import {expect, test} from '@playwright/test';

test("Verify Keyboard Handle", async ({page}) => {
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu");

    //hover on Add-ons and print all the options

    await page.getByText("Add-Ons").hover();
    const options = await page.locator("css=selector-for-options").allTextContents();
   console.log("Options under Add-ons:", options);
});