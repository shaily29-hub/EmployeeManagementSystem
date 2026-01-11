import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/Localstorage';

export const Authcontext=createContext()
const AuthProvider = ({children}) => {
  // localStorage.clear()
    const [userdata, setUserdata] = useState(null)
const data=getLocalStorage();
// console.log(data)
    useEffect(() => {
      setLocalStorage()
    const{employees,admin}=getLocalStorage()
        setUserdata(employees)
     
    }, [])
    
  return (
    <div>
      <Authcontext.Provider value={[userdata,setUserdata]}>
        {children}
      </Authcontext.Provider>
    </div>
  )
}

export default AuthProvider
