const express = require('express');
require('dotenv').config();
// Create express server

const app = express();


//Public directory

app.use( express.static('public') );

// app.get('/',(req,res)=>{
//     res.status(200).json('gola')
// })


// listeninig 


app.listen(process.env.PORT , () => console.log('Server listening on port '+ process.env.PORT ))