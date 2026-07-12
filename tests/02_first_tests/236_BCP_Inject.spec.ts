import {test, expect} from '@playwright/test';
import { verify } from 'crypto';

test("verify title", async ({browser}) => {
    //here injecting browser from playwright test runner, we can create context and page from it.
    const context= await browser.newContext();
    const page= await context.newPage();
    await page.goto("https://app.vwo.com");
    await expect(page).toHaveTitle("Login-VWO");
    const logo= page.locator('#vow-login-logo');
    await expect(logo).toBeVisible();


    })