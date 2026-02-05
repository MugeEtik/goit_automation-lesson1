// REFACTORING NOTE: This test has been upgraded from Standard-Approach (03_1) 
// to Page Object Pattern (POM) to improve maintainability and readability.

import { LoginPage } from "../../pages/Login";

describe("Page Object Model (POM) - Advanced Approach", () => {

  it("TC02 - Verify all elements on Login Page using Page Object Pattern", () => {

    const loginPage = new LoginPage();  

// import the login page class and create an instance
// use the methods from the LoginPage class to perform actions and assertions

    // Step 1: Navigation
    loginPage.navigateURL();

    // Step 2: Validating UI Elements (Assertions)
    loginPage.verifyTitle();
    loginPage.verifyInputs();
    loginPage.verifyLoginButton();
    loginPage.verifyForgotPasswordLink();

  });

});