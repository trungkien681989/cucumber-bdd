# Cypress cucumber with application actions [![Circle CI](https://circleci.com/gh/cypress-io/cypress-example-todomvc.svg?style=svg)](https://circleci.com/gh/cypress-io/cypress-example-todomvc) [![Build status](https://ci.appveyor.com/api/projects/status/6wjyoye82orkkyny/branch/master?svg=true)](https://ci.appveyor.com/project/cypress-io/cypress-example-todomvc/branch/master)

This repo contains an example of automation testing written in Cypress v9 and cypress-cucumber-preprocessor package which supports BDD feature files. 

The tests are written to verify basic functions of https://google.com website.

## Project structure

This project follows [cypress structure](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Folder-structure) and [cypress-cucumber-preprocessor structure](https://www.npmjs.com/package/cypress-cucumber-preprocessor#how-to-organize-the-tests). Besides, some key utility files and directories are explained as below:

```
📦cypress
 ┣ 📂fixtures
 ┃ ┗ 📜<test-data>.json            ---> normal test data for the cy.fixture() method
 ┣ 📂integration
 ┃ ┣ 📂common
 ┃ ┣ 📂ui
 ┃ ┃ ┣ search-google
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📜search-google.feature
 ┣ 📂plugins
 ┃ ┗ 📜index.js
 ┣ 📂support
 ┃ ┣ 📜commands.js
 ┃ ┣ 📜cucumber-html-report.js     ---> generate report helper
 ┃ ┣ 📜element-store.js            ---> store all elements locator for cy.get() or cy.xpath() method
 ┃ ┗ 📜index.js
 ┗ 📜.eslintrc.json
```

This project presents following tests:
- Testing UI in `cypress/integration/ui/search-google.feature`

## Installation

The steps below will take you all the way through setup and running the tests. You will also need to clone the repo and have a basic understanding of [Git](https://en.wikipedia.org/wiki/Git).

### 1. Install Node.js

[Node.js download](https://nodejs.org/en/download/)

### 2. Installing node_modules
```npm install```

## Run Test

### 1. Open Cypress and select a test to run
```npm run cypress:open```

### 2. Run all tests (headless)
```npm run cypress:run```

### 3. Run tests based on test type (headless)
```npm run cypress:smoke-ui```

```npm run cypress:regression-ui```

## Generate HTML Report

After running your test scenarios, folder 'cypress/cucumber-json' will be generated along with cucumber.json results. Based on these files, you can generate a HTML summary report.

### 1. Generate HTML summary report
```npm run generate-html-report```

### 2. Open HTML summary report
Open 'index.html' in folder 'reports/cucumber-htmlreport.html'

<img width="1389" alt="html-summary-report" src="https://user-images.githubusercontent.com/49904115/217043051-92a172c2-b2dc-4b82-bbe9-1774943d7edd.png">

## Help!
**If you get stuck, here is more help:**

* [Install Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress)
* [Setup cypress-cucumber-preprocessor](https://www.npmjs.com/package/cypress-cucumber-preprocessor)
* [Gitter Channel](https://gitter.im/cypress-io/cypress)
* [Cypress Docs](https://on.cypress.io)
* [Cypress CLI Tool Docs](https://docs.cypress.io/guides/guides/command-line)
