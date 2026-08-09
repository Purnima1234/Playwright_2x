import {test, expect} from '@playwright/test';

test('Get list of Options in dropdown', async ({page})=> {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns");

    await page.getByTestId("lang-trigger").click();

    const options= await page.getByRole("option").allTextContents();

    console.log('dropdown Options',  options)

    let dup= options.filter((item,index)=> options.indexOf(item)!==index);
    console.log('Duplicate values in dropdown', dup)


})


 
// Run this file only: npx playwright test src/Practice/practse.spec.ts --headed
test('dropdown', async({page})=>{
// Open the practice page that contains a language dropdown.
await page.goto('https://app.thetestingacademy.com/playwright/tables/dropdowns');
// Click the input so the dropdown options are visible.
await page.getByTestId('lang-trigger').click();
// Capture all option labels from the dropdown and print them.
const a=await page.getByRole('option').allTextContents();
const c=a.length;
console.log(a, c);
for(let i=0; i<a.length; i++){
    for(let j=0; j<a.length;j++){
        if(a[i]===a[j] && i!==j){
            console.log(a[i]);
        }
    }
}
});