describe("Api Adopet", () => {
  const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMTY0M2NkNi03MTEyLTQxNWItOTVkMi0wNzkwNGIwZDFhMWMiLCJhZG9wdGVyTmFtZSI6IkFuYSBkZSBKZXN1cyIsImlhdCI6MTc2Njc3MTI1MiwiZXhwIjoxNzY3MDMwNDUyfQ.gBePDiinSjIcySHd92Tk3Dn_rHOSKRPjTPmEOOs9Wo0`;

  it("Nome do perfil", () => {
    cy.request({
      method: "GET",
      url: "https://adopet-api-i8qu.onrender.com/adotante/perfil/0dd7ead6-eb41-45dd-8a75-03b02285bbe7",
      headers: { authorization },
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body).to.have.property("perfil");
      expect(res.body.perfil.nome).to.be.equal("ana");
    });
  });
});
