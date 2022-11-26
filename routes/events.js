/**
 * Users routes / Auth
 *       host+ /api/events
 */

const express = require('express');
 const { check }= require('express-validator');
 const {getEvents,postEvents,deleteEvents,putEvents} = require('../controllers/events');
 const jwtValidation = require('../middlewares/jwtValidation');


 const router = express.Router();
 
 
 
 router.use( jwtValidation )

 router.get('/get', getEvents);
 router.post('/post', postEvents);
 router.delete('/delete/:id',deleteEvents);
 router.put('/put/:id',putEvents);


 module.exports = router;