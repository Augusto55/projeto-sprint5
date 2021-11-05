/// <reference types="cypress" />

import ServeRestLogin from '../pages/serverest_login.page'
import ServeRestCadastrarUsuario from '../pages/serverest_cdusuario.page'

describe('Testes Front ServeRest - Cadastro de usuário', () => {
    describe('Testes positivo para cadastrar um novo usuário', () => {
        before(() => {
            ServeRestLogin.acessarServeRest()
        })
        it('Cadastrar um novo usuário', () => {
            ServeRestCadastrarUsuario.entrar_cadastro()
        })
        it('Validar campos para realizar o cadastro', () => {
            ServeRestCadastrarUsuario.campos_cadastro()
        })
        it('Realizar cadastro de usuário admin', () => {
            ServeRestCadastrarUsuario.realizar_cadastro()
        })
    })
})