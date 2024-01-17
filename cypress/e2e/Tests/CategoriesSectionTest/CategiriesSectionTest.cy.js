// categoriesSelectionSteps.js

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const homePage = require("../../Pages/HomePage/HomePage.cy.js");

Given("I am on the website's homepage", () => {
  cy.visit("/");
});

When("I select the 'Phone' category", () => {
  homePage.selectPhoneCategory();
});

When("I select the 'Laptops' category", () => {
  homePage.selectLaptopsCategory();
});

When("I select the 'Monitors' category", () => {
  homePage.selectMonitorsCategory();
});

Then("I should see products related to phones", () => {
  homePage.verifyProductsRelatedTo();
});

Then("I should see products related to laptops", () => {
  homePage.verifyProductsRelatedTo();
});

Then("I should see products related to monitors", () => {
  homePage.verifyProductsRelatedTo();
});
