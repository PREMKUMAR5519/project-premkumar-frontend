import React from 'react'
import '../styles/Dinner.css'
import { IoTimerOutline } from "react-icons/io5";


function Dinner() {
  return (
    <div className='dinner_main_container' >
        <div className='dinner_container1' ><p>Dinner</p><p>8-9.00 PM</p></div>
        <div className='dinner_container2' >
            <div className='dinner_container21' >
            One-pot soups
            </div>
            <div className='dinner_container22' >
                <li className='dinnerdot1' ></li><h6>8% Carbon</h6><li  className='dinnerdot2' ></li><p>16% protein</p>
            </div>
        </div>
        <div className='eat_healthy' >
        <IoTimerOutline />Eat Healthy Foods On Time
        <p>your Next Schedule on Tommorow morning</p>
        </div>
    </div>
  )
} 

export default Dinner