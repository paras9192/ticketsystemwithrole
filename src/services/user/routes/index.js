const express = require('express');
const router = express.Router();

// include usercontroller
const signup  = require('../controller/index.js');

// routes

router.post('/new', signup)


module.exports = router;
