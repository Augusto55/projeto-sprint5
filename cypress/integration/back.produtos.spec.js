/// <reference types="cypress"/>

import Factory from "../dynamics/factory.js"

var bearer

describe.only("Testes para PRODUTOS", () => {
    it("Criação de um produto no sistema utilizando POST", () => {
        let produto = Factory.geradorDeProdutos()

        cy.fixture("loginCredentials").then((usuario) => {
            cy.logar(usuario.valido).then(res => {
                bearer = res.body.authorization

                cy.criarProduto(bearer, produto).then (res => {
                    expect(res.statusCode === 201);
                    expect(res.body).to.have.all.keys("message", "_id");
                    expect(res.body.message).to.equal("Cadastro realizado com sucesso");

                    cy.validarContrato(res, "post_produtos", 201).then( validacao => {
                        expect(validacao).to.be.equal("Contrato valido.")
                    })
                })
            })
        })
    })

    it(`Requesição GET na rota dos produtos \n(deve listar tudo disponivel)`, () => {
        cy.buscarProdutos().then( res => {
            expect(res.statusCode === 200)
            cy.validarContrato(res, "get_produtos", 200).then( validacao => {
                //res = resposta | pasta | arquivo .json
                expect(validacao).to.be.equal("Contrato valido.")
            })
        })
    })
})
