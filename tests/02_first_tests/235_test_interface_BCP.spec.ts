import {test, expect} from '@playwright/test';

test("login test", async ({page}) => {
    await page.goto("https://app.vwo.com");
    await expect(page).toHaveTitle("Login-VWO");
    const logo= page.locator('#vow-login-logo');
    await expect(logo).toBeVisible();
});

//here instead of creating browser, context page again and again, 
// we can use the page object provided by playwright test runner. 
// It will create browser, context and page for us.