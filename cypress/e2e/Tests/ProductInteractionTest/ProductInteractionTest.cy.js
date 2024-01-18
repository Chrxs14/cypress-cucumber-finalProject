import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const Home = require("../../Pages/HomePage/HomePage");
const Product = require("../../Pages/ProductPage/ProductPage");
const Cart = require("../../Pages/CartPage/CartPage");

Given("the user is on the product selection page", () => {
  Home.visit();
});

When("the user adds a product to the cart", () => {
  Home.selectItem();
  Product.addToCart();
});

Then("the product should be visible in the cart", () => {
  Cart.visit();
  Cart.verifyCartItems();
});

Given("the user has products in the cart", () => {
  Home.visit();
  Home.selectItem();
  Product.addToCart();
});

When("the user proceeds to buy the cart", () => {
  Cart.OpenPlaceHolder();
  Cart.setPlaceHolderName();
  Cart.setPlaceHolderCountry();
  Cart.setPlaceHolderCity();
  Cart.setPlaceHolderCreditCart();
  Cart.setPlaceHolderMonth();
  Cart.setPlaceHolderYear();
  Cart.setData();
});

Then("the user should be directed to the checkout page", () => {

});

When("the user removes an item from the cart", () => {});

Then("the cart should not contain the removed item", () => {});
