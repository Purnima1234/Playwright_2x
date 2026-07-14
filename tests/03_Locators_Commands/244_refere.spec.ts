import {test, expect} from '@playwright/test';

test("goto with different wait until options", async ({page}) => {

    await page.goto("https://app.vwo.com");{
    //tell the server the previous url is google
    referer: "https://www.google.com"
    }
});