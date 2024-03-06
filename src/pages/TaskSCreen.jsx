import React, { useEffect, useState } from 'react'
import AllTask from './AllTask'
import BasicModal from './BasiModal';
import { useSelector } from 'react-redux';

function TaskSCreen() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const {tasks}=useSelector((state)=>state.user)
 

  return (
    <div className=' bg-white shadow-sm shadow-black rounded-lg  flex flex-col py-4 px-4 space-y-6'>

        <h1 className='flex flex-col items-center text-center font-bold text-2xl text-red-600'>Your Tasks</h1>
        <div className=' bg-red-500 text-white hover:bg-red-300 hover:transition-all hover:duration-150  flex flex-col  justify-center  items-center w-32 rounded-lg cursor-pointer py-2
        ' onClick={(e)=>{
          e.preventDefault()
          setOpen(true)
        }}>
              <p1>Create New</p1>
            </div>
            <BasicModal open={open} close={handleClose}/>
         
  
        <div className=' space-y-3'>
        {
            tasks?.map((item,index)=>{
                return <AllTask key={index} task={item}/>
            })
        }
        </div>
    </div>
  )
}

export default TaskSCreen