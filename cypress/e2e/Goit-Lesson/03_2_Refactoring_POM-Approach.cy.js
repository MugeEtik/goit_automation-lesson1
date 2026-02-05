// REFACTORING NOTE: This test has been upgraded from Standard-Approach (03_1) 
// to Page Object Pattern (POM) to improve maintainability and readability.

import { LoginPage } from "../../pages/Login";

describe("Page Object Model - POM", () => {

  it("TC02 - Page Object Pattern", () => {

const loginPage = new LoginPage();  // import the login page class and create an instance
//Use the methods from the login page class to perform actions and assertions

    loginPage.navigateURL();
    loginPage.checkTitle();
    loginPage.checkInputs();
    loginPage.checkLoginButton();
    loginPage.checkForgotPasswordLink();

  });  

})