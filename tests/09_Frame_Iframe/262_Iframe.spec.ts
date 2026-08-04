import {expect, test, FrameLocator} from '@playwright/test';

test('Verify the dropdown selection custom', async ({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/frames");
    let vehicalFrame: FrameLocator= await page.frameLocator("#frame-one");
    await vehicalFrame.locator("#RESULT_TextField-1").fill("Tata Tiago");
    await vehicalFrame.locator("#RESULT_TextField-2").fill("Purnima");
    await vehicalFrame.locator("#RESULT_TextField-3").fill("TG8798h789");
    await vehicalFrame.locator("#RESULT_RadioButton-1").selectOption("Electric");
    await vehicalFrame.locator("#RESULT_TextField-4").fill("2024");

});