import React from 'react'
import Accepttask from './Accepttask'
import Newtask from './Newtask'
import Completetask from './Completetask'
import Failedtask from './Failedtask'

const Tasklist = ({data}) => {
  return (
    <div id='Tasklist' className=' overflow-x-auto  flex flex-nowrap items-center gap-5 justify-start py-5 mt-6 h-[55%] w-full'>
        {data.tasks.map((elem,idx)=> {
          if(elem.active){
            return <Accepttask key={idx} data={elem}/>
          }
          if(elem.newTask){
            return <Newtask key={idx} data={elem}/>
          }
          if(elem.completed){
            return <Completetask key={idx} data={elem}/>
          }
          if(elem.failed){
            return <Failedtask key={idx} data={elem}/>
          }

        })}
        
    </div>
  )
}

export default Tasklist
