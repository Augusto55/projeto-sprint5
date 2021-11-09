import Base from './_base.page';

export default class ServeRestLogin extends Base {

    static acessarServeRest(){
        cy.visit(`${Cypress.env('baseURL_front')}`)
    }

    static acessarServeRestCadastro(){
        cy.visit(`${Cypress.env('baseURL_front_cadastrar')}`)
    }
}