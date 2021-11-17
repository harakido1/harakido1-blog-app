describe("Error 404", () => {
    it("should navigate to a 404 page", () => {
        cy.visit("http://localhost:3000/something");
        cy.get("h2").contains("Sorry");
        cy.get("p").contains(
            "The page you are looking for is not available..."
        );
        cy.get("a > h5").contains("Back to the Homepage...");
        cy.wait(5000);
        cy.get("a > h5").click();
        cy.url("http://localhost:3000");
    });
});
