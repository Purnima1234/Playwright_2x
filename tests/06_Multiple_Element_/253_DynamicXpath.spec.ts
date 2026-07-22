import {test, expect} from '@playwright/test';

test("Get the text of certain cell", async ({page}) => {

    await page.goto("https://awesomeqa.com/webtable.html");

    const table = await page.locator('//table[@id="customers"]');
    const rows= await table.locator('tr');

    const rowcount= await rows.count();

    for(let i=1; i<rowcount; i++){
        const rowcontent= await rows.nth(i).textContent();

        if(rowcontent?.includes("Amazon")){
            const cols= await rows.nth(i).locator('td').nth(1).textContent();
            console.log("The value of the cell is: "+cols);
        }

    }

})