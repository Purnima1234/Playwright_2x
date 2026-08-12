import {test, expect} from '@playwright/test';

import path from 'path';
import { readCSV } from './Testdata/util/csv_reader';

test.describe('DDT sample', ()=> {
    const loginData= readCSV(path.join(__dirname, 'Testdata/login_data.csv'));
    for (const data of loginData){

        test(`Login with : ${data.description}`, async ({page})=> {
            await page.goto("https://app.testingacademy.com/playwright/multiple_element_filter");
            let textboxEmailAddress=page.getByRole("textbox", { name:"Email Address" });
            let textboxPassword=page.getByRole("textbox", { name:"Password" });
            await textboxEmailAddress.fill(data.username);
            await textboxPassword.fill(data.password);
            await page.getByTestId('login button').click();

            await expect (page).toHaveURL(data.expectedurl);

        });
    }
});