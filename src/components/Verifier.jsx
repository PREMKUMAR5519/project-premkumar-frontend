import React, { useEffect, useState } from 'react'
import { useUserContext } from './UserContext';
import axios from "axios";
import NewUser from './NewUser';
import ExistingUser from './ExistingUser';
import LogOut from './Logout';
import { useNavigate, Link } from 'react-router-dom'
import Loading from './Loading';
import '../styles/Verifier.css'

function Verifier() {
  const navigateTo = useNavigate()
  const { user } = useUserContext()
  const [details, setDetails]=useState()

 //code re-render when update {details}
    useEffect(() => {
      const  checking =async()=>{
        const res = await axios.get(`http://localhost:3000/personalDetails/par/${user.id}`)
        const data = res.data
        console.log(user.id)
        if (data == false) {
          navigateTo('/NewUser')
          console.log("newuser")
    
        } if(data == true) {
          navigateTo('/ExistingUser')
    
    
        }}
      checking()
    }, [details]);
 
  
  console.log("details",details)
  return (
    <div className='verifierdiv' >
      <Loading/>
    </div>
  )
}

export default Verifier