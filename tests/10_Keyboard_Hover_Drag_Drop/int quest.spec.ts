import { test, expect } from '@playwright/test';

test('Validate no duplicate values in Language dropdown', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns");

    await page.getByTestId("lang-trigger").click();

    const options = await page.getByRole("option").allTextContents();
    const trimmed = options.map(o => o.trim());
    const duplicates = trimmed.filter((value, index) => trimmed.indexOf(value) !== index);

    console.log('Language options:', trimmed);
    console.log('Duplicates:', duplicates);

    expect(duplicates.length).toBe(0);
});

test('Validate no duplicate values in Experience dropdown', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns");

    await page.getByTestId("Experience-trigger").click();

    const options = await page.getByRole("option").allTextContents();
    const trimmed = options.map(o => o.trim());
    const duplicates = trimmed.filter((value, index) => trimmed.indexOf(value) !== index);

    console.log('Experience options:', trimmed);
    console.log('Duplicates:', duplicates);

    expect(duplicates.length).toBe(0);
});
