describe('Visual Regression Testing with Cypress and Percy', () => {
    it('should take percy snapshot', () => {
        cy.visit('http://example.com')
        cy.wait(2000)
        cy.percySnapshot()
    })
})