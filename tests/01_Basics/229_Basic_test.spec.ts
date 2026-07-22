import { test, expect } from '@playwright/test';

test('Verify the title of the', async ({page}) => {
    await test.step('Navigate to VWO website', async () => {
        await page.goto('https://www.vwo.com/');
    });

    await test.step('Verify page title', async () => {
        await expect(page).toHaveTitle("Login-VWO");
    });
});