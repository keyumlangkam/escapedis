import NavBar from "../components/navbar";
import { useMutation } from "@tanstack/react-query";
import customerIdRouteApiCall from "../utils/customerIdRouteApiCall";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function AddPageId(){
  const [showHelp, setShowHelp] = useState(false)
  const [id,setId] = useState('')
  const {email} = useParams()
  const navigate = useNavigate()
  const {mutate} = useMutation({ 
    mutationFn: ()=>customerIdRouteApiCall({email,id}),
    onSuccess: (data) => {
      console.log(data)
      if(data === 'pageId added'){navigate(`/admin/${email}/${id}`)}
    }
  })

  const handleId = (e) => {
    setId(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate()
  }

  return(
    <>
    <NavBar/>
    <h1 className="text-center text-3xl my-10 font-semibold text-slate-750">Follow the steps to connect your facebook page with the software :</h1>
    <div className="flex flex-col items-center gap-10">
      <div className="flex-col flex gap-5 items-center">
        <div className="">
          <p className="text-2xl text-center">First Step</p>
        </div>
        <div className="text-center">
          <ul>
            <li>
              <p>
                1. Go to your escape room facebook page
              </p>
            </li>
            <li>
              <p>
                2. Click on about
              </p>
            </li>
          </ul>  
        </div>
        <div className="">
          <img src="../../public/Firststep.png" alt="" className="object-scaledown"/>
        </div>  
      </div>
      <div className="flex-col flex gap-5 items-center">
        <div className="">
          <p className="text-2xl text-center">Second Step</p>
        </div>
        <div className="text-center">
          <ul>
            <li>
              <p>
                2. Click on Page transparency 
              </p>
            </li>
          </ul>  
        </div>
        <div className="">
          <img src="../../public/Secondstep.png" alt="" className="object-contain"/>
        </div>  
      </div>
      <div className="flex-col flex gap-5 items-center">
        <div className="">
          <p className="text-2xl text-center">Third Step</p>
        </div>
        <div className="text-center">
          <ul>
            <li>
              <p>
                2. Copy Page Id
              </p>
            </li>
          </ul>  
        </div>
        <div className="">
          <img src="../../public/Thirdstep.png" alt="" className="object-scaledown"/>
        </div>  
      </div>
      <div className="flex-col flex gap-5 items-center">
        <div className="">
          <p className="text-2xl text-center">Fourth Step</p>
        </div>
        <div className="text-center">
          <ul>
            <li>
              <p>
                Connect the page Id to your account
              </p>
            </li>
          </ul>  
        </div>
        <div className="border-2 px-5 py-5 rounded-xl my-5">
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input type="text" name="id" id="id" placeholder="id"  className="input input-bordered w-full max-w-xs" onChange={handleId}/>
            <button className="btn btn-md btn-info btn-outline w-32 mt-5">Connect</button>
          </form>
        </div>    
      </div>
    </div>
    
    
    
    
    </>
  )
}