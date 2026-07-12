import { test, expect } from '@playwright/test';

//nornal test

test('Verify the title of the', async ({page}) => {
});

//Skip test
test.skip('skiped test', async ({page}) => {
});

//Only test
test.only('only test', async ({page}) => {
});

//Failing test
test('failing test', async ({page}) => {
});

//Test with annotations
test('test with annotations', async ({page}) => {
    test.info().annotations.push({ type: 'issue', description: 'This test is failing due to a known issue' });
});

//Test with multiple annotations
test('test with multiple annotations', async ({page}) => {
    test.info().annotations.push({ type: 'issue', description: 'This test is failing due to a known issue' });
    test.info().annotations.push({ type: 'bug', description: 'This test is failing due to a known bug' });
});
