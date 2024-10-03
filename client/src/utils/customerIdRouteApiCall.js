import axios from 'axios'

const customerIdRouteApiCall = async({email,id}) => {
  try {
    console.log(id,email)
    const response = await axios.post('https://escapedis.online/customerid',{email,id})
    if(response.data.message){
      localStorage.setItem('id',id)
      localStorage.setItem('email',email)
      console.log(response.data.message)
      return response.data.message
    }    
  }
  catch(err){
    console.log(err)
  }

  }
export default customerIdRouteApiCall