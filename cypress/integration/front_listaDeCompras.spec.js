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
            ServeRestCompra.adicionarNaLista()
            cy.wait(3000)
            ServeRestCompra.validarListaDeCompras()
            ServeRestCompra.validarProduto()
        })
        
    })
    describe('Compras positivas', () =>{
        before(() => {
            ServeRestLogin.acessarServeRestCadastro()
            ServeRestCadastrarUsuario.realizar_cadastroNaoAdmin();
        })
        beforeEach(() => {
            cy.wait(1500);
            ServeRestLogin.acessarServeRest()
            ServeRestCadastrarUsuario.loginNaoAdmin();
        })
        it('realiza caminho completo ate adicionar carrinho', ()=>{
            //as proximas 2 linhas podem ser replicadas diversas vezes para adicionar mais produtos
            ServeRestCompra.adicionarNaLista()
            cy.wait(1000)
            ServeRestCompra.adicionarNaLista()
            cy.wait(1000)
            ServeRestCompra.adicionarNaLista()
            cy.wait(1000)
            ServeRestCompra.mandarParaCarrinho()
        })
        it('adicionar itens e limpar a lista', () => {
            ServeRestCompra.adicionarNaLista()
            cy.wait(1000)
            ServeRestCompra.adicionarNaLista()
            cy.wait(1000)
            ServeRestCompra.limparLista()
        })
    })
})