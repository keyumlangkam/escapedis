import axios from "axios"


const searchCouponData = async(search) => {
  try {
    const response = await axios.get('https://escapedis.online/search',{
      headers:{
        'Authorization': search
      }
    })
    const couponData = response.data
    return couponData    
  }
  catch(err){
    console.log(err)
  }
}

export default searchCouponData