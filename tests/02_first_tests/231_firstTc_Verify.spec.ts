import {test, expect} from '@playwright/test';

test('Verify the title', async ({page}) => {

    await test.step('Navigate to VWO app', async () => {
        await page.goto("https://app.vwo.com");
    });

    await test.step('Verify page title', async () => {
        await expect(page).toHaveTitle("Login-VWO");
    });

    await test.step('Verify logo is visible', async () => {
        const logo = page.locator('#vow-login-logo');
        await expect(logo).toBeVisible();
    });

})