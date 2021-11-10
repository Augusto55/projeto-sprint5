/// <reference types="cypress" />

import ServeRestLogin from '../pages/serverest_login.page'
import ServeRestCadastrarUsuario from '../pages/serverest_cdusuario.page'

describe('Testes Front ServeRest - Cadastro de usuário', () => {
    describe('Testes cadastro de usuário/Positivos', () => {
        before(() => {
            ServeRestLogin.acessarServeRest()
        })
        it('Validar campos para realizar o cadastro', () => {
            ServeRestCadastrarUsuario.campos_cadastro()          
        })
        describe('Cadastro de usuário com propriedades de administrador', () => {
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
            it('Deve validar elementos da página inicial', () => {
                //ServeRestCadastrarUsuario.login()
                ServeRestLogin.validarNavBarAdmin()
                ServeRestLogin.validarCorpoAdmin()
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
            it('Validar elementos da página inicial', () => {
                ServeRestLogin.validarHomepageNaoAdmin()
                ServeRestLogin.validarDivsProdutos()
                ServeRestLogin.validarValue()
            })
        })
    })

    /****************************************************************************/
    
    describe('Testes cadastro de usuário/Negativos', () => {    
        describe('Testes cadastro de usuário deixando algum campo em branco', () => {
            it('Deve cadastrar um usuário com o nome em branco', () => {
                ServeRestLogin.acessarServeRestCadastro()
                ServeRestCadastrarUsuario.nomeObrigatorio()
            })
            it('Deve cadastrar um usuário com o Email em branco', () => {
                ServeRestLogin.acessarServeRestCadastro()
                ServeRestCadastrarUsuario.emailObrigatorio()
            })
            it('Deve cadastrar um usuário com a senha em branco', () => {
                ServeRestLogin.acessarServeRestCadastro()
                ServeRestCadastrarUsuario.passwordObrigatorio()
            })
        })
        describe('Testes cadastro de usuário com Email inválido', () => {
            it('Deve cadastrar um usuário com Email inválido', () => {
                ServeRestLogin.acessarServeRestCadastro()
                ServeRestCadastrarUsuario.emailFaltandoDados('testando@qa')
            })
            it('Deve cadastrar um usuário sem inclua um "@" no endereço de e-mail.', () => {
                ServeRestLogin.acessarServeRestCadastro()
                ServeRestCadastrarUsuario.emailFaltandoDados2('joaohotmail.com')
                ServeRestCadastrarUsuario.validarAlert()
            })
        })
    })
})