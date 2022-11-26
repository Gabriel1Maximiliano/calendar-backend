/**
 * Users routes / Auth
 *       host+ /api/events
 */

const express = require('express');
 const { check }= require('express-validator');
 const {getEvents,postEvents,deleteEvents,putEvents} = require('../controllers/events');
const { isDate } = require('../helpers/isDate');
const { fieldsValidator } = require('../middlewares/fieldsValidators');
 const jwtValidation = require('../middlewares/jwtValidation');


 const router = express.Router();
 
 
 
 router.use( jwtValidation )

 router.get('/get', getEvents);
 router.post('/post',[
    check('title','The title is mandatory').not().isEmpty(),
    check('start','Start date is mandatory').custom( isDate ),
    check('end','Start date is mandatory').custom( isDate ),
    fieldsValidator
 ], postEvents);
 router.delete('/delete/:id',deleteEvents);
 router.put('/put/:id',putEvents);


 module.exports = router;