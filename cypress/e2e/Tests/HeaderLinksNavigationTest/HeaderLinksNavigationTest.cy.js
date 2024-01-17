// headerNavigationSteps.js

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const homePage = require("../../Pages/HomePage/HomePage.cy.js");

Given("I am on the homepage", () => {
  cy.visit("/");
});

When("I click on the Home header link", () => {
  //
  homePage.exploreHomeLink();
});

When("I click on the Contact header link", () => {
  // Implement logic to click on the second header link
  homePage.exploreContactLink();
});

When("I click on the AboutUs header link", () => {
  // Implement logic to click on the third header link
  homePage.exploreAboutUsLink();
});

When("I click on the Cart header link", () => {
  // Implement logic to click on the first header link
  homePage.exploreCartLink();
});

When("I click on the LoginIn header link", () => {
  // Implement logic to click on the second header link
  homePage.exploreLoginLink();
});

When("I click on the SignUp header link", () => {
  // Implement logic to click on the third header link
  homePage.exploreSignupLink();
});

Then("I should be redirected to the corresponding page", () => {
  // Implement logic to verify the redirection
  homePage.visit();
  cy.url().should("include", "/index.html").wait(1000);
});
