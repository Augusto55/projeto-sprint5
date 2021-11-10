/// <reference types="cypress" />

import ServeRestLogin from '../pages/serverest_login.page'
import ServeRestCadastrarUsuario from '../pages/serverest_cdusuario.page'
import ServeRestCompra from '../pages/serverest_listaCompras.page'

describe('Testes Front ServeRest - COMPRAS', () => {
    describe('Testes de compra positivos', () => {
        before(() => {
            ServeRestLogin.acessarServeRest()
            cy.get('[data-testid="cadastrar"]').click()
            ServeRestCadastrarUsuario.realizar_cadastroNaoAdmin()
            cy.wait(1500)
        })
        it('Deve realizar uma compra e validar todas as etapas', () => {
            ServeRestLogin.validarHomepageNaoAdmin()
            ServeRestLogin.validarDivsProdutos()
            ServeRestCompra.adicionarNaLista()
            cy.wait(1500)
            ServeRestCompra.validarListaDeCompras()
            ServeRestCompra.validarProduto()
        })
        
    })
    describe('Compras positivas', () =>{
        beforeEach(() => {
            cy.wait(1500);
            ServeRestLogin.acessarServeRest()
            ServeRestCadastrarUsuario.loginNaoAdmin();
        })
        it('Deve realizar o caminho completo ate adicionar ao carrinho', ()=>{
            //as proximas 2 linhas podem ser replicadas diversas vezes para adicionar mais produtos
            ServeRestCompra.adicionarNaLista()
            cy.wait(1000)
            ServeRestCompra.adicionarNaLista()
            cy.wait(1000)
            ServeRestCompra.adicionarNaLista()
            cy.wait(1000)
            ServeRestCompra.mandarParaCarrinho()
        })
        it('Deve adicionar itens e limpar a lista', () => {
            ServeRestCompra.adicionarNaLista()
            cy.wait(1000)
            ServeRestCompra.adicionarNaLista()
            cy.wait(1000)
            ServeRestCompra.limparLista()
        })
    })
})