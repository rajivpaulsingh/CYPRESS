const URL = 'http://zero.webappsecurity.com/login.html';
const USERNAME = '#user_login'
const PASSWORD = '#user_password'
const SUBMIT_BUTTON = 'input[type="submit"]'
const ERROR_MESSAGE = '.alert-error'

class LoginPage{
    
    static visit() {
        cy.visit(URL)
    }

    static fillUsername(name) {
        cy.get(USERNAME).type(name)
    }

    static fillPassword(password) {
        cy.get(PASSWORD).type(password)
    }

    static submit() {
        cy.get(SUBMIT_BUTTON).click()
    }

    static shouldShowErrorMessage() {
        cy.get(ERROR_MESSAGE).contains('Login and/or password are wrong')
    }
}

export default LoginPage