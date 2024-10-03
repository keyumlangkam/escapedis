const Code = require('../models/code')

exports.customerData = async (req,res,rext) => {
  const id = req.get('id');
  const data = await User.find({pageId: id});
  res.json(data)
}