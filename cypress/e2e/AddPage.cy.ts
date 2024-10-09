describe("Admin Add Page", () => {
  it("Should log in and navigate to the Add page with expected content", () => {
    cy.visit("https://kebap.vercel.app/login");

    cy.get('input[name="email"]').type("a@a");
    cy.get('input[name="password"]').type("password");

    cy.contains("Zaloguj się").click();

    cy.url().should("include", "/admin");

    cy.contains("Dodaj").click();

    cy.url().should("include", "/admin/add");

    cy.request("https://kebap.vercel.app/admin/add")
      .its("status")
      .should("eq", 200);
  });
});
