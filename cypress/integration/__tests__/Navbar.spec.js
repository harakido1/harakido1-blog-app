describe("Navbar Component", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("should contain the title", () => {
        cy.document().its("contentType").should("eq", "text/html");
        cy.get(".brand-logo");
        cy.get(".right > :nth-child(1) > .lobster");
        cy.get(".right > :nth-child(2) > .lobster");
        cy.get(".btn-floating > .material-icons");
    });
});
