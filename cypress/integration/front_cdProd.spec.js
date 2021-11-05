/// <reference types="cypress" />

import ServeRestLogin from '../pages/serverest_login.page'
import SR_CadastroProduto from '../pages/serverest_prod.page'

describe('Testes Front ServeRest', () => {
    describe('cadastrando produtos de diversas maneiras', () => {
        beforeEach(() => {
            ServeRestLogin.acessarServeRest()
            ServeRestLogin.logar()
        })
        it('cadastro correto', () => {
            SR_CadastroProduto.cadastrar()
           
        })
    })
})