// "cy" is the main cypress test library's core command.
// how to express functions in javascript:
/*
  function()     OR         () => 
*/

describe ('TS1_Cypress Fundamentals', function() {
//.visit() --> goes to url

  beforeEach(() => {
    cy.visit("https://www.edu.goit.global/account/login");
  })

    it("TC01- Describe and it blocks", function(){
//describe block and it blocks mean: 
/* 
    - describe -> Test Suites -> En üstteki genel başlık 
        (örn: Giriş Sayfası Testleri)
    - context -> Test Sub-suite / Scenario Group -> Bu başlığın altındaki alt kategoriler 
        (örn: Hatalı Girişler, Başarılı Girişler, Görsel Kontroller)
    - it -> Test Cases -> Gerçekten bir işin yapıldığı tekil adımlar 
        (örn: doğru verilerle başarılı giriş)
*/
// it.only() --> runs only this it block
// it.skip() --> skips this it block

   })
 
   context('Navigation and Basic Interactions: Intro-to-Cypress', () => {
    it("TC02- Main commands and selectors", function(){
//.get() --> locate
    cy.get('#user_email').type('deneme');
  //Selectors(locate)--> 
        /*
            1. id # 
            2. class .
            3. atr=value -- [name='email'] 
        */
/*
    context('Login Scenarios', () => { // Grup
  it('TC01: Should login with valid credentials', () => {
    cy.get('#user').type('muge'); // Step 1
    cy.get('#pass').type('123');  // Step 2
    cy.get('#btn').click();       // Step 3
  });
*/

//.as() --> allias (nickname)
    cy.get('#user_email').as('email');
//.clear() --> delete text
    cy.get('@email').clear();
//.type() --> send text
    cy.get('#user_email').type('muge');
    cy.get('[name="password"]').type('0123')
//.click() --> left click
    cy.get('.next-1jphuq5').click();
//.wait() --> freeze tests for x ms (miliseconds)  (that is hard-wait. we dont need hard-waits mostly.)
    cy.wait(1000)
//.dblclick() --> double click
    cy.get('.next-1jphuq5').dblclick();
//.rightclick() --> right click
    cy.get('.next-1jphuq5').rightclick();
//.contains() --> locate if includes text  example: contains('email') 
    })
  })

    it("TC03- Assertions and Validations", function(){
//.url() --> gives the url, it is used with assertions:
//.should() --> assertion 
    cy.url().should('include','www.edu.goit.global')
    cy.get('.next-1svthap').should('contain.text', 'Sign in with Google')
    cy.get('.next-1svthap').should('contain.text', 'Google')
    /* include and contain.text are exactly same.*/
//.title() --> gets page's title
    cy.title().should('include', 'Log in');
//.should() and() --> multiple assertion
    cy.get('.eckniwg2').should('have.text', 'Log in').and('be.visible').and('exist')
    /*  
    cy.get().should('have.class', 'active');
      .should('be.checked');   .should('not.be.checked')  --> for radio-buttons or check-boxes
    cy.get().check().should('be.checked');
    cy.get().should('not.be.disabled') 
    cy.get().should('be.visible')
    cy.get('.score').should('equal', 100);
    cy.get('.score').should('not.equal', 200);   
    cy.get('input[type="radio"]').should('be.focused');
    */
    cy.get('.eckniwg2').should('have.text', 'Log in').and('be.visible').and('exist').and('have.css','background-color', 'rgb(255, 107, 10)');
    cy.get('#user_email').type('user888@gmail.com')
    cy.get('#user_password').type('1234567890')
    cy.get('.next-1jphuq5').click();

  })

    it("TC04- Advanced mouse events", function(){
//.hover() --> moves the mouse to a spesific element
   /* cy.get('.next-128fs2v > .next-1qrvie4').hover();    ----> didnt run */
    cy.get('.next-128fs2v > .next-1qrvie4').trigger('mouseover');
    cy.get('.next-128fs2v > .next-1qrvie4').trigger('mouseenter');
    /* ikisinin farkı:
    mouseover: Fare öğenin üzerine geldiğinde çalışır. 
    Eğer o öğenin içinde başka alt öğeler (butonlar, ikonlar) varsa, fare onlara her değdiğinde bu olay tekrar tekrar tetiklenir (bubbling denir).
    mouseenter: Fare öğenin sınırlarından içeri girdiği anda sadece bir kez çalışır. 
    Genellikle açılır menüler (dropdown) için daha güvenli ve stabildir. */

//.scrollIntoView() --> scrolls the page until the element can be visible
    cy.get('#user_email').type('user888@gmail.com')
    cy.get('#user_password').type('1234567890')
    cy.get('.next-1jphuq5').click();
    cy.wait(7000)
    cy.get('#go-to-the-course-homepage-widget > .next-1jphuq5').scrollIntoView();
    cy.wait(2000)
    cy.scrollTo('center')
    cy.wait(2000)
    cy.scrollTo('bottom');
//.screenshot()
    cy.wait(2000)
    cy.screenshot();
    cy.get('#open-navigation-menu-mobile').click();
    cy.get(':nth-child(12) > .next-bve2vl').scrollIntoView().click();
    cy.get('#user_password').type('1234')
    cy.wait(2000)
    cy.get('#user_password').screenshot();
//note: cy.screenshot() tüm sayfayı alırken, cy.get('selector').screenshot() sadece o öğeyi almayı hedefler. 
/* Eğer element tam kırpılmazsa, sayfa düzenindeki (CSS) katmanlar buna engel oluyor olabilir. */

  })
  
})