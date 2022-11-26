require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtGenerator = (uid, name) => {

    const payload = {uid,name};
    
    return new Promise( (resolve, reject) =>{
        jwt.sign( payload ,process.env.SECRET_JWT_SEED,{
            expiresIn:'2h',
        }, (err,token) => {
            console.log(err)
            if( err ){
                reject('It can´t generate the token')
            }
            resolve( token );
        });
    })
}

module.exports = jwtGenerator;