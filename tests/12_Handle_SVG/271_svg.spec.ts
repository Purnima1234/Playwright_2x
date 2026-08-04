import {expect, test, Locator} from '@playwright/test';

const URL="https://www.flipkart.com/";

test.describe("Flipkart search Via SVG", ()=>{

    test.beforeEach(async ({page}) =>{
        console.log("Before each test");
        await page.goto(URL);
    })
    test("TC1", async ({page})=>{
        // Test code goes here
        console.log("TestCase 1");
    });
    test("TC2", async ({page})=> {
        console.log("TestCase 2");
    });
});