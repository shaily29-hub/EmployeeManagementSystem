import React, { useContext } from 'react'
import { Authcontext } from '../../context/AuthProvider'

const Alltask = () => {
  const [userdata,setUserdata]=useContext(Authcontext)
 
  return (
    <div id='Alltask' className='bg-[#1C1C1C] mt-5 h-52 overflow-auto p-5'>
      <div className='bg-red-400 mb-2 flex justify-between rounded py-2 px-4'>
        <h2 className='w-1/5 text-lg font-medium'>Employee Name</h2>
        <h3 className='w-1/5 text-lg font-medium'>New Task</h3>
        <h5 className='w-1/5 text-lg font-medium'>Active Task</h5>
        <h5 className='w-1/5 text-lg font-medium'>Completed</h5>
         <h5 className='w-1/5 text-lg font-medium'>Failed</h5>

      </div>
      <div className='h-[80%] overflow-auto'>
        {userdata.map(function(elem,idx){
return <div key={idx} className='border-2 border-emerald-600 mb-2 flex justify-between rounded py-2 px-4'>
            <h2 className=' text-lg font-medium w-1/5'>{elem.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 !text-blue-600 !important'>{elem.taskCount.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 !text-yellow-400'>{elem.taskCount.active}</h5>
            <h5 className='text-lg font-medium w-1/5 !text-green-400 !important'>{elem.taskCount.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 !text-red-600'>{elem.taskCount.failed}</h5>
        </div>
    
      })}
      </div>
        {/* <div className='bg-red-400 flex justify-between rounded py-2 px-4'>
            <h2>sarthak</h2>
            <h3>Make a UI design</h3>
            <h5>Status</h5>
        </div>
          <div className='bg-blue-400 flex justify-between mt-3 rounded py-2 px-4'>
            <h2>sarthak</h2>
            <h3>Make a UI design</h3>
            <h5>Status</h5>
        </div>
          <div className='bg-yellow-400 flex justify-between mt-3 rounded py-2 px-4'>
            <h2>sarthak</h2>
            <h3>Make a UI design</h3>
            <h5>Status</h5>
        </div>
          <div className='bg-green-400 flex justify-between mt-3 rounded py-2 px-4'>
            <h2>sarthak</h2>
            <h3>Make a UI design</h3>
            <h5>Status</h5>
        </div>
          <div className='bg-purple-400 mt-3 flex justify-between rounded py-2 px-4'>
            <h2>sarthak</h2>
            <h3>Make a UI design</h3>
            <h5>Status</h5>
        </div>
       */}
    </div>
  )
}

export default Alltask
