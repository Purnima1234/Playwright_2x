import {test, expect,Locator} from '@playwright/test';

test("Verify drag and drop functionality", async ({page}) => {
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/dnd");

    let source:Locator=page.locator('#card-write-spec');
    const sbox=(await source.boundingBox())!;
    let target:Locator=page.locator('#card-write-test');
    const tbox=(await target.boundingBox())!;


    await page.mouse.move(sbox.x+sbox.width/2,sbox.y+sbox.height/2);
    await page.mouse.down();
    await page.mouse.move(tbox.x+tbox.width/2,tbox.y+tbox.height/2);
    await page.mouse.up();
    




});


