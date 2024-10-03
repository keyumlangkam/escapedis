import axios from 'axios'

const getCouponData = async(id) => {
  try {
    const res = await axios.get('https://escapedis.online/coupondata',{
      headers:{
        "Id": id
      }
    })
    const couponData = res.data
    return couponData
  }
  catch(err){
    console.log(err)
  }

  }
export default getCouponData

