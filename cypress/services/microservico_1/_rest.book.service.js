export default class Rest {
  static get(endpoint) {
    return cy.request({
      method: "GET",
      url: `${Cypress.env("api-book")}` + `${endpoint}`,
      failOnStatusCode: false,
    });
  }

  static post(endpoint, body) {
    return cy.request({
      method: "POST",
      url: `${Cypress.env("api-book")}` + `${endpoint}`,
      body: body,
      failOnStatusCode: false,
    });
  }

  static put(endpoint, body) {
    return cy.request({
      method: "PUT",
      url: `${Cypress.env("api-book")}` + `${endpoint}`,
      body: body,
      failOnStatusCode: false,
    });
  }
}
