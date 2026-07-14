import {test, expect} from '@playwright/test';

test('Verify the title', async ({browser}) => {
    const context= await browser.newContext({ viewport: { width: 1280, height: 720 }, locale: 'en-US' });
    const page= await context.newPage();
    await page.goto("https://app.vwo.com");
    await expect (page).toHaveTitle("Login-VWO");
    const logo= page.locator('#vow-login-logo');
    await expect(logo).toBeVisible();
});