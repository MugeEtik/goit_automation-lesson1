// REFACTORING NOTE: Migrated from Standard Scripting to POM Architecture
import { LoginPage } from "../../pages/Login";
import { HomePage } from "../../pages/HomePage";

describe("Homework 15 - E2E Testing with Page Object Model (POM)", () => {

context('hw-15 login and logout tests with Page Object Pattern Implementation', () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

   it("Should login, verify home page elements, scroll, and logout", () => {
    
    //1. Navigate and verify LoginPage elements
    loginPage.navigateURL();
    loginPage.verifyPageElements(); // Comprehensive check for all critical UI components
    
    // 2. Login action
    loginPage.login("user888@gmail.com", "1234567890");

    // 3. Multi-verification on Home Page
    // First verification: URL and Header
    homePage.verifyHomePage();

    // 4. Scroll action and second verification (Footer)
    homePage.scrollToBottom();

    // 5. Logout action
    homePage.logout();

    // 6. Final Assertion: Verify we are back to login page
    cy.url().should("include", "/account/login");
  });
});
});