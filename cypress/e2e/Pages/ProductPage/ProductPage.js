const Cart = require("../../Pages/CartPage/CartPage");
class ProductPage {
  addToCart() {
    // Intercepta la solicitud POST después de hacer clic en el botón
    cy.intercept("POST", "https://api.demoblaze.com/addtocart").as(
      "addToCartRequest"
    );

    cy.get(".btn-lg").should("be.visible").click();

    cy.wait("@addToCartRequest").then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });
  }

  goToCart() {
    Cart.visit();
  }
}

const Product = new ProductPage();
export default Product;
