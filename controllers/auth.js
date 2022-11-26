const express = require('express');// It helps whith autocomplete in vs

const { validationResult } = require('express-validator');

 const registerUser = (req,res=express.response) => {

    const {name,email,password} = req.body;

    const  errors =validationResult( req );

    if( !errors.isEmpty() ){
        return res.status(400).json({
            ok:false,
            errors: errors.mapped()
        })
    }

    const obj = {
        name,email,password
    }

   return res.status(201).json({
        status:'ok',
        msg:'Soy un registro de usuario',
        resp:obj
    })
}
const loginUser = (req,res=express.response) => {

    const {email,password} = req.body;

    const  errors =validationResult( req );

    if( !errors.isEmpty() ){
        return res.status(400).json({
            ok:false,
            errors: errors.mapped()
        })
    }

    const obj = {
        email,
        password
    }
   return res.status(200).json({
        status:'ok',
        msg:'Soy un login de usuario',
        resp:obj
    })
}
const renewTokenUser = (req,res=express.response) => {
   return res.status(200).json({
        status:'ok',
        msg:'Soy un renewToken de usuario'
    })
}
module.exports = {
    registerUser,
    loginUser,
    renewTokenUser
}