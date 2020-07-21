class BasePage {
    static loadHomePage() {
        cy.visit('https://devexpress.github.io/testcafe/example/')
    }

    static wait(time) {
        cy.wait(time)
    }
}

class HomePage extends BasePage {
    static scrollToBottom() {
        cy.get('#submit-button').scrollIntoView()
    }

    static scrollToTop() {
        cy.get('header').scrollIntoView()
    }
}
describe('Abstraction with Classes', () => {
    it('should scroll down and up on the page', () => {
        // cy.visit('https://devexpress.github.io/testcafe/example/')
        // cy.wait(2000)
        // cy.get('#submit-button').scrollIntoView()
        // cy.wait(2000)
        // cy.get('header').scrollIntoView()

        HomePage.loadHomePage()
        HomePage.wait(2000)
        HomePage.scrollToBottom();
        HomePage.wait(2000)
        HomePage.scrollToTop();
    })
})