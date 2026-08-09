import {test, expect} from '@playwright/test';

test.describe('Expect assertions', ()=>{

    test("Expect assertions", async ({page})=> {


await page.goto('https://app.testingacademy.com/playwright/multiple_element_filter.html');

const heading= await page.getByText('Multiple element filter', {exact:true});
await expect (heading).toBeVisible();
await expect (heading).toContainText('filter', {timeout:5000});


const email= await page.getByRole('textbox', {name:'Email Address'});
await expect(email).toHaveAttribute('id', 'email');
await expect(email).toHaveAttribute('type', 'email');
await expect(email).toHaveAttribute('placeHolder', 'Student.thetestingacademy.com');

const footerlinks=page.locator('footer a')
await expect(footerlinks).toHaveCount(4);





 })

})