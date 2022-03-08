Feature: login to Application

    As a valid user
    I want to login to Application

    Scenario: Valid login
     Given I visit login page
     When I submit login credentials
     Then I should see homepage