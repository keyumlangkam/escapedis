module.exports = async function quickReplies(recipientID,pageId,Q) {
  const {q,t1,t2,t3,t4,a1,a2,a3,a4} = Q
  try{const res = fetch(`https://graph.facebook.com/v20.0/${pageId}/messages?access_token=${process.env.PAGE_ACCESS_TOKEN}`,{
    method : 'POST',
    headers: {
      'content-type' : 'application/json'
    },
    body: JSON.stringify({
       recipient: {id: recipientID},
       message: {
        text: q,
        quick_replies: [
          {content_type: 'text',
           title:t1,
           payload:a1
          },
          {content_type: 'text',
            title:t2,
            payload:a2
           },
           {content_type: 'text',
            title:t3,
            payload:a3
           },
           {content_type: 'text',
            title:t4,
            payload:a4
           }
        ]
       },
       messaging_type: Response
    })
    
  })
  
}
    catch(error){console.log(error)}
}