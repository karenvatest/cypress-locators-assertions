describe('Collection Assertions practice', () =>{

    // TC_Basic_01: Verify how many elements exist.
    it('Should validate the number of inputs', () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('.card-body input').should('have.length', 3);
    });

    // TC_Basic_02: Verify iterate through each element of a collection
    it('Should traverse a collection', () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('.card-body input')
        .should('have.length', 3).each(($input) =>{
            cy.wrap($input).should('be.visible');
        });
    });

    // TC_Basic_03: Verify that the attribute exists
    it('Should validate a collection by attribute', () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('.card-body input')
        .should('have.length', 3).each(($input) =>{
            cy.wrap($input).should('have.attr', 'type');
        });
    });

    // TC_Basic_04: Verify the expected type of each input.
    it('Should validate the types in a collection', () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('.card-body input').should('have.length', 3);
        cy.get('.card-body input').eq(0).should('have.attr', 'type', 'email').and('be.visible');
        cy.get('.card-body input').eq(1).should('have.attr', 'type', 'password').and('be.visible');
        cy.get('.card-body input').eq(2).should('have.attr', 'type', 'checkbox').and('be.visible');
    });

    // TC_Basic_05: Verify combine collections and attributes
    it('Should combine collections and attributes', () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('.card-body input').should('have.length', 3);
        cy.get('input[type="password"]').should('have.length', 1).and('be.visible');
    });
});