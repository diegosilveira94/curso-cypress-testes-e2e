describe("Página de login", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app");
    cy.get('[data-test="login-button"]').click();
    cy.intercept(
      "POST",
      "https://adopet-api-i8qu.onrender.com/adotante/login",
      {
        statusCode: 400,
      }
    ).as("stubPost");
  });
  it("Deve preencher o email incorretamente e ser informado do erro", () => {
    cy.login("gandalf@email", "Senha123");
    cy.contains("p", "Por favor, verifique o email digitado");
  });
  it("Deve preencher a senha incorretamente e ser informado do erro", () => {
    cy.login("ragnar@email.com", "valhalla");
    cy.contains(
      "p",
      "A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres"
    );
  });

  it("Deve falhar mesmo que os campos sejam preenchidos corretamente", () => {
    cy.login("michael.scott@dundermifflin.com", "Dundies@123");
    cy.wait("@stubPost");
    cy.contains("Falha no login. Consulte suas credenciais").should(
      "be.visible"
    );
  });
});
