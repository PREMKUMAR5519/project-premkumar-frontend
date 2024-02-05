import React from 'react'
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { useUserContext } from './UserContext';
import { MdCancel } from "react-icons/md";

function Settings(props) {
  const { user,email,age,weight,height,gender } = useUserContext()
  const handleClick=()=>{
    props.setSetting(!props.setting)
   }
  return (
    <div className='personalinfo_main' >
      <div className='personalinfo_main0' >
        <div className='personalinfo_main0_button' >
      <button onClick={handleClick} ><MdCancel /></button>
      </div>
      <div className='personalinfo_main1' >
      <h4>Personal Details</h4>
        <div  className='personalinfo_main1_1' >
            <p>Name</p><h6>{user.name}</h6>
        </div>
        <div  className='personalinfo_main1_1' >
            <p>Age</p><h6>{age}</h6>
        </div>
        <div  className='personalinfo_main1_1' >
            <p>Weight</p><h6>{weight}Kg</h6>
        </div>
        <div  className='personalinfo_main1_1' >
            <p>Height</p><h6>{height}cm</h6>
        </div>
        <div  className='personalinfo_main1_1' >
            <p>email</p><h6>{email}</h6>
        </div>
        <div className='gender' >
          <div className={`male ${gender==="male"?"true":''}`}>
          <FaMale /> Male
          </div>
          <div className={`male ${gender==="female"?"true":''}`} >
          <FaFemale /> Female

          </div>
        </div>

      </div>
     

      </div>
    </div>
  )
}

export default Settings