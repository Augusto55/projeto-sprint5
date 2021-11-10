/// <reference types="cypress"/>

var idUsuario
var carrinho
var bearer

describe("Testes de API ServeRest - CARRINHO", () => {
    it("Deve utilizar GET para listar os todos os carrinhos disponiveis", () => {
        cy.buscarCarrinho().then (res => {
            expect(res.statusCode === 200)
            expect(res.body).to.have.all.keys("quantidade", "carrinhos")
            expect(res.body.carrinhos[0]).to.have.property("produtos")
            expect(res.body.carrinhos[0]).to.have.property("precoTotal")
            expect(res.body.carrinhos[0]).to.have.property("quantidadeTotal")
            expect(res.body.carrinhos[0]).to.have.property("idUsuario")
            expect(res.body.carrinhos[0]).to.have.property("_id")
            expect(res.body.carrinhos[0].produtos).to.be.a("array")
            expect(res.body.carrinhos[0].precoTotal).to.be.a("number")
            expect(res.body.carrinhos[0].quantidadeTotal).to.be.a("number")
            expect(res.body.carrinhos[0]._id).to.be.a("string")
        })
    })
})
