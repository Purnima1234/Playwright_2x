import {expect, test} from '@playwright/test';

test('Verify the dropdown selection custom', async ({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns");
    await page.getByRole("button", {name: "Programming language"}).click();

    await page.getByRole("option", {name:"Ruby"}).click();

})