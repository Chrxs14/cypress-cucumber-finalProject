class CartPage {
  visit() {
    cy.visit("/cart.html");
  }

  selectProduct() {
    cy.get(".card").contains(".card-tittle").click();
  }

  verifyCartIsNotEmpty() {
    cy.get(".success").should("be.visible");
  }

  verifyCartIsEmpty() {
    cy.get(".success").should("not.be.visible");
  }

  OpenPlaceHolder() {
    cy.get("btn-success").click();
  }

  setPlaceHolderName() {
    const name = "Name";
    cy.get("#name").type(name);
  }

  setPlaceHolderCountry() {
    const country = "Country";
    cy.get("#country").type(country);
  }

  setPlaceHolderCity() {
    const city = "City";
    cy.get("#city").type(city);
  }

  setPlaceHolderCreditCart() {
    const creditCard = "Credit Card";
    cy.get("#card").type(creditCard);
  }

  setPlaceHolderMonth() {
    const month = "Month";
    cy.get("#month").type(month);
  }

  setPlaceHolderYear() {
    const year = "Year";
    cy.get("#year").type(year);
  }

  setData() {
    cy.get("btn-primary").should("be.visible").click();
  }

  ValidatePurchase() {
    cy.get(".sweet-alert").contains("Thank you for your purchase!").click();
  }
}

const Cart = new CartPage();
export default Cart;
