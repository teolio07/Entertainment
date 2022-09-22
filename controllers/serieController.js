const serieServices = require('../services/serieServices');

const servicesSerie = new serieServices();
class serieController{
  getSeries(req,res){
    let series = servicesSerie.getSeries();
    series.then((resolve)=>{
      res.json(resolve)
    })   
  }

  saveSerie(req,res){
    let nombreSerie = req.body.nombreSerie;
    let capitulos = req.body.capitulos;
    let sipnosis = req.body.sipnosis;
    let lanzamiento = req.body.lanzamiento;
    let imagen = req.body.imagen;
    let genero = req.body.genero;

    let saveSerie = servicesSerie.saveSerie(nombreSerie,capitulos,sipnosis,lanzamiento,imagen,genero)
    saveSerie.then((response)=>{
      res.json(response)
    })
  }
}

module.exports = serieController;