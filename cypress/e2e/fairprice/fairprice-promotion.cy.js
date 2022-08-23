describe("Validate Fairprice",()=>{
    it('visit fairprice',()=>{
        cy.viewport(1280, 720)
        cy.visit('/')
        cy.get("[data-name=Promotions]").click();
        // cy.wait(10000)
        cy.get("[data-testid=tagOption-pwp]").should("be.visible")
        cy.get("[data-testid=tagOption-weekly-deals]").should("be.visible")
        cy.get("[data-testid=tagOption-digital-club-exclusive]").should("be.visible")
        cy.get("[data-testid=tagAll]>button>span").click()
        cy.get("[data-testid=tagOption-pwp]>button>span").click()
        cy.get("[data-testid=tagOption-pwp]>button>span").click()
        // cy.wait(1000)
        cy.get("[data-testid=product]>div>span:first-child").each((element)=>{
            cy.wrap(element).should('text','PWP')
        })
        

    })
})