const Code = require('../models/code')

exports.deleteCoupon = (req,res,next) => {
  const {couponCode} = req.body
  console.log(couponCode)
  Code.findOneAndDelete({code: couponCode})
  .then((result)=>{
    res.json({message:'code deleted'})
  }).catch(err => {
    res.json(err)
  })
  
}