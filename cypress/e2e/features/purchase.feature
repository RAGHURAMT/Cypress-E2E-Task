Feature: Purchasing the product

As a user
I want to search for the product and purschase it

Background: User logged into the application
    Given user logged into the application

Scenario: Verify user is able to purchase the product
    When the user sorts the products from high to low
    And the user adds the cheapest product to the basket
    And the user adds the second costliest product to the basket
    And the user opens the basket
    And the user checks out the basket
    And the user enters the First Name, Last Name, and Zipcode, then clicks on continue
    Then the overview page is displayed with all the products
    When the user clicks on the Finish button
    Then the successful message is displayed with a Back Home button