import Base from './_base.page';

const faker = require('faker');
import { CAD_USUARIO as CD} from './components/serverest_cdusuario.elements';

export default class ServeRestCadastrarUsuario extends Base {
    static entrar_cadastro() {
        super.clickOnElement(CD.BTN_CADASTRE)
        super.validarUrl(CD.URL)
    }
    static campos_cadastro() {
        super.validarUrl(CD.URL)
        super.validarElemento(CD.IMG)
        super.validarElemento(CD.INP_NOME)
        super.validarElemento(CD.INP_EMAIL)
        super.validarElemento(CD.INP_SENHA)
    }
    static realizar_cadastro(){
        super.typeValue(CD.ADD_NOME, faker.name.findName())
        super.typeValue(CD.ADD_EMAIL, faker.internet.email())
        super.typeValue(CD.ADD_SENHA, faker.internet.password())
        super.clickOnElement(CD.ADD_ADMIN)
        super.clickOnElement(CD.FIN_CADASTRO)
    }
}