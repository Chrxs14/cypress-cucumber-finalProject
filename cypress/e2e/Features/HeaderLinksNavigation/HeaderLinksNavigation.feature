Feature: Navigation to Header Links

  Background: 
    Given I am on the homepage

  @header-navigation
  Scenario: Navigate to the Home header link
    When I click on the Home header link
    Then I should be redirected to the corresponding page

  @header-navigation
  Scenario: Navigate to the Contact header link
    When I click on the Contact header link
    Then I should be redirected to the corresponding page

  @header-navigation
  Scenario: Navigate to the AboutUs header link
    When I click on the AboutUs header link
    Then I should be redirected to the corresponding page

  @header-navigation
  Scenario: Navigate to the Cart header link
    When I click on the Cart header link
    Then I should be redirected to the corresponding page

  @header-navigation
  Scenario: Navigate to the LoginIn header link
    When I click on the LoginIn header link
    Then I should be redirected to the corresponding page

  @header-navigation
  Scenario: Navigate to the SignUp header link
    When I click on the SignUp header link
    Then I should be redirected to the corresponding page
