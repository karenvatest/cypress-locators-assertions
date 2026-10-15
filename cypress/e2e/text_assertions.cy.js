describe('Text Assertions practice', () =>{
    // TC_Basic_01: Verify the exact text, including spaces and line breaks.
    it("Should validate an exact message", () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('[data-testid="login-email"]').type('user@premiumbank.com');
        cy.get('[data-testid="login-password"]').type('Bank@123');
        cy.get('[data-testid="login-submit"]').click();
        cy.get('#login-success').should('have.text', 'Login Successful! Welcome to Premium Banking.');
    });

    // TC_Basic_02: Verify that the element may contain additional text.
    it("Should validate partial text", () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('[data-testid="login-email"]').type('user1@premiumbank.com');
        cy.get('[data-testid="login-password"]').type('Bank@1');
        cy.get('[data-testid="login-submit"]').click();
        cy.get('#login-error').should('contain', 'Invalid email id and password');
    });

    // TC_Basic_03: Verify that a piece of text is present.
    it("Should validate a piece of text", () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('[data-testid="login-email"]').type('user@premiumbank.com');
        cy.get('[data-testid="login-password"]').type('Bank@123');
        cy.get('[data-testid="login-submit"]').click();
        cy.get('#login-success').should('include.text', 'Welcome to Premium Banking');
    });

    // TC_Basic_04: Verify that the text is correct, but the capitalization may vary.
    it("Should validate text case-insensitively", () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('[data-testid="login-email"]').type('user1@premiumbank.com');
        cy.get('[data-testid="login-password"]').type('Bank@1');
        cy.get('[data-testid="login-submit"]').click();
        cy.get('#login-error').invoke('text').should('match', /Invalid email id and password/i);
    });

    // TC_Basic_05: Verify an exact message, paying attention to the blank spaces.
    it('Should validate exact text including spaces', () =>{
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('[data-testid="login-submit"]').click();
        cy.get('#login-error').should('have.text', 'Email and Password are required');
    });

});