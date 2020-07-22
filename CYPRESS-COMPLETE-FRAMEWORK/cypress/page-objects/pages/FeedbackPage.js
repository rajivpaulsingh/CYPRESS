import BasePage from "../BasePage";

export default class FeedbackPage extends BasePage {
    static load() {
        cy.visit('http://zero.webappsecurity.com/feedback.html')
    }

    static submitFeedback() {
        cy.fixture('feedback').then(data => {
            // const name = data.name
            // const email = data.email
            // const subject = data.subject
            // const message = data.message

            cy.get('#name').type(data.name)
            cy.get('#email').type(data.email)
            cy.get('#subject').type(data.subject)
            cy.get('#comment').type(data.message)
            cy.contains('Send Message').click()
        })
    }

    static feedbackSubmitSuccessful() {
        cy.url().should('contain', '/sendFeedback.html')
    }
}