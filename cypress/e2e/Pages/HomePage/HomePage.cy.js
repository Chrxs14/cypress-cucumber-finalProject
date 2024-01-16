class HomePage {
  visit() {
    cy.visit("/");
  }

  getCarousel() {
    return cy.get(".carousel ");
  }

  getCarouselButtons() {
    return [cy.get(".carousel-control-prev"), cy.get(".carousel-control-next")];
  }

  verifyCarouselItems() {
    const carouselInner = cy.get(".carousel-inner");
    const carouselItems = carouselInner.find("> div");
    const carouselButtons = this.getCarouselButtons();

    carouselItems.each((item, index) => {
      cy.wrap(item).should("have.class", "active");
      carouselButtons[1].click();
    });
  }

  interactWithCarousel() {
    const carouselButtons = this.getCarouselButtons();
    // Obtén todos los elementos dentro de .carousel-inner
    cy.get(".carousel-inner > div").as("carouselItems");

    // Itera sobre cada elemento y realiza las comprobaciones
    cy.get("@carouselItems").each((item, index, list) => {
      cy.wrap(item).should("have.class", "active");

      // Simula un clic hacia la derecha (ajusta según sea necesario)
      // Aquí asumo que tienes un botón para mover el carrusel hacia la derecha
      carouselButtons[1].click();

      // Agrega una espera para dar tiempo a que se complete la animación (ajusta según sea necesario)
      cy.wait(1000);

      // Realiza comprobaciones adicionales si es necesario

      // Si es el último elemento, vuelve al primer elemento del carrusel
      if (index === list.length - 1) {
        while (index > 0) {
          carouselButtons[0].click();
          index--;
          cy.wait(1000); // Agrega una espera para dar tiempo a que se complete la animación
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
}

const Home = new HomePage();
export default Home;
