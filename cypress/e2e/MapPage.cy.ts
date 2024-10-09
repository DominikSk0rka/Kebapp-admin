describe("Admin Map Page", () => {
  it("Should log in and navigate to the Map page with expected content", () => {
    cy.visit("https://kebap.vercel.app/login");

    cy.get('input[name="email"]').type("a@a");
    cy.get('input[name="password"]').type("password");

    cy.contains("Zaloguj się").click();

    cy.url().should("include", "/admin");

    cy.contains("Mapa").click();

    cy.url().should("include", "/admin/map");

    cy.request("https://kebap.vercel.app/admin/map")
      .its("status")
      .should("eq", 200);
  });
});
