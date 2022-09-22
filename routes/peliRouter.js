const express = require('express');
const peliController = require('../controllers/peliController');
const controllerPeli = new peliController();
const peliRouter = express.Router();

peliRouter.get("/getPeliculas",controllerPeli.getPeliculas);
peliRouter.post("/savePeliculas",controllerPeli.savePeli)

module.exports = peliRouter;