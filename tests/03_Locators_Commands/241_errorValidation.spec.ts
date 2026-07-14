import {test, expect} from  '@playwright/test';

test("Verify error message", async ({page}) =>{
await page.goto("https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage");
await page.locator('#page-v1-step1-email').fill("abcd");
await page.locator("#page-free-trial-step1-cu-gdpr-consent-checkbox").check();
await page.getByRole('button', {name: 'Create a Free Trial Account'}).click();

let errormsg=page.locator('//div[@class="C(--common-color-red) Fz(--common-font-size-12) Trsp(--common-Op) Trsdu(0.15s) Op(0) invalid-input+Op(1) invalid-reason"]').first();
    await expect(errormsg).toContainText("The email address you entered is incorrect.");
});