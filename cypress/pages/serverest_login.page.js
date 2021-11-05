import Base from './_base.page';

import loginCredentials from '../fixtures/loginCredentials'
import {LOGIN as LG} from './components/serverest_login.elements'


export default class ServeRestLogin extends Base {

    static acessarServeRest(){
        cy.visit(`${Cypress.env('baseURL_front')}`)
    }

    static logar() {
        super.typeValue(LG.INP_EMAIL, loginCredentials.valido.email)
        super.typeValue(LG.INP_PASSWORD, loginCredentials.valido.password)
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
        super.verifyIfElementDoesNotExists(LG.VALUES)

    }

}