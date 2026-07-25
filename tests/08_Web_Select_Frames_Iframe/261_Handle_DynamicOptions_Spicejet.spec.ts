import {expect, test} from '@playwright/test';

test("Select Delhi by typeing del in Textbox", async({page}) => {

    await page.goto("https://www.spicejet.com/");
    await page.getByTestId("to-testID-origin").click();
await page.getByTestId("to-testID-origin").locator("input").fill("del");
await page.getByText("Delhi").first().click();
});