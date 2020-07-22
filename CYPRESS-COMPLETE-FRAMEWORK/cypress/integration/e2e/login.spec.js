import { url } from '../../../config'
import Navbar from '../../page-objects/components/Navbar'
import LoginPage from '../../page-objects/pages/LoginPage'
describe('Login Failed Test', () => {
    before(function() {
        cy.visit(url)
        Navbar.clickSignIn()
    })

    it('should try to login with invalid username and password', () => {
        LoginPage.login('invalid username', 'invalid password')
    })

    it('should display the error message', () => {
        LoginPage.displayErrorMessage()
    })
})

describe('Login Success Test', () => {
    before(function() {
        cy.visit(url)
        Navbar.clickSignIn()
    })

    it('should try to login with valid username and password', () => {
        LoginPage.login('username', 'password')
    })

    it('should login successfully', () => {
        LoginPage.loginSuccessful()
    })

    it('should logout successfully', () => {
        Navbar.logout()
        Navbar.displaySignInButton()
    })

})

