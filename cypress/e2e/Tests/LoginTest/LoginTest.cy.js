import {
    Given,
    When,
    And,
    Then,
  } from "cypress-cucumber-preprocessor/steps";
  
  const loginPage = require("../../Pages/HomePage/HomePage.cy");
  
  Given("The user is on the login page", () => {
    cy.visit("/");
  });
  When("User enters valid credentials", () => {
    loginPage.visit();
  });
  Then("The user should be redirected to the control panel",()=>{})