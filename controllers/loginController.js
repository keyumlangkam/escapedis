const jwt = require('jsonwebtoken')
const User = require("../models/user")
const bcrypt = require("bcryptjs")

exports.login = async (req,res,next) => {
  const KEY = 'supersecret'
  const {email , password} = req.body
  try{
    const response = await User.find({email:email});
    const [user] = response
    
    if(!user){
      return res.json({message: 'user does not exist'})
    }
   
    bcrypt.compare(password, user.password)
    .then(match => {
      if(match){
        const token = jwt.sign({email:email}, KEY, {expiresIn:'1h'})
        console.log('token sent')
        if(user.pageId){
          console.log(user.pageId)
          res.json({token:token,message: 'user authenticated',id:user.pageId})
        } else{
          res.json({token:token,message: 'pageId notfound'})
        }
      } else {
        res.json({message: 'password does not match'})
      } 
    })
  }catch(err){
    res.json({message:err})
  }
}