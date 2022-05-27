describe("vistor can see list of TV series", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/serier/**", {
      fixture: "viaplay_response.json",
    });
    cy.visit("/");
  });
  it("is expected to display list of tv series", () => {
    cy.get("[data-cy=series-list]").children().should("have.length", 10);
  });
  it('is expected to show first tv show name', () => {
    cy.get("[data-cy=series-list]")
      .children()
      .eq(0)
      .should("contain.text", "greys-anatomy");
  });
  it("is expected to show last tv show name", () => {
    cy.get("[data-cy=series-list]")
      .children()
      .eq(9)
      .should("contain.text", "s.w.a.t.");
  });
});
