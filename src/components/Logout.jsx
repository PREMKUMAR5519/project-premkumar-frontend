import React, { useState } from 'react'
import {useUserContext} from './UserContext'
import { useNavigate } from 'react-router-dom'

function LogOut() {
     const {logout}= useUserContext()
     const navigateTo = useNavigate()
    const handleLogOut=()=>{
        logout();
        navigateTo('/')
    }
  setTimeout(handleLogOut,3000)
  
  return (
    <div style={{display:'flex', flexDirection:'column', height:"100vh",width:"100vw", alignItems:"center",justifyContent:"center"}}  >
        Sorry,you Have logged out
        <p>redirect in 3 sec</p>
    </div>
  )
}

export default LogOut