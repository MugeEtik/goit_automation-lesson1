describe('Goit Homework 14 - Cypress E2E Testing', function() {
    beforeEach(() => {
        cy.visit("https://www.edu.goit.global/account/login");
    })

    context("hw-14 login and logout tests", function() {
        it("TC01-Test No 1", function(){
            cy.login("user888@gmail.com", "1234567890");
            cy.get('.ehpfpvn0 > .next-1jphuq5').should('exist').and('have.text', 'Mini-courses').and('be.visible');
            cy.get('#open-navigation-menu-mobile').click();
            cy.get(':nth-child(12) > .next-bve2vl').scrollIntoView().click();
            cy.wait(2000);
        })

         it("TC02-Test No 2", function(){
            cy.login("testowyqa@qa.team", "QA!automation-1");
            cy.scrollTo('bottom');
            cy.get('#go-to-the-course-homepage-widget').should('exist').and('have.text', 'Go to the course').and('be.visible');
            cy.get('#go-to-the-course-homepage-widget').click();
            cy.wait(1000);
            cy.get('#open-navigation-menu-mobile').click();
            cy.get(':nth-child(8) > .next-bve2vl').scrollIntoView().click();
            cy.wait(2000);
            cy.get('.next-1svthap').should('contain.text', 'with Google');
    
        })
    })

})