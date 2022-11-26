/**
 * Users routes / Auth
 *       host+ /api/auth
 */

const express = require('express');
const { check }= require('express-validator')

const router = express.Router();

const  { registerUser, loginUser,renewTokenUser } = require('../controllers/auth');
const { fieldsValidator } = require('../middlewares/fieldsValidators');

router.post('/register',
[
    check('name','The name is mandatory').not().isEmpty(),
    check('email','The email is mandatory').not().isEmpty(),
    check('email','Format email invalid').isEmail(),
    check('password','Password must contains at least 4 characters').isLength({min:4}),
    fieldsValidator
],
registerUser);

router.post('/login',
[
    check('email','The email is mandatory').not().isEmpty(),
    check('email','Format email invalid').isEmail(),
    check('password','Password is requiered').not().isEmpty(),
    fieldsValidator
],loginUser);

router.get('/renewToken',renewTokenUser);

// qafPWt5XCy01Da63
module.exports = router;