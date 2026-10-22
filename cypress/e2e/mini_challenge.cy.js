describe('Mini challenge: Assertions', () =>{

    it('Should validate Login with invalid credentials', () =>{
        cy.visit('https://qaplayground.com/bank/login');
        cy.get('[data-testid="login-username-input"]').should('be.visible').and('have.attr', 'type', 'text');
        cy.get('[data-testid="login-username-input"]').type('standard_user');
        cy.get('[data-testid="login-password-input"]').should('be.visible').and('have.attr', 'type', 'password');
        cy.get('[data-testid="login-password-input"]').type('1234456');
        cy.get('[data-testid="login-submit-btn"]').should('be.visible').and('be.enabled').and('have.text', 'Sign In').click();
        cy.get('[data-testid="login-error-message"]').should('contain', 'The username or password you entered is incorrect.');
        cy.get('[data-testid="dashboard-welcome-message"]').should('not.exist');
    });
    
});