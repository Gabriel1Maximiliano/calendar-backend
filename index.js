const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
dbConnection
// Create express server

const app = express();
//db connection 

dbConnection();

//reading and parsing the body

app.use( express.json() );
//Public directory

app.use( express.static('public') );

app.use('/api/auth', require('./routes/auth'));

// listeninig 


app.listen(process.env.PORT , () => console.log('Server listening on port '+ process.env.PORT ))