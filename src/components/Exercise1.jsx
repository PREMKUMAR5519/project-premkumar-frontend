import React from 'react'
import { useState } from 'react';
import { useUserContext } from './UserContext';
import { FaArrowLeft } from "react-icons/fa";
import exercise1_1 from '../images/exercise1_1.jpeg'
import exercise1_2 from '../images/exercise1_2.jpeg'
import exercise1_3 from '../images/exercise1_3.jpeg'
import exercise1_4 from '../images/exercise1_4.jpeg'
import { ToastContainer, toast } from 'react-toastify';
function Exercise1() {
    const { setExercise1,setCard,exercise1,setCompletion,completion }=useUserContext()
    const [button,setButton]=useState(true)
    const handleClick=()=>{
    setExercise1(false)
    setCard(true)

 }
 const handleButtonClick=()=>{
    if (button) {
      setCompletion(completion+25)
      setButton(false)
    }else{
    toast("Finished",{position: "top-right",
    autoClose: 500})}
  }

  return (
    <div className='exercise1_main' >
        <div className='exercise1_1'  >
            <button onClick={handleClick} ><FaArrowLeft /></button>
        </div>
        <div className={`exercise1_2 ${exercise1?"active":" "}`} >
            <div className='exercise1_21' >
                <img src={exercise1_1} alt="" />
            </div>
            <div className='exercise_22' >
            <h3>JUMPING JACKS</h3>
            <p>00:30</p>
            </div>
        </div>
        <div className='exercise1_2'  >
            <div className='exercise1_21' >
                <img src={exercise1_2} alt="" />
            </div>
            <div className='exercise_22' >
            <h3>INCLINE PUSH-UPS</h3>
            <p>x6</p>
            </div>
        </div>
        <div className='exercise1_2'  >
            <div className='exercise1_21' >
                <img src={exercise1_3} alt="" />
            </div>
            <div className='exercise_22' >
            <h3>PUSH-UPS</h3>
            <p>x4</p>
            </div>
        </div>
        <div className='exercise1_2'  >
            <div className='exercise1_21' >
                <img src={exercise1_4} alt="" />
            </div>
            <div className='exercise_22' >
            <h3>WIDE ARM PUSH-UPS</h3>
            <p>x6</p>
            </div>
        </div>
        <div className='button_div_exercise1' >
    <button  onClick={handleButtonClick} >Finish</button>
    </div>
    </div>
  )
}

export default Exercise1