import {test, expect} from '@playwright/test';

//priority of test cases can be set using test.describe.serial() method.
test.describe.serial('checkout suit -- must run inorder', async()=>{

    test('test 1', async ({page}) => {
        await page.goto('https://playwright.dev/');
        await expect(page). toHaveTitle(/Playwright/);
        console.log('test 1 is running')
    }
);
    test('test 2', async ({page}) => {
        await page.goto('https://playwright.dev/');
        await expect(page). toHaveTitle(/Playwright/);
        console.log('test 2 is running')
    });
});


//prioritising using tags
test('priority test 1', async ({page}) => {
    await page.goto('https://playwright.dev/');
    await expect(page). toHaveTitle(/Playwright/);


    console.log('priority test 1 is running')

});
test('priority test 2', async ({page}) => {
    await page.goto('https://playwright.dev/');
    await expect(page). toHaveTitle(/Playwright/);
    console.log('priority test 2 is running')
});

