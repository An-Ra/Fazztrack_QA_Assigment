class ExamplePage {
    inputQuote(quote){
        cy.get('#inputQuote')
        .type(quote)
    }
    selectColor(option){
        cy.get('#colorSelect').select(option);
    }

    clickButton(){
        cy.get("#buttonAddQuote").click();
    }

    verifyContent (arrayi) {
        cy.get('p[name=quoteText]').then($listQuote =>{
            for(let j=0;j<arrayi.length;j++){
               expect($listQuote.eq(j+1)).to.contain(arrayi[j])
               
            }
        })
    }
    clickTabelView () {
        cy.get('#tableView').click();
    }
    hoverTabelView() {
    cy.get('#buttonShowTable').trigger('mouseover')
    } 
}

export default ExamplePage