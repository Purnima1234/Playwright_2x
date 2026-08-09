import {test, expect} from '@playwright/test';

test('login form is reachable via steps', async ({page}) => {

    await test.step("Open Practice phase", async () => {
        await page.goto('https://app.thetestingacademy.com/playwright/practice');
    });

    await test.step("Click on login form", async () => {
        await expect(page.locator('h1')).toHaveText("Practice Page");
    });

    await test.step("Click on login form", async () => {
        await page.locator('a[href="/playwright/login"]').click();
    });

});