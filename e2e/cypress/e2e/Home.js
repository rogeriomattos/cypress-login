/// <reference types="Cypress" />
describe('HOME', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('[name="username"]').type('rogerio.mattos');
    cy.get('[name="password"]').type('123456');
    cy.get('button').click();
  });

  it('Deve poder filtrar filtrar', () => {
    cy.get('[placeholder="Buscar usuário"]').type('Monkey');
    cy.get('[aria-label="usuario-item"]').should('have.length', 1);
    cy.get('[aria-label="usuario-item"]').should('contain.text', 'Monkey');
    cy.get('[placeholder="Buscar usuário"]').clear().type('a');
    cy.get('[aria-label="usuario-item"]').should('have.length.gt', 1);
  });

  it('Deve poder criar um filtrar', () => {
    cy.get('.actions > button').click();
    cy.get('input[name="name"]').type('Teste');
    cy.get('input[name="email"]').type('teste@email.com');
    cy.get('input[name="phone"]').type('(11) 91111-1111');
    cy.get('.user > button').click();
  });

  it('Deve poder deletar um filtrar', () => {
    cy.get('tr:nth-child(2) > td > button').click();
    cy.get('dialog').should('be.visible').and('contain.text', 'Tem certeza que deseja deletar o cliente Loid Ford?');
    cy.get('.delete-message > div > button:last-child').click();
  });
})