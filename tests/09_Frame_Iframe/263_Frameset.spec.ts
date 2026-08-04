import {expect, test, FrameLocator,Locator} from '@playwright/test';

test('Verify the dropdown selection custom', async ({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/frames/multi-frames");
    let mainframe:FrameLocator= await page.frameLocator('[name="main"]');

    const headerText= await mainframe.locator("#main-heading").textContent();
    console.log("Header Text is: "+headerText);

    const allframes: Locator[]=await page.locator('//frame').all();
    console.log("Total number of frames: "+allframes.length);

for(let i=0;i<allframes.length;i++){
    const framename= await allframes[i].getAttribute("name");
    console.log("Frame Name is: "+framename);
}

let sideframe: FrameLocator= await page.frameLocator('[name="side"]');
await sideframe.getByTestId('side-link-registration').click();
await page.pause();

});