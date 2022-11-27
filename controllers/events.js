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
   const putEvents = (req,res=response) => {

    const { id } = req.params;
    
    return res.status(200).json({
      status:true,
      msg:'I am a putEvents',
      id
    })
  
   }

 module.exports = {
    getEvents,
    postEvents,
    deleteEvents,
    putEvents
 }