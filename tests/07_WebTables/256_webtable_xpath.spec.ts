import {test, expect} from '@playwright/test';

test('verift the xpath of Webtable', async ({page}) =>{
    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    const table= page.locator('//table[@class="companies" and @id="employees-table"]');
    const row= await table.locator('xpath=.//tr').filter({hasText: "Priya Kapoor"}).first();
    const col= await row.locator('td[data-col="email"]').first().innerText();
    console.log("Email of Priya Kapoor is: "+col);

});
//this is if pagination not there, if pagination is there then we have to use loop to get the data from all pages.

test("Verify if pagination applicable", async ({page})=> {

        await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");
        let name:string= "Priya Kapoor";
        let row;
    
        while(true) {
            row= await page.locator('#employees-tbody tr').filter({hasText: name});
            if(await row.count()){
                break;
            }
            const nextButton= page.locator('#employees-table_next');
            if(await nextButton.isDisabled()){
                break;
            }
            await nextButton.click();

        }


});