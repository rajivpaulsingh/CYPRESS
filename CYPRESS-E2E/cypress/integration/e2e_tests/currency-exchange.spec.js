describe('Currency Exchange Test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html');
        cy.get('#signin_button').click();

        cy.fixture('user').then(user => {
            const username = user.id
            const password = user.pwd

            cy.get('#user_login').type(username);
            cy.get('#user_password').type(password);
            cy.get('#user_remember_me').click();
            cy.contains('Sign in').click();
        })
        cy.get('ul.nav-tabs').should('be.visible');
    })

    it('should fill the conversion form', () => {
        cy.get('#pay_bills_tab').click();
        cy.contains('Purchase Foreign Currency').click();
        cy.get('#pc_currency').select('GBP');
        cy.get('#pc_amount').type('3300');
        cy.get('#pc_inDollars_true').click(); 
        cy.get('#pc_calculate_costs').click() 
    })

    it('should display conversion amount', () => {
        cy.get('#pc_conversion_amount').should(
            'contain',
            '1947.82 pound (GBP) = 3300.00 U.S. dollar (USD)'
        )
    })

})