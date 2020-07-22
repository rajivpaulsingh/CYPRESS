Feature: Send Feedback

    As a customer
    I can send my feedback via the form

    Scenario: Submit Feedback Form
     Given I open the feedback page
     When I fill the feedback form
     And I click on send button
     Then I see "/sendFeedback.html" in the url