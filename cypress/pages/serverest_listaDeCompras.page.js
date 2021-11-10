import Base from './_base.page';
const faker = require('faker');

import {HOMEPAGE_NAOADMIN as HPNA} from './components/home_page.elements'
import {HOMEPAGE_PRODUTOS as HPP} from './components/home_page.elements'
import {LISTADECOMPRAS as LC} from './components/listadecompras.elements'
import {PRODUTO_LISTADECOMPRAS as PLC} from './components/listadecompras.elements'

export default class ServeRestCompra extends Base {
    static adicionarNaLista(numeroProduto){
        super.clickOnElement(HPP.BTN_ADDPRODUCT,numeroProduto)
    }

    static validarListaDeCompras(){
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

    
}