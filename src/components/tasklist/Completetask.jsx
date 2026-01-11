import React from 'react'

const Completetask = ({data}) => {
  return (
    <div className='flex-shrink-0 bg-yellow-400 p-4 h-full w-[300px] rounded-xl'>
<div className='flex justify-between'>
    <h3 className='bg-red-600 px-3 text-sm rounded-xl py-2'>{data.category}</h3>
    <h4 className='text-sm'>{data.date}</h4>
</div>
<h2 className='text-2xl mt-2 font-semibold'>{data.title}</h2>
<p className='mt-1'>{data.description}</p>
       <div className='mt-2'>
        <button className='w-full'>Complete</button>
       </div>
        </div>
  )
}

export default Completetask
