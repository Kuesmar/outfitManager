/// <reference types="cypress" />

describe('Draggable Products',() => {
    it('Should drag product on the left box on the grid',() => {
        cy.visit('http://localhost:5173/');
        cy.wait(5000);
        cy.get('[data-testid=jean]').drag('[data-testid=left-drop-box]'); 
    });

    it.only('Should change position product',() => {
        cy.visit('http://localhost:5173/');
        cy.wait(5000);
        cy.get('[data-testid=hoodie]').drag('[data-testid=right-drop-box]');
        cy.get(`[data-cy="select-orientation"]`).click();
        cy.get(`[data-cy="select-option-center"]`).click();
    });
});