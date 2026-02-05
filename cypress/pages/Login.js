export class LoginPage{

    navigateURL(){
    cy.visit("https://www.edu.goit.global/account/login");
    } 

    //method to check title
checkTitle(){
    cy.get(".next-10stgr7 > .next-c1vj7d")
    .should("be.visible")
    .and("have.text", "Login");
    }

    //method to check email and password inputs
checkInputs(){
    cy.get("#user_email").should("be.visible");
    cy.get("#user_password").should("be.visible");
    }

    //method to check login button
checkLoginButton(){
    cy.get(".next-1jphuq5")
    .should("be.visible")
    .and("have.text", "Log in")
    .and("exist");
    }

    //method to check forgot password link
checkForgotPasswordLink(){
    cy.get(".next-1f1fv1i > .next-1qrvie4")
    .should("be.visible")
    .and("have.text", "I can't remember the password");
    }
}

// export default new LoginPage(); // export the class as a singleton instance