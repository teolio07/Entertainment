const mongoose = require('mongoose');

const peliSchema = mongoose.Schema({
    nombrePeli:{type: String},
    duracion:{type: String},
    sipnosis:{type: String},
    lanzamiento:{type: String},
    imagen:{type: String},
    genero:{type: String},
})

const peliModel = mongoose.model('movies',peliSchema)

module.exports = peliModel