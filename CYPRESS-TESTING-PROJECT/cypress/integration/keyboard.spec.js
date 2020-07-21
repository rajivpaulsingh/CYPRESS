describe('Keyboard Press Simulation', () => {
    it('should submit search box with pressing enter', () => {
        cy.visit('http://zero.webappsecurity.com/index.html');
        cy.get('#searchTerm').type('just some text {enter}');
    })
})