const { faker } = require('@faker-js/faker');
export class informationPage{
    weblocators = {
        firstName:'#first-name',
        lastName:'#last-name',
        postalCode:'#postal-code',
        continueBtn:'#continue'
    }

    enterFirstName(){
        cy.get(this.weblocators.firstName).type(faker.name.firstName());
    };

    enterLastName(){
        cy.get(this.weblocators.lastName).type(faker.name.lastName());
    };

    enterPostCode(){
        cy.get(this.weblocators.postalCode).type(faker.address.zipCode());
    }

    clickContinue(){
        cy.get(this.weblocators.continueBtn).click();
    }
}   