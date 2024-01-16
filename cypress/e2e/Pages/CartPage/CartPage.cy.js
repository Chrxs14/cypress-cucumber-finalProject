class CartPage {
  visit() {
    cy.visit("/cart.html");
  }
}

const Cart = new CartPage();
export default Cart;
