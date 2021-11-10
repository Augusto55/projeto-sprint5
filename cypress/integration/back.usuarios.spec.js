/// <reference types="cypress"/>

describe("Testes para USUARIOS", () => {
    it("Deve validar a resposta de GET usuarios", () => {
        cy.listarUSERS().then( res => {
            expect(res.statusCode === 200);
        })
    })

    it("Deve pegar um id com a resposta de GET usuarios", () => {
        cy.fixture("loginCredentials").then((usuario) => {
            cy.pegarUserExpecifico(usuario.valido).then( res => {
                expect(res.statusCode === 200);
                expect(res.body.usuarios).to.be.a("array")
                expect(res.body.usuarios[0]._id).to.be.a("string")
                idUsuario = res.body.usuarios[0]._id
            })
        })
    })

    it("Validar testes de contrato da resposta de GET usuarios", () => {
        cy.listarUSERS().then( res => {
            expect(res.statusCode === 200);
            cy.validarContrato(res, "get_usuarios", 200).then ( validacao => {
                expect(validacao).to.be.equal("Contrato valido.")
            })
        })
    })

})