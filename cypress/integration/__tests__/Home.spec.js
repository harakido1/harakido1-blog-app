describe("Home component", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("should render the home component", () => {
        cy.get(
            ".card-content > :nth-child(1) > .container > .lobster"
        ).contains("All Blogs!");
    });
});
