import React from 'react'
import '../styles/Dinner.css'
import { IoTimerOutline } from "react-icons/io5";


function Dinner() {
  return (
    <div className='dinner_main_container' >
        <div className='dinner_container1' ><p>LUNCH</p><p>12-1.00 PM</p></div>
        <div className='dinner_container2' >
            <div className='dinner_container21' >
            Rice with chicken
            </div>
            <div className='dinner_container22' >
                <li className='dinnerdot1' ></li><h6>7% Carbon</h6><li  className='dinnerdot2' ></li><h6>27% protein</h6>
            </div>
        </div>
        <div className='eat_healthy' >
        <IoTimerOutline />Eat Healthy Foods On Time
        <p>your Next Schedule at 8 PM</p>
        </div>
    </div>
  )
}

export default Dinner