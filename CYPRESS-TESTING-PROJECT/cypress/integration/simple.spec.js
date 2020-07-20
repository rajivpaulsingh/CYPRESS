describe('My first simple test with Cypress', () => {
    it('True should be True', () => {
        expect(true).to.equal(true);
    })

    it('5 should be 5', () => {
        expect(5).to.equal(5);
    })
})

describe('Another block', () => {
    it('False should be False', () => {
        expect(false).to.equal(false);
    })

    it('0 should be 0', () => {
        expect(0).to.equal(0);
    })
})

describe('Open browser', () => {
    it('should load the correct url', () => {
        cy.visit('http://example.com',
        {
            timeout: 10000
        });
    })

    it('should check correct url', () => {
        cy.url().should('include', 'example.com');
    })

    // it('should pause', () => {
    //     cy.pause();
    // })

    it('implicit wait', () => {
        cy.wait(2000);
    })

    it('should check for correct element on the page', () => {
        cy.get('h1').should('be.visible');
    })
})