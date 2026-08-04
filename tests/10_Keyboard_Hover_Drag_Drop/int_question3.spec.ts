import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test('Compare CSV data with UI table values', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    // Read CSV and skip header row
    const csvPath = path.join(__dirname, './testdata/tabledata.csv');
    const lines = fs.readFileSync(csvPath, 'utf-8').trim().split('\n').slice(1);
    const csvRows = lines.map(line => line.split(',').map(v => v.trim()));

    // Read all table rows from UI
    const tableRows = await page.locator('table tbody tr').all();

    // Compare row by row
    for (let i = 0; i < csvRows.length; i++) {
        const uiCells = await tableRows[i].locator('td').allTextContents();
        expect(uiCells.map(c => c.trim())).toEqual(csvRows[i]);
    }
});

