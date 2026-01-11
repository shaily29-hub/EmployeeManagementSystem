import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/Localstorage'
import { Authcontext } from './context/AuthProvider'

const App = () => {
  useEffect(() => {
   setLocalStorage()
  getLocalStorage()
  },)
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userdata,setUserdata]=useContext(Authcontext)
  useEffect(()=>{
    const loggedInUser=localStorage.getItem('loggedinuser')
    if(loggedInUser){
      const userData=JSON.parse(loggedInUser)
      setUser(userData.role)
  setLoggedInUserData(userData.data)
    }
  },[])
  // console.log(authData.employees)
  // useEffect(() => {
   
  //   if(authData){
  //     const loggedinuser=localStorage.getItem("loggedinuser")
  //     if(loggedinuser){
  //       setUser(loggedinuser.role)
  //     }
  //   }
  // }, [authData])
  
  const handleLogin=(email,password)=>{
    if(email=='admin@me.com' && password=='123'){
      setUser('admin')
      localStorage.setItem('loggedinuser',JSON.stringify({role:'admin'}))
      // console.log(user)
    }else if(userdata){
      const employee=userdata.find((e)=>email==e.email && e.password==password)
      if(employee){
     setUser('employee')
     setLoggedInUserData(employee)
      localStorage.setItem('loggedinuser',JSON.stringify({role:'employee',data:employee}))
      }
    // //  console.log('user')
      }
    else{
      alert("invalid credentials")
    }

  }
  
 
 return (
    <div>
        
   {!user?<Login handleLogin={handleLogin}/>:''}  
   {user=='admin' ?   <AdminDashboard changeUser={setUser}/> : (user=='employee'?<EmployeeDashboard changeUser={setUser} data={loggedInUserData}/>:null)}
 
   {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
      
       </div>
  )
}

export default App
