
import {test, expect,Locator} from '@playwright/test';

test("Verify JS alert functionality", async ({page}) => {
await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

//Register the dialog handler before clicking on the button which triggers the alert

page.once('dialog', async dialog=>{
    console.log('Alert type:', dialog.type());
    console.log('Alert message:', dialog.message());
    await dialog.accept();

})
await page.getByText("Click for JS Alert").click();
});

//if want to enter something in alert box
const inputText:string= "Hello World";
//page.once('dialog', async dialog=>{
 //   await dialog.accept(inputText)