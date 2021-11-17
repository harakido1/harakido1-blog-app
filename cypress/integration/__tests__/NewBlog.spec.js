describe("New Blog component", () => {
    it("should render the New Blog component", () => {
        cy.visit("http://localhost:3000/");
        cy.get(".right > :nth-child(2) > .lobster > h4")
            .contains("New Blog")
            .click();
        cy.get("h2").contains("To Add a New Blog, Click Input Line");
        cy.get(":nth-child(1) > label");
        cy.get(":nth-child(2) > label");
        cy.get(":nth-child(3) > label");
    });
});
