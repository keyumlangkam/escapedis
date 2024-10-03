const postBack = require('../components/routing/postback')
const message = require('../components/routing/message')

exports.verifyConnection = async(req,res,next)=> {
  console.log(process.env.HI)
  if(req.query['hub.verify_token'] === process.env.VERIFY_TOKEN){
    res.status(200).send(req.query['hub.challenge'])
   } else {
    res.json('token not match')
  }
}

exports.handlingReq = async(req,res,next) => {
  if(req.body.object === 'page'){
    req.body.entry.forEach(function(entry){
      entry.messaging.forEach(function(event){
        if(event.postback){
           postBack(event);    
        } 
        if(event.message){
          message(event)
        }
      });
    });
    res.status(200).json(`working`)
  } 
}