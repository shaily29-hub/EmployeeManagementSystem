import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler=(e)=>{
      
        e.preventDefault();
        handleLogin(email,password);
        // console.log("email is",email)
        // console.log("password is",password)
        // console.log("form submitted")
        setEmail("")
        setPassword("")
    }
  return (
    <div className='bg-black flex h-screen w-screen justify-center items-center'>
  <div className=' border-2 p-10 rounded-xl border-emerald-600'>
    <form onSubmit={(e)=>{
        submitHandler(e);
    }}
    className='flex flex-col items-center justify-center'>
        <input 
        value={email} 
        onChange={(e)=>{
setEmail(e.target.value)
        }}
        required className='text-white mt-2 mb-2 bg-transparent outline-none border-emerald-600 border-2 placeholder:text-gray-400 rounded-full py-3 px-5' type='email' placeholder='enter your email-id'></input>
        <input 
         value={password} 
        onChange={(e)=>{
setPassword(e.target.value)
        }}
        required className='text-white mt-2 mb-2 bg-transparent outline-none border-emerald-600 border-2 placeholder:text-gray-400 rounded-full py-3 px-5' type='password' placeholder='enter password'></input>
        <button className='text-white mt-2 mb-2 outline-none bg-emerald-600 border-none placeholder:text-white rounded-2xl py-2 px-5'>Login</button>
    </form>
  </div>
    </div>
  )
}

export default Login
