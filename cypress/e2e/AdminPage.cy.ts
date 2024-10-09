describe("Admin Page", () => {
  it("Should log in and load the admin page with expected content", () => {
    cy.visit("https://kebap.vercel.app/login");

    cy.get('input[name="email"]').type("a@a");
    cy.get('input[name="password"]').type("password");

    cy.contains("Zaloguj się").click();

    cy.url().should("include", "/admin");

    cy.title().should("include", "Admin");

    cy.request("https://kebap.vercel.app/admin")
      .its("status")
      .should("eq", 200);

    cy.contains("Zarządzaj Wiadomościami").should("exist");
  });
});
