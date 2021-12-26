/// <reference types="cypress"/>
import GETUsers from '../../../../services/microservico_2/users.service'

describe('Buscar Usuários', () => {
  context('Quando enviar uma requisição para buscar os usuários', () => {
    it('Então o contrato da lista de usuários deve ser válido', () => {
      GETUsers.getAllUsers().then(res => {
        expect(res.status).to.eq(200);
        cy.validaContrato("get_users_schema", res.body);
      });
    });
  });
});
