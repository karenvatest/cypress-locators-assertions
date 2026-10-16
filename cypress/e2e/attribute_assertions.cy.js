describe('Attribiute assertions practice', () =>{

    // TC_Basic_01: Check the current value of an input
    it('Should validate the value of an input field', () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('[data-testid="login-email"]').type('karen.qa@example.com').should('have.value', 'karen.qa@example.com');
    });
    // TC_Basic_02: Verify that an element has an attribute with the expected value.
    it('Should validate an attribute', () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('[data-testid="login-email"]').should('have.attr', 'type', 'email');
    });

    // TC_Basic_03: Check that a checkbox is selected
    it('Should validate a checkbox', () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('[data-testid="login-remember"]').check().should('be.checked');
    });

    // TC_Bacsic_04: Check whether an element allows interaction
    it('Should validate whether a button is enabled', () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('[data-testid="login-submit"]').should('be.enabled').and('be.visible');
    });

})