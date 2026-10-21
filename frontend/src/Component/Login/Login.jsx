import React, { useEffect, useState } from 'react'
import { FaCheckCircle, FaEyeSlash, FaUser, FaEye, FaLock, FaArrowRight, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = ({ onLoginSuccess, onClose }) => {

  const [showToast, setShowToast] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(
    {
      username:'',
      password:'',
      rememberMe:false
    }
  );

  useEffect(() =>{
    const stored = localStorage.getItem('loginData');
    if(stored) setFormData(JSON.parse(stored))
  })


  const handleChange = ({target: {name, value, type, checked }}) =>{
  setFormData (prev =>({...prev, [name] : type === 'checkbox' ? checked: value}) )
  }


  const handleSubmit = (e) =>{
    e.preventDefault;
    formData.rememberMe ? localStorage.setItem('loginData', JSON.stringify(formData)) : localStorage.removeItem('loginData');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000)
   onLoginSuccess(); 
    } 

const toggleshowPassword = () =>{
  setShowPassword(prev => !prev);

  }

  return (
    <div className='space-y-6 relative'>
      <div className={`fixed top-4 right-4 z-50 transition-all duration-300
         ${showToast ? 'traslate-y-0 opacity-100':'-translate-y-20 opacity-0'}`}>
         
         <div className='bg-green-600 text-white px-4 py-3 rounded-md shadow-lg flex items-center gap-2 text-sm '>
          <FaCheckCircle className='flex-shrink-0'/>
          <span>Login Successful!</span>
         </div>
      </div>
      
    

    <form onSubmit={handleSubmit}>
    <div className='relative flex items-center rounded-lg shadow bg-amber-900/25 py-2 px-2 gap-3 my-5'>
      <FaUser className='text-amber-400' />   
      <input type='text' 
      placeholder='username' 
      name='username' 
      className='w-75 text-amber-400 bg-transparent placeholder-amber-400 outline-none border-none focus:outline-none focus:ring-0'
       onChange={handleChange}
        value={formData.username}
        /> 
   </div>

   <div className='relative flex items-center rounded-lg shadow bg-amber-900/25 py-2 px-2 gap-3 '>
       <FaLock className='text-amber-400' />
      <input type={showPassword ? 'text' : 'password'}
       placeholder='password' 
       name='password'
        className='w-75 bg-transparent text-amber-400 placeholder-amber-400 outline-none border-none focus:outline-none focus:ring-0' 
        onChange={handleChange} 
        value={formData.password}
        />

      <button type='button' onClick={toggleshowPassword} className='absolute right-3 top-1/2 text-amber-400 transform -translate-y-1/2'>
       {showPassword ?  <FaEyeSlash />: <FaEye />}
      </button>
    </div>

    <div className='mt-2 flex gap-2 items-center ml-1'>
      <label className='flex items-center'>
        <input type='checkbox' name='checkbox' onChange={handleChange} value={formData.rememberMe} className='form-checkbox rounded w-5 h-4 text-amber-400 rounded focus:ring-amber-600'/>
      </label>
      <span className='text-amber-100'>Remember me</span>
    </div>
 
   <button className='flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-600 shadow w-full text-black rounded-xl p-2 justify-center mt-4 font-bold
   hover:scale-105 duration-300 transition-transform'>
    Sign in <FaArrowRight />
   </button>
  </form>

  <div className='text-center'>
    <Link to='/signUp' onClick={onclose} className='inline-flex items-center gap-2 text-amber-400 hover:text-amber-600 transition-colors'>
    <FaUserPlus /> Create New Account
    </Link>

  </div>
    </div>
  )
}

export default Login