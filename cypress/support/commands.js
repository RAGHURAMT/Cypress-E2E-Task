// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="Cypress"/>

Cypress.Commands.add('login', (email, password)=>{
    cy.visit('');
    cy.get('#user-name').type(email);
    cy.get('#password').type(password);
    cy.get('#login-button').click();
});

Cypress.Commands.add('selectCheapest', (list, itemPrice, addToCart) => {
    const products = [];
    cy.get(list).each(($item) => {
        const priceText = $item.find(itemPrice).text();
        const price = parseFloat(priceText.replace('$', ''));
        products.push({ price, element: $item });
    }).then(() => {
        // Sort products to get the cheapest first
        products.sort((a, b) => a.price - b.price);
        // Click on the addToCart button of the cheapest product
        cy.wrap(products[0].element).find(addToCart).click();
    });
});

Cypress.Commands.add('selectSecondCostliest', (list, itemPrice, addToCart) => {
    const products = [];
    cy.get(list).each(($item) => {
        const priceText = $item.find(itemPrice).text();
        const price = parseFloat(priceText.replace('$', ''));
        products.push({ price, element: $item });
    }).then(() => {
        // Sort products to get the second costliest product
        products.sort((a, b) => b.price - a.price); // Sort descending for costliest
        // Click on the addToCart button of the second costliest product
        cy.wrap(products[1].element).find(addToCart).click();
    });
});


