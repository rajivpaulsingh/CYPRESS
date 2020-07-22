import { Given, When, Then, when } from 'cypress-cucumber-preprocessor/steps'
import FeedbackPage from './FeedbackPage'

Given('I open the feedback page', () => {
    FeedbackPage.visit()
})

When('I fill the feedback form', () => {
    FeedbackPage.fillFeedbackForm()
})

When('I click on send button', () => {
    FeedbackPage.submitFeedbackForm()
})