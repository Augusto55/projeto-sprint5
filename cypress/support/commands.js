/// <reference types="cypress"/>

import Ajv from "ajv"
const ajv = new Ajv({allErrors: true, verbose: true, strict: false})

//====================================================//
//                      LOGIN                         //
//====================================================//
Cypress.Commands.add("pegarUserADM", () => {
    cy.request({
        method: "GET",
        url: `${Cypress.env("base_url")}/usuarios`,
        failOnStatusCode: false
    }).then( res => {
        expect(res.statusCode).to.be.equal(200);
        expect(res.body).to.have.property("quantidade")
        expect(res.body.usuarios).to.be.a("array")
    
        for(var i = 0; i < res.body.usuarios.length; i++) {
            if(res.body.usuarios[i].administrador === "true") {
                return res.body.usuarios[i]
            }
        }
    })
})

Cypress.Commands.add("logar", usuario => {
    return cy.request({
        method: "POST",
        url: `${Cypress.env("base_url")}/login`,
        failOnStatusCode: false,
        body: usuario
    })
})
//====================================================//
//                     PRODUTOS                       //
//====================================================//
Cypress.Commands.add("buscarProdutos", () => {
    cy.request({
        method: "GET",
        url: `${Cypress.env("base_url")}/produtos`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add("buscarProdutoExistente", (_id) => {
    cy.request({
        method: "GET",
        url: `${Cypress.env("base_url")}/produtos/${_id}`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add("deletarProduto", (bearer ,_id) => {
    cy.request({
        method: "DELETE",
        url: `${Cypress.env("base_url")}/produtos/${_id}`,
        failOnStatusCode: false,
        headers: {Authorization: bearer}
    })
})

Cypress.Commands.add("editarProduto", (bearer, _id) => {
    cy.request({
        method: "PUT",
        url: `${Cypress.env("base_url")}/produtos/${_id}`,
        failOnStatusCode: false,
        headers: {Authorization: bearer}
    })
})

Cypress.Commands.add("criarProduto", (bearer, produto) => {
    return cy.request({
        method: "POST",
        url: `${Cypress.env("base_url")}/produtos`,
        failOnStatusCode: false,
        headers: {Authorization: bearer},
        body: produto
    })
})
//====================================================//
//                     USUARIOS                       //
//====================================================//
Cypress.Commands.add("listarUSERS", () => {
    return cy.request({
        method: "GET",
        url: `${Cypress.env("base_url")}/usuarios`,
        failOnStatusCode: true
    })
})

Cypress.Commands.add("pegarUserExpecifico", (usuario) => {
    return cy.request({
        method: "GET",
        url: `${Cypress.env("base_url")}/usuarios`,
        failOnStatusCode: false,
        body: usuario
    })
})
//====================================================//
//                     CARRINHO                       //
//====================================================//
Cypress.Commands.add("buscarCarrinho", (carrinho) => {
    cy.request({
        method: "GET",
        url: `${Cypress.env("base_url")}/carrinhos`,
        failOnStatusCode: false,
        body: carrinho
    })
})

Cypress.Commands.add("cadastrarCarrinho", (bearer, produto) => {
    return cy.request({
        method: "POST",
        url: `${Cypress.env("base_url")}/carrinho`,
        failOnStatusCode: false,
        headers: {Authorization: bearer},
        body: produto
    })
})
//====================================================//
//                     VALIDA????O                      //
//====================================================//
Cypress.Commands.add("validarContrato", (res, schema, status) => {
    cy.fixture(`schema/${schema}/${status}.json`).then( schema => {
        //res = resposta | rota pasta | arquivo .json
        const validate = ajv.compile(schema)
        const valid = validate(res.body)
        
        if(!valid ){
            var errors = ""
            for(let each in validate.errors) {
                let err = validate.errors[each]
                errors += `\n${err.instancePath} ${err.message}, but recive ${typeof err.data}` 
                //Informa o local do erro //Informa o que deveria ser informado //O que recebeu
            }

            throw new Error(`Contrato inv??lido, por favor cheque: ${errors}`)
        }
        return "Contrato valido."
    })
})
