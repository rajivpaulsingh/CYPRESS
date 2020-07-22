const pages = ["http://example.com"]

const sizes = ["iphone-6", "ipad-2", [1200, 800]]

describe('Responsive Visual Regression', () => {
    sizes.forEach(size => {
        pages.forEach(page => {
            it(`should match ${page} in resolution ${size}`, () => {
                let currentTime = new Date(Date.UTC(2020, 1, 1)).getDate() //to override time
                cy.clock(currentTime) //to override time
                cy.setResolution(size)
                cy.visit(page)
                cy.matchImageSnapshot()
            })
        })
    })
})