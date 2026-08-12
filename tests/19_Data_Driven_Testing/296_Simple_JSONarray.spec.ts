import {test, expect} from '@playwright/test';

test.describe('DDT sample', ()=> {

    //Test data  array of  Objects
    const loginData=[
        {
            description:'Valid',
            username:'admin@gmail.com',
            password:'admin',
            shouldpass:true

        },
        {
            description:'InValid password',
            username:'admin@gmail.com',
            password:'wrong psss',
            shouldpass:false
        },
        {
            description:'empty username',
            username:'',
            password:'wrong psss',
            shouldpass:false
        },
        {
            description:'empty password',
            username:'admin@gmail.com',
            password:'',
            shouldpass:false
        },
        {
            description:'empty username and password',
            username:'',
            password:'',
            shouldpass:false
        }
    ]
// this is fix for all tests
    test.beforeEach(async({page})=> {
        await page.goto('https://app.testingacademy.com/playwright/multiple_element_filter');

    })

    //for loop for all tests
     
    for( const data of loginData){

        test(`login with :${data.description}`, async ({page})=> {
        await page.locator('#email').fill(data.username);
        await page.locator('#password').fill(data.password);
        await page.getByTestId('login button').click();
    });
    }
   
})