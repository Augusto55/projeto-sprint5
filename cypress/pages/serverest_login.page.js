import Base from './_base.page';

import loginCredentials from '../fixtures/loginCredentials'

import {LOGIN as LG} from './components/sauce.elements'


export default class ServeRestLogin extends Base {

    static acessarServeRest(){
        cy.visit(`${Cypress.env('baseURL_front')}`)
    }

    static logar() {
        super.typeValue(LG.INP_EMAIL, loginCredentials.valido.email)
        super.typeValue(LG.INP_PASSWORD, loginCredentials.valido.password)
        super.clickOnElement(LG.BTN_LOGIN)
    }

}