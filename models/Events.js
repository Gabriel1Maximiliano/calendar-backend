const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title:{
        type: String,
        require:true,

    },
    notes:{
        type: String,
    },
    start:{
        type: Date,
        require: true,
    },
    end:{
        type:Date,
        require:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Users'
    }
  });

  module.exports = mongoose.model('Event',EventSchema);  