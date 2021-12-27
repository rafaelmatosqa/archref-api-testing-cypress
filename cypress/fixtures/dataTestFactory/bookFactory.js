const faker = require("faker");

function addBook() {
  const data = {
    
      id: 0,
      title: faker.name.title(),
      description: "o fantástico mundo de " + `${faker.name.firstName()}`,
      pageCount: 0,
      excerpt: "string",
      publishDate: faker.date.recent()
    }
  return data;
}
module.exports = {
  addBook,
};
