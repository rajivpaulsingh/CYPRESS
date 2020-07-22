Feature: Login to Application

    As an invalid user
    I cannot login to the Application

    As a valid user
    I want to login to the Application


    Scenario: Invalid login
     Given I open the login page
     And I want to wait for 2000 milliseconds
     And I see "Zero - Log in" in the title
     And I see "/login" in the url
     When I fill username with "invalid"
     And I fill password with "invalid"
     And I click on submit button
     Then I should see the error message

    # @focus 
    Scenario: Valid Login
     Given I open the login page
     # When I submit the login form
     When I fill username with "username"
     And I fill password with "password"
     And I click on submit button
     Then I should see the homepage