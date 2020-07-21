describe('Transfer Funds Verification Test', () => {
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

    it('should fill the transfer funds form', () => {
        cy.get('#transfer_funds_tab').click();
        cy.get('#tf_fromAccountId').select('2');
        cy.get('#tf_toAccountId').select('4');
        cy.get('#tf_amount').type('1000'); 
        cy.get('#tf_description').type('random description');
        cy.get('#btn_submit').click();
    })

    it('should verify correct data', () => {
        cy.get('#tf_fromAccountId').should('have.value', 'Checking');
        cy.get('#tf_toAccountId').should('have.value', 'Loan');
        cy.get('#tf_amount').should('have.value', '1000');
    })

})