/// <reference types="cypress" />

import ServeRestLogin from '../pages/serverest_login.page'
import ServeRestCadastrarUsuario from '../pages/serverest_cdusuario.page'
































describe('Testes Front ServeRest', () => {
    before(() => {
        ServeRestLogin.acessarServeRest()
    })
        
        it('cadastra', () => {
            
            ServeRestCadastrarUsuario.realizar_cadastro()
            cy.wait(3000)
        })
        it('logar', () => {
            
            ServeRestLogin.acessarServeRest()
            ServeRestCadastrarUsuario.login()
        })

})