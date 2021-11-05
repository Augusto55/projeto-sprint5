/// <reference types="cypress"/>

import Factory from "../dynamics/factory.js"

var bearer

describe.only("Testes para PRODUTOS", () => {
    it(`Requesição GET na rota dos produtos \n(Lista todos produtos disponiveis)`, () => {
        cy.buscarProdutos().then( res => {
            expect(res.statusCode === 200)

            cy.validarContrato(res, "get_produtos", 200).then( validacao => {
                expect(validacao).to.be.equal("Contrato valido.")
            })
        })
    })

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

    it("Teste de inserção de um produto já existente", () => {
        cy.fixture("loginCredentials").then((usuario) => {
            cy.logar(usuario.valido).then(res => {
                bearer = res.body.authorization

                cy.fixture("existingProd").then((produto) => {
                    cy.criarProduto(bearer, produto.produtoExistente).then (res => {
                        expect(res.statusCode === 400);
                        expect(res.body).to.have.property("message");

                        cy.validarContrato(res, "post_produtos", 400).then( validacao => {
                            expect(validacao).to.be.equal("Contrato valido.")
                        })
                    })
                })
            })
        })
    })

    it("Teste de inserção de Token invalido/inesistente/expirado", () => {
        let produto = Factory.geradorDeProdutos()

        cy.fixture("loginCredentials").then((usuario) => {
            cy.logar(usuario.emailLOCO).then(res => {
                bearer = res.body.authorization
                
                cy.criarProduto(bearer, produto).then (res => {
                    expect(res.statusCode === 401);
                    expect(res.body).to.have.property("message")
                    expect(res.body.message).to.be.equal("Token de acesso ausente, inválido, expirado ou usuário do token não existe mais")

                    cy.validarContrato(res, "post_produtos", 401).then( validacao => {
                        expect(validacao).to.be.equal("Contrato valido.")
                    })
                })
            })
        })
    })

    it.skip("Teste de criação com usuario normal", () => {
        //TODO esperando pelo Caio fazer a parte dos usuarios
    })


})
