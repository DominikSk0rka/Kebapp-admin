describe("Admin Manage Page", () => {
  it("Should log in and navigate to the Manage page with expected content", () => {
    cy.visit("https://kebap.vercel.app/login");

    cy.get('input[name="email"]').type("a@a");
    cy.get('input[name="password"]').type("password");

    cy.contains("Zaloguj się").click();

    cy.url().should("include", "/admin");

    cy.contains("Zarządzaj").click();

    cy.url().should("include", "/admin/manage");

    cy.request("https://kebap.vercel.app/admin/manage")
      .its("status")
      .should("eq", 200);
  });
});
