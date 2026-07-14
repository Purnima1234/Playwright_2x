import {test, expect} from '@playwright/test';

test("verify error message using playwright locators", async ({page}) => {
   await page.goto("https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage");
   await page.getByRole('textbox', {name: 'email'}).fill("anjkl");

   await page.getByRole('checkbox').check();2

   await page.getByRole('button', {name:'Create a Free Trial Account'}).click();

   let errormsg= page.locator("//div[contains(@class, 'invalid-reason')]").first();

   await expect(errormsg).toContainText("The email address you entered is incorrect.");


   

})