/// <reference types="cypress" />

import ServeRestLogin from '../pages/serverest_login.page'

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
        })




    })
})