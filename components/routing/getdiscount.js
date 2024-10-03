const axios = require('axios');

const getDiscount = async(pageID) => {
  const response = await axios.get('https://chatbot-lovq.onrender.com/discount',{
    headers: {
      'Authorization': pageID
    }
  }
   
  );
  return response.data
}

module.exports = getDiscount;