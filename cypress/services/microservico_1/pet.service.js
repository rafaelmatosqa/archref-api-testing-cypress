import Rest from './_rest.pet.service'



export default class PetStore extends Rest {
   

  static criarPet(body){
    const url = `/v2/pet`
    return super.post(url,body)
  }
}