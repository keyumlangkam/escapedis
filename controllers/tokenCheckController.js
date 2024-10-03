const jwt = require('jsonwebtoken')
const User = require('../models/user')
exports.checkToken = (req,res,next)=>{
  const gotToken = req.get('Authorization').split(' ')[1]
  let decodedToken
  try{
    decodedToken = jwt.verify(gotToken ,'supersecret')
    console.log(decodedToken)

    res.json({tokenvalue: 'verified'})
  } catch (err){
    res.json(err) 
  }
}