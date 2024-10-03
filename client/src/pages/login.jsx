import { useState } from "react";
import {useMutation} from '@tanstack/react-query'
import LoginRouteApiCall from "../utils/LoginRouteApiCall";
import {Link, useNavigate} from "react-router-dom"
import NavBar from "../components/navbar";

export default function Login(){


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const navigate = useNavigate()

  const {mutate} = useMutation({ 
    mutationFn: ()=>LoginRouteApiCall({email,password}),
    onSuccess: (data) => {
      console.log(data)
      if(data.message === 'password does not match'){ setInvalidCredentials(true)}
      if(data.message === 'user does not exist'){setInvalidCredentials(true)}
      if(data.message === 'pageId notfound'){navigate(`/addpageid/${email}`)}
      if(data.message === 'user authenticated'){navigate(`/admin/${email}/${data.id}`)}
    }
  })  
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const hanldeSubmit = (e) => {
    e.preventDefault();
    mutate()
  }

  return(
  <>
  <NavBar/>
  <div className="flex flex-col items-center bg-base-200  min-h-screen">
  <div className=" border-2 shadow-xl rounded-lg px-10 py-10 my-20 bg-white ">
  <form onSubmit={hanldeSubmit} className="flex-col flex gap-5 items-center">
    <label htmlFor="email" className="self-start">Email</label>
    <input type="email" name="email" id="email" className="input input-bordered w-full max-w-xs" onChange={handleEmailChange} />
    <label htmlFor="password" className="self-start" >Password</label>
    <input type="text" name="passowrd" id="password" className="input input-bordered w-full max-w-xs" onChange={handlePasswordChange} />
    { invalidCredentials &&  <p className="text-red-500">Email or password <br /> <p className="text-center">does not match!</p></p> }
     <button type="submit" className="btn btn-md btn-info btn-outline w-32 mt-5">Login</button>
     <div className="divider">OR</div>
      <Link to='/signup' className="text-blue-500 hover:underline">Sign up</Link>
    </form>
  </div>
  </div>
  </>
  )
}