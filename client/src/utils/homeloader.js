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
        return 'not authenticated'
        } 
        
        if(res.data.tokenvalue === 'verified'){ 
          const email = localStorage.getItem('email')
          const id = localStorage.getItem('id')
            return redirect(`/admin/${email}/${id}`)
        } 
    } else return 'not authenticated'
  }catch(err){
    console.log(err)
    throw new Error
  }
 
  
}