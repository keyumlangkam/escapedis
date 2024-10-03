import axios from "axios";
import { redirect } from "react-router-dom";

export async function loader(){
  try{
    const token  = localStorage.getItem('token')
 
    if(token){
      const res = await axios.get('https://escapedis.online/checktoken',{
        headers:{
         'Authorization': 'Bearer ' + token 
        }})
       if(res.data.tokenvalue !== 'verified'){
        localStorage.clear()
        return null
        } else{ 
          const email = localStorage.getItem('email')
          const id = localStorage.getItem('id')
            console.log(res.data.message)
            return redirect(`/admin/${email}/${id}`)
        } 
    } else return null
  }catch(err){
    console.log(err)
    throw new Error
  }
 
  
}