const quickReplyMessage = require('../routing/quickReplyMessage')
const quickReply = require('./quickReply')
const q1 = require('../data/q1')


 async function message(event){
  const senderID = event.sender.id;
  const pageID = event.recipient.id;
  const statement = event.message.text 
  
  
  if(statement === 'start'){ 
    await quickReply(senderID,pageID,q1);  
  }
  if(event.message.quick_reply){
    await quickReplyMessage(event)
  }
}

module.exports = message;