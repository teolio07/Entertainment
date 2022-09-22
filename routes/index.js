const express = require('express');
const peliRouter = require('./peliRouter');
const serieRouter = require('./serieRouter');
const bookRouter = require("./bookRouter");
function routerApi(app){
    const router = express.Router();
    app.use("/api/v1", router);
    router.use("/peliculas",peliRouter);
    router.use("/series",serieRouter);
    router.use("/books",bookRouter);
}

module.exports = routerApi;