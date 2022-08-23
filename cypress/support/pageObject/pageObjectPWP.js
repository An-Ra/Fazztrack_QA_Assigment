const {pageLocator} = require('../locator/locator')

class pageObjectPWP {
    async viewport(type) {
        return cy.viewport(type)
    };
    async visit(path){
        cy.visit(path);
        return cy.url().should('eq','https://www.fairprice.com.sg/')
    }
    async clickMenuPromotion(){
        return cy.get(pageLocator.menuPromotion).click();
    }
    async categoryPWPisVisible(){
        return cy.get(pageLocator.categoryPWP).should('be.visible')
    }
    async categoryWeeklyDealsisVisible(){
        return cy.get(pageLocator.categoryWeeklyDeals).should('be.visible')
    }
    async categoryDCEisVisible(){
        return cy.get(pageLocator.categoryDCE).should('be.visible')
    }
    async clickCategoryAll() {
        return cy.get(pageLocator.categoryAll).click();
    }
    async clickCategoryPWP() {
        return cy.get(pageLocator.categoryPWP).click()
    }
    async verifyLabelPWP(label) {
        cy.get(pageLocator.labelPWP).each((element)=>{
            cy.wrap(element).should('text',label)
        })
    }
}

module.exports = pageObjectPWP ;
// cy.viewport(1280, 720)
// cy.visit('/')
// cy.get("[data-name=Promotions]").click();
// // cy.wait(10000)
// cy.get("[data-testid=tagOption-pwp]").should("be.visible")
// cy.get("[data-testid=tagOption-weekly-deals]").should("be.visible")
// cy.get("[data-testid=tagOption-digital-club-exclusive]").should("be.visible")
// cy.get("[data-testid=tagAll]>button>span").click()
// cy.get("[data-testid=tagOption-pwp]>button>span").click()
// cy.get("[data-testid=tagOption-pwp]>button>span").click()
// // cy.wait(1000)
// cy.get("[data-testid=product]>div>span:first-child").each((element)=>{
//     cy.wrap(element).should('text','PWP')
// })