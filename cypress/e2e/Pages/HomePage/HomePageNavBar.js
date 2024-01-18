class HomePage {
  visit() {
    cy.visit("/index.html");
  }

  //Header links

  getHeaderLinks() {
    const headerLinksText = [
      "Home",
      "Contact",
      "About us",
      "Cart",
      "Log in",
      "Sign up",
    ];

    return headerLinksText.map((linkText) =>
      cy.contains(".navbar-nav > li", linkText)
    );
  }

  exploreHomeLink() {
    const headerLinks = this.getHeaderLinks();
    headerLinks[0].click();

    cy.url().should("include", "/index.html");
  }

  exploreCartLink() {
    const headerLinks = this.getHeaderLinks();
    headerLinks[3].click();

    cy.url().should("include", "/cart.html");
  }

  //Modal
  exploreContactLink() {
    const headerLinks = this.getHeaderLinks();
    headerLinks[1].click();

    cy.get("#exampleModal").should("have.class", "show").wait(1000); // Ajusta el tiempo de espera según sea necesario

    cy.get("#exampleModal .close").click();
  }

  exploreAboutUsLink() {
    const headerLinks = this.getHeaderLinks();
    headerLinks[2].click();

    cy.get("#videoModal").should("have.class", "show").wait(1000); // Ajusta el tiempo de espera según sea necesario

    cy.get("#videoModal .close").click();
  }

  exploreLoginLink() {
    const headerLinks = this.getHeaderLinks();
    headerLinks[4].click();

    cy.get("#logInModal").should("have.class", "show").wait(1000); // Ajusta el tiempo de espera según sea necesario

    cy.get("#logInModal .close").click();
  }

  exploreSignupLink() {
    const headerLinks = this.getHeaderLinks();
    headerLinks[5].click();

    cy.get("#signInModal").should("have.class", "show").wait(1000); // Ajusta el tiempo de espera según sea necesario

    cy.get("#signInModal .close").click();
  }

  //Header links end

}

const Home = new HomePage();
export default Home;
