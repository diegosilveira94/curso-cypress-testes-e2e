describe("Exercícios 1", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app");
  });
  it("Deve visualizar os pets disponíveis para adoção", () => {
    cy.contains("a", "Ver pets disponíveis para adoção").click();
  });

  it("Deve navegar para a página inicial ao clicar no botão home", () => {
    cy.contains("a", "Ver pets disponíveis para adoção").click();
    cy.get("a.header__home").click();
  });

  it("Deve navegar para a página de login", () => {
    cy.contains("a", "Fazer login").click();
  });

  it("Deve visualizar a página inicial", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/home");
  });

  it("Deve visualizar a página inicial e clicar no botão 'Falar com responsável'", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/home");
    cy.get(".header__message").click();
  });
});
