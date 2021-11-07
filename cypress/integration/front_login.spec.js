/// <reference types="cypress" />

import ServeRestLogin from '../pages/serverest_login.page'
import ServeRestCadastrarUsuario from '../pages/serverest_cdusuario.page'

describe('Testes Front ServeRest', () => {
    describe('Testes de login positivos', () => {
    before(() => {
        ServeRestLogin.acessarServeRest()
    })
        
        it('Deve cadastrar um usuário com propriedades de administrador', () => {
            
            ServeRestCadastrarUsuario.realizar_cadastro()
            cy.wait(3000)
        })
        it('Deve logar com esse mesmo usuário', () => {
            ServeRestLogin.acessarServeRest()
            ServeRestCadastrarUsuario.login()
        })

    
        
            
        
        it('Deve verificar se os campos para login estão adequados', () => {
            ServeRestLogin.acessarServeRest()
            ServeRestLogin.verificarLogin()
        })

        it('Logar e validar elementos da página inicial', () => {
            ServeRestCadastrarUsuario.login()
            
            ServeRestLogin.validarNavBarAdmin()
            ServeRestLogin.validarCorpoAdmin()
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
        
        it.only('Deve tentar logar com um usuário com caracteres inválidos', () => {
            ServeRestLogin.acessarServeRest()
            ServeRestLogin.logarUsuárioInexistente('asdad123')
            ServeRestLogin.validarAlert()
        })
    })
    

})
