const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  nombreLibro:{type: String},
  autor:{type: String},
  genero:{type: String},
  lanzamiento: {type: String},
  imagen: {type: String}
})

const bookModel = mongoose.model('books',bookSchema)
module.exports = bookModel;