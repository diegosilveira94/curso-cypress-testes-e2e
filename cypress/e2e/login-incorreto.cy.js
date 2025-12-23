describe("Página de login", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.get('[data-test="login-button"]').click();
  });
  it("Deve preencher o email incorretamente e ser informado do erro", () => {
    cy.login("gandalf@email", "Senha123");
    cy.contains("p", "Por favor, verifique o email digitado");
  });
  it("Deve preencher a senha incorretamente e ser informado do erro", () => {
    cy.login("ragnar@email.com", "lothbrok");
    cy.contains(
      "p",
      "A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres"
    );
  });
});
