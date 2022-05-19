describe('vistor can see list of TV series', () => {
  
  beforeEach(() => {
    cy.visit('/')
  });
 it('is expected to display list of tv series', () => {
   cy.get('[data-cy=series_list]').should('have.length', 10);
 });
})