import Faker from 'faker';
import Base from './_base.page';

import { BODY_PROD as BP} from './components/produtos.elements';


export default class SR_CadastroProduto extends Base {
    
    static cadastrar() {
        super.clickOnElement(BP.BTN_CADASTRAR);
        super.validarUrl('/cadastrarprodutos')
        super.typeValue(BP.INP_NOME, `${Faker.commerce.product()} ${Faker.commerce.productMaterial()} ${Faker.commerce.color()}` );
        super.typeValue(BP.INP_PRECO, Faker.commerce.price());
        super.typeValue(BP.INP_DESCRICAO, Faker.random.words(4));
        super.typeValue(BP.INP_QUANTIDADE, Faker.random.number());
        super.clickOnElement(BP.BTN_CADASTRO)
        super.validarUrl('/listarprodutos')
    }
    static verificarErros() {
        super.clickOnElement(BP.BTN_CADASTRAR);
        super.clickOnElement(BP.BTN_CADASTRO);
        super.validarElemento(BP.DIV_ERRO)
    }

    static modificarProdutos() {
        super.clickOnElement(BP.BTN_LISTAR);
        cy.wait(300);
        super.validarUrl('/listarprodutos');
        //funciona quando quer 
        super.clickOnElement(BP.BTN_EXCLUIR, Faker.random.number(60))
        //não funciona o botão
        super.clickOnElement(BP.BTN_EDITAR, Faker.random.number(60))
    }
}