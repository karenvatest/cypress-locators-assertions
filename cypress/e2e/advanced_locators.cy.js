describe('Advanced locators', () =>{
    
    // TC_Basic_01: Verify elements by positions
    it('Should locate inputs by position', () => {
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('.card-body input').first().should('have.attr', 'id', 'login-email');
        cy.get('.card-body input').eq(1).should('have.attr', 'id', 'login-password');
        cy.get('.card-body input').last().should('have.attr', 'id', 'login-remember');
    });

    // TC_Basic_02: Verify .parent() + .find()
    it('Should locate input through its parent', () => {
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('#login-email').parent().find('input').should('have.attr', 'id', 'login-email');

    });

    // TC_Basic_03: Verify element into a colection
    it('Should validate the second input', () => {
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('.card-body input').eq(1)
        .should('have.attr', 'type', 'password')
        .and('be.visible');
    });

    // TC_Basic_04: Verify .first() vs. .last()
    it('Should validate the first vs last inputs', () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('.card-body input').first()
        .should('have.attr', 'type', 'email')
        .and('be.visible');
        cy.get('.card-body input').last()
        .should('have.attr', 'type', 'checkbox')
        .and('be.visible');
    });

    // TC_Basic_05: Verify locators and assertions
    it('Should validate the login form structure', () => {
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('.card-body').should('be.visible');
        cy.get('.card-body input').should('have.length', 3);
        cy.get('.card-body input').eq(1)
        .should('have.attr', 'type', 'password')
        .and('be.enabled');
        cy.get('.card-body input').last()
        .should('have.attr', 'type', 'checkbox')
        .and('be.visible');
    });
})