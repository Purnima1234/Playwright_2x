import {test, expect} from "@playwright/test";
import { group } from "console";

//navigate to the page
//find the locator which gives all the elements
//loop through it and find the one which we want to click

//Using allInnerTexts() method we can get all the inner texts of the elements in an array and then we can loop through it and find the one which we want to click

test("Verify handle multiple elements", async ({page}) => {
 await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");;
 await expect(page).toHaveURL("https://app.thetestingacademy.com/playwright/multiple_element_filter");;

const listGroup = page.locator('//div[@class="list-group"]');
const rightPanelLinkTexts:string[]=await listGroup.allInnerTexts();
console.log (rightPanelLinkTexts);

for (const linktext of rightPanelLinkTexts) {
    if(linktext==="forgotten password") {
        await page.getByText(linktext).first().click(); // if have multiple elements with same text then use first() or last() method to click on the first or last element respectively
    }
    }
});

//using all 

test("Verify handle multiplelinks", async ({page}) => {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    await page.locator('//div[@class="list-group"]').all();
    for(let links of await page.locator('//div[@class="list-group"]').all()) {
        if(await links.innerText()==="forgotten password") {
            await links.click();
        }
    }   


});



