import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate=useNavigate()
  return (
    <div className=' bg-white w-[100%] py-5 shadow-sm  px-4 '>
       <div className=' flex justify-between w-[90%] mx-auto'>
       <h1 className=' text-lg text-purple-700 font-bold'>Taskly</h1>
       <div>
       <h1 className=' bg-purple-500 text-white px-3 py-1 rounded-lg hover:bg-purple-400 hover:transition-all hover:duration-200 cursor-pointer' 
       onClick={(e)=>{
         e.preventDefault()
          localStorage.removeItem("token")
          navigate("/login")
       }}
       >Logout</h1>
       </div>
       </div>
    </div>
  )
}

export default Header