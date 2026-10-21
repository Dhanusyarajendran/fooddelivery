import React, { useState } from 'react'
import { FaCheckCircle, FaLockOpen } from 'react-icons/fa';


const AwesomeToast = ({message, icon}) =>(
 <div className='animate-slide-in fixed bottom-6 right-6 flex items-center bg-gradient-to-r from-amber-500 to-amber-600
 px-6 py-4 rounded-lg shadow-lg border-2 border-amber-300/20'>
  <span className='text-2xl mr-3 text-[#2D1BOE]'>{icon}</span>
  <span className='font-semibold text-[#2D1BOE]'>{message}</span>

 </div>
)



const SignUp = () => {

  const[showToast, setShowToast] = useState(false);
  const[formData, setFormData] = useState(
    {
      username:'',
      email:'',
      password:''

    }
  );


  return (
    <div className='min-h-screen flex items-center justify-center bg-[#1a120bfz] p-4'>
        {showToast && <AwesomeToast message="Sign Up Successful" icon={<FaCheckCircle />} /> }

        <div className='w-full max-w-md bg-gradient-to-r from-[#2D1B0E] to-[#4a372a] p-8 rounded-xl
        shadow-lg border-4 border-amber-700/30 transform transition-all duration-300 hover:shadow-2xl'>
          <h1 className='text-center text-amber-400 text-2xl font-bold'>Create Account</h1>
        

        <form>
           <div className='relative flex items-center rounded-lg shadow bg-amber-900/25 py-2 px-2 gap-3 my-5'>
            <input type='username' name='username' placeholder='username' className='w-75 text-amber-400 bg-transparent placeholder-amber-400 outline-none border-none focus:outline-none focus:ring-0'
            value={formData.username}  onChange={(e) => setFormData({...formData, username: e.target.value})} />
          </div>

          <div className='relative flex items-center rounded-lg shadow bg-amber-900/25 py-2 px-2 gap-3 my-5'>
             <input type='email' name='email' placeholder='email' className='w-75 text-amber-400 bg-transparent placeholder-amber-400 outline-none border-none focus:outline-none focus:ring-0'
             onChange={handleChange} value={formData.email} />
          </div>

         <div className='relative flex items-center rounded-lg shadow bg-amber-900/25 py-2 px-2 gap-3 my-5'>
             <input type='password' name='password' placeholder='password' className='w-75 text-amber-400 bg-transparent placeholder-amber-400 outline-none border-none focus:outline-none focus:ring-0'
             onChange={handleChange} value={formData.password}/>
          </div>

        </form>
        </div>
    </div>
  )
}

export default SignUp;