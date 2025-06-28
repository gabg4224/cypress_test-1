
/// <reference types="cypress" />

Cypress.Commands.add("fillInput",(selector,value)=>{

    selector.should("be.visible").clear().type(value)


})