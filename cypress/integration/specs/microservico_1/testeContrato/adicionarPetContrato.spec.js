/// <reference types="cypress"/>
import POSTPet from '../../../../services/microservico_1/pet.service'
const {criarPet} = require('../../../../fixtures/dataTestFactory/petFactory');

describe('Criar Pet', () => {
    const _body = criarPet();
  context('Quando enviar uma requisição para criar um Pet', () => {
    it('Então o contrato de resposta de pet criado com sucesso deve ser válido', () => {
        POSTPet.criarPet(_body).then(res => {
        expect(res.status).to.eq(200);
        cy.validaContrato("post_pet_schema", res.body);
       
       
      });
    });
  });
});
