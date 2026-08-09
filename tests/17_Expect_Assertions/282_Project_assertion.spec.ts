import {test, expect} from '@playwright/test';

test('visible, enabled, disabled, checked', async ({page})=>{
    await page.goto('https://app.testingacademy.com/playwright/tables/practice.html');
    const automationcheckbox=await page.getByRole('checkbox', {name:/UFT/});
    await expect(automationcheckbox).not.toBeChecked();


    const submitbutton= await page.getByTestId('Profile-submit');
    await expect(submitbutton).toBeVisible();
    await expect(submitbutton).toBeEnabled();

    await expect(page).toHaveTitle(/QA Profile/);

    const appurl=page.url();
    await expect(appurl).toContain('the Testingacademy');




    
} )