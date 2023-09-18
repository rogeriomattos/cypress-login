/// <reference types="Cypress" />
describe('Página de listagem de usuário', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('[name="username"]').type('rogerio.mattos');
    cy.get('[name="password"]').type('123456');
    cy.get('button').click();
  });

  it('Deve poder filtrar usuário', () => {
    cy.get('[placeholder="Buscar usuário"]').type('Monkey');
    cy.get('[aria-label="usuario-item"]').should('have.length', 1);
    cy.get('[aria-label="usuario-item"]').should('contain.text', 'Monkey');
    cy.get('[placeholder="Buscar usuário"]').clear().type('a');
    cy.get('[aria-label="usuario-item"]').should('have.length.gt', 1);
  });
})