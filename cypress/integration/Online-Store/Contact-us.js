// <reference types="Cypress" />

describe("Test contact us form through Automation test store",()=>{
    it("Should be able to submit a successful submission via contact us form",()=>{
        cy.visit('https://www.automationteststore.com/')
        // cy.get('#footer > footer > section.footerlinks > div > div.pull-left > div > ul > li:nth-child(5) > a').click()
        //cy.xpath("//a[contains(@href,'contact')]").click()
        cy.get("a[href$='contact']").click() //optimized selector version
        cy.get('#ContactUsFrm_first_name').type('john')
        cy.get('#ContactUsFrm_email').type('john@txt.com')
        cy.get('#ContactUsFrm_email').should('have.attr','name','email')
        cy.get('#ContactUsFrm_enquiry').type('Random text')
        // cy.get('.col-md-6 > .btn').click()
        cy.get("button[title='Submit']").click() // optimized selector version
        cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')
    })
})

//a[contains(@href,'contact')]