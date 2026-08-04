import{test, expect, Locator} from '@playwright/test';
import path from 'path';

const URL="https://app.thetestingacademy.com/playwright/shadow-dom";

test.describe('shadow Handling', () =>{
test.beforeEach(async ({page})=> {
    await page.goto(URL);
});

test('Locate File Upload ', async ({page})=>{
    const filepath=path.join(__dirname,'./testdata/abc.txt');
    console.log('File Path:',filepath);

    await page.setInputFiles('#file-upload', filepath);
    await page.click('#file-submit');

    await expect(page.locator('h3')).toHaveText("File Uploaded!");
    await expect(page.locator('#uploaded-files')).toHaveText("testdata/abc.txt");
    

});
});