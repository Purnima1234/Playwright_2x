import {test, expect} from '@playwright/test';
import { verify } from 'crypto';

test("verify xpath locators", async ({page})=> {
    await page.goto("https://app.vwo.com/#/login");
    await expect(page).toHaveURL("https://app.vwo.com/#/login");
    await page.locator('xpath=//div[@class="Pos(r) Mt(28px)"]//input[@class="text-input W(100%)"]').fill("Admin");
    await page.locator('xpath=//div[@class="Pos(r) Mt(28px)"]//input[@class="text-input W(100%) Pend(36px)" and @name="password"]').fill("pass123");
    await page.locator('xpath=//div[@class="Pos(r) Mt(28px)"]//button[@class="btn btn--small no-hover Cur(p) Bd(n) Px(4px) Pos(a) T(50%) End(8px) Translate(0,-50%)" and @onclick="login.togglePasswordVisibility()"]').click();



    ////div[@class="Pos(r) Mt(28px)"]//input[@class="text-input W(100%) Pend(36px)"]

})
