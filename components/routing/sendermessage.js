module.exports = async function senderMessage(recipientID,message,pageId){
  try{
    const res = await fetch(`https://graph.facebook.com/v20.0/${pageId}/messages?access_token=${process.env.PAGE_ACCESS_TOKEN}`,{
      method : 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({
         recipient: {id: recipientID},
         message: message
      })
    })
    
  }catch(error){console.log(error,message)}
  }
   