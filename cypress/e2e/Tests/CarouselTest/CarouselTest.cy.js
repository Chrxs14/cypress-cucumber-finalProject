import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

const homePage = require("../../Pages/HomePage/HomePage");

Given("I am on the homepage", () => {
  homePage.visit();
});

When("I navigate to the featured items section", () => {
  homePage.goToCarousel();
});

Then("the carousel should be visible", () => {
  homePage.getCarousel();
});

Then(
  "there should be at least 3 featured items displayed and return to the first one",
  () => {
    homePage.interactWithCarousel();
  }
);
