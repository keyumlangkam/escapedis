import axios from "axios";

export async function loader(){
  try{
    const token  = localStorage.getItem('token')
 
    if(token){
      const res = await axios.get('https://escapedis.online/checktoken',{
        headers:{
         'Authorization': 'Bearer ' + token 
        }})
        if(res.data.tokenvalue === 'verified'){
          return 'authenticated'
        } else return 'not authenticated'
    } else return 'not authenticated'
  }catch(err){ 
    console.log(err)
  }
 
  
}