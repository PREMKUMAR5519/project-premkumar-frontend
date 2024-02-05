import React, { useEffect, useState } from 'react'
import '../styles/ExistingUser.css'
import Navbar from './Navbar'
import SideBar from './Sidebar'
import Exercise from './Exercise'
import FoodPlan from './FoodPlan'
import Dailyhabbit from './DailyHabbit'
import PieChart from './PieChart'
import { useUserContext } from './UserContext';
import Card from './Card'
import DailyTask from './DailyTask'
import backsmall from '../images/backsmall.jpg'
import { string } from 'yup'
import LogOut from './Logout'
import axios from 'axios'
import Settings from './Settings'



function ExistingUser() {
  const [exercise,setExercise] = useState(true)
  const [foodPlan,setFoodPlan] = useState(false)
  const [dailyHabbit,setDailyHabbit] = useState(false)
  const [setting,setSetting]=useState(false)
  const { percentage,completion,user,setAge,setWeight,setHeight,setGender }=useUserContext()
  useEffect(() => {
    const  checking =async()=>{
      const res = await axios.get(`http://localhost:3000/personalDetails/${user.id}`)
      const data = res.data[0]
      setAge(data.age)
      setWeight(data.weight)
      setHeight(data.height)
      setGender(data.gender)
    }
    checking()
  }, []);

 
  const mass=JSON.stringify(user)


  return (
    <div className='existinguser_main_divmain' >

      {mass.length>5?(
      <div className='existinguser_main_div' >
        <div className='existinguser_main_div_1' >
      <SideBar setSetting={setSetting} setting={setting} exercise={exercise} setExercise={setExercise} foodPlan={foodPlan}  setFoodPlan={setFoodPlan} setDailyHabbit={setDailyHabbit}/>
      </div>

      <div className='existinguser_main_div_2' >

        <div className='existinguser_main_div_2_1'  >
        <Navbar exercise={exercise} setExercise={setExercise} foodPlan={foodPlan} setFoodPlan={setFoodPlan} dailyHabbit={dailyHabbit} setDailyHabbit={setDailyHabbit} />
    
        </div>
        <div className='existinguser_main_div_2_2'  >

          <div className='existinguser_main_div_2_21' >

          {exercise?<Exercise setExercise={setExercise} foodPlan={foodPlan}  setFoodPlan={setFoodPlan}  />:null}
          {foodPlan?<FoodPlan/>:null}
          {dailyHabbit?<Dailyhabbit/>:null}


          </div>
          <div className='existinguser_main_div_2_22' >
            <div className='existinguser_main_div_2_22_1' >
              <h3>Daily Task</h3>
             <PieChart percentage={percentage} />
            <p>completed</p>

            </div>
            <div className='existinguser_main_div_2_22_2' >
              <div className='existinguser_main_div_2_22_21' >

                <DailyTask/>
              </div>
              <div className='existinguser_main_div_2_22_22'>
                <h5>workout completed</h5>
                <p>day by day motivate yourself!</p>
                <div className="progress">
  <div className="progress-bar bg-success" role="progressbar" style={{width:`${completion}%`}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<h4>{completion}%</h4>

              </div>

            </div>
            

          </div>
    
      
        </div>
        
      </div>
      </div>):(<LogOut/>)}
      {setting?<Settings setSetting={setSetting} setting={setting} />:null}
      </div>
  )
}

export default ExistingUser