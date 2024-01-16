class HomePage {
    visit() {
      cy.visit("/");
    }
  
    openLoginForm(){
      cy.get('#login2').should('be.visible').click();
    }
  }
  
  const Home = new HomePage();
  export default Home;