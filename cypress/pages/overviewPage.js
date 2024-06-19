export class overviewPage{
    weblocators = {
        btnFinish:'#finish',
        cartItems:'.cart_list .cart_item'
    }

    verifyProducts(){
        cy.get(this.weblocators.cartItems).should('have.length', 2);
    }

    clickFinisBtn(){
        cy.get(this.weblocators.btnFinish).click();
    };
}