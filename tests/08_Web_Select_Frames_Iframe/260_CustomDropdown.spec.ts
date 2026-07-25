import {expect, test} from '@playwright/test';

test('Verify the dropdown selection custom', async ({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns");
   
   
    await page.getByTestId("lang-trigger").click();

    await page.getByRole("option", {name:"Ruby"}).click();


    await page.getByTestId('Experience-trigger').click();
    await page.getByRole("option", {name:"JavaScript"}).click();

    //get by texttID
   // await page. getByText("Ruby").click();


})