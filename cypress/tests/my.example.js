/// <reference types="cypress" />


describe('Actions', () => {
    before(() => {
      cy.visit('https://www.google.com/')
    })

    it('.type() - type into a DOM element', () => {
        cy.get('input[title]', {timeout: 10000})
          .type('test')
    })
});
