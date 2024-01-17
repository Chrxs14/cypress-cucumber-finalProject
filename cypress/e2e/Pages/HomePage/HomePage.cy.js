class HomePage {
  visit() {
    cy.visit("/index.html");
  }

  //Carousel Start

  getCarousel() {
    return cy.get(".carousel ").should("exist").and("be.visible");
  }

  getCarouselButtons() {
    return [cy.get(".carousel-control-prev"), cy.get(".carousel-control-next")];
  }

  interactWithCarousel() {
    const carouselButtons = this.getCarouselButtons();
    cy.get(".carousel-inner > div").as("carouselItems");

    cy.get("@carouselItems").each((item, index, list) => {
      cy.wrap(item).should("have.class", "active"); // Assertion 1

      carouselButtons[1].click();

      cy.wait(1000);

      if (index === list.length - 1) {
        while (index > 0) {
          carouselButtons[0].click();
          index--;
          cy.wait(1000);
        }
        cy.wait(1000);
      }
    });
  }

  goToCarousel() {
    cy.get(".carousel").scrollIntoView();
  }

  carouselIsVisible(carousel) {
    return carousel.should("be.visible");
  }
  //Carousel End

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

    // Esperar a que el modal de contacto esté abierto
    cy.get("#exampleModal").should("have.class", "show").wait(1000); // Ajusta el tiempo de espera según sea necesario
  }

  exploreAboutUsLink() {
    const headerLinks = this.getHeaderLinks();
    headerLinks[2].click();

    // Esperar a que el modal de About Us esté abierto
    cy.get("#videoModal").should("have.class", "show").wait(1000); // Ajusta el tiempo de espera según sea necesario
  }

  exploreLoginLink() {
    const headerLinks = this.getHeaderLinks();
    headerLinks[4].click();

    // Esperar a que el modal de inicio de sesión esté abierto
    cy.get("#logInModal").should("have.class", "show").wait(1000); // Ajusta el tiempo de espera según sea necesario
  }

  exploreSignupLink() {
    const headerLinks = this.getHeaderLinks();
    headerLinks[5].click();

    // Esperar a que el modal de registro esté abierto
    cy.get("#signInModal").should("have.class", "show").wait(1000); // Ajusta el tiempo de espera según sea necesario
  }

  //Header links end
}

const Home = new HomePage();
export default Home;
