import Rest from "./_rest.regres.service";

export default class Regres extends Rest {
  static getAllUsers() {
    const url = "/api/users";
    return super.get(url);
  }

  static criarUsuario(body){
    const url = `/api/users`
    return super.post(url,body)
  }
}
