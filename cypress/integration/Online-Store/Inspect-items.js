/// <reference types="Cypress" />

describe("Inspect Automation Items using chain of command", () => {
    it("Click on the first item using item header", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()
    })

    it("Click on the first item using item text", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()
    })

    it.only("Click on the first item using item index", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
        cy.xpath("//a[text()='Home']").click()
        cy.url().should('include','')
        // cy.get('.fixed_wrapper').find('.prdocutname').eq(6).click()
    })
})
    