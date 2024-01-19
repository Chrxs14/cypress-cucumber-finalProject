import data from "../../../fixtures/purchaseData.json";

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
    cy.get(".panel-title").should(($element) => {
      const text = $element.text().trim();
      expect(text).to.eq("");
    });
  }

  OpenPlaceHolder() {
    cy.get(".btn-success").click();
  }

  setPlaceHolderName() {
    const name = data.name;
    cy.get("#name").should("be.visible").type(name);
  }

  setPlaceHolderCountry() {
    const country = data.country;
    cy.get("#country").should("be.visible").type(country);
  }

  setPlaceHolderCity() {
    const city = data.city;
    cy.get("#city").should("be.visible").type(city);
  }

  setPlaceHolderCreditCart() {
    const creditCard = data.creditCard;
    cy.get("#card").should("be.visible").type(creditCard);
  }

  setPlaceHolderMonth() {
    const month = data.month;
    cy.get("#month").should("be.visible").type(month);
  }

  setPlaceHolderYear() {
    const year = data.year;
    cy.get("#year").should("be.visible").type(year);
  }

  setData() {
    cy.contains(".btn-primary", "Purchase").should("be.visible").click();
  }

  ValidatePurchase() {
    cy.get(".sweet-alert").contains("Thank you for your purchase!");
  }

  removeElement() {
    cy.contains("a", "Delete").should("be.visible").click();
  }
}

const Cart = new CartPage();
export default Cart;
