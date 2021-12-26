const faker = require("faker");

function criarPet() {
  const data = {
    id: 0,
    category: {
      id: 0,
      name: faker.random.arrayElement(["Dog", "Cat"]),
    },
    name: faker.animal.cat,
    photoUrls: ["www.meuspets.com.br"],
    tags: [
      {
        id: 0,
        name: "string",
      },
    ],
    status: faker.random.arrayElement(["available", "unvailable"]),
  };
  return data;
}
module.exports = {
  criarPet,
};
