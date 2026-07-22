import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await test.step('Navigate to Playwright website', async () => {
    await page.goto('https://playwright.dev/');
  });

  await test.step('Verify page title contains Playwright', async () => {
    await expect(page).toHaveTitle(/Playwright/);
  });
});

test('get started link', async ({ page }) => {
  await test.step('Navigate to Playwright website', async () => {
    await page.goto('https://playwright.dev/');
  });

  await test.step('Click Get Started link', async () => {
    await page.getByRole('link', { name: 'Get started' }).click();
  });

  await test.step('Verify Installation heading is visible', async () => {
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });
});
