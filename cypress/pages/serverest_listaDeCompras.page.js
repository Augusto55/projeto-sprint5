import Base from './_base.page';
const Faker = require('faker');

import {HOMEPAGE_NAOADMIN as HPNA} from './components/home_page.elements'
import {HOMEPAGE_PRODUTOS as HPP} from './components/home_page.elements'
import {LISTADECOMPRAS as LC} from './components/listadecompras.elements'
import {PRODUTO_LISTADECOMPRAS as PLC} from './components/listadecompras.elements'

export default class ServeRestCompra extends Base {
    static adicionarNaLista() {
        super.clickOnElement(HPP.BTN_ADDPRODUCT, Faker.datatype.number(60, 1))
        super.clickOnElement(LC.BTN_HOMEPAGE)
    }

    static validarListaDeCompras(){
        super.clickOnElement(HPNA.BTN_LISTACOMPRAS)
        super.validarUrl('/minhaListaDeProdutos')
        super.validarElemento(LC.BTN_HOMEPAGE)
        super.validarElemento(LC.BTN_ADDTOCART)
        super.validarElemento(LC.BTN_LIMPARLISTA)
        super.validarElemento(LC.BTN_INC)
        super.validarElemento(LC.BTN_DEC)
    }

    static validarProduto(){
        super.validarElemento(PLC.DESC_PRODUTO)
        // cy.get(PLC.COL_PRODUTO).within(($col_produto) => {
        //     cy.get('<p>').should('be.visible')
        //   })
        cy.get(PLC.COL_PRODUTO).should('contain', 'Preço')
        super.validarElemento(PLC.IMAGEM_PRODUTO, 1)
    }   

    static limparLista() {
        super.clickOnElement(HPNA.BTN_LISTACOMPRAS)
        super.validarUrl('/minhaListaDeProdutos')
        super.clickOnElement(LC.BTN_LIMPARLISTA)
    }

    static mandarParaCarrinho() {
        super.clickOnElement(HPNA.BTN_LISTACOMPRAS)
        super.clickOnElement(LC.BTN_ADDTOCART)
        super.validarUrl('/carrinho')
    }
    
}