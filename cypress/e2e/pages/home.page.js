import { locators } from '../constants/home.page.locatirs';

class HomePage {
    getInput() {
        return cy.get(locators.inputLocator);
    }
}

module.exports = {
    homePage: new HomePage()
}