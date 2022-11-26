/**
 * Users routes / Auth
 *       host+ /api/auth
 */

const express = require('express');
const { check }= require('express-validator')

const router = express.Router();

const  { registerUser, loginUser,renewTokenUser } = require('../controllers/auth');

router.post('/register',
[
    check('name','The name is mandatory').not().isEmpty(),
    check('email','The email is mandatory').not().isEmpty(),
    check('email','Format email invalid').isEmail(),
    check('password','Password must contains at least 4 characters').isLength({min:4}),
],
registerUser);

router.post('/login',
[
    check('email','The email is mandatory').not().isEmpty(),
    check('email','Format email invalid').isEmail(),
    check('password','Password is requiered').not().isEmpty(),
],loginUser);

router.get('/renewToken',renewTokenUser);


module.exports = router;