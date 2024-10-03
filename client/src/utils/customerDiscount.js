import axios from "axios";

const customerDiscount = async({email,discount}) => {
  try {
    const response = await axios.post('https://escapedis.online/discount',{email,discount})
    if(response.data.message){
      console.log(response.data.message)
      return response.data.message
    }    
  }
  catch(err){
    console.log(err)
  }
}

export default customerDiscount