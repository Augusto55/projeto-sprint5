import Faker from 'faker';
import Base from './_base.page';

import { BODY_PROD as BP} from './components/sauce.elements';

export default class SR_CadastroProduto extends Base {
    
    static cadastrar() {
        super.clickOnElement(BP.BTN_CADASTRAR);
        super.typeValue(BP.INP_NOME, Faker.name.firstName());
    }
}