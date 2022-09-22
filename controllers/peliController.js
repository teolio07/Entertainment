const peliServices = require('../services/peliServices')

const serviPeliculas = new peliServices();

class peliController {
    getPeliculas(req,res){
        let peliculas = serviPeliculas.getPeliculas()
        peliculas.then((resolve)=>{
          res.json(resolve)
        })
    }

    savePeli(req,res){
      let nombrePeli = req.body.nombrePeli;
      let duracion = req.body.duracion;
      let sipnosis = req.body.sipnosis;
      let lanzamiento = req.body.lanzamiento;
      let imagen = req.body.imagen;
      let genero = req.body.genero;

      let savePeli = serviPeliculas.savePeli(
        nombrePeli,
        duracion,
        sipnosis,
        lanzamiento,
        imagen,
        genero
      );
      savePeli.then((response)=>{
        res.json(response);
      })
    }

}

module.exports = peliController;