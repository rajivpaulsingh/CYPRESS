import { Given, When, Then, when } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './LoginPage'

Given('I open the login page', () => {
    // cy.visit('http://zero.webappsecurity.com/login.html')
    LoginPage.visit()
})

// When('I submit the login form', () => {
//     // cy.get('#user_login').type('username')
//     // cy.get('#user_password').type('password')
//     // cy.get('input[name="submit"]').click()
//     LoginPage.fillUsername('username')
//     LoginPage.fillPassword('password')
//     LoginPage.submit()
// })

When('I fill username with {string}', username => {
    LoginPage.fillUsername(username)
})

When('I fill password with {string}', password => {
    LoginPage.fillPassword(password)
})

When('I click on submit button', () => {
    LoginPage.submit()
})

Then('I should see the homepage', () => {
    cy.get('#account_summary_tab').should('be.visible')
})

Then('I should see the error message', () => {
    LoginPage.shouldShowErrorMessage();
})