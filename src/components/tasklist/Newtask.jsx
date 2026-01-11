import React from 'react'

const Newtask = ({data}) => {
  return (
     <div className='flex-shrink-0 bg-green-400 h-full p-4 w-[300px] rounded-xl'>
<div className='flex justify-between'>
    <h3 className='bg-red-600 px-3 text-sm rounded-xl py-2'>{data.category}</h3>
    <h4 className='text-sm'>{data.date}</h4>
</div>
<h2 className='text-2xl mt-2 font-semibold'>{data.title}</h2>
<p className='mt-1'>{data.description}</p>
       <div className='justify-center flex mt-2'>
        <button className='bg-green-600 text-sm py-1 px-2'>Accept Task</button>
       </div>
        </div>
  )
}

export default Newtask

