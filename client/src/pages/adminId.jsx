import {useQuery, useMutation} from '@tanstack/react-query'
import NavBar from '../components/navbar'
import getCouponData from '../utils/getCouponData'
import { Trash2 } from 'lucide-react'
import deleteCouponData from '../utils/deleteCouponData'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
export default function AdminId(){
  const navigate= useNavigate()
  const d = useLoaderData()
  if(d !== 'authenticated'){
    navigate('/')
  }
  const {email,id} = useParams();
  const [searchCode , setSearchCode] = useState()
  const {data} = useQuery({
    queryFn: ()=>getCouponData(id),
    queryKey: ['coupondata']
  })

  
  const {mutate} = useMutation({ 
    mutationFn: ()=>searchCode(searchCode),
    onSuccess: (data) => {
      if(data.message === 'password does not match'){ setInvalidPassword(true)}
    }
  })  

  const handleDelete = async (code) => {
    const result = confirm('Delete this coupon?')
    if(result){
      const res = await deleteCouponData(code)
    }
  }
  
  const handleSearchCodeChange = (e) => {
      setSearchCode(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/admin/${email}/${id}/${searchCode}`)
  }


  if(data){
    if(data.length === 0){
      return (
        <>
        <NavBar/>
        <div className="overflow-x-auto">
    <table className="table">
      <thead>
        <tr className=''>
          <th>Code</th>
          <th>Created at</th>
          <th>Valid till</th>
        </tr>
      </thead>
      {data && data.map((x) => {
        return <tbody key={x.code}>
        <tr>
          <td>{x.code}</td>
          <td>{x.createdAt}</td>
          <td>{x.validTill}</td>
          <td><Trash2 className='hover:cursor-pointer' onClick={()=>handleDelete(x.code)}/></td>
        </tr>
      </tbody>
      })}   
    </table>
  </div>
   </>
      )}
    if(data.length > 0){
      return(
        <>
        <NavBar/>
        <div className="py-10 px-10">
        <div className="max-w-60 pb-2">
        <p className='text-2xl font-semibold pb-2'>Search Code-</p>
        <label className="input input-bordered flex items-center gap-2 "> 
          <form onSubmit={handleSubmit}>
          <input type="text" className="h-10" placeholder="Search" id='search' onChange={handleSearchCodeChange} />
        <button className='hover:cursor-pointer'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70">
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd" />
        </svg>
        </button>
          </form> 
      </label>
        </div>
    <div className="">
     <div className="overflow-x-auto">
      <table className="table">
      <thead>
        <tr className=''>
          <th>Code</th>
          <th>Created at</th>
          <th>Valid till</th>
        </tr>
      </thead>
      {data && data.map((x) => {
        return <tbody key={x.code}>
        <tr>
          <td>{x.code}</td>
          <td>{x.createdAt}</td>
          <td>{x.validTill}</td>
          <td><Trash2 className='hover:cursor-pointer' onClick={()=>handleDelete(x.code)}/></td>
        </tr>
      </tbody>
      })} 
    </table>
  </div>
        </div>
        </div>
        </>
      )
    }
  }
  }


