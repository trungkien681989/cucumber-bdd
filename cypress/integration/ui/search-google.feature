@ui
Feature: Search Google

  As a user of Google, I want to search for my interested topic

  Background: Open the Google page
    Given I am on the Google home page

  @smoke @regression
  Scenario: Search for a topic
    When I search for "Behavior Driven Development"
    Then I expect search results shows "Behavior Driven Development"

  @regression
  Scenario: Search for topics
    Then I expect search results shows correct for the searched topics