const express = require('express');// It helps whith autocomplete in vs


 const registerUser = (req,res=express.response) => {
    res.status(200).json({
        status:'ok',
        msg:'Soy un registro de usuario'
    })
}
const loginUser = (req,res) => {
    res.status(200).json({
        status:'ok',
        msg:'Soy un login de usuario'
    })
}
const renewTokenUser = (req,res) => {
    res.status(200).json({
        status:'ok',
        msg:'Soy un renewToken de usuario'
    })
}
module.exports = {
    registerUser,
    loginUser,
    renewTokenUser
}