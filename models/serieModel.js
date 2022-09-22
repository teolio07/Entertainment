





const mongoose = require('mongoose');

const serieSchema = mongoose.Schema({
    nombreSerie:{type: String},
    capitulos:{type: String},
    sipnosis:{type: String},
    lanzamiento:{type: String},
    imagen:{type: String},
    genero:{type: String},
})

const serieModel = mongoose.model('series',serieSchema);

module.exports = serieModel;