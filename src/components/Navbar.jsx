import React from 'react';
import '../styles/Navbar.css'
import fitsible from '../images/fitsible.png'
import logoname from '../images/logoname.png'
import profile_pic from '../images/profile_pic.png'
import { useUserContext } from './UserContext';
import { IoTimerOutline } from "react-icons/io5";


function Navbar(props) {
  const { indianTime,user }=  useUserContext()
  const handleExercise=()=>{
    props.setExercise(true)
    props.setFoodPlan(false)
    props.setDailyHabbit(false)
  }
  const handleFoodPlan=()=>{
    props.setExercise(false)
    props.setFoodPlan(true)
    props.setDailyHabbit(false)
  }
  const handleDailyHabbit=()=>{
    props.setExercise(false)
    props.setFoodPlan(false)
    props.setDailyHabbit(true)
  }
  
  return (
    <div className='navbar_main' >
      <div  className='navbar_main_2' >
        <img className='fitsile_logo' src={fitsible} alt="" /><img className='logo_name' src={logoname} alt="" />
      <span onClick={handleExercise} className={`exercise ${props.exercise?"true":""}`} >Exercise</span>
            <span onClick={handleFoodPlan} className={`foodPlan ${props.foodPlan?"true":""}`}  >FoodPlan</span>
          
            <span onClick={handleDailyHabbit} className={`dailyHabbit ${props.dailyHabbit?"true":""}`}  >DailyHabbit</span>
      </div>
      <div  className='navbar_main_3'>
      <IoTimerOutline className='clock_icon' /><p>{indianTime}</p><img className='profile_picture' src={profile_pic} alt="" /><h5>{user.name}</h5>
      </div>
        </div>
      
          
        
   
  );
}

export default Navbar;