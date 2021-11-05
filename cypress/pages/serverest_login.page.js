import Base from './_base.page';

import loginCredentials from '../fixtures/loginCredentials'
























































import ServeRestCadastrarUsuario from './serverest_cdusuario.page';
import {LOGIN as LG} from './components/sauce.elements'



export default class ServeRestLogin extends Base {

    static acessarServeRest(){
        cy.visit(`${Cypress.env('baseURL_front')}`)
    }

    static logar() {

        super.typeValue(LG.INP_EMAIL, ServeRestCadastrarUsuario.newEmail)
        super.typeValue(LG.INP_PASSWORD, ServeRestCadastrarUsuario.newSenha)
        super.clickOnElement(LG.BTN_LOGIN)
    }

}