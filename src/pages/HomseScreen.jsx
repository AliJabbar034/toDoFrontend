import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import TaskSCreen from './TaskSCreen'
import { useQuery } from 'react-query'
import { getAllTask, getProfile } from '../store/api'
import { useDispatch } from 'react-redux'
import { userActions } from '../store/reducer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function HomseScreen() {
   
   const [token,setToken] =useState(localStorage.getItem("token"))
 
   const { data, isFetched ,isError } = useQuery(["task"], () => getAllTask(), {
    enabled:!!token,
  })
  const dispatch = useDispatch()
  useEffect(()=>{
    console.log(isError);
    if (isFetched && data){
      console.log(data.data);
      dispatch(userActions.setTask(data.data))
    }
  },[isFetched,data,isError])
  useEffect(()=>{
    if (token){
      setToken(token);
      console.log(token);
    }
  },[token])
  return (
    <div className='w-[100%] space-y-10 pb-4'  >
        <Header/>

        <div className=' w-[50%] flex flex-col mx-auto'>
          <TaskSCreen/>
        </div>
        <ToastContainer />
    </div>
  )
}

export default HomseScreen