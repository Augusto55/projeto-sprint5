/// <reference types="cypress" />

import ServeRestLogin from '../pages/serverest_login.page'
import SR_CadastroProduto from '../pages/serverest_prod.page'
import ServeRestCadastrarUsuario from '../pages/serverest_cdusuario.page'

describe('Testes Front Cadastro de Produtos ServeRest', () => {
    before(() => {
        ServeRestLogin.acessarServeRest();
        ServeRestCadastrarUsuario.realizar_cadastro();
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
    it.only('modificar produtos', () => {
        SR_CadastroProduto.modificarProdutos()
    })
    
})