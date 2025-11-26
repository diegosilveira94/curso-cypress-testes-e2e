describe("Load home page and register new user", () => {
  it("Should load the home page", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app");
  });
  it("Should register a new user", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app");
    cy.contains("a", "Cadastrar").click();
    cy.get('input[name="nome"]').type("Ana de Jesus");
    cy.get('input[name="email"]').type("ana@email.com");
    cy.get('input[name="password"]').type("Senha123");
    cy.get('input[name="confirm_password"]').type("Senha123");
    cy.contains("button", "Cadastrar").click();
  });
});
