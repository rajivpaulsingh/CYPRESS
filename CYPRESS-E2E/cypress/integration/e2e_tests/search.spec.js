describe('Search box Test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html');
    })

    it('should type into the search box and submit by pressing enter', () => {
        cy.get('#searchTerm').type('just some text {enter}');
    })

    it('should show search results page', () => {
        cy.get('h2').contains('Search Results:');
    })
})