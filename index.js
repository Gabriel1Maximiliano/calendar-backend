const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
var cors = require('cors')

// Create express server

const app = express();
//db connection 

dbConnection();

//CORS

app.use(cors())

//reading and parsing the body

app.use( express.json() );
//Public directory

app.use( express.static('public') );

app.use('/api/auth', require('./routes/auth'));

app.use('/api/events',require('./routes/events'));

// listeninig 


app.listen(process.env.PORT , () => console.log('Server listening on port '+ process.env.PORT ))