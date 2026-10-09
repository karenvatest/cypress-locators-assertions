describe("Locators Practice", () =>{

    // TC_Basic_01: Verify basic locators
    it('Should display login form elements', () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('[data-testid="login-email"]').should('be.visible');
        cy.get('[data-testid="login-password"]').should('be.visible');
        cy.get('[data-testid="login-remember"]').should('be.visible').and('be.enabled');
        cy.get('[data-testid="login-submit"]').should('be.visible').and('be.enabled');
    });

    // TC_Basic_02: Verify locator and number of elements
    it('Should find exactly one login button', () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('[data-testid="login-submit"]').should('exist').and('have.length', 1);
    });

    // TC_Basic_03: Verify locators by attribute
    it('Should find input has the correct type', () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('input[type="email"]').should('be.visible').and('have.attr', 'type', 'email');
    });

    // TC_Basic_04: Verify locator by text
    it('Should find the Sign in button by text', () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.contains('button', 'Sign in').should('be.visible').and('be.enabled');
    });

    // TC_Basic_05: Verify locator combine
    it('Should locate the Sign in button', () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('.card-body').find('[data-testid="login-submit"]').should('be.visible').and('be.enabled');
    });

    // TC_Basic_06: Verify the quantity of the element
    it('Should locate exactly two text inputs', () => {
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('.card-body').find('input[type="email"], input[type="password"]').should('have.length', 2);
    });

});