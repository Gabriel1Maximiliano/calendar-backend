const { response } = require("express");
 const Event = require('../models/Events');

 const getEvents =async (req,res=response) => {
    
const event = await Event.find().populate('user','name')
                     


  return res.status(200).json({
    status:true,
    msg:'Request made successfully',
   event:event
  })

 }
 const postEvents = async(req,res=response) => {
    
  const event = new Event( req.body );

  try {

    event.user = req.uid;

   const savedEvent = await event.save();

    return res.status(200).json({
      status:true,
      msg:'Event created successfully',
      event: savedEvent
    })
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      status:true,
      msg:'You can´t create this event',
     
    })
  }

    
  
   }
   const deleteEvents = (req,res=response) => {

    const { id } = req.params;
    
    return res.status(200).json({
      status:true,
      msg:'I am a deleteEvents',
      id
    })
  
   }
   const putEvents = async(req,res=response) => {

    const  eventId  = req.params.id;

    const uid = req.uid;

    try {
      const event = await Event.findById( eventId );
      console.log(event)
      if( !event){
        return res.status(404).json({
          status:false,
          msg:'It does not exist the event with this Id',
          
        })
      }
      if( event.user.toString() !== uid ){
       return res.status(401).json({
          ok:false,
          msg:'You can not edit this event'
        })
      }
      const newEvent = {
        ...req.body,
        user:uid
      }
      const updatedEvent = await Event.findByIdAndUpdate( eventId, newEvent,{new:true} );
      return res.status(201).json({
        ok:true,
        msg:'Event updated successfully',
        updatedEvent
      })
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status:true,
        msg:'Internal Error',
        id
      })
    }
    
    
  
   }

 module.exports = {
    getEvents,
    postEvents,
    deleteEvents,
    putEvents
 }