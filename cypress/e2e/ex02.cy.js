describe("Exercicio 02", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app");
  });
  it("Visite a página principal do AdoPet e verifique se o 'title' com o texto “AdoPet” está visível ", () => {
    cy.contains("h1", "AdoPet").should("be.visible");
  });
  it("Visite a página principal do AdoPet e verifique se o texto “Quem ama adota!” está visível", () => {
    cy.contains("p", "Quem ama adota!").should("be.visible");
  });
  it("Visite a página principal do AdoPet e verifique se o texto “Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!” está visível", () => {
    cy.contains(
      "p",
      "Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!"
    ).should("be.visible");
  });
  it("Visite a página principal do Adopet, clique no botão de ícone de mensagem no header e escreva nome e senha válidos na página de login.", () => {
    cy.get(".header__message")
      .should("have.attr", "aria-label", "Ir para Mensagens")
      .click();
    cy.get('[data-test="input-loginEmail"').type("ana@email.com");
    cy.get('[data-test="input-loginPassword"').type("Senha123");
    cy.get('[data-test="submit-button"]').click();
  });
});
