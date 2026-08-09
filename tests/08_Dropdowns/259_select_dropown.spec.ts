import {test, expect} from '@playwright/test';

test('Verify the dropdown selection_Basic', async ({page}) => {

    await page.goto("https://the-internet.herokuapp.com/dropdown");
    await page.locator("#dropdown").click();
    await page.selectOption("#dropdown","Option2");


  });