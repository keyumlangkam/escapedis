const User = require("../models/user")
const Code = require("../models/code")

exports.postCustomerId = async(req,res,rext) => {
  const {id,email} = req.body;
  
  try{
    const response = await User.findOneAndUpdate({email: email}, {pageId: id})
    if(response){
      const exampleCode = new Code({
        pageId:id,
        code: 'ABCD',
        createdAt: 'dd/mm/yy',
        validTill: 'dd/mm/yy'
      })
      exampleCode.save().then(x => 
        {res.json({message : 'pageId added'})})
    } else throw new Error
    }catch(err){
    console.log(err)
  }
}