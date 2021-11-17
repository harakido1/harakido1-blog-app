describe("Home component", () => {
    it("should render the home component", () => {
        cy.visit("http://localhost:3000/");
        cy.get(
            ".card-content > :nth-child(1) > .container > .lobster"
        ).contains("All Blogs!");
    });
});
