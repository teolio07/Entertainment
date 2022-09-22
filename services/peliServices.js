const peliModel = require('../models/peliModel');

class peliServices {
  async getPeliculas(){
    const peliculas = await peliModel.find();
    return peliculas;
  }

  async savePeli(
    nombrePeli,
    duracion,
    sipnosis,
    lanzamiento,
    imagen,
    genero){
      const savePelicula = new peliModel();
      savePelicula.nombrePeli = nombrePeli;
      savePelicula.duracion = duracion;
      savePelicula.sipnosis = sipnosis;
      savePelicula.lanzamiento = lanzamiento;
      savePelicula.imagen = imagen;
      savePelicula.genero = genero;
      await savePelicula.save();
      return savePelicula;
    }
}

module.exports = peliServices;