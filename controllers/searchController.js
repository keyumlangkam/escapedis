const Code = require('../models/code')

exports.searchCode = async(req,res,next) => {
  const code = req.get('Authorization')
  try{
    const response = await Code.find({
      code:code
    })
    if(response){
      console.log(response)
      res.json(response)
    }
  } catch(err){
 res.json(err)
  }
}