/// <reference types='cypress-tags' />
import GETBook from '../../../../services/microservico_1/book.service'


describe('Buscar um Livro', () => {
    context('Quando enviar uma requisição para buscar uma lista de livros', () => {
        it('Então o contrato de resposta da lista de livros deve ser válido', () => {
            GETBook.getAllBooks().then(res => {
                expect(res.status).to.eq(200);
                cy.validaContrato("get_allBooks_schema", res.body);


            });
        });
    });
});
