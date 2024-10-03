const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user = new Schema({
  email:{
    required: true,
    type: String
  },
  password:{
    required: true,
    type: String
  },
  pageId:{
    type: Number
  },
  discount:{
    required: true,
    type: String
  }
})

module.exports = mongoose.model('User', user)