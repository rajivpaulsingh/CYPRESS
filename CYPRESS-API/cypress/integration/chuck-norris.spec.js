///<reference types = "Cypress" />

describe('Chuck Norris API Test', () => {
    

    it('API Test - Validate Response Code', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.chucknorris.io/jokes/random',
        }).as('chuck')
        cy.get('@chuck')
            .its('status')
            .should('equal', 200)
    })
})