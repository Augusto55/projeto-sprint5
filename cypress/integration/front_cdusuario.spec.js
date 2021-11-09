/// <reference types="cypress" />

import ServeRestLogin from '../pages/serverest_login.page'
import ServeRestCadastrarUsuario from '../pages/serverest_cdusuario.page'

describe('Testes Front ServeRest - Cadastro de usuário/Positivos', () => {
    describe('Cadastro de usuário com propriedades de administrador', () => {
        before(() => {
            ServeRestLogin.acessarServeRest()
        })
        it('Validar campos para realizar o cadastro', () => {
            ServeRestCadastrarUsuario.campos_cadastro()          
        })
        it('Deve cadastrar um usuário admin', () => {
            ServeRestLogin.acessarServeRestCadastro()
            ServeRestCadastrarUsuario.realizar_cadastroAdmin()           
        })
        it('Deve logar com esse mesmo usuário admin', () => {
            ServeRestLogin.acessarServeRest()
            ServeRestCadastrarUsuario.login()
            cy.wait(1000)
        })
    })
    
    describe('Cadastro de usuário sem propriedades de administrador', () => {    
        it('Deve cadastrar um usuário', () => {
            ServeRestLogin.acessarServeRestCadastro()
            ServeRestCadastrarUsuario.realizar_cadastroNaoAdmin()
        })

        it('Deve logar com esse mesmo usuário', () => {
            ServeRestLogin.acessarServeRest()
            ServeRestCadastrarUsuario.loginNaoAdmin()
            cy.wait(1000)
        })
    })

    /****************************************************************************/
    
    describe('Testes cadastro de usuário/Negativos', () => {    

        it('Nome é obrigatorio', () => {
            ServeRestLogin.acessarServeRestCadastro()
            ServeRestCadastrarUsuario.nomeObrigatorio()
            cy.wait(1000)
        })
        it('Email é obrigatorio', () => {
            ServeRestLogin.acessarServeRestCadastro()
            ServeRestCadastrarUsuario.emailObrigatorio()
            cy.wait(1000)
        })
        it('Password é obrigatorio', () => {
            ServeRestLogin.acessarServeRestCadastro()
            ServeRestCadastrarUsuario.passwordObrigatorio()
        })
    })
})