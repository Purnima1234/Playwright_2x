import {test, expect} from '@playwright/test';

test("Verify error message", async ({page})=> {
 

    //jUST CREATING LOCATORS, nothing happens (Lazy)
  let usernamefield= page.locator('#login-username');
  let passwordfield= page.locator('#login-password');
  let  signindbutton=page.locator('#js-login-btn');
  let errormessage= page.locator('#js-notification-box-msg');

  // now strict as we will perform action on created locators
  await usernamefield.fill("Admin");
  await passwordfield.fill("pass123");
  await signindbutton.click();

  await(expect(errormessage).toContainText("Invalid username or password. Please try again."));
  
  









});