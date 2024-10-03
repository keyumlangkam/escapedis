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
        if(res.statusText !== 'OK'){
          return redirect('/')
        }
    
        if(res.data.tokenvalue !== 'verified'){
          return redirect('/')
        } else return null   
    } else return redirect('/')
  }catch(err){

  }
 
  
}