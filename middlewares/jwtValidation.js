const { response } = require("express");
require('dotenv').config();
const jwt = require('jsonwebtoken');

 const jwtValidation = (req,res=response,next) => {
 // x-token headers

 const token = req.header('x-token');
 console.log(token)
if( !token ){
 res.status(401).json({
    status:false,
    msg:'Token not found'
 });
}
try {
    const payload = jwt.verify(
        token,
        process.env.SECRET_JWT_SEED
    )
   req.uid = payload.uid;
   req.name = payload.name;
} catch (error) {
    return res.status(401).json({
        status:false,
        msg:'Invalid token'
    })
}

next();
}

module.exports = jwtValidation;
