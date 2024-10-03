import axios from 'axios'

const loginRouteApiCall = async({email,password}) => {
  try {
    const response = await axios.post('https://escapedis.online/login',{email,password})
    if(response.data.token){const token = response.data.token;
    localStorage.setItem('token',token)
    localStorage.setItem('email',email)
    localStorage.setItem('id', response.data.id)}
    return {id: response.data.id,message: response.data.message}
    
  }
  catch(err){
    console.log(err)
  }

  }
export default loginRouteApiCall