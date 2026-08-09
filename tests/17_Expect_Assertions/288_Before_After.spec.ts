import {test, expect} from '@playwright/test';

test.beforeAll(async()=>{
    //run once per worker
    console.log('beforeAll- server is up')
})

test.beforeEach(async({page})=> {
    //run before each test

    await page.goto('https://playwright.dev/');

});

test('practice test 1', async ({page}) => {
    await expect(page). toHaveTitle(/Playwright/);
    console.log('test 1 is running')
});

test('practice test 2', async ({page}) => {
    await expect(page). toHaveTitle(/Playwright/);
    console.log('test 2 is running')
});

test.afterEach( async({page}, testinfo)=> {
    //run after each test
    if(testinfo.status!==testinfo.expectedStatus){
        await page.screenshot({path:`screenshots/${testinfo.title}.png`, fullPage:true})
    }

})

test.afterAll(async()=> {
    //run once per worker
    console.log('afterAll- server is down')
})