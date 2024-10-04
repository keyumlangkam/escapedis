import { useNavigate } from "react-router-dom";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

export default function Home(){
  const navigate = useNavigate()
  const goToLogin = () => {
    navigate('/login')
  }
  return(
    <>
    <NavBar/>
    <div className="hero bg-gradient-to-r from-indigo-500  to-orange-300 min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Welcome to the admin panel</h1>
      <p className="py-6 text-lg font-medium">
        Click on get started to access your discount coupon codes
      </p>
      <button className="btn btn-primary" onClick={goToLogin}>Get Started</button>
    </div>
  </div>
</div>
    <Footer/>
    </>
  )
}
