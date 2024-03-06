import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { createTask } from '../store/api'



function AddTask({closeModal}) {

    const [err,setErr] =useState(false)
    const queryClient=useQueryClient()
  const {register,formState:{errors},handleSubmit,}=  useForm()

  const {mutate}=  useMutation( createTask,{
    onSuccess: async(data)=>{
      queryClient.invalidateQueries({
        queryKey:["task"],
      })
      closeModal();
    },
    onError:(errors)=>{
        setErr(true)
      console.log(errors);
    }
   })
const onSubmit =(data)=>{

    mutate(data)
    console.log(data)
    
}

  return (
    <form className=' mt-3 flex flex-col space-y-5' onSubmit={handleSubmit(onSubmit)}>

   <div className=' flex flex-col space-y-3'>

<p>Title:</p>
    <input type="text" {...register("title",{required:true,minLength:3})} className=' border border-red-300 rounded-lg p-2' />
    {errors.title && <span className=" text-red-400">title is required</span>}
   </div>

   <div className=' flex flex-col space-y-3'>
   <p>Description:</p>
    <input type="text" {...register("description",{required:true,minLength:4})} className=' border border-red-300 rounded-lg p-2' />
    {errors.description && <span className=" text-red-400">description is required</span>}
   </div>

    <div className=' flex flex-col items-center'>
    <input type="submit"  title='Add Task' className=' bg-red-600 px-4 py-1 text-white rounded-lg hover: transition-all hover:bg-red-300 hover:duration-150 cursor-pointer' />
    </div>

{err && <span className=' text-lg text-red-600'>Error during creating Task</span>}
    </form>
  )
}

export default AddTask