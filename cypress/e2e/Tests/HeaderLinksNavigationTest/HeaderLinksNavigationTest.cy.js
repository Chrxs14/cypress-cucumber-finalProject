// headerNavigationSteps.js

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const homePageNavBar = require("../../Pages/HomePage/HomePageNavBar");

Given("I am on the homepage", () => {
  cy.visit("/");
});

When("I click on the Home header link", () => {
  //
  homePageNavBar.exploreHomeLink();
});

When("I click on the Contact header link", () => {
  // Implement logic to click on the second header link
  homePageNavBar.exploreContactLink();
});

When("I click on the AboutUs header link", () => {
  // Implement logic to click on the third header link
  homePageNavBar.exploreAboutUsLink();
});

When("I click on the Cart header link", () => {
  // Implement logic to click on the first header link
  homePageNavBar.exploreCartLink();
});

When("I click on the LoginIn header link", () => {
  // Implement logic to click on the second header link
  homePageNavBar.exploreLoginLink();
});

When("I click on the SignUp header link", () => {
  // Implement logic to click on the third header link
  homePageNavBar.exploreSignupLink();
});

Then("I should be redirected to the corresponding page", () => {
  // Implement logic to verify the redirection
  homePageNavBar.visit();
  cy.url().should("include", "/index.html").wait(1000);
});
