export class OrderCompletionPage{
    weblocators = {
        header:'.complete-header',
        headerText:'.complete-text',
        btnBackHome:'#back-to-products'
    }

    verifySuccessMessage(header, headertext){
        cy.get(this.weblocators.header).should('contain', header);
        cy.get(this.weblocators.headerText).should('contain', headertext);
        cy.get(this.weblocators.btnBackHome).should('be.visible');
    }

}


