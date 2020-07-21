describe('Cypress .$ Function', () => {
    it('Expose jQuery element in the current window', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        
        const signInButton = Cypress.$('#signin_button')
        signInButton.click()
    })
})