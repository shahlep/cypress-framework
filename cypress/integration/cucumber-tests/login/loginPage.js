import cypress from "cypress"

const URL = 'https://www.saucedemo.com/'
const USERNAME = '#user-name'
const PASSWORD = '#password'
const SUBMIT = '#login-button'

class LoginPage {
    //visit page
    static visit(){
        cy.visit(URL)
    }
    //username
    static username(){
        cy.get(USERNAME).type('username')
    }
    //password
    static password(){
        cy.get(PASSWORD).type('password')
    }
    //submit
    static submit(){
        cy.get(SUBMIT).click()
    }

}

export default LoginPage