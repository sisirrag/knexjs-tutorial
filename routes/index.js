const express = require('express');
const PersonController = require('../controller/person');
const BookController = require('../controller/book');
const router = express.Router();

router.post('/person',PersonController.createPerson);
router.post('/book', BookController.createBook);


module.exports = router;