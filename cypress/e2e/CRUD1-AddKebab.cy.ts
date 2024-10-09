import "cypress-file-upload";

describe("Add Kebab", () => {
  it("Should log in, navigate to the Add page, and add kebab", () => {
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

    cy.get('input[id="name"]').type("Testowy Kebab");
    cy.get('input[id="address"]').type("Testowa 123");
    cy.get('input[id="coordinatesX"]').type("50.1234");
    cy.get('input[id="coordinatesY"]').type("19.1234");
    cy.get('input[id="openingYear"]').type("2020");
    cy.get('input[id="closingYear"]').type("2025");

    cy.get('input[id="mondayOpensAt"]').type("10:00");
    cy.get('input[id="mondayClosesAt"]').type("10:00");

    cy.get('input[id="meatType_1"]').click();
    cy.get('input[id="meatType_2"]').click();

    cy.get('input[id="sauce_1"]').click();
    cy.get('input[id="sauce_3"]').click();

    cy.get('input[id="active"]').check();
    cy.get('input[id="isFoodTruck"]').check();

    const filePath = "kebab.png";
    cy.get('input[type="file"]').attachFile(filePath);

    cy.contains("Dodaj Kebaba").click();
  });
});
