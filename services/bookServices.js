const bookModel = require('../models/bookModel');

class bookServices{
  async getBooks(){
    let books = bookModel.find()
    return books;
  }

  async saveBook( 
    nombreLibro,
    autor,
    genero,
    lanzamiento,
    imagen){
      const saveBook = new bookModel();
      saveBook.nombreLibro = nombreLibro;
      saveBook.autor = autor;
      saveBook.genero = genero;
      saveBook.lanzamiento = lanzamiento;
      saveBook.imagen = imagen;
      await saveBook.save();
      return saveBook;
    }
}

module.exports = bookServices;