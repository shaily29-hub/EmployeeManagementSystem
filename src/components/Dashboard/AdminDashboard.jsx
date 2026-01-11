import React from 'react'
import Header from '../others/Header'
import Createtask from '../others/Createtask'
import Alltask from '../others/Alltask'

const AdminDashboard = (props) => {
  return (
    <div id='Admin' className='w-full min-h-screen y-10 h-screen p-7'>
      <Header changeUser={props.changeUser}/>
   <Createtask/>
   <Alltask/>
    </div>
  )
}

export default AdminDashboard
