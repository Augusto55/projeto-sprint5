/// <reference types="cypress"/>

var bearer

describe("Testes para LOGIN", () => {
    it(`Tentar login com um ADM \nTentar login com usuario`, () => {
        cy.fixture("loginCredentials").then((usuario) => {
            cy.logar(usuario.valido).then(res => {
                expect(res.statusCode === 200);
                expect(res.body).to.have.all.keys("message", "authorization");
                
                bearer = res.body.authorization

                cy.validarContrato(res, "post_login", 200).then(validacao => {
                    //res = resposta | pasta | arquivo .json
                    expect(validacao).to.be.equal("Contrato valido.")
                })
            })
        })
    }),

    it("Deve tentar login com email anormal com erro", () => {
        cy.fixture("loginCredentials").then((usuario) => {
            cy.logar(usuario.emailLOCO).then(res => {
                expect(res.statusCode === 400);
                expect(res.body).to.have.property("email");
                expect(res.body.email).to.equal("email deve ser um email válido");

                cy.validarContrato(res, "post_login/email", 400).then(validacao => {
                    expect(validacao).to.be.equal("Contrato valido.")
                })
            })
        })
    }),

    it("Deve tentar login com caixa de email vazia", () => {
        cy.fixture("loginCredentials").then((usuario) => {
            cy.logar(usuario.emailNPreenchido).then(res => {
                expect(res.statusCode === 400);
                expect(res.body).to.have.property("email");
                expect(res.body.email).to.equal("email não pode ficar em branco")

                cy.validarContrato(res, "post_login/email", 400).then(validacao => {
                    expect(validacao).to.be.equal("Contrato valido.")
                })
            })
        })
    }),

    it("Deve tentar login com caixa de senha vazia", () => {
        cy.fixture("loginCredentials").then((usuario) => {
            cy.logar(usuario.senhaNPreenchida).then(res => {
                expect(res.statusCode === 400);
                expect(res.body).to.have.property("password");
                expect(res.body.password).to.equal("password não pode ficar em branco")

                cy.validarContrato(res, "post_login/password", 400).then(validacao => {
                    expect(validacao).to.be.equal("Contrato valido.")
                })
            })
        })
    }),

    it(`Deve tentar login com erro - SEM EMAIL`, () => {
        cy.fixture("loginCredentials").then((usuario) => {
            cy.logar(usuario.emailVAZIO).then(res => {
                expect(res.statusCode === 400);
                expect(res.body).to.have.property("email");
                expect(res.body.email).to.equal("email é obrigatório");

                cy.validarContrato(res, "post_login/email", 400).then(validacao => {
                    expect(validacao).to.be.equal("Contrato valido.")
                })
            })
        })
    })

    it(`Deve tentar login com erro - SEM SENHA`, () => {
        cy.fixture("loginCredentials").then((usuario) => {
            cy.logar(usuario.senhaVAZIA).then(res => {
                expect(res.statusCode === 400);
                expect(res.body).to.have.property("password");
                expect(res.body.password).to.equal("password é obrigatório");

                cy.validarContrato(res, "post_login/password", 400).then(validacao => {
                    expect(validacao).to.be.equal("Contrato valido.")
                })
            })
        })
    })

})
