const URL = 'http://zero.webappsecurity.com/feedback.html'
const NAME_INPUT = '#name'
const EMAIL_INPUT = '#email'
const SUBJECT = '#subject'
const COMMENT = '#comment'
const SUBMIT_BUTTON = 'input[name="submit"]'

class FeedbackPage {

    static visit() {
        cy.visit(URL)
    }

    static fillFeedbackForm() {
        cy.get(NAME_INPUT).type('random name')
        cy.get(EMAIL_INPUT).type('email@email.com')
        cy.get(SUBJECT).type('random subject')
        cy.get(COMMENT).type('random comment')
    }

    static submitFeedbackForm() {
        cy.get(SUBMIT_BUTTON).click()
    }
}

export default FeedbackPage