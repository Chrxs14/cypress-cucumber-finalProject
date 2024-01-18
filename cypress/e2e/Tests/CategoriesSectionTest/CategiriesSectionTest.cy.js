// categoriesSelectionSteps.js

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const homePageCategories = require("../../Pages/HomePage/HomePageCategories");

Given("I am on the website's homepage", () => {
  cy.visit("/");
});

When("I select the 'Phone' category", () => {
  homePageCategories.selectPhoneCategory();
});

When("I select the 'Laptops' category", () => {
  homePageCategories.selectLaptopsCategory();
});

When("I select the 'Monitors' category", () => {
  homePageCategories.selectMonitorsCategory();
});

Then("I should see products related to phones", () => {
  homePageCategories.verifyProductsRelatedTo();
});

Then("I should see products related to laptops", () => {
  homePageCategories.verifyProductsRelatedTo();
});

Then("I should see products related to monitors", () => {
  homePageCategories.verifyProductsRelatedTo();
});
