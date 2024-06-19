export class checkoutPage{
    weblocators = {
        checkoutBtn:'#checkout',
    }

    clickCheckOutButton(){
        cy.get(this.weblocators.checkoutBtn).click();
    };
}   