const express = require('express');
const PersonController = require('../controller/person');

const router = express.Router();
router.post('/person',PersonController.createPerson);
module.exports = router;