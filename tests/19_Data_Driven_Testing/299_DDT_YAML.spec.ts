import { test, expect } from '@playwright/test';
import path from 'path';
import { readYAML } from './Testdata/util/yaml_reader';

const loginData = readYAML(path.join(__dirname, 'Testdata/util/login_data.yml'));

test.describe('DDT from YAML', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://app.testingacademy.com/playwright/multiple_element_filter");
    })

    test.afterEach(async ({}, testInfo) => {
        console.log(`afterEach: ${testInfo.title} ${testInfo.status}`);
    })

    for (const data of loginData) {
        test(`Login with : ${data.description}`, async ({ page }) => {
            let textboxEmailAddress = page.getByRole("textbox", { name: "Email Address" });
            let textboxPassword = page.getByRole("textbox", { name: "Password" });
            await textboxEmailAddress.fill(data.username);
            await textboxPassword.fill(data.password);
            await page.getByTestId('login button').click();
        });
    }
});
