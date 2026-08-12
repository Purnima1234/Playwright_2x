import {test, expect} from '@playwright/test';
import {faker} from '@faker-js/faker';

test.describe("faker-JS data driven template", ()=>{

    test('sjould display the expected generated user details', async({page})=> {
    await page.goto('https://app.testingacademy.com/playwright/ttacart');

    //Dynamic Data generation using faker-js
    const expectedFirstname= faker.person.firstName();
    const expectedLastName=faker.person.lastName();
    const expectedpassword= faker.  internet.password();
    const expectedEmail= faker.internet.email({firstName:expectedFirstname, lastName:expectedLastName});    
    const telephone=faker.phone.number({style: 'international'});
    const password=faker.internet.password({length:8, memorable:true, pattern:/[A-Z]/});

    const testUser={
        name: expectedFirstname,
        email: expectedEmail,
        password:expectedpassword
    }
    
    await page.getByRole("textbox", {name: "Name"}).fill(testUser.name);
    await page.getByRole("textbox", {name: "Email"}).fill(testUser.email);
    await page.getByRole("textbox", {name: "Password"}).fill(testUser.password);

    })

})