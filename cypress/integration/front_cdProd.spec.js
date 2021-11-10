/// <reference types="cypress" />

import ServeRestLogin from '../pages/serverest_login.page'
import SR_CadastroProduto from '../pages/serverest_prod.page'
import ServeRestCadastrarUsuario from '../pages/serverest_cdusuario.page'

describe('Testes Front Cadastro de Produtos ServeRest', () => {
    before(() => {
        ServeRestLogin.acessarServeRestCadastro()
        ServeRestCadastrarUsuario.realizar_cadastroAdmin();
        cy.wait(1000)            
    })
    beforeEach(() => {
        cy.wait(500);
        ServeRestLogin.acessarServeRest()
        ServeRestCadastrarUsuario.login();
    })
    it('cadastro correto', () => {
        SR_CadastroProduto.cadastrar() 
    })
    it('cadastro com campos incorretos', () => {
        SR_CadastroProduto.verificarErros()

    })
    it('excluir produtos(as vezes)', () => {
        SR_CadastroProduto.excluirProdutos()
    })
    it('editar produtos(nem funciona)', () => {
        SR_CadastroProduto.editarProdutos()
    })    
})

describe('testes front para não admins', () => {
    before(() => {
        ServeRestLogin.acessarServeRestCadastro()
        ServeRestCadastrarUsuario.realizar_cadastroNaoAdmin();
    })
    beforeEach(() => {
        cy.wait(500);
        ServeRestLogin.acessarServeRestCadastro()
        ServeRestCadastrarUsuario.loginNaoAdmin();
    })
    it('adicionar produtos à lista de compras', () =>{
        //.adicionarNaLista
    })
})