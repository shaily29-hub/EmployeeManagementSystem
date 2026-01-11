import React from 'react'
import Header from '../others/Header'
import Tasklistnumbers from '../others/Tasklistnumbers'
import Tasklist from '../tasklist/Tasklist'

const EmployeeDashboard = (props) => {
  // console.log(data)
  return (
    <div className='p-10 h-screen bg-[#1C1C1C]'>
      <Header changeUser={props.changeUser} data={props.data}/>
      <Tasklistnumbers data={props.data}/>
      <Tasklist data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
