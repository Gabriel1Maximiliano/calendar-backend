const express = require('express');// It helps whith autocomplete in vs
const bcrypt = require('bcryptjs');
const Users = require('../models/Users');
const jwtGenerator = require('../helpers/jwt');

const registerUser = async (req, res = express.response) => {

    const { email, password } = req.body;
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
        user.password = bcrypt.hashSync(password, salt);

        await user.save()
        // Generate JWT

        const token = await jwtGenerator(user.id, user.name)

        return res.status(201).json({
            status: true,
            msg: 'User created successfully',
            id: user.id,
            name: user.name,
            token

        })

    } catch (error) {
        console.log(error);

    }

}
const loginUser = async (req, res = express.response) => {

    const { email, password } = req.body;

    try {

        let user = await Users.findOne({ email });


        if (!user) {
            return res.status(500).json({
                status: false,
                msg: 'User do not exists ',

            })
        }

        // Confirm the password 
        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) {

            return res.status(400).json({
                status: false,
                msg: 'Somthing went wrong',
            })
        }
        // Generate JWT
        const token = await jwtGenerator(user.id, user.name);

        return res.status(200).json({
            status: true,
            msg: 'User logged successfully',
            id: user.id,
            name: user.name,
            token

        })

    } catch (error) {
        console.log(error);

    }
}
const renewTokenUser =async(req, res = express.response) => {

    const uid = req.uid;
    const name = req.name;
    const token = await jwtGenerator(uid, name);
    return res.status(200).json({
        status: true,
       token

    })
}
module.exports = {
    registerUser,
    loginUser,
    renewTokenUser
}