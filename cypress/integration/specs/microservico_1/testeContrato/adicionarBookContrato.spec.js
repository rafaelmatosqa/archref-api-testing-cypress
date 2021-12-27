/// <reference types='cypress-tags' />
import POSTBook from '../../../../services/microservico_1/book.service'
const {addBook} = require('../../../../fixtures/dataTestFactory/bookFactory');

describe('Adicionar Livro', () => {
    const _body = addBook();
  context('Quando enviar uma requisição para adicionar um livro', () => {
    it('Então o contrato de resposta de livro criado com sucesso deve ser válido', () => {
      POSTBook.addBook(_body).then(res => {
        expect(res.status).to.eq(200);
        cy.validaContrato("post_books_schema", res.body);
       
       
      });
    });
  });
});
