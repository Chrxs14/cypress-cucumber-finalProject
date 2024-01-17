Feature: Test the categories selection

  Background: 
    Given I am on the website's homepage

  Scenario: Selecting the 'Phone' category
    When I select the 'Phone' category
    Then I should see products related to phones

  Scenario: Selecting the 'Laptops' category
    When I select the 'Laptops' category
    Then I should see products related to laptops

  Scenario: Selecting the 'Monitors' category
    When I select the 'Monitors' category
    Then I should see products related to monitors
