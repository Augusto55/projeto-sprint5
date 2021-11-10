import Faker from 'faker';
import Base from './_base.page';

import { BODY_PROD as BP} from './components/produtos.elements';


export default class SR_CadastroProduto extends Base {
    
    static cadastrar() {
        super.clickOnElement(BP.BTN_CADASTRAR);
        super.validarUrl('/cadastrarprodutos')
        super.validarElemento(BP.INP_NOME)
        super.typeValue(BP.INP_NOME, `${Faker.commerce.product()} ${Faker.commerce.productMaterial()} ${Faker.commerce.color()}` );
        super.validarElemento(BP.INP_PRECO)
        super.typeValue(BP.INP_PRECO, Faker.commerce.price());
        super.validarElemento(BP.INP_DESCRICAO)
        super.typeValue(BP.INP_DESCRICAO, Faker.random.words(4));
        super.validarElemento(BP.INP_QUANTIDADE)
        super.typeValue(BP.INP_QUANTIDADE, Faker.datatype.number());
        super.clickOnElement(BP.BTN_CADASTRO)
        super.validarUrl('/listarprodutos')
    }

    static verificarErros() {
        super.validarUrl('/cadastrarprodutos')
        super.clickOnElement(BP.BTN_CADASTRAR);
        super.clickOnElement(BP.BTN_CADASTRO);
        super.validarElemento(BP.DIV_ERRO)
    }

    static excluirProdutos() {
        super.clickOnElement(BP.BTN_LISTAR);
        cy.wait(300);
        super.validarUrl('/listarprodutos');
        //funciona quando quer 
        super.clickOnElement(BP.BTN_EXCLUIR, Faker.datatype.number(60, 1))
        
        
    }
    static editarProdutos() {
        super.clickOnElement(BP.BTN_LISTAR);
        cy.wait(300);
        super.validarUrl('/listarprodutos');
        //não funciona o botão
        super.clickOnElement(BP.BTN_EDITAR, Faker.datatype.number(60, 2))
    }
}