class latihanPage {
    visitPage() {
        return cy.visit('/');
    }
    inputData(dataArray){
        for(let i = 1; i < dataArray.length; i++) {
            cy.get('#inputQuote')
            .type(dataArray[i].quote)
            cy.get('#colorSelect').select(dataArray[i].color);
            cy.get("#buttonAddQuote").click();

    
        }
    }
    clickTabelView(){
        cy.get('#tableView').click();
    }

    hoverTabelView (){
        cy.get('#buttonShowTable').trigger('mouseover')
    }
    tabelIsVisible (){
        cy.get('#tableQuote').should('be.visible')
    }

    verifyQuote (dataArray) {
        cy.get('[name=tableRow] [name=tableColumnQuote]').each((data,index)=>{
            cy.wrap(data).invoke('text')
            .should('eq',dataArray[index].quote)
            
        })
    }
    
    verifyColor (dataArray) {
        cy.get('[name=tableRow] [name=tableColumnColor]').each((data,index)=>{
            cy.wrap(data).invoke('text')
            .should('eq',dataArray[index].color)
            
        })
    }

}

export default latihanPage