/// <reference types="cypress" />

import ServeRestLogin from '../pages/serverest_login.page'

describe('Testes Front ServeRest', () => {
    describe('Teste de compra positivo', () => {
        before(() => {
            ServeRestLogin.acessarServeRest()
        })
        it('Logar', () => {
            ServeRestLogin.logar()
        })




    })
})