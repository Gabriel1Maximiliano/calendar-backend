const express = require('express');// It helps whith autocomplete in vs
const bcrypt = require('bcryptjs');
const Users = require('../models/Users');

const registerUser = async (req, res = express.response) => {

    const { email,password } = req.body;
    try {

        let user = await Users.findOne({ email });


        if (user) {
            return res.status(500).json({
                status: false,
                msg: 'User already exists ',

            })
        }
        user = new Users(req.body);
// Encrypting password
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync( password,salt );

        await user.save()

        return res.status(201).json({
            status: true,
            msg: 'User created successfully',
            id: user.id,
            name:user.name

        })

    } catch (error) {
        console.log(error);

    }

}
const loginUser = (req, res = express.response) => {

    const { email, password } = req.body;



    const obj = {
        email,
        password
    }
    return res.status(200).json({
        status: true,
        msg: 'Soy un login de usuario',
        resp: obj
    })
}
const renewTokenUser = (req, res = express.response) => {
    return res.status(200).json({
        status: true,
        msg: 'Soy un renewToken de usuario'
    })
}
module.exports = {
    registerUser,
    loginUser,
    renewTokenUser
}