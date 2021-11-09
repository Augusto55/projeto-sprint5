import Base from './_base.page';

const faker = require('faker');
import { CAD_USUARIO as CD} from './components/serverest.elements';
import {LOGIN as LG} from './components/serverest.elements';


export const newName = `${faker.name.findName()}`;
export const newEmail = `${faker.internet.email()}`;
export const newSenha = `${faker.internet.password()}`;

const newName2 = `${faker.name.findName()}`;
const newEmail2 = `${faker.internet.email()}`;
const newSenha2 = `${faker.internet.password()}`;




export default class ServeRestCadastrarUsuario extends Base {

    
    static campos_cadastro() {
        super.validarUrl(CD.URL)
        super.validarElemento(CD.IMG)
        super.validarElemento(CD.INP_NOME)
        super.validarElemento(CD.INP_EMAIL)
        super.validarElemento(CD.INP_SENHA)
    }

    static realizar_cadastro(){
        super.clickOnElement(CD.BTN_CADASTRE)
        super.validarUrl(CD.URL)
        


        super.typeValue(CD.ADD_NOME, newName)
        super.typeValue(CD.ADD_EMAIL, newEmail)
        super.typeValue(CD.ADD_SENHA, newSenha)
        super.clickOnElement(CD.ADD_ADMIN)
        super.clickOnElement(CD.FIN_CADASTRO)
    }

    static realizar_cadastroNaoAdmin(){
        super.clickOnElement(CD.BTN_CADASTRE)
        super.validarUrl(CD.URL)
        
        super.typeValue(CD.ADD_NOME, newName2)
        super.typeValue(CD.ADD_EMAIL, newEmail2)
        super.typeValue(CD.ADD_SENHA, newSenha2)
        super.clickOnElement(CD.FIN_CADASTRO)
    }

    static login(){
        super.typeValue(LG.INP_EMAIL, newEmail)
        super.typeValue(LG.INP_PASSWORD, newSenha)
        super.clickOnElement(LG.BTN_LOGIN)
    }

    static loginNaoAdmin(){
        super.typeValue(LG.INP_EMAIL, newEmail2)
        super.typeValue(LG.INP_PASSWORD, newSenha2)
        super.clickOnElement(LG.BTN_LOGIN)
    }
}