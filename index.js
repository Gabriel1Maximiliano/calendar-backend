const express = require('express');
require('dotenv').config();
// Create express server

const app = express();


//Public directory

app.use( express.static('public') );

app.use('/api/auth', require('./routes/auth'));

// listeninig 


app.listen(process.env.PORT , () => console.log('Server listening on port '+ process.env.PORT ))