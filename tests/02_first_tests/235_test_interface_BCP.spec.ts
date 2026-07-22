import {test, expect} from '@playwright/test';

test("login test", async ({page}) => {
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
});

//here instead of creating browser, context page again and again, 
// we can use the page object provided by playwright test runner. 
// It will create browser, context and page for us.