const express = require('express');

const bookController = require('../controllers/bookController');

const controllerBook = new bookController();
const bookRouter = express.Router();

bookRouter.get("/getBooks",controllerBook.getBooks);
bookRouter.post("/saveBooks",controllerBook.saveBooks),

module.exports = bookRouter;