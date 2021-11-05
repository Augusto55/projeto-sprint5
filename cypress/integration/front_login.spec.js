/// <reference types="cypress" />

import ServeRestLogin from '../pages/serverest_login.page'
import {SR_CadastroProduto } from '../pages/serverest_prod.page'

describe('Testes Front ServeRest', () => {
    beforeEach(() => {
        ServeRestLogin.acessarSauce()
    })
    context('estar logado', () => {
        beforeEach(() => {
            
            ServeRestLogin.logar()
        })

        it('cadastrar produto', () => {
            

        })


    })
})