const { response } = require("express");


 const getEvents = (req,res=response) => {
    
  return res.status(200).json({
    status:true,
    msg:'I am a get events'
  })

 }
 const postEvents = (req,res=response) => {
    
    return res.status(200).json({
      status:true,
      msg:'I am a post events'
    })
  
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