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
        required: true,
    },
    end:{
        type:Date,
        required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Users',
        required: true,
    }
  });

  EventSchema.method('toJSON', function(){
    const {__v,_id,...object} = this.toObject();
    object.id=_id;
    return object;
  })

  module.exports = mongoose.model('Event',EventSchema);  