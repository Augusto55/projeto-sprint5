/// <reference types="cypress" />

import ServeRestLogin from '../pages/serverest_login.page'
import ServeRestCadastrarUsuario from '../pages/serverest_cdusuario.page'

describe('Testes Front ServeRest', () => {

    describe('Testes de login positivos', () => {
    before(() => {
        ServeRestLogin.acessarServeRest()
    })

    it('Deve verificar se os campos para login estão adequados', () => {
        ServeRestLogin.acessarServeRest()
        ServeRestLogin.verificarLogin()
    })



    describe('Testes de login com um usuário com propriedades de administrador', () => {    
        it.only('Deve cadastrar um usuário', () => {
            ServeRestCadastrarUsuario.realizar_cadastro()
            cy.wait(3000)
        })

        it.only('Deve logar com esse mesmo usuário', () => {
            ServeRestLogin.acessarServeRest()
            ServeRestCadastrarUsuario.login()
            cy.wait(3000)
        })

        it('Deve validar elementos da página inicial', () => {
            //ServeRestCadastrarUsuario.login()
            ServeRestLogin.validarNavBarAdmin()
            ServeRestLogin.validarCorpoAdmin()
        })
    })




    describe('Testes de login com um usuário sem propriedades de administrador', () => {    
        it('Deve cadastrar um usuário', () => {
            ServeRestLogin.acessarServeRest()
            ServeRestCadastrarUsuario.realizar_cadastroNaoAdmin()
            cy.wait(3000)
        })

        it('Deve logar com esse mesmo usuário', () => {
            ServeRestLogin.acessarServeRest()
            ServeRestCadastrarUsuario.loginNaoAdmin()
            cy.wait(2000)
        })

        it('Validar elementos da página inicial', () => {
            ServeRestLogin.validarHomepageNaoAdmin()
            ServeRestLogin.validarDivsProdutos()
            ServeRestLogin.validarValue()
        })
    })
         
    })




    describe('Testes de login negativos', () => {
        before(() => {
            ServeRestLogin.acessarServeRest()
        })

        it('Deve logar com um usuário que não existe', () => {
            
            ServeRestLogin.logarUsuárioInexistente('sadjabdba22@qa.com')
            ServeRestLogin.validarLoginInvalido()
        })

        it('Deve logar com um usuário existente mas com a senha errada', () => {
            ServeRestLogin.acessarServeRest()
            ServeRestLogin.logarSenhaErrada('senhaerrada')
            ServeRestLogin.validarLoginInvalido()
        })
        
        it('Deve tentar logar com um usuário com caracteres inválidos', () => {
            ServeRestLogin.acessarServeRest()
            ServeRestLogin.logarUsuárioInexistente('asdad123')
            ServeRestLogin.validarAlert()
        })
    })
    

})
