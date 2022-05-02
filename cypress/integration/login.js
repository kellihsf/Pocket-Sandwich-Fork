// https://on.cypress.io/writing-first-test

describe ('Navigate to Pocket Sanwich', () => {
    const username = "test00@email.com"
    const password = "password"

    it('should let a user log into the app', () => {
        cy.visit('https://pocket-sandwich-fork.herokuapp.com/')

        cy.url().should('include', '/pocket-sandwich')
        cy.contains('Login')
    })


    it('should click the login button', () => {
        cy.get('.login-button').click()
        cy.contains('Log in here:')
    })

    it('should log in a user', () => {
        cy.contains('Email').type(`${username}`)
        cy.contains('Password').type(`${password}`)
        cy.contains('LOGIN').click()
        cy.contains('My Profile Page')
    })
})

