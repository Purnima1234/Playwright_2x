import{test, expect} from '@playwright/test';

test('3.Soft assertions and Negation', async ({page})=> {

    await page.goto('https://app.testingacademy.com/playwright/tables/practice.html');

    const firstname=await page.getByTestId('first-name');

    //soft: Each line records

    await expect.soft(firstname).toHaveAttribute('id', 'first-name');
  await expect.soft(firstname).toBeVisible();
  await expect.soft(firstname).toHaveValue('Nilesh');

//Hard Assertion
//It will run after soft assertion even if soft assertion fails, it will not stop the execution of the test case
await expect(firstname).toBeEnabled();
await page.goto('https://app.testingacademy.com/playwright/webtable.html');
await expect(page.locator('#error')).not.toBeVisible();


const title=await page.title();
expect(title).not.toContain('error');




})