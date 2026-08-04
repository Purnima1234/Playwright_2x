import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('File Download Code', ()=>{

    test.beforeEach( async ({page})=> {
        await page.goto("https://app.thetestingacademy.com/playwright/file-download");
    });
}); 

test("Verify the download file", async ({page})=> {

    const [staticDownload]= await Promise.all([
        page.waitForEvent('download'),
        page.getByTestId('download-static').click()
    ]);

    await staticDownload.saveAs(path.join('/output', staticDownload.suggestedFilename()));


});