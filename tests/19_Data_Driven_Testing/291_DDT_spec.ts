import {expect, test} from '@playwright/test';

test('Verify login using datadriven from json file', async ({page}) => {

    const userdata= require(',/293-users.json');

    //or we can use import userdata from './293-users.json';

    //or use filesystem as const fs= require('fs'); const userdata= JSON.parse(fs.readFileSync('./293-users.json', 'utf-8'));

    console.log(userdata.username);
    console.log(userdata.password);

})

