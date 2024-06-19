# Cypress-E2E-Task

# Prerequisites
Install the following:
Node.js and npm (version)
Cypress (version)

# Setup:
1. Import the project from github using the follow:
    a. Using terminal - git clone https://github.com/RAGHURAMT/Cypress-E2E-Task.git
    b. Using vs code - Open command palette -> Search for git: Clone -> enter the git url https://github.com/RAGHURAMT/Cypress-E2E-Task.git

2. Open Terminal in project location and run the following commands:
    1. npm install
    2. npm install cypress --save-dev  
    3. npm i -D cypress cypress-cucumber-preprocessor
    4. npm install --save-dev cypress-cucumber-preprocessor
    5. npx cypress open
    6. npm i --save-dev cypress-mochawesome-reporter

3. To run the tests:
    <!-- To run all the spec files -->
    npx cypress run 
    <!-- To run a specific spec file -->
    npx cypress run --spec cypress/e2e/features/purchase.feature
    <!-- To run from cypress -->
    npx cypress open
    <!-- To run specific tests-->
    npm run test:purchaseFlow   

4. Cypress Configuration
    Please verify the following files on github and update your files accordingly:
    a. package.json
    b. support -> commands.js
    c. support -> e2e.js
    d. cypress.config.js

# Folder Structure
Cypress-E2E-Task/
│
├── .githib/
│   ├── workflows/
│         └── purchaseFlow.yml
├── cypress/
│   ├── e2e/
│   │   ├── features/
│   │   │   └── purchase.feature
│   │   └── step_definitions/
│   │       └── purchase/
│   │           └── purchaseSteps.js
│   ├── fixtures/
│   │   └── testData.json
│   ├── pages/
│   │   └── checkoutPage.js
│   │   └── informationPage.js
│   │   └── orderCompletionPage.js
│   │   └── overviewPage.js
│   │   └── productsPage.js
│   └── support/
│       └── commands.js
│       └── e2e.js
├── node_modules/
├── cypress.config.js
├── package.json
└── ... other files

# Test Files
purchase.feature: Test scenarios related to purchase flow
purchaseSteps.js: Test steps related to purchase flow feature file

# Reports and Artifacts
Mochawesome HTML reports: cypress/reports/html
Screenshots on failure: cypress/screenshots
videos on all runs: cypress/videos

# github actions
Created purchaseFlow.yml under .github/workflows to automatically trigger the tests on every push. We can check the runs under github Actions tab.

# Slack integration
Integrated with the Slack to share the test reports on a Slack channel on every run.
Note: 
1. Please note that tests will fill on the github actions tab if you miss to add your Slack webhook under Settings -> Security -> Actions
2. If you dont like to do the slack integration, please comment the Slack Notification block in purchaseFlow.yml