/// <reference types="cypress" />

 
class login_page {

    elements = {

        userNameField: () => cy.get('[data-test=username]'),
        passwordField: () => cy.get('[data-test=password]'),
        submitButton: () => cy.get('[data-test=login-button]'),
        successLoginTittleValidation: () => cy.get('[data-test=title]'),
        invalidLoginValidation: () => cy.get('[data-test=error]')
    }


    visit() {
        cy.visit("/")


    }


    performLogin(email = Cypress.env("user_mail"), password = Cypress.env("user_password")) {
        cy.fillInput(this.elements.userNameField(), email)
        cy.fillInput(this.elements.passwordField(), password)
        this.elements.submitButton().click()

        /*        this.elements.userNameField().clear().click().type("something")
               this.elements.userNameField().clear().click() */
    }

    validateSuccess() {

        this.elements.successLoginTittleValidation().should("exist").and("have.text", "Products")
    }

    validateFail() {

        this.elements.invalidLoginValidation().should("exist").and("have.text", "Epic sadface: Username and password do not match any user in this service")
    }

}

export default new login_page();