Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Dayse')
    cy.get('#lastName').type('Arcelino')
    cy.get('#email').type('dayse_arcelino@hotmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()
})