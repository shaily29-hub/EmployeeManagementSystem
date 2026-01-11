import React, { useState } from 'react'

const Header = (props) => {

//  const [username, setUsername] = useState('')
//  if(!data){
//   setUsername("Admin")
//  }
//  else{
//   setUsername(data.firstName)
//  }
const logoutUser=()=>{
  localStorage.setItem('loggedinuser','')
  // window.location.reload()
 props.changeUser('')
}
  return (
    <div className='flex text-white items-center justify-between'>
        <h1 className='text-2xl font-medium'>Hello<br/><span className='text-3xl font-semibold'>{props.data?.firstName} 🖐️</span></h1>
      <button onClick={logoutUser} className='bg-red-600 text-white text-lg font-medium px-5 py-2 rounded-xl'>Log Out</button>
    </div>
  )
}

export default Header
