import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';
import { productsPage } from '../../../pages/productsPage';
import { checkoutPage } from '../../../pages/checkoutPage';
import { informationPage } from '../../../pages/informationPage';
import { overviewPage } from '../../../pages/overviewPage';
import { OrderCompletionPage } from '../../../pages/orderCompletionPage';
import testData from '../../../fixtures/testData.json'

const productspage = new productsPage();
const checkoutpage = new checkoutPage();
const infopage = new informationPage();
const overviewpage = new overviewPage();
const completionpage = new OrderCompletionPage();

Given("user logged into the application", async()=>{
    await cy.login(testData.login.username, testData.login.password);
});

When("the user sorts the products from high to low", ()=>{
    productspage.selectHighToLow();
});

And("the user adds the cheapest product to the basket", ()=>{
    productspage.AddCheapestProduct();
});

And("the user adds the second costliest product to the basket", async()=>{
    productspage.AddSecondCostliestProduct();
});

And("the user opens the basket", async()=>{
    productspage.selectShoppingCart();
});

And("the user checks out the basket", async()=>{
    checkoutpage.clickCheckOutButton();
});

And("the user enters the First Name, Last Name, and Zipcode, then clicks on continue", async()=>{
    infopage.enterFirstName();
    infopage.enterLastName();
    infopage.enterPostCode();
    infopage.clickContinue();
});

Then("the overview page is displayed with all the products", async()=>{
   overviewpage.verifyProducts();
});

When("the user clicks on the Finish button", async()=>{
   overviewpage.clickFinisBtn();
});

Then("the successful message is displayed with a Back Home button", async()=>{
    completionpage.verifySuccessMessage(testData.message.headerMessage, testData.message.headerText);
});