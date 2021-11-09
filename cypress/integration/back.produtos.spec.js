/// <reference types="cypress"/>

import Factory from "../dynamics/factory.js"

var bearer

describe("Testes para PRODUTOS", () => {
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
                    expect(res.body).to.have.property("message");
                    expect(res.body.message).to.be.equal("Token de acesso ausente, inválido, expirado ou usuário do token não existe mais");

                    cy.validarContrato(res, "post_produtos", 401).then( validacao => {
                        expect(validacao).to.be.equal("Contrato valido.")
                    })
                })
            })
        })
    })

    it("Fazer uma requesição de um produto expecifico", () => {
        cy.fixture("existingProd").then((produto) => {
            
            cy.buscarProdutoExistente(produto.product_ID_Existente._id).then (res => {
                expect(res.statusCode === 200);
                expect(res.body).to.have.all.keys("nome", "preco", "descricao", "quantidade", "_id")
                
                cy.validarContrato(res, "get_produtos/_id", 200).then( validacao => {
                    expect(validacao).to.be.equal("Contrato valido.")
                })
            })
        })
    })
    
    it("Deletar um produto temporario", () => {
        let produto = Factory.geradorDeProdutos()
        var id

        cy.fixture("loginCredentials").then((usuario) => {
            cy.logar(usuario.valido).then(login => {
                bearer = login.body.authorization

                cy.criarProduto(bearer, produto).then (prod => {
                    id = prod.body._id

                    cy.deletarProduto(bearer, id).then(res => {
                        expect(res.statusCode === 200);
                        expect(res.body).to.have.property("message");
                        expect(res.body.message).to.be.equal("Registro excluído com sucesso");

                        //cy.validarContrato(res, "delete_produtos", 200).then( validacao => {
                        //    expect(validacao).to.be.equal("Contrato valido.")
                        //})
                    })
                })
            })
        })
    })
})
