import axios from 'axios'

const singupRouteApiCall = async({email,password}) => {
  try {
    const response = await axios.post('https://escapedis.online/signup',{email,password})
    if(response.data.token){const token = response.data.token;
    localStorage.setItem('token',token)}
    return response.data.message
    
  }
  catch(err){
    console.log(err)
  }

  }
export default singupRouteApiCall