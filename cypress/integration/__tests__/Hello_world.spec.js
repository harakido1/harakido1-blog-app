beforeEach(() => {
    cy.visit("/cypress/cypress.json");
});

describe("Message before coding to insure React.js is up and running", () => {
    it.skip("should return Hello world", () => {
        cy.get("h1").contains("Hello world");
    });
});
