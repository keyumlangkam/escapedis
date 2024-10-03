import { useNavigate, useParams } from "react-router-dom"

export default function NavBar(){
  const navigate = useNavigate()
  const email = localStorage.getItem('email')
  const id = localStorage.getItem('id')
  const deleteToken = () => {
    localStorage.clear()
    navigate('/')
  }

  const goToLogin = () => {
    navigate('/login')
  }

  const goToHome = () => {
    navigate('/')
  }

  const goToSettings = () => {
    navigate(`/admin/${email}/${id}/settings`)
  }
  
  const goToDashboard = () => {
    navigate(`/admin/${email}/${id}`)
  }

    const token = localStorage.getItem('token')
    
    if(token){
      return(
        <>
      <div className="navbar bg-slate-700">
        <div className="navbar-start">
          {id && <a className="px-6 hover:cursor-pointer text-white hover:text-slate-400 text-xl" onClick={goToDashboard}>Dashboard</a>}
          {id && <a className=" hover:cursor-pointer text-white hover:text-slate-400 text-xl" onClick={goToSettings}>settings</a>}
        </div>
        <div className="navbar-end">
          <a className="btn" onClick={deleteToken}>Logout</a>
        </div>
      </div>
        </>
      )
    } else {
      return(
        <>
      <div className="navbar bg-slate-700">
        <div className="navbar-start">
        <a className="hover:cursor-pointer hover:text-white  text-slate-400 text-2xl font-semibold" onClick={goToHome}>Home</a>
        </div>
        <div className="navbar-end">
          <a className="btn" onClick={goToLogin}>Login</a>
        </div>
      </div>
        </>
      )
    }
}