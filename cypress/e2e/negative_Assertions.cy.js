describe('Negative Assertions practice', () =>{

    // TC_01: Verify that the element does not exist in the DOM.
    it('Should verify that a success message does not exist initially', () => {
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('[data-testid="login-success"]').should('not.exist');
    });

    // TC_02: Verify that the element exists, but it is not visible.
    it('Should verify that an element is not visible', () => {
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('[data-testid="login-success"]').should('exist').and('not.be.visible');
    });

    // TC_03: Verify that the checkbox is not selected.
    it('Should verify that a checkbox is not selected', () => {
        cy.visit('https://www.qapractice.com/practice-login-form');
        cy.get('[data-testid="login-remember"]').should('not.be.checked');
    });

    // TC_04: Verify that the element is disabled.
    it('Should verify that a disabled button cannot be enabled', () => {
        cy.visit('https://qapracticehub.com/?utm_source=chatgpt.com#buttons');
        cy.get('[data-testid="btn-disabled"]').should('not.be.enabled');
    });

    // TC_05: Verify negative assertions
    it('Should verify combining negative assertions', () => {
        cy.visit('https://qapracticehub.com/?utm_source=chatgpt.com#buttons');
        cy.get('[data-testid="btn-disabled"]').should('be.visible').and('not.be.enabled');
        cy.get('[data-testid="btn-primary"]').should('not.have.text', 'Primary').and('be.visible');
    });
})