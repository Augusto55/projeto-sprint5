import Base from './_base.page';

import loginCredentials from '../fixtures/loginCredentials'
import ServeRestCadastrarUsuario from './serverest_cdusuario.page';
import {LOGIN as LG} from './components/login.elements'
import {HOMEPAGE_NAVBAR as HNAV} from './components/home_page.elements'
import {HOMEPAGE as HP} from './components/home_page.elements'

var myModule = require('./serverest_cdusuario.page');
var name = myModule.newName;


export default class ServeRestLogin extends Base {

    static acessarServeRest(){
        cy.visit(`${Cypress.env('baseURL_front')}`)
    }

    static logar() {

        super.typeValue(LG.INP_EMAIL, ServeRestCadastrarUsuario.newEmail)
        super.typeValue(LG.INP_PASSWORD, ServeRestCadastrarUsuario.newSenha)
        super.clickOnElement(LG.BTN_LOGIN)
    }

    static verificarLogin() {
        super.validarUrl('/login')
        super.validarElemento(LG.BTN_LOGIN)
        super.validarElemento(LG.IMG)
        super.validarElemento(LG.INP_EMAIL)
        super.validarElemento(LG.INP_PASSWORD)
        super.validateElementText(LG.TXT_LOGIN, 'Login')
        super.validateElementText(LG.TXT_CADASTRO, 'Não é cadastrado?Cadastre-se')
        super.verificarSeElementoNãoContem(LG.INP_PASSWORD, LG.VALUES)
    }

    static validarNavBarAdmin() {
        super.validarUrl('/home')
        super.validarElemento(HNAV.BTN_CADASTRARUSER)
        super.validarElemento(HNAV.BTN_LISTARUSER)
        super.validarElemento(HNAV.BTN_CADASTRARPRODUTOS)
        super.validarElemento(HNAV.BTN_LISTARPRODUTOS)
        super.validarElemento(HNAV.BTN_RELATORIOS)
        super.validarElemento(HNAV.BTN_HOME)
        super.validarElemento(HNAV.BTN_LOGOUT)
         
    }

    static validarCorpoAdmin() {
        super.validarElemento(HP.BTN_CADASTRARUSER)
        super.validarElemento(HP.BTN_LISTARUSER)
        super.validarElemento(HP.BTN_CADASTRARPRODUTOS)
        super.validarElemento(HP.BTN_LISTARPRODUTOS)
        super.validarElemento(HP.BTN_RELATORIOS)
        super.validateElementText(HP.DIV_PRINCIPALTXT, `Bem Vindo  ${name}`)
        super.validateElementText(HP.TXT_SUBTITULO, 'Este é seu sistema para administrar seu ecommerce.')
}

}