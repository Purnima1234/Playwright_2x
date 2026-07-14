import {test, expect} from '@playwright/test';

test("locators for lazy, strict, autowait", async ({page}) => {

 await page.goto("https://app.vwo.com");
 await page.getByRole('button', {name: 'login', disabled: false}).click();
});