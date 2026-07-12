import { test, expect } from '@playwright/test';

test('Verify the title of the', async ({page}) => {
    await page.goto('https://www.vwo.com/');
    await expect(page).toHaveTitle("Login-VWO");

    //page = fixture (injected by playwright) which is used to navigate to the page and perform actions on the page
});