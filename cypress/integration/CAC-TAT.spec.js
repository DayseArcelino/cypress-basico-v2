describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function (){
        cy.visit('./src/index.html')
    })
    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it.only('Preenche os campos obrigatórios e envia o formulário', function() {
        cy.get('#firstName').type('Dayse')
        cy.get('#lastName').type('Arcelino')
        cy.get('#email').type('dayse_arcelino@hotmail.com')
        cy.get('#open-text-area').type('Teste')
        cy.get('.button').click()
        cy.get('.success').should('be.visible')
    })
})


