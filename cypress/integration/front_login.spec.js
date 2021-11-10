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
    })

    /****************************************************************************/

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
