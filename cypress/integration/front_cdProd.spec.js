/// <reference types="cypress" />

import ServeRestLogin from '../pages/serverest_login.page'
import SR_CadastroProduto from '../pages/serverest_prod.page'
import ServeRestCadastrarUsuario from '../pages/serverest_cdusuario.page'

describe('Testes Front ServeRest', () => {
    describe('cadastrando produtos de diversas maneiras', () => {
        before(() => {
            ServeRestLogin.acessarServeRest();
            ServeRestCadastrarUsuario.realizar_cadastro();
            cy.wait(1000)
            ServeRestLogin.acessarServeRest()
            ServeRestCadastrarUsuario.login();
            
                     
        })
        it('cadastro correto', () => {
            
            SR_CadastroProduto.cadastrar() 
        
        })
    })
})