describe('Write/Read Data to JSON/Text file', () => {
    it('should write data into JSON', () => {
        cy.writeFile('log.json', { name: "Rajiv Singh", age: 35 })
    })

    it('should write data to the text file', () => {
        cy.writeFile('log.txt', 'Hello world')
    })

    it('should read and verify data from JSON file', () => {
        cy.readFile('log.json')
            .its('age')
            .should('eq', 35)
    })

    it('should read and verify data from text file', () => {
        cy.readFile('log.txt')
            .should('eq', 'Hello world')
    })
})