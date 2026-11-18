beforeEach (() => {
    cy.visit('/')
})

it('/ renders home page', () => {
    cy.get ('p').should ('be.visible');
});

it('should render the nav with links on load', () => {
    cy.get ('nav') .should('be.visible')
    cy.get ('nav') .children() .should('have.length', 2)
});