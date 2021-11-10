import Base from './_base.page';
const faker = require('faker');


import loginCredentials from '../fixtures/loginCredentials'
import ServeRestCadastrarUsuario from './serverest_cdusuario.page';
import {LOGIN as LG} from './components/login.elements'
import {HOMEPAGE_NAVBAR as HNAV} from './components/home_page.elements'
import {HOMEPAGE as HP} from './components/home_page.elements'
import {HOMEPAGE_NAOADMIN as HPNA} from './components/home_page.elements'
import {HOMEPAGE_PRODUTOS as HPP} from './components/home_page.elements'


var myModule = require('./serverest_cdusuario.page');
var senha = myModule.newSenha;
var usuarioFaker = myModule.newEmail;
var name = myModule.newName;

const randomProduct = `${faker.commerce.productName()}`;


export default class ServeRestLogin extends Base {

    static acessarServeRest(){
        cy.visit(`${Cypress.env('baseURL_front')}`)
    }

    static acessarServeRestCadastro(){
        cy.visit(`${Cypress.env('baseURL_front_cadastrar')}`)
    }

    static logarUsuárioInexistente(usuario) {

        super.typeValue(LG.INP_EMAIL, usuario)
        super.typeValue(LG.INP_PASSWORD, senha)
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
        super.verificarSeElementoNãoContemAtr(LG.INP_PASSWORD, 'value')
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

    static validarLoginInvalido() {
        super.validateElementText(LG.ERROR_WINDOW, 'Email e/ou senha inválidos')
    }

    static logarSenhaErrada(senhaErrada) {
        super.typeValue(LG.INP_EMAIL, usuarioFaker)
        super.typeValue(LG.INP_PASSWORD, senhaErrada)
        super.clickOnElement(LG.BTN_LOGIN)
    }

    static validarAlert() {
        cy.on('window:alert', (str) => {
            expect(str).to.contain(`Inclua um "@" no endereço de e-mail.`)
     })
    }

    static validarHomepageNaoAdmin() {
        super.validarUrl('/home')
        super.validarElemento(HNAV.BTN_HOME)
        super.validarElemento(HPNA.BTN_LISTACOMPRAS)
        super.validarElemento(HPNA.BTN_CARRINHO)
        super.validarElemento(HNAV.BTN_LOGOUT)
        super.validarElemento(HPNA.TXT_SEARCH)
        super.validarElemento(HPNA.BTN_SEARCH)
    }

    static validarDivsProdutos() {
        super.validarElemento(HPP.IMG_PRODUCT)
        super.validarElemento(HPP.TITLE_PRODUCT)
        super.validarElemento(HPP.PRICE_PRODUCT)
        super.validarElemento(HPP.BTN_ADDPRODUCT)
    }

    static validarValue() {
        super.typeValue(HPNA.TXT_SEARCH, randomProduct)
        cy.get('.form-control.my-5.mx-3.my-sm-0').should('have.attr', 'value', randomProduct)
    }
}