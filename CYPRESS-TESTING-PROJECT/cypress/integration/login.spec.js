describe('Working with inputs', () => {

    it('should load login page', () => {
        cy.visit('http://zero.webappsecurity.com/login.html');
        cy.title().should('include', 'Zero - Log in')
    })
    it('should fill username', () => {
        // cy.get('#user_login').clear();
        // cy.get('#user_login').type('Some Invalid Name');

        cy.get('#user_login').as('username'); //aliases
        cy.get('@username').clear();
        cy.get('@username').type('Some Invalid Name');
    })

    it('should fill password', () => {
        cy.get('#user_password').clear();
        cy.get('#user_password').type('Some Invalid password');
    })

    it('should click the checkbox', () => {
        cy.get('input[type="checkbox"]').click();
    })

    it('should submit login button', () => {
        cy.contains('Sign in').click();
    })

    it('should display error', () => {
        //multiple assertions in a single line
        cy.get('.alert-error')
            .should('be.visible')
            .and('contain', 'Login and/or password are wrong.');
        
        //Clearing cookies and local storage
        cy.clearCookies({ log: true});
        cy.clearLocalStorage('your item', { log: true});
    })
    
    it('should override the current time', () => {
        const date = new Date(2020, 5, 15).getTime(); //returns a time stamp
        cy.clock(date);
        cy.log(date);
    })
})