import React from 'react'
import '../styles/Dinner.css'
import { IoTimerOutline } from "react-icons/io5";


function Dinner() {
  return (
    <div className='dinner_main_container' >
        <div className='dinner_container1' ><p>BREAKFAST</p><p>8-9.00 AM</p></div>
        <div className='dinner_container2' >
            <div className='dinner_container21' > 
              Savory Oatmeal 
            </div>
            <div className='dinner_container22' >
                <li className='dinnerdot1' ></li><p>10% Carbon</p><li  className='dinnerdot2' ></li><p>20% protein</p>
            </div>
        </div>
        <div className='eat_healthy' >
        <IoTimerOutline />Eat Healthy Foods On Time
        <p>your Next Schedule at 12PM</p>
        </div>
    </div>
  )
}

export default Dinner