/// <reference types="cypress" />

import ServeRestLogin from '../pages/serverest_login.page'
import SR_CadastroProduto from '../pages/serverest_prod.page'
import ServeRestCadastrarUsuario from '../pages/serverest_cdusuario.page'

describe('Testes Front ServeRest - CADASTRO DE PRODUTOS', () => {
    before(() => {
        ServeRestLogin.acessarServeRestCadastro()
        ServeRestCadastrarUsuario.realizar_cadastroAdmin();
        cy.wait(1500)            
    })
    beforeEach(() => {
        cy.wait(500)
        ServeRestLogin.acessarServeRest()
        ServeRestCadastrarUsuario.login();
    })

    it('Deve realizar cadastro corretamente', () => {
        SR_CadastroProduto.cadastrar() 
    })

    it('Deve realizar cadastro com campos vazios', () => {
        SR_CadastroProduto.verificarErros()

    })

    it('Deve excluir um produtos', () => {
        SR_CadastroProduto.excluirProdutos()
    })

    it('Deve editar um produto(não está funcionando)', () => {
        SR_CadastroProduto.editarProdutos()
    })    
})