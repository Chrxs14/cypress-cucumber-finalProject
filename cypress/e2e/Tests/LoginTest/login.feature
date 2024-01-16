Feature: User login

  Scenario: Successful login
    Given The user is on the login page
    When User enters valid credentials
    Then The user should be redirected to the control panel