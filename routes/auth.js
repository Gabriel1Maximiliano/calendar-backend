/**
 * Users routes / Auth
 *       host+ /api/auth
 */

const express = require('express');

const router = express.Router();

const  { registerUser, loginUser,renewTokenUser } = require('../controllers/auth');

router.post('/register',registerUser);

router.post('/login',loginUser);

router.get('/renewToken',renewTokenUser);


module.exports = router;