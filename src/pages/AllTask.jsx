import React from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { delTask, getAllTask, updateTask } from '../store/api'
import { useSelector } from 'react-redux'
import { MdDeleteOutline } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AllTask({task}) {

  const query=useQueryClient()
  const {mutate}= useMutation(updateTask,{
    onSuccess: async(data)=>{
      
       query.invalidateQueries({
        queryKey:["task"],
       })
toast.success("Task updated successfully")
    },
    onError:(errors)=>{
        toast.error("error updating task")
    }
  })
  const {mutate:delMutate}= useMutation(delTask,{
    onSuccess: (data)=>{
      toast.success("Task deleted successfully")
       query.invalidateQueries({
        queryKey:["task"],
       })
       
    },
    onError:(errors)=>{
        toast.error("error deleting task")
    }
  })
  

  const comp =task.completed
  
  const checkedHandler = (id)=>{
     console.log("Checking",id)
     const reqData={
      task_id:id,
     }
     mutate(reqData)
  }
  return (
    <div  className=' shadow-sm rounded-md  bg-white shadow-black p-3 flex justify-between pb-5 px-4'>
        <div className=' space-y-3'>
        <h1 className=' flex flex-col text-xl text-red-600'>{task.title}</h1>
        <h1>{task.description}</h1>
        </div>
        <div className=' justify-center items-center flex flex-col'>
        <input type="checkbox" name="" id=""   defaultChecked={comp} onChange={()=>{
          checkedHandler(task._id)
        }}/>
       
        </div>

        <div className=' justify-center items-center flex flex-col'>
        <MdDeleteOutline  size={25}  color={'red'}  className=" cursor-pointer"onClick={(e)=>{
          e.preventDefault()
          const reqData={
            task_id:task._id
          }
          delMutate(reqData)
        }}/>
        </div>
        <ToastContainer />
    </div>
  )
}

export default AllTask