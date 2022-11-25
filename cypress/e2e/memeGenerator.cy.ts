describe('Validate memeGen', () => {
  it('should add meme details', () => {
    cy.visit('/');
    cy.get('#upper-text').type('texto de arriba');
    cy.get('#lower-text').type('texto de abajo');
    cy.get('#create').click();
    cy.contains('Se creó correctamente');
  });
});
