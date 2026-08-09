import {expect, test} from '@playwright/test';

test('Verify the dropdown selection custom', async ({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/tables/select-boxes");
    await page.locator("#rs-single").click();
    await page.getByText("Cypress").click();
    await page.pause();


// select multiple options with remove option

await page.locator("#rs-creatable").click();
await page.getByText("Performance").click();
await page.getByText("Security").click();
await page.keyboard.press("Escape");
await page.pause();

//select the option when it appears only when we enter some text in the input field
await page.locator("#rs-asyn").click();
await page.locator("#rs-asyn").fill("pune");
await page.getByRole("option", {name:"Pune"}).click();
});






   
 