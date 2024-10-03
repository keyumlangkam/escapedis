module.exports = async function senderAction(recipientID,pageID){
  try{const res = await fetch(`https://graph.facebook.com/v20.0/${pageID}/messages?access_token=${process.env.PAGE_ACCESS_TOKEN}`,{
    method : 'POST',
    headers: {
      'content-type' : 'application/json'
    },
    body: JSON.stringify({
       messaging_type : Response,
       recipient: {id: recipientID},
      sender_action:"typing_on"
    })
  })
  console.log(res)
}catch(error){
    console.log(error)
  }
}
  
  

//{id : 443756555328062}

