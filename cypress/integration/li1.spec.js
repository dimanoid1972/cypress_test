describe('Login page test' , () => {
    it('Log in with a valid email and a valid password' , () => {
        cy.visit('https://staging.paymi.com/users/sign_in?lang=en/')
        cy.get('#user_email').type('registered@email.com')
        cy.get('#user_password').type('fakePASS7!')
        cy.get('#log_in').click()
        cy.contains('Linked Accounts').should('be.visible')
    })

    it('Error message appears if email address is invalid' , () => {
        cy.visit('https://staging.paymi.com/users/sign_in?lang=en/')
        cy.get('#user_email').type('registeredemail.com')
        cy.get('#user_password').type('fakePASS7!')
        cy.get('#log_in').click()
        cy.contains("Email is invalid").should('be.visible')
    })

    it('Email field can\'t be left empty' , () => {
      cy.visit('https://staging.paymi.com/users/sign_in?lang=en/')
      cy.get('#user_password').type('fakePASS7!')
      cy.get('#log_in').click()
      cy.contains("Email can't be blank").should('be.visible') 
    })

    it('Password field can\'t be left empty' , () => {
        cy.visit('https://staging.paymi.com/users/sign_in?lang=en/')
        cy.get('#user_email').type('registered@email.com')
        cy.get('#log_in').click()
        cy.contains('Password can\'t be blank').should('be.visible')
    })

    it('Password should be valid' , () => {
        cy.visit('https://staging.paymi.com/users/sign_in?lang=en/')
        cy.get('#user_email').type('registered@email.com')
        cy.get('#user_password').type('A2$12')
        cy.get('#log_in').click()
        cy.contains('Invalid email or password').should('be.visible')
    })

    it('Enter the "Eye" button' , () => {
        cy.visit('https://staging.paymi.com/users/sign_in?lang=en/')
        let email = `fake${Date.now()}@email.com`
        cy.get('#user_email').type(email)
        cy.get('#user_password').type('fakePASS7!')
        cy.get('.fa-eye-slash').click()
        cy.get('#user_password').should('have.value', 'fakePASS7!')
    })

    it('French language version is available after clicking "Francaic"' , () => {
        cy.visit('https://staging.paymi.com/users/sign_in?lang=en/')
        cy.contains('Français').click()
        cy.contains('Connectez-vous à votre compte').should('be.visible')
        
    })

    it('Enter the button "Forgot your password?"' , () => {
        cy.visit('https://staging.paymi.com/users/sign_in?lang=en/')
        cy.contains('Forgot your password?').click()
        cy.contains('Forgot your password?').should('be.visible')
    })

    it('Enter "Create an account" button' , () => {
        cy.visit('https://staging.paymi.com/users/sign_in?lang=en/')
        cy.contains('Create an account').click()
        cy.contains('Sign up with email.').should('be.visible')
    })
})