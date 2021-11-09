import Base from './_base.page';
const faker = require('faker');

import {HOMEPAGE_NAOADMIN as HPNA} from './components/home_page.elements'
import {HOMEPAGE_PRODUTOS as HPP} from './components/home_page.elements'
import {LISTADECOMPRAS as LC} from './components/listadecompras.elements'

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
        
    }
}