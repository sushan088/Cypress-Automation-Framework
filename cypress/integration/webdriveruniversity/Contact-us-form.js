/// <reference types="Cypress" />


describe("Test Contact Us Page from webdriveruniversity.com", () =>{
    it("should be able to submit a successful submission through contact us form", () =>{
        //all cypress code go here
        // cy.visit("https://webdriveruniversity.com/")
        // cy.get('#contact-us').click() 
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.document().should('have.property','charset').and('eq','UTF-8')
        cy.title().should('include','WebDriver | Contact Us')
        cy.url().should('include','/Contact-Us/contactus')
        cy.get('[name="first_name"]').type('Jamie')
        cy.get('[name="last_name"]').type('Houlder')
        cy.get('[name="email"]').type('abc@gmail.com')
        cy.get('textarea.feedback-input').type('Comment Section text written')
        // cy.get('[type="reset"]')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')


    })

    // it.only("should not be able to submit a successful submission through contact us form", () =>{
    // .only will run the specific test only when used.
    
    it("should not be able to submit a successful submission through contact us form", () =>{
        //all cypress code go here
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Jamie')
        cy.get('[name="last_name"]').type('Houlder')
        // cy.get('[name="email"]').type('abc@gmail.com')
        cy.get('textarea.feedback-input').type('Comment Section text written')
        // cy.get('[type="reset"]')
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required')

    })

})