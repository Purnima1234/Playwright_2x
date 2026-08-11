import {test, expect} from '@playwright/test';
import LoginData from './Testdata/login.json'

test.describe('Verify login functionality', () => {

test('login with valid credentials', async ({page})=>{
     await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");;
    await page.locator("#email").fill(LoginData.Invaliduser.email);
    await page.locator("#password").fill(LoginData.Invaliduser.password);
    await page.getByTestId('login-button').click();

    await expect(page).toHaveURL("https://app.thetestingacademy.com/playwright/multiple_element_filter");
});

test('login with invalid credentials', async ({page})=>{
     await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");;
    await page.locator("#email").fill(LoginData.Invaliduser.email);
    await page.locator("#password").fill(LoginData.Invaliduser.password);
    await page.getByTestId('login-button').click();

    await expect(page).toHaveURL("https://app.thetestingacademy.com/playwright/multiple_element_filter");
}); 
});


