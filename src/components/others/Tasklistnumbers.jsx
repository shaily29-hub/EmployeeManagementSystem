import React from 'react'

const Tasklistnumbers = ({data}) => {
  return (
    <div className='flex mt-5 screen gap-5 justify-between'>
      <div className='bg-red-400 px-9 py-6 rounded-xl w-[45%]'>
        <h2 className='font-semibold text-3xl'>{data.taskCount.newTask}</h2>
        <h3 className='font-medium text-xl'>New Task</h3>
      </div>
      <div className='bg-yellow-400 px-9 py-6 rounded-xl w-[45%]'>
        <h2 className='font-semibold text-3xl'>{data.taskCount.active}</h2>
        <h3 className='font-medium text-xl'>Active Task</h3>
      </div>
      <div className='bg-green-400 px-9 py-6 rounded-xl w-[45%]'>
        <h2 className='font-semibold text-3xl'>{data.taskCount.completed}</h2>
        <h3 className='font-medium text-xl'>Completed Task</h3>
      </div>
      <div className='bg-blue-400 px-9 py-6 rounded-xl w-[45%]'>
        <h2 className='font-semibold text-3xl'>{data.taskCount.failed}</h2>
        <h3 className='font-medium text-xl'>Failed task</h3>
      </div>
    </div>
  )
}

export default Tasklistnumbers
