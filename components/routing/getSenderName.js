module.exports =  async function getSenderName(senderId){
  const response = await fetch(`https://graph.facebook.com/v20.0/${senderId}?fields=first_name&access_token=${process.env.PAGE_ACCESS_TOKEN}`)
  const resdata = await response.json()
  return resdata
  
}