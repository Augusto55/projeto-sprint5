/// <reference types="cypress"/>

var bearer

describe("Testes para LOGIN", () => {
    it("Deve trazer um usuário com direito ADM para login", () => {
        cy.fixture("loginCredentials").then((usuario) => {
            cy.logar(usuario.valido).then(res => {
                expect(res.statusCode === 200);
                expect(res.body).to.have.property("message");
                expect(res.body).to.have.property("authorization");
                
                bearer = res.body.authorization

                cy.validarContrato(res, "post_login", 200).then( validacao => {
                    //res = resposta | pasta | arquivo .json
                    expect(validacao).to.be.equal("Contrato valido.")
                })
            })
        })
    }),

    it(`Deve trazer um usuário com erro de login - SEM EMAIL*\n(DECIDIR O QUE FAZER SOBRE O ERRO)`, () => {
        cy.fixture("loginCredentials").then((usuario) => {
            cy.logar(usuario.emailNPreenchido).then(res => {
                expect(res.statusCode === 400);
                expect(res.body).to.have.property("email");
                expect(res.body.email).to.equal("email não pode ficar em branco");

                cy.validarContrato(res, "post_login", 400).then( validacao => {
                    expect(validacao).to.be.equal("Contrato valido.")
                })
            })
        })
    })

})
