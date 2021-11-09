/// <reference types="cypress" />

import ServeRestLogin from '../pages/serverest_login.page'
import ServeRestCadastrarUsuario from '../pages/serverest_cdusuario.page'

describe('Testes Front ServeRest - Cadastro de usuário', () => {
    describe('Testes cadastro de usuário/Positivos', () => {
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
                cy.wait(3000)           
            })
            it('Deve logar com esse mesmo usuário admin', () => {
                ServeRestLogin.acessarServeRest()
                ServeRestCadastrarUsuario.login()
                cy.wait(3000)
            })
        })

        describe('Cadastro de usuário sem propriedades de administrador', () => {    
            it('Deve cadastrar um usuário não administrador', () => {
                ServeRestLogin.acessarServeRestCadastro()
                ServeRestCadastrarUsuario.realizar_cadastroNaoAdmin()
                cy.wait(3000)
            })

            it('Deve logar com esse mesmo usuário', () => {
                ServeRestLogin.acessarServeRest()
                ServeRestCadastrarUsuario.loginNaoAdmin()
                cy.wait(3000)
            })
        })
    })

    /****************************************************************************/
    
    describe('Testes cadastro de usuário/Negativos', () => {    
        describe('Testes cadastro de usuário deixando algum campo em branco', () => {
            it('Deve com cadastrar um usuário com o nome em branco', () => {
                ServeRestLogin.acessarServeRestCadastro()
                ServeRestCadastrarUsuario.nomeObrigatorio()
            })
            it('Deve com cadastrar um usuário com o Email em branco', () => {
                ServeRestLogin.acessarServeRestCadastro()
                ServeRestCadastrarUsuario.emailObrigatorio()
            })
            it('Deve com cadastrar um usuário com a senha em branco', () => {
                ServeRestLogin.acessarServeRestCadastro()
                ServeRestCadastrarUsuario.passwordObrigatorio()
            })
        })
    })
})