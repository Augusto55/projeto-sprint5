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

describe('Testes Front ServeRest', () => {
    describe('Testes de login positivos', () => {
        before(() => {
            ServeRestLogin.acessarServeRest()
        })
        it('Deve verificar se os campos para login estão adequados', () => {
            ServeRestLogin.verificarLogin()
        })

        it('Logar e validar elementos da página inicial', () => {
            ServeRestLogin.logar()
            ServeRestLogin.validarNavBar()
            ServeRestLogin.validarCorpo()
        })
