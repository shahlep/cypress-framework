import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'


Given('I visit login page',()=>{
    cy.visit('https://www.saucedemo.com/')
})

When('I submit login credentials',()=>{
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
})

Then('I should see homepage',()=>{
    cy.url().should('contain','inventory.html')
})