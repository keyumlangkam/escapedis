import { useState } from "react"
import customerIdRouteApiCall from "../utils/customerIdRouteApiCall"
import { useParams } from "react-router-dom"
import customerDiscount from "../utils/customerDiscount"
import NavBar from "../components/navbar"

export default function Settings(){
  const {email} = useParams()
  const [id, setId] = useState()
  const [discount, setDiscount] = useState()

  const handleIdChange = (e) => {
    setId(e.target.value)
  }

  const handleDiscountChange = (e) => {
    setDiscount(`${e.target.value}%`)
  }

  const handleIdSubmit = (e) => {
    e.preventDefault();
    customerIdRouteApiCall({email,id})
  }

  const handleDiscountSubmit = (e) => {
    e.preventDefault();
    customerDiscount({email,discount})

  }


  return (
    <> 
    <NavBar/>
    <div className="flex flex-col items-center">
      <div className="my-16 py-10 px-10 border-2 rounded-md">
        <form onSubmit={handleIdSubmit} className="flex flex-col gap-5 items-center">
        <label htmlFor="id" className="font-medium text-center">Change facebook page id</label>
        <input type="text" name="id" id="id" className="input input-bordered w-full max-w-xs" onChange={handleIdChange} />
        <button className="btn btn-md btn-active w-32">Submit</button>
        </form>
      </div>
      <div className="py-10 px-10 border-2 rounded-md">
        <form onSubmit={handleDiscountSubmit} className="flex flex-col gap-5 items-center">
        <label htmlFor="discount" className="font-medium text-center">Change discount amount</label>
        <input type="text" name="discount" id="discount" className="input input-bordered w-full max-w-xs" onChange={handleDiscountChange}/>
        <button className="btn btn-md btn-active w-32 ">Submit</button>
        </form>
      </div>
    </div>
    
    </>
  )
}