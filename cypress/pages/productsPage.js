export class productsPage{
    weblocators = {
        productSort:'.product_sort_container',
        productsList:'.inventory_list .inventory_item',
        productPrice:'.inventory_item_price',
        addToCart:'.btn.btn_primary.btn_small.btn_inventory',
        shoppingCartBtn:'.shopping_cart_link'
    }

    selectHighToLow(){
        cy.get(this.weblocators.productSort).select('Price (high to low)');
    };

    AddCheapestProduct(){
        cy.selectCheapest(this.weblocators.productsList,this.weblocators.productPrice,this.weblocators.addToCart)
    };

    AddSecondCostliestProduct(){
        cy.selectSecondCostliest(this.weblocators.productsList,this.weblocators.productPrice,this.weblocators.addToCart)
    };

    selectShoppingCart(){
        cy.get(this.weblocators.shoppingCartBtn).click();
    }
}