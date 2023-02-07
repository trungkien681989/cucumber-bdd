import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('I am on the Google home page', () => {
  cy.clearLocalStorage();
  cy.clearCookies();
  cy.openGoogleHomePage();
});
