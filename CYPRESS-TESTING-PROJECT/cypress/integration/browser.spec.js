describe('Browser actions test', () => {
    it('should load books website', () => {
        cy.visit('http://books.toscrape.com/index.html', { timeout: 10000 });
        cy.url().should('include', 'index.html');
        cy.log('Website loaded'); //logs
    })

    it('should click on Travel category', () => {
        cy.get('a')
            .contains('Travel')
            .click();
        cy.get('h1').contains('Travel')    
    })

    //Validating count of elements on the page
    it('should display correct number of books', () => {
        cy.get('.product_pod')
            .its('length')
            .should('eq', 11);
    })

    //Check price of Olio book
    it('should validate the price of the book', () => {
        cy.get('a')
            .contains('Poetry')
            .click();
        cy.get('a')
            .contains('Olio')
            .click();
        cy.get('.price_color').contains('£23.88');     
        
        //Browser reload
        cy.log('Before reload');
        cy.reload();
        cy.log('After reload');
    })

    //Assert browser content type
    it('should verify browser content', () => {
        cy.visit('https://www.example.com')
        cy.document()
            .its('contentType')
            .should('eq', 'text/html')

        cy.document()
            .should('have.property', 'charset')
            .and('eq', 'UTF-8')
    })
        
})