const faker = require('faker');
function criarUsuario() {
const data = {

    name: faker.name.firstName(),
    job: "leader"

}
return data;
 

}
module.exports = {
    criarUsuario
}