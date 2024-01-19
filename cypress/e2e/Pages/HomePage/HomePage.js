class HomePage {
  visit() {
    cy.visit("/index.html");
  }

  //Carousel Start

  getCarousel() {
    return cy.get(".carousel ").should("be.visible");
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
      }
    });
  }

  goToCarousel() {
    cy.get(".carousel").scrollIntoView();
  }

  //Carousel End

  selectItem() {
    cy.get(".card-title > .hrefch")
      .wait(1000)
      .first()
      .should("be.visible")
      .click();
  }
}

const Home = new HomePage();
export default Home;
