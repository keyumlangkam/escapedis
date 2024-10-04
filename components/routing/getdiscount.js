const axios = require('axios');

const getDiscount = async(pageID) => {
  const response = await axios.get('https://escapedis.online/discount',{
    headers: {
      'Authorization': pageID
    }
  }
   
  );
  return response.data
}

module.exports = getDiscount;