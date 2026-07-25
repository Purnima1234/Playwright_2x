import {expect, test} from '@playwright/test';

test("Verify Keyboard Handle", async ({page}) => {

    await page.goto('https://keycode.info');
    await page.keyboard.press('A');
    await page.screenshot({path: 'A.png'});

})