describe('Sign Up page test' , () => {
    it('Sign Up with a valid email and a valid password' , () => {
        cy.visit('https://staging.paymi.com/users/sign_up')
        let email = `fake${Date.now()}@email.com`
        cy.get('#user_email').type(email)
        cy.get('#user_password').type('fakePASS7!')
        cy.get('#terms-label').click()
        cy.get('.register').click()
        cy.contains('My Account').should('be.visible')
    })

    it('Email should be valid(without @)' , () => {
        cy.visit('https://staging.paymi.com/users/sign_up')
        cy.get('#user_email').type('registeredemail.com')
        cy.get('#user_password').type('fakePASS7!')
        cy.get('#terms-label').click()
        cy.get('.register').click()
        cy.contains("Email is invalid").should('be.visible')
    })

    it('Email should be valid(without email.com)' , () => {
    cy.visit('https://staging.paymi.com/users/sign_up')
    cy.get('#user_email').type('registered@')
    cy.get('#user_password').type('fakePASS7!')
    cy.get('#terms-label').click()
    cy.get('.register').click()
    cy.contains("Email is invalid").should('be.visible')
    
    })

    it('Email should be valid(without .com)' , () => {
        cy.visit('https://staging.paymi.com/users/sign_up')
        cy.get('#user_email').type('registered@email')
        cy.get('#user_password').type('fakePASS7!')
        cy.get('#terms-label').click()
        cy.get('.register').click()
        cy.contains("Email is invalid").should('be.visible')
    })

    it('Email should be valid(without com)' , () => {
        cy.visit('https://staging.paymi.com/users/sign_up')
        cy.get('#user_email').type('registered@email.')
        cy.get('#user_password').type('fakePASS7!')
        cy.get('#terms-label').click()
        cy.get('.register').click()
        cy.contains("Email is invalid").should('be.visible')
    })

    it('Email should be valid(without first word)' , () => {
        cy.visit('https://staging.paymi.com/users/sign_up')
        cy.get('#user_email').type('@email.com')
        cy.get('#user_password').type('fakePASS7!')
        cy.get('#terms-label').click()
        cy.get('.register').click()
        cy.contains("Email is invalid").should('be.visible')
    })
    
    it('Email field can\'t be left empty' , () => {
        cy.visit('https://staging.paymi.com/users/sign_up')
        cy.get('#user_password').type('fakePASS7!')
        cy.get('#terms-label').click()
        cy.get('.register').click()
        cy.contains("Email can't be blank").should('be.visible')
    })

    it('Sign Up with an already-used email' , () => {
        cy.visit('https://staging.paymi.com/users/sign_up')
        cy.get('#user_email').type('registered@email.com')
        cy.get('#user_password').type('fakePASS7!')
        cy.get('#terms-label').click()
        cy.get('.register').click()
        cy.contains("Email has already been taken").should('be.visible')
    })

    it('Password field can\'t be left empty' , () => {
        cy.visit('https://staging.paymi.com/users/sign_up')
        let email = `fake${Date.now()}@email.com`
        cy.get('#user_email').type(email)
        cy.get('#terms-label').click()
        cy.get('.register').click()
        cy.contains('Password can\'t be blank').should('be.visible')
    })  
    
    it('Sign Up with the password that doesn\'t have a capital letter' , () => {
        cy.visit('https://staging.paymi.com/users/sign_up')
        let email = `fake${Date.now()}@email.com`
        cy.get('#user_email').type(email)
        cy.get('#user_password').type('fakepass7!')
        cy.get('#terms-label').click()
        cy.get('.register').click()
        cy.contains('Password should be at least 8 characters long and include: 1 uppercase, 1 lowercase and 1 digit or special character').should('be.visible')
    })

    it('Sign Up with password less than 8 characters' , () => {
        cy.visit('https://staging.paymi.com/users/sign_up')
        let email = `fake${Date.now()}@email.com`
        cy.get('#user_email').type(email)
        cy.get('#user_password').type('Diman!5')
        cy.get('#terms-label').click()
        cy.get('.register').click()
        cy.contains('Password is too short (minimum is 8 characters)').should('be.visible')
    })

    it('Enter at-least one numeric value or one special character' , () => {
        cy.visit('https://staging.paymi.com/users/sign_up')
        let email = `fake${Date.now()}@email.com`
        cy.get('#user_email').type(email)
        cy.get('#user_password').type('Lazytttt')
        cy.get('#terms-label').click()
        cy.get('.register').click()
        cy.contains('Password should be at least 8 characters long and include: 1 uppercase, 1 lowercase and 1 digit or special character').should('be.visible')
    })
    
    it('Enter the "Eye" button' , () => {
        cy.visit('https://staging.paymi.com/users/sign_up')
        let email = `fake${Date.now()}@email.com`
        cy.get('#user_email').type(email)
        cy.get('#user_password').type('fakePASS7!')
        cy.get('.fa-eye-slash').click()
        cy.get('#user_password').should('have.value', 'fakePASS7!')
    })  
            
    it('Enter "Terms and Conditions"', () => {
        cy.visit('https://staging.paymi.com/users/sign_up')
        cy.contains('Terms and Conditions').click()
        cy.contains('Terms of Use').should('be.visible')
    })

    it('Enter  "Sign Up" without "Terms and Conditions"', () => {
        cy.visit('https://staging.paymi.com/users/sign_up')
        let email = `fake${Date.now()}@email.com`
        cy.get('#user_email').type(email)
        cy.get('#user_password').type('fakePASS!7')
        cy.get('.register').click()
        cy.contains('Terms and conditions must be accepted').should('be.visible')
    })

    it('Enter "Opt in to get the best of Paymi offers, promotions, news and more"', () => {
        cy.visit('https://staging.paymi.com/users/sign_up')
        let email = `fake${Date.now()}@email.com`
        cy.get('#user_email').type(email)
        cy.get('#user_password').type('fakePASS!7')
        cy.get('#terms-label').click()
        cy.get('.register').click()
        cy.contains('My Account').should('be.visible')
    })

    it('French language version is available after clicking "Francaic"' , () => {
        cy.visit('https://staging.paymi.com/users/sign_up')
        cy.contains('Français').click()
        cy.contains('Commencez à créer votre compte:').should('be.visible')
    })

    it('Enter "Log In" button' , () => {
        cy.visit('https://staging.paymi.com/users/sign_up')
        cy.contains('Log In').click()
        cy.contains('Welcome back!').should('be.visible')
    })
})