const serieModel = require('../models/serieModel');

class serieServices {
  async getSeries(){
    let series = await serieModel.find();
    return series;
  }

  async saveSerie(
    nombreSerie,
    capitulos,
    sipnosis,
    lanzamiento,
    imagen,
    genero)
    {
      let createSerie = new serieModel();
      createSerie.nombreSerie = nombreSerie;
      createSerie.capitulos = capitulos;
      createSerie.sipnosis = sipnosis;
      createSerie.lanzamiento = lanzamiento;
      createSerie.imagen = imagen;
      createSerie.genero = genero;
      await createSerie.save();
      return createSerie;
    }
}

module.exports = serieServices;