import faker from "faker"

export default class Factory {

    static geradorDeProdutos() {
        return {
            "nome": `${faker.commerce.product()} ${faker.commerce.color()}`,
            "preco": faker.commerce.price(),
            "descricao": `${faker.commerce.productDescription()}`,
            "quantidade": faker.datatype.number()
        }
    }

    static geradorDeEmails() {
        return {
            "nome": `${faker.name.firstName()} ${faker.name.middleName()} ${faker.name.lastName()}`,
            "email": `${faker.internet.email()}`,
            "password": `${faker.internet.password()}`,
            "administrador": `${faker.datatype.boolean()}`
        }
    }
}
