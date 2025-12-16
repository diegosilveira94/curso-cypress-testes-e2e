describe("Exercises 1", () => {
  it("Should view available pets for adoption", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app");
    cy.contains("a", "Ver pets disponíveis para adoção").click();
  });
  it("Should navigate to home page when home button is clicked", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app");
    cy.contains("a", "Ver pets disponíveis para adoção").click();
    cy.get("a.header__home").click();
  });
  it("Should navigate to login page", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app");
    cy.contains("a", "Fazer login").click();
  });
  it("Should view the home page", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/home");
  });
  it("Should view the home page and click in button 'Falar com responsável'", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/home");
    cy.get(".header__message").click();
  });
});

describe("Login with invalid credentials", () => {
  it("Should display an error message for invalid login", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app");
    cy.contains("a", "Fazer login").click();
    cy.get('input[name="email"]').type("diego@email.com");
    cy.get('input[name="password"]').type("Padaria123");
    cy.contains("button", "Entrar").click();
    cy.contains("p", "Falha no login. Consulte suas credenciais.");
  });
});
