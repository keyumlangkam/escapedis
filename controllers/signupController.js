const User = require("../models/user")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
exports.signup = async(req,res,next) => {
    const KEY = 'supersecret'
    const {email,password} = req.body
    User.findOne({email: email})
    .then(user => {
        if(user){
           return res.json({message:'user exists'})
        } 
        bcrypt.hash(password,12)
        .then(hashedpass => {
            const newUser = new User({
                email: email,
                password: hashedpass,
                discount: "20%"
             })
             newUser.save()
             .then(result => {
                 console.log('data saved')
                 const token = jwt.sign({email:email}, KEY, {expiresIn:'1h'})
                 res.json({token:token,message: 'user created'})
             })
             .catch(err => {
                 console.log(err)
             })   
            }) 
    })   
}

