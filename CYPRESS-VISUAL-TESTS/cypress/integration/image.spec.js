describe('Visual Regression', () => {
    it('should perform the visual snapshot test', () => {
        //load website
        cy.visit('http://example.com')
        //compare snapshots
        cy.matchImageSnapshot()
    })
})

describe('Single Element Snapshot', () => {
    it('should match a single element on the page', () => {
        //load website
        cy.visit('http://example.com')
        //compare snapshots
        cy.get('h1').matchImageSnapshot()
    })
})