import latihanPage from '../../../page/latihanPage'
const page = new latihanPage();

describe('Input & Check',()=>{
    it.only('Input & Verify List Option',()=>{
        const dataArray = [
             {
                 quote : 'You Can do it!!!',
                 color : 'white'
              
             },
             {
                 quote : 'Quote 1',
                 color : 'White'
             
             },
             {
                 quote : 'Quote 2',
                 color : 'Yellow'
              
             },
             {
                 quote : 'Quote 3',
                 color : 'Cyan'
            
             },
             {
                 quote : 'Quote 4',
                 color : 'Magenta'
              
             },
             {
                 quote : 'Quote 5',
                 color : 'Blue'
                 
             },
             
         ]
        page.visitPage();
        page.inputData(dataArray);
        page.clickTabelView();
        page.hoverTabelView();
        page.tabelIsVisible();
        page.verifyQuote(dataArray);
        page.verifyColor(dataArray);

    })
})