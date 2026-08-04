import { test, expect } from '@playwright/test';

test('Validate string column is sorted ascending', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    const cells = await page.locator('table tbody tr td:nth-child(1)').allTextContents();
    const values = cells.map(c => c.trim());
    console.log('Column values:', values);

    const sorted = [...values].sort();
    expect(values).toEqual(sorted);
});

test('Validate numeric column is sorted ascending', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    const cells = await page.locator('table tbody tr td:nth-child(5)').allTextContents();
    const values = cells.map(c => Number(c.trim()));
    console.log('Numeric column values:', values);

    const sorted = [...values].sort((a, b) => a - b);
    expect(values).toEqual(sorted);
});
