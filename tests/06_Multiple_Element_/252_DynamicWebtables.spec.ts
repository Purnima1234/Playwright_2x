import { test, expect } from '@playwright/test';

test("verify the webtables values", async ({page})=> {
await page.goto("https://awesomeqa.com/webtable.html");
const table= await page.locator('//table[@id="customers"]');
const rows= await table.locator('tr');

const rowcount= await rows.count();
for(let i=0; i<rowcount; i++){
    let rowcontent= await rows.nth(i).textContent();

    //here we are getting the text content of each row and checking if it contains the value 
    if(rowcontent?.includes("Helen Bennett")){
        const cell= await rows.nth(i).locator('td').nth(2).textContent();
        console.log("The value of the cell is: "+cell);
    }
}

})
