import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import { search, searchResults } from '../../../support/element-store';

When('I search for {string}', (searchValue) => {
  cy.get(search.searchInputText).first().should('be.visible').clear();
  cy.get(search.searchInputText).first().should('be.visible').click()
    .type(`${searchValue}{enter}`);
});

Then('I expect search results shows {string}', (searchResult) => {
  cy.get(searchResults.resultText).contains(searchResult).should('be.visible');
});

Then('I expect search results shows correct for the searched topics', () => {
  cy.fixture('search').then((searches) => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < searches.length; i++) {
      cy.clearLocalStorage();
      cy.clearCookies();
      cy.openGoogleHomePage();
      cy.get(search.searchInputText).first().should('be.visible').clear();
      cy.get(search.searchInputText).first().should('be.visible').click()
        .type(`${searches[i].topic}{enter}`);
      cy.get(searchResults.resultText).contains(searches[i].topic).should('be.visible');
    }
  });
});
