import React, { useContext, useState } from 'react'
import Newtask from '../tasklist/Newtask'
import { Authcontext } from '../../context/AuthProvider'

const Createtask = () => {
  const [userdata,setUserdata]=useContext(Authcontext)
  const [tasktitle, setTasktitle] = useState('')
  const [taskdate, setTaskdate] = useState('')
  const [taskdescription, setTaskdescription] = useState('')
  const [assignto, setAssignto] = useState('')
  const [taskcategory, setTaskcategory] = useState('')
 const [newTask, setNewTask] = useState({})

 const submitHandler = (e) => {
  e.preventDefault()

  const task = {
    title: tasktitle,
    category: taskcategory,
    date: taskdate,
    description: taskdescription,
    active: false,
    newTask: true,
    failed: false,
    completed: false
  }

  setUserdata(prev => {
    const updated = prev.map(emp => {
      if (emp.firstName === assignto) {
        return {
          ...emp,
          tasks: [...emp.tasks, task],
          taskCount: {
            ...emp.taskCount,
            newTask: emp.taskCount.newTask + 1
          }
        }
      }
      return emp
    })

    console.log("✅ UPDATED USERDATA:", updated) // 👈 THIS WILL BE CORRECT
    localStorage.setItem("employees", JSON.stringify(updated))

    return updated
  })

  // clear form
  setTasktitle('')
  setTaskdescription('')
  setTaskdate('')
  setTaskcategory('')
  setAssignto('')
}

  return (
    <div>
       <div className='p-5  bg-[#1C1C1C] mt-5 rounded'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className=' flex-wrap flex px-2 py-1 w-full items-start justify-between'>
        <div className='w-1/2'>
            <div>
         <h3 className='text-sm text-gray-300 mt-2'>Task Title</h3>
        <input type='text' 
        value={tasktitle}
        onChange={(e)=>{
          setTasktitle(e.target.value)
        }}
         className=" text-gray-700  placeholder-gray-400 outline-none border-gray-400 w-4/5 border-[1px] rounded text-sm py-1 px-2 bg-transparent" placeholder='Enter task'/>
       </div>
             <div>
            <h3 className='text-sm text-gray-300 mt-2'>Date</h3>
        <input 
        value={taskdate}
onChange={(e)=>{
  setTaskdate(e.target.value)
}}
className=" text-gray-600  placeholder-gray-400 outline-none border-gray-400 w-4/5 border-[1px] rounded text-sm py-1 px-2 bg-transparent"type='date'/>
        </div>
        <div>
            <h3 className='text-sm text-gray-300 mt-2'>Assign to</h3>
        <input 
        value={assignto}
        onChange={(e)=>{
          setAssignto(e.target.value)
        }}
        className=" text-gray-700  placeholder-gray-400 outline-none border-gray-400 w-4/5 border-[1px] rounded text-sm py-1 px-2 bg-transparent" type='text' placeholder='employee name'/>
        </div>
        <div>
            <h3 className='text-sm text-gray-300 mt-2'>Category</h3>
        <input
        value={taskcategory}
        onChange={(e)=>{
        setTaskcategory(e.target.value)
        }}
        className=" text-gray-700  placeholder-gray-400 outline-none border-gray-400 w-4/5 border-[1px] rounded text-sm py-1 px-2 bg-transparent" type='text' placeholder='design,dev,etc.'/>
        </div>
        </div>
       
        <div className='w-2/5 flex-cols items-start '>
            <h3 className='text-sm text-gray-300 mb-1'>Description</h3>
        <textarea 
        value={taskdescription}
        onChange={(e)=>{
          setTaskdescription(e.target.value)
        }}
        className=" text-gray-700 outline-none border-gray-400 w-4/5 border-[1px] rounded h-44 text-sm py-2 px-4 bg-transparent" name="" cols={40} rows={5} id=""/>
      
       

        <button className='bg-emerald-600 mt-2 hover:bg-emerald-600 py-3 rounded-xl mt-4 w-4/5 px-5 rounded text-sm'>Create task</button>
      </div>
      </form>
      </div>
    </div>
  )
}

export default Createtask
