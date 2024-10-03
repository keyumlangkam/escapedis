import {useQuery} from '@tanstack/react-query'
import NavBar from '../components/navbar'
import searchCouponData from '../utils/searchCouponData'
import { Trash2 } from 'lucide-react'
import deleteCouponData from '../utils/deleteCouponData'
import { useParams } from 'react-router-dom'


export default function SearchPage(){
  const {search} = useParams();
  const {data} = useQuery({
    queryFn: ()=>searchCouponData(search),
    queryKey: ['searchcoupondata']
  })


  const handleDelete = async (code) => {
    const result = confirm('Delete this coupon?')
    if(result){
      const res = await deleteCouponData(code)
    }
  }

  if(data){
    if(data.length === 0){
      return (
        <>
        <NavBar/>
        <p className='text-stone-600 text-3xl font font-medium px-10 py-10'>Sorry, could not find coupon, please make sure <br /> you've written the code correctly</p>
   </>
      )}
    if(data.length > 0){
      return(
        <>
        <NavBar/>
        <div className="py-10 px-10">
       <p className='text-3xl font-semibold pb-5'>Search Result-</p>
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