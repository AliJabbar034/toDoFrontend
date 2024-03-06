import React from 'react'
import Login from '../component/Login'
import SignUp from '../component/SignUp';
import { Link } from 'react-router-dom';

 function SignUpScreen() {
  return (
    
        <div className='flex justify-center items-center h-[100vh]'>
          <div className='bg-white shadow-sm md:w-1/2 flex flex-col  shadow-black rounded-lg p-4 space-y-4'>
            <h1 className='text-xl font-bold text-red-900 flex flex-col text-center'>Taskly</h1>
            <h1 className='text-xl font-bold text-purple-950 flex flex-col text-center'>Create a Account</h1>
            <div className=' py-5'  >
             <SignUp/>
            </div>
            <div className=' flex justify-between px-2 py-4'>
                <p>Already have an account?</p>
                <Link  to={'/login'}className=' cursor-pointer  hover:border-b-2 hover:border-red-500'>Login</Link>
            </div>
          </div>
        </div>
      );
    }
    

export default SignUpScreen