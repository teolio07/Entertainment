const express = require('express');

const serieController = require('../controllers/serieController');

const controllerSerie = new serieController();


const serieRouter = express.Router();

serieRouter.get("/getSeries",controllerSerie.getSeries);
serieRouter.post("/saveSerie",controllerSerie.saveSerie);

module.exports = serieRouter;