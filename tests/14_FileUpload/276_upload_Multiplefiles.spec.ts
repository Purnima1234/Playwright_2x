import{test, expect, Locator} from '@playwright/test';
import path from 'path';

const URL="https://app.thetestingacademy.com/playwright/shadow-dom";

test.describe('shadow Handling', () =>{
test.beforeEach(async ({page})=> {
    await page.goto(URL);
});

test('Locate File Upload ', async ({page})=>{

    await page.locator("div.pf-v6-c-multiple-file-upload input").setInputFiles(
        [{
              name: 'file1.jpg',
              mimeType:'image/jpeg',
              buffer: Buffer.from('image from testingacademy code')
        },
        {
              name: 'file2.jpg',
              mimeType:'image/jpeg',
              buffer: Buffer.from('another image from testingacademy code')
        }

        ]
    );
});
});
