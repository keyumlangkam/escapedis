const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const code = new Schema({
  pageId:{
    required: false,
    type: String
  },
  code:{
    required: true,
    type: String
  },
  createdAt:{
    required: true,
    type: String
  },
  validTill: {
    required: true,
    type: String
  }
})

module.exports = mongoose.model('Code', code)