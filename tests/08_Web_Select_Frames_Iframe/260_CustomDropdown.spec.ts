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

test('Validate no duplicate values in Language dropdown', async ({page}) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns");

    // Open the dropdown to reveal all options
    await page.getByTestId("lang-trigger").click();

    // Collect all option texts
    const options = await page.getByRole("option").allTextContents();
    const trimmed = options.map(o => o.trim());

    console.log('Dropdown options:', trimmed);

    // Check for duplicates by comparing Set size to array length
    const unique = new Set(trimmed);
    expect(unique.size, `Duplicate values found: ${trimmed.filter((v, i) => trimmed.indexOf(v) !== i)}`).toBe(trimmed.length);
})