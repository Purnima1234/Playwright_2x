import {test, expect} from '@playwright/test';

test.describe.serial('checkout suit -- must run inorder', async()=>{
    test('test 1', async ({page}) => {
        await page.goto('https://playwright.dev/');
        await expect(page). toHaveTitle(/Playwright/);
        console.log('test 1 is running')
    });
    test('test 2', async ({page}) => {
        await page.goto('https://playwright.dev/');
        await expect(page). toHaveTitle(/Playwright/);
        console.log('test 2 is running')
    });
    
})