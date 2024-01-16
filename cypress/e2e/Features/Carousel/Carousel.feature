Feature: Featured Items Carousel

  Background: 
    Given I am on the homepage

  @carousel
  Scenario: Carousel displays featured items
    When I navigate to the featured items section
    Then the carousel should be visible
    And there should be at least 3 featured items displayed and return to the first one

