/// <reference types="cypress"/>
import POSTUsers from '../../../../services/microservico_2/users.service'
const {criarUsuario} = require('../../../../fixtures/dataTestFactory/userFactory');

describe('Criar Usuário', () => {
    const _body = criarUsuario();
  context('Quando enviar uma requisição para criar um usuário', () => {
    it('Então o contrato de resposta de usuário criado com sucesso deve ser válido', () => {
        POSTUsers.criarUsuario(_body).then(res => {
            console.log('RESPONSE', res.body)
        expect(res.status).to.eq(201);
        cy.validaContrato("post_user_schema", res.body);
       
       
      });
    });
  });
});
