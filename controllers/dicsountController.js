const User = require('../models/user')

exports.getDiscountAmount = async(req,res,next) =>{
  const pageId = req.get('Authorization')
  console.log(pageId)
  try{
  const discount = await User.findOne({pageId:pageId})
  console.log(discount)
  res.json(discount.discount)
  }catch(err){
    console.log(err)
  }
}

exports.setDiscountAmount = async ( req,res,next) => {
  const {email,discount} = req.body;
  try{
    const response = await User.findOneAndUpdate({ email:email},{discount:discount})
    if(response){
      res.json({message: 'updated'})
    }
  } catch(err){
    res.json(err)
  }
}