import Ajv from "ajv";
const ajv = new Ajv({ allErrors: true, verbose: true });

export const validaContrato = (jsonSchema, body) => {
  cy.fixture(jsonSchema).then((schema) => {
    const validate = ajv.compile(schema);
    const valid = validate(body);
    if (!valid) {
      cy.log(validate.errors).then(() => {
        throw new Error("Falha do contrato. Ver log acima");
      });
    } else {
      Cypress.log({
        name: "validaContrato",
        displayName: "schema",
        message: `${jsonSchema} validado!`,
      });
    }
  });
};
