import {test, expect} from '@playwright/test';

test('verift the xpath of Webtable', async ({page}) =>{
    await page.goto("https://app.thetestingacademy.com/playwright/webtable");
    // find check box xpath for Aravsharma
    await page.locator('//td[@class="username" and text()="Aarav.Sharma"]//preceding-sibling::td/input[@type="checkbox"]').check();
})