import Rest from './_rest.book.service'



export default class Book extends Rest {
   

  static addBook(body){
    const url = `/api/v1/Books`
    return super.post(url,body)
  }

  static getAllBooks(){
    const url = `/api/v1/Books`
    return super.get(url)
  }
}