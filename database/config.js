const mongoose = require('mongoose');

require('dotenv').config();

const dbConnection = () => {
   
      mongoose.connect( process.env.DB_CNN )
      .then(resp=>{
        console.log('db connected');
      })
      .catch(error => console.log(error));
    
   
}

module.exports={
    dbConnection
}