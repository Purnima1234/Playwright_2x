import { test, expect } from '@playwright/test';
import { readMySQL, DBConfig } from './Testdata/util/mysql_reader';

// Update these with your actual MySQL connection details
const dbConfig: DBConfig = {
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'testdb'
};

// Expected table: login_data(description, username, password, shouldpass)
const query = 'SELECT description, username, password, shouldpass FROM login_data';

let loginData: Record<string, string>[] = [];

test.beforeAll(async () => {
    loginData = await readMySQL(dbConfig, query);
});

test.describe('DDT from MySQL', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://app.testingacademy.com/playwright/multiple_element_filter");
    })

    test.afterEach(async ({}, testInfo) => {
        console.log(`afterEach: ${testInfo.title} ${testInfo.status}`);
    })

    test('Login with MySQL data', async ({ page }) => {
        for (const data of loginData) {
            let textboxEmailAddress = page.getByRole("textbox", { name: "Email Address" });
            let textboxPassword = page.getByRole("textbox", { name: "Password" });
            await textboxEmailAddress.fill(data.username);
            await textboxPassword.fill(data.password);
            await page.getByTestId('login button').click();
        }
    });
});
