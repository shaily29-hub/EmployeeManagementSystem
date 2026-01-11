import React from 'react'

const Accepttask = ({data}) => {
  console.log(data.title)
  return (
  
      <div className='flex-shrink-0 bg-red-400 h-full p-2 w-[300px] rounded-xl'>
<div className='flex justify-between'>
    <h3 className='bg-red-600 px-3 text-sm rounded-xl py-2'>{data.category}</h3>
    <h4 className='text-sm'>{data.date}</h4>
</div>
<h2 className='text-2xl mt-2 font-semibold'>{data.title}</h2>
<p className='mt-1'>
  {data.description}
</p>
      
        <div className='flex justify-between mt-4 '>
            <button className='py-1 text-sm px-2 bg-green-600'>Mark as completed</button>
            <button className='py-1 text-sm px-2 bg-red-600'>Mark as failed</button>
        </div>
    </div>
    
  )
}

export default Accepttask
