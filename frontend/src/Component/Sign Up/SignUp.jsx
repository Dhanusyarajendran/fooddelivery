import React, { useEffect, useState } from 'react'
import { FaCheckCircle, FaEyeSlash, FaEye, FaArrowRight} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';



const AwesomeToast = ({message, icon}) =>(
 <div className='animate-slide-in fixed bottom-6 right-6 flex items-center bg-gradient-to-r from-amber-500 to-amber-600
 px-6 py-4 rounded-lg shadow-lg border-2 border-amber-300/20'>
  <span className='text-2xl mr-3 text-[#2D1BOE]'>{icon}</span>
  <span className='font-semibold text-[#2D1BOE]'>{message}</span>

 </div>
)



const SignUp = () => {

  const[showToast, setShowToast] = useState(false);
  const[showPassword, setShowPassword] = useState(false)
  const[formData, setFormData] = useState(
    {
      username:'',
      email:'',
      password:''

    });
  const navigate = useNavigate();

//for toast

useEffect(() =>{
  if(showToast)
  {
    const timer = setTimeout(() => {
      setShowToast(false)
      navigate('/login');
    }, 2000);
    return () => clearTimeout(timer);
  }
},[showToast, navigate])



 const  toggleShowPassword =() =>{
  setShowPassword(prev => !prev)
}

const handleSubmit = () =>{
  e.preventDefault();
  console.log('Sign Up Data:',formData);
  setShowToast(true)
}

  
  return (
    <div className='min-h-screen flex items-center justify-center bg-[#1a120bfz] p-4'>
        {showToast && <AwesomeToast message="Sign Up Successful" icon={<FaCheckCircle />} /> }

        <div className='w-full max-w-md bg-gradient-to-r from-[#2D1B0E] to-[#4a372a] p-8 rounded-xl
        shadow-lg border-4 border-amber-700/30 transform transition-all duration-300 hover:shadow-2xl'>
          <h1 className='text-center text-amber-400 text-2xl font-bold'>Create Account</h1>
        

        <form onSubmit={handleSubmit}>
           <div className='relative flex items-center rounded-lg shadow bg-amber-900/25 py-2 px-2 gap-3 my-5'>
            <input type='username' name='username' placeholder='username' className='w-75 text-amber-400 bg-transparent placeholder-amber-400 outline-none border-none focus:outline-none focus:ring-0'
            value={formData.username}  autoComplete="username" onChange={(e) => setFormData({...formData, username: e.target.value})} />
          </div>

          <div className='relative flex items-center rounded-lg shadow bg-amber-900/25 py-2 px-2 gap-3 my-5'>
             <input type='email' name='email' placeholder='email' className='w-75 text-amber-400 bg-transparent placeholder-amber-400 outline-none border-none focus:outline-none focus:ring-0'
             value={formData.email} autoComplete="email"  onChange={(e) => setFormData({...formData, email: e.target.value})}/>
          </div>

         <div className='relative flex items-center rounded-lg shadow bg-amber-900/25 py-2 px-2 gap-3 my-5'>
             <input type={showPassword ? 'text' : 'password'}
              name='password' placeholder='password' className='w-75 text-amber-400 bg-transparent placeholder-amber-400 outline-none border-none focus:outline-none focus:ring-0'
             value={formData.password} autoComplete="password" onChange={(e) => setFormData({...formData, password: e.target.value})}/>
             <button type='button' onClick={toggleShowPassword} className='absolute right-3 top-1/2 text-amber-400 transform -translate-y-1/2'>
                    {showPassword ?  <FaEyeSlash />: <FaEye />}
                  </button>
          </div>

          <button type='submit' className='flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-600 shadow w-full text-black rounded-xl p-2 justify-center mt-4 font-bold
             hover:scale-105 duration-300 transition-transform'>
              Sign Up 
             </button>

        </form>

      <div className='mt-6 text-center'>
        <Link to='/login' className='group inline-flex items-center text-amber-400 hover:text-amber-600 transition-all duration-300'>
        <FaArrowRight className='mr-2 transform -translate-x-2 opacity-0  group-hover:translate-x-0
         group-hover:opacity-10 transition-all duration-300 ' />
              <span className='transform group-hover:-translate-2 transition-all duration-300'>Back To Login</span>
        </Link>
        </div>

        </div>
    </div>
  )
}

export default SignUp;