import {test, expect} from '@playwright/test';

test("Click link directly form multiplelinks", async ({page}) => {
    await page.goto ("https://app.thetestingacademy.com/playwright/multiple_element_filter");

   const listGroup = page.locator('//div[@class="list-group"]');
   await page.getByTestId('forgotten-password').click(); // click on the link directly using testid locator()
   

})