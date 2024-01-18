class HomePage {
  visit() {
    cy.visit("/index.html");
  }

  // Categories

  getCategories() {
    const headerLinksText = ["Phones", "Laptops", "Monitors"];
    const uniqueCategories = [];

    headerLinksText.forEach((linkText) => {
      const category = cy
        .contains(".list-group > a", linkText)
        .should("be.visible");

      // Verificar si el elemento ya está en la lista antes de agregarlo
      if (!uniqueCategories.includes(category)) {
        uniqueCategories.push(category);
      }
    });

    return uniqueCategories;
  }

  selectPhoneCategory() {
    const phonesLink = this.getCategories();
    phonesLink[0].click();
  }

  selectLaptopsCategory() {
    const laptopsLink = this.getCategories();
    laptopsLink[1].click();
  }

  selectMonitorsCategory() {
    const monitorsLink = this.getCategories();
    monitorsLink[2].click();
  }

  verifyProductsRelatedTo() {
    cy.wait(1000);
    cy.get(".col-lg-4").should("be.visible");
  }
  // Categories end
}

const Home = new HomePage();
export default Home;
