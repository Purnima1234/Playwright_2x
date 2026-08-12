import {expect, test} from '@playwright/test'
import {fa, faker} from '@faker-js/faker'

function generateUser(){

    return  {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.phone.number({style:'national'}),
        password:faker.internet.password()

    }

}

test('Register single user Via generateUser()', async({page}) => {
    const user=generateUser();
    await page.goto('https://app.thetestingacademy.com/playwright/tables/practice.html');
    await page.getByRole('textbox', {name:'firstName'}).fill(user.firstName);
    await page.getByRole('textbox', name='lastName')
}