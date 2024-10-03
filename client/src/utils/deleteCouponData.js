import axios from "axios"
import { redirect } from "react-router-dom"

export default async function deleteCouponData(couponCode){
   try{const response = await axios.post('https://escapedis.online/deletecoupon',{couponCode})
   return(response.data.message)
  } 
   catch(err){
    console.log(err)
   }
}