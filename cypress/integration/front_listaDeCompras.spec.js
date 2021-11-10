/// <reference types="cypress" />

import ServeRestLogin from '../pages/serverest_login.page'
import ServeRestCadastrarUsuario from '../pages/serverest_cdusuario.page'
import ServeRestCompra from '../pages/serverest_listaDeCompras.page'


describe('Testes Front ServeRest', () => {
    describe('Testes de compra positivos', () => {
        before(() => {
            ServeRestLogin.acessarServeRest()
            cy.get('[data-testid="cadastrar"]').click()
            ServeRestCadastrarUsuario.realizar_cadastroNaoAdmin()
            cy.wait(3000)
        })

        it('Deve realizar uma compra e validar todas as etapas', () => {
            ServeRestLogin.validarHomepageNaoAdmin()
            ServeRestLogin.validarDivsProdutos()
            ServeRestCompra.adicionarNaLista(0)
            cy.wait(3000)
            ServeRestCompra.validarListaDeCompras()
            ServeRestCompra.validarProduto()
        })  
    })
})