const express = require('express');

// Create express server

const app = express();
const PORT =4000 ;

//

app.get('/',(req,res)=>{
    res.status(200).json('gola')
})


// listeninig 


app.listen(PORT, () => console.log('Server listening on port '+ PORT))