import {expect, test} from '@playwright/test';

test('complte webtable automation', async ({page}) =>{
    await page.goto("https://awesomeqa.com/hr/web/index.php/auth/login");
    await expect(page).toHaveURL("https://awesomeqa.com/hr/web/index.php/auth/login");

    await page.getByPlaceholder('Username').fill("admin");
    await page.getByPlaceholder('Password').fill("Awesomeqa@4321");
    await page.getByRole('button', {name:'Login'}).click();
    await expect (page).toHaveURL("https://awesomeqa.com/hr/web/index.php/pim/viewEmployeeList");

    const table= await page.locator("//oxd-table-body");
    const rows= await table.locator("//div[@class='oxd-table-card']");
    const rowcount= await rows.count();

    for (let i=0; i<rowcount; i++) {
        const rowscontent= await rows.nth(i).textContent();
        console.log(rowscontent);

        if(rowscontent?.includes("Alice")){
            const pencilicon = await rows.nth(i).locator("//i[@class='oxd-icon bi-pencil-fill']").first().click();
        }
    }

})

test('find Terminated employee and click on Delete icon', async ({page}) => {
    test.setTimeout(60000);

    await page.goto("https://awesomeqa.com/hr/web/index.php/auth/login");
    await expect(page).toHaveURL("https://awesomeqa.com/hr/web/index.php/auth/login");

    await page.getByPlaceholder('Username').fill("admin");
    await page.getByPlaceholder('Password').fill("Awesomeqa@4321");
    await page.getByRole('button', {name:'Login'}).click();

    // Wait for navigation after login
    await page.waitForURL("https://awesomeqa.com/hr/web/index.php/pim/viewEmployeeList", { timeout: 30000 });
    await page.waitForLoadState('networkidle');

    const table = page.locator("//oxd-table-body");
    const rows = table.locator("//div[@class='oxd-table-card']");
    const rowcount = await rows.count();

    for(let i=0; i<rowcount; i++) {
        const rowcontent = await rows.nth(i).textContent();
        console.log(rowcontent);

        if(rowcontent?.includes("Terminated")) {
            await rows.nth(i).locator("//i[@class='oxd-icon bi-trash']").first().click();
            // Wait for the confirmation dialog to appear
            await page.waitForSelector(".oxd-dialog-container", { state: 'visible', timeout: 10000 });
            await page.screenshot({path: 'screenshot.png', fullPage: true});
        }
    }

})

