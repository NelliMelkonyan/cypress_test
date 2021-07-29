/// <reference types="cypress" />
import {homePage} from '../pages/home.page'




describe.only('Home Page tests', () => {
    before(() => {
      cy.visit('https://www.google.com/')
    })

    it('Check search input functionality', () => {
        cy.intercept({
            method: 'GET',
            url: '/complete/search?q=test*',
            hostname: 'www.google.com',
        }).as('searchForTerms')
        homePage.getInput().type('test');
        cy.wait('@searchForTerms').its('response.statusCode').should('eq', 200);
        cy.login()
    })
});