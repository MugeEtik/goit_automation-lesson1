describe ('TS2_Reusable Methods', function() {
//we can use reusable methods that we added commands.js files.

  beforeEach(() => {
    cy.visit("https://www.edu.goit.global/account/login");
  })

  context('Login with different credentials', function() {
    it("TC01 - Admin login", function(){
        cy.login("user888@gmail.com", "1234567890");

})

    it("TC02 - User login", function(){
        cy.login("andy.moko.98@gmail.com", "Andy_Moko78");

})

    it("TC03 - Manager login", function(){
        cy.login("mrdusty@duniakeliling.com", "mrdusty@duniakeliling.com");

})

  })

  
})