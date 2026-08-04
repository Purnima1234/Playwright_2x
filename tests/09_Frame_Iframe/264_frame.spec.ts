import {expect, test, FrameLocator,Locator} from '@playwright/test';

test('Verify the dropdown selection custom', async ({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/frames/multi-frames");
    let frame1: FrameLocator= await page.frameLocator("#pact1");
    let frame2: FrameLocator= await page.frameLocator("#pact2");
    let frame3: FrameLocator= await page.frameLocator("#pact3");

    await frame1.locator("#inp_val").fill("Mu");
    await frame2.locator("#jex").fill("Sri");
    await frame3.locator("#glaf").fill("Ran")
});