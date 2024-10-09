describe("Admin Logs Page", () => {
  it("Should log in and navigate to the Logs page with expected content", () => {
    cy.visit("https://kebap.vercel.app/login");

    cy.get('input[name="email"]').type("a@a");
    cy.get('input[name="password"]').type("password");

    cy.contains("Zaloguj się").click();

    cy.url().should("include", "/admin");

    cy.contains("Logi").click();

    cy.url().should("include", "/admin/logs");

    cy.request("https://kebap.vercel.app/admin/logs")
      .its("status")
      .should("eq", 200);
  });
});
