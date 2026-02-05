describe("Standart Approach Example", () => {

  it("TC01 - Verify Login Page", () => {

// go to url: visit login page
    cy.visit("https://www.edu.goit.global/account/login");
// check title if it is visible and has text "Login"
    cy.get(".next-10stgr7 > .next-c1vj7d").should("be.visible");
    cy.get(".next-10stgr7 > .next-c1vj7d").should("have.text", "Login");
// check inputs if they are visible and exist
    cy.get("#user_email").should("be.visible");
    cy.get("#user_password").should("be.visible");
// check button if it is visible and has text "Login"
    cy.get(".next-1jphuq5").should("be.visible").and("have.text", "Log in");
// check link if it is visible and has text "I can't remember the password" 
    cy.get(".next-1f1fv1i > .next-1qrvie4").should("be.visible");
    cy.get(".next-1f1fv1i > .next-1qrvie4").should("have.text", "I can't remember the password");

  });  

})