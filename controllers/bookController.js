const bookServices = require('../services/bookServices');

const serviceBook = new bookServices();
class bookController{
  getBooks(req,res){
    let books = serviceBook.getBooks();
    books.then((resolve)=>{
      res.json(resolve)
    })
  }

  saveBooks(req,res){
    let nombreLibro = req.body.nombreLibro;
    let autor = req.body.autor;
    let genero = req.body.genero;
    let lanzamiento = req.body.lanzamiento;
    let imagen = req.body.imagen;
    let saveBook = serviceBook.saveBook(nombreLibro,autor,genero,lanzamiento,imagen);
    saveBook.then((response)=>{
      res.json(response);
    })
  }
}

module.exports = bookController;