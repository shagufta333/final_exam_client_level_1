describe("vistor can see list of TV series", () => {
  beforeEach(() => {
    cy.intercept("GET", "**api/series", {
      fixture: "viaplay_response.json",
    });
    cy.visit("/");
  });
  it("is expected to display list of tv series", () => {
    cy.get("[data-cy=series-list]").children().should("have.length", 10);
  });
});
