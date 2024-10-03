const Code = require('../models/code')

exports.getCouponData = async(req,res,next) => {
    const id = req.get('Id')
    console.log(id)
   try{
    const response = await Code.find({pageId:id})
    console.log(response)
    res.json(response)
   } catch(err) {
    console.log(err)
   }

}
