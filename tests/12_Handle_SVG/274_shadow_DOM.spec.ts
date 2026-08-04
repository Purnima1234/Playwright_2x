import{test, expect, Locator} from '@playwright/test';

const URL="https://www.flipkart.com/search?q=https://app.thetestingacademy.com/playwright/shadow-dom";

test.describe('shadow Handling', () =>{
test.beforeEach(async ({page})=> {
    await page.goto(URL);
});

test("Locate the shadow DOM and assert visible", async ({page})=>{

const card=page.getByTestId('Card-account');
await card.locator('input[name="email"]').fill('Student@thetestingacademy.com');
await card.locator('input[name="password"]').fill('student@123');
await card.getByTestId('card-account-status').click();
await expect(page.getByTestId('card-account-status')).toContainText('Student@thetestingacademy.com');
await page.waitForTimeout(3000);
});
});

//shadow DOM means some times one element is hidden until we click on some other element. In that case we can use shadow DOM to access the hidden element.
