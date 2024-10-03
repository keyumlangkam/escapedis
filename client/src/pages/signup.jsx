import { useState } from "react";
import {useMutation} from '@tanstack/react-query'
import singupRouteApiCall from "../utils/signupRouteApiCall";
import {useLoaderData,useNavigate} from "react-router-dom"
import NavBar from "../components/navbar";

export default function Signup(){

  const data = useLoaderData()
  if(data){
    navigate('/')
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [invalidPassword1, setInvalidPassword1] = useState(false);
  const navigate = useNavigate()

  const {mutate} = useMutation({ 
    mutationFn: ()=>singupRouteApiCall({email,password}),
    onSuccess: (data) => {
      console.log(data)
      if(data){navigate(`/addpageid/${email}`)}
    }
  })

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handlePasswordChange1 = (e) => {
    setPassword1(e.target.value)
  }

  const hanldeSubmit = (e) => {
    e.preventDefault();
     const fd = new FormData(e.target)
     const {password,email,password1} = Object.fromEntries(fd.entries());
     const invalidEmail = !email.includes('@')
     if(invalidEmail){
      return setInvalidEmail(true)
     } else {
      setInvalidEmail(false)
     }
     console.log(password,password1,password.length)
     console.log(email)
     if(password.length === 0){
       return setInvalidPassword(true)
     } else if(password !== password1){
      return setInvalidPassword(true)
     } else {
      setInvalidPassword(false)
     }
     mutate()
  }

  return(
  <>
  <NavBar/>
  <div className="flex flex-col items-center">
    <div className="border-2 my-20 px-10 py-10 rounded-lg">
    <form onSubmit={hanldeSubmit} className="flex flex-col items-center">
    <label htmlFor="email">Email</label>
    <input className="input input-bordered w-full max-w-xs mb-6" type="email" name="email" id="email" placeholder="email" onChange={handleEmailChange} />
    <label htmlFor="password">Enter-password</label>
    <input className="input input-bordered w-full max-w-xs  mb-6" type="password" name="password" id="password" placeholder="password" onChange={handlePasswordChange} />
    <label htmlFor="password1">Re-enter password</label>
    <input className="input input-bordered w-full max-w-xs  mb-6" type="password" name="password1" id="password1" placeholder="re-enter password" onChange={handlePasswordChange1} />
    {invalidEmail && <p className="text-red-400">Invalid Email!</p>}
    {invalidPassword && <p className="text-red-400">Password does not match!!</p>}
    
    <button type="submit" className="btn btn-md btn-info btn-outline w-32 mt-5">Sign up</button>
  </form>
    </div>
  </div>
 
  </>
  )
}