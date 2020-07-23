describe('Cypress Tests with Docker', () => {
    it('should load the website', () => {
        cy.visit('http://www.example.com')
    })

    it('should load h1 element', () => {
        cy.get('h1').should('be.visible')
    })
})