import React from 'react'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { loginUser } from '../store/api'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Login() {
const dispatch=useDispatch()
const query=useQueryClient()
const navigate=useNavigate()
    const {mutate}=useMutation(
        loginUser ,
        {
           
            onSuccess: (data)=>{
              console.log(data);
               localStorage.setItem("token",data.token);
               query.invalidateQueries({
                 queryKey:["user"]
               })
               navigate("/")

            },
            onError:(e)=>{
            
              toast.error("Invalid email or password")
            }
        }
    )
    const {
        register,
        handleSubmit,
        formState: { errors }
    }= useForm()

    function onSubmit(logData) {

         mutate(logData)
    }

  return (
    <form className=' flex flex-col px-3 space-y-8' onSubmit={handleSubmit(onSubmit)}>
      <div className=' space-y-2'>
      <p className=' text-start  text-lg'>Email:</p>
        <input type="email"  {...register("email",{required:true})} className={`w-full px-2 py-2 border border-red-300 rounded-lg ${errors.email && 'bg-red-300'}`} placeholder='Email' />
        {errors.email && <span className=" text-red-600 text-start flex flex-col">Email is required</span>}
      </div>

      <div className=' space-y-2'>
      <p className=' text-start  text-lg'>Password:</p>
        <input type="text"  {...register("password", {required:true,minLength:6})}  className={`w-full px-2 py-2 border border-red-300 rounded-lg ${errors.password && 'bg-red-300'}`} placeholder='Password' minLength={6} />
        {errors.password && <span className=" text-red-600 text-start flex flex-col">Password is required</span>}
      </div>

   

   <input type="submit" title='Login' className=' bg-red-500 text-white cursor-pointer rounded-lg  text-lg hover:bg-red-300 py-1 mt-3 transition-all duration-150' />

   <ToastContainer />
    </form>
  )
}

export default Login