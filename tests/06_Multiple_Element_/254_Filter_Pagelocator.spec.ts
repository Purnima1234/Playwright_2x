import{expect, test} from "@playwright/test";

test("verify the filter functionality of the page", async ({page}) => {
   await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");;
 await expect(page).toHaveURL("https://app.thetestingacademy.com/playwright/multiple_element_filter");;

const listGroup = page.locator('//div[@class="list-group"]');

const forgottenpasswordlink= await listGroup.filter({ hasText: "forgotten password" });
await forgottenpasswordlink.click(); // click on the link directly using filter() method
});
