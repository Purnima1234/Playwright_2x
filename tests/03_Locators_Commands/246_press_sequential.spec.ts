import {test, expect} from '@playwright/test';

test("press sequentially", async ({page}) => {
await page.goto("https://app.vwo.com");
await page.getByRole('button', {name: 'login', disabled: false}).click();
await page.getByRole('textbox', {name: 'Username'}).pressSequentially("Admin");
await page.getByRole('textbox', {name: 'Password'}).pressSequentially("pass123");

await page.waitForTimeout
await page.goBack();

});

//pressSequentially is a new command in playwright 2.0 which allows you to press keys sequentially on a locator. It is useful when you want to simulate typing or pressing keys in a specific order.