describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function (){
        cy.visit('./src/index.html')
    })
    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('Preenche os campos obrigatórios e envia o formulário', function() {
        cy.get('#firstName').type('Dayse')
        cy.get('#lastName').type('Arcelino')
        cy.get('#email').type('dayse_arcelino@hotmail.com')
        cy.get('#open-text-area').type('Teste')
        // Botão utilizando o inspecionar no cypress
        cy.get('.button').click()
        cy.get('.success').should('be.visible')
    })
    it('Preenche os campos obrigatórios com um texto longo', function() {
        const longText = 'Curso de cypress básico na udemy, como testar um campo com um texto longo.'
        cy.get('#firstName').type('Dayse')
        cy.get('#lastName').type('Arcelino')
        cy.get('#email').type('dayse_arcelino@hotmail.com')
        cy.get('#open-text-area').type(longText, {delay: 0})
        // Botão utilizando o inspecionar na tela web
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    })
    it('Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        cy.get('#firstName').type('Dayse')
        cy.get('#lastName').type('Arcelino')
        cy.get('#email').type('daysearcelino.com')
        cy.get('#open-text-area').type('Teste')
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })
    it('Teste para valida o campo telefone', function() {
        cy.get('#firstName').type('Dayse')
        cy.get('#lastName').type('Arcelino')
        cy.get('#email').type('dayse_arcelino@hotmail.com')
        cy.get('#phone')
            .type('abcdefghijlmnopqrstuvxz')
            .should('have.value', '')
        cy.get('#open-text-area').type('Teste')
        cy.get('button[type="submit"]').click()
    })
    it('Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
        cy.get('#firstName').type('Dayse')
        cy.get('#lastName').type('Arcelino')
        cy.get('#email').type('dayse_arcelino@hotmail.com')
        cy.get('#phone-checkbox').check()
        cy.get('#open-text-area').type('Teste')
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })
    it('Preenche e limpa os campos nome, sobrenome, email e telefone', function() {
        cy.get('#firstName')
            .type('Dayse')
            .should('have.value', 'Dayse')
            .clear()
            .should('have.value', '')
        cy.get('#lastName')
            .type('Arcelino')
            .should('have.value', 'Arcelino')
            .clear()
            .should('have.value', '')
        cy.get('#email')
            .type('dayse_arcelino@hotmail.com')
            .should('have.value', 'dayse_arcelino@hotmail.com')
            .clear()
            .should('have.value', '')
        cy.get('#phone')
            .type('85987654321')
            .should('have.value', '85987654321')
            .clear()
            .should('have.value', '')
        cy.get('#open-text-area').type('Teste')
    })
    it('Exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })
    it('Envia o formuário com sucesso usando um comando customiza', function() {
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success').should('be.visible')
    })
    it('Usando a tag contains no botão enviar', function() {
        cy.get('#firstName').type('Dayse')
        cy.get('#lastName').type('Arcelino')
        cy.get('#email').type('dayse_arcelino@hotmail.com')
        cy.get('#open-text-area').type('Teste')
        cy.contains('button', 'Enviar').click()
        cy.get('.success').should('be.visible')
    })
    it('Seleciona um produto (YouTube) por seu texto', function() {
        cy.get('#product').select('YouTube')
            .should('have.value', 'youtube')
    })
    it('Seleciona um produto (Mentoria) por seu valor (value)', function() {
        cy.get('#product').select('Mentoria')
            .should('have.value', 'mentoria')
    })
    it('Seleciona um produto (Blog) por seu índice', function() {
        cy.get('#product').select(1)
            .should('have.value', 'blog')
    })
    it('Marca o tipo de atendimento "Feedback"', function() {
        cy.get('input[type="radio"][value="feedback"]')
            .check()
            .should('have.value', 'feedback')
    })
    it('Marca cada tipo de atendimento', function() {
        cy.get('input[type="radio"]')
            .should('have.length', 3)
            .each(function ($radio){
                cy.wrap($radio).check()
                cy.wrap($radio).should('be.checked')
            })
    })
    it('marca ambos checkboxes, depois desmarca o último', function() {
        cy.get('input[type="checkbox"]')
            .check()
            .last()
            .uncheck()
            .should('not.be.checked')
    })
})


