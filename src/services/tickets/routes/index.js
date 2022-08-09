const express = require('express');
const router = express.Router();

// include usercontroller
const ticketmodel = require('../../tickets/api/schema/index.js')
const auth = require('../controller/index');
const allticket = require('../controller/index01');
const titleticket = require('../controller/index02');
const deleteticket = require('../controller/index03');
const updateticket = require('../controller/index04');


// routes

router.post('/new', auth);
router.get('/all',allticket);
router.get('/',titleticket);
router.delete('/delete',deleteticket);
router.post('/markAsClosed',updateticket);




module.exports = router;