import React from 'react'
import exercise1 from '../images/exercise1.png'
import exercise2 from '../images/exercise2.png'
import DailyTask from './DailyTask'
import Card from './Card'
import FoodPlan from './FoodPlan'
import fruits from  '../images/fruits.jpg'
import dryfruits from  '../images/dryfruits.jpg'
import bread from  '../images/bread.jpg'
import vegetables from  '../images/vegetables.jpg'
import FoodplanShort from './FoodplanShort'
import Time from './Time'
import Dinner from './Dinner'
import BreakFast from './BreakFast'
import Lunch from './Lunch'
import NextSchedule from './NextSchedule'
import { useUserContext } from './UserContext';


function Exercise(props) {
  const { hours,user } = useUserContext()
  const handleClick=()=>{
    props.setFoodPlan(true)
    props.setExercise(false)
  }
  return (

    <div className='exercise_main_container' >
      <div className='exercise_main_container_1'  >
        <div className='exercise_main_container_11' >
          <div className='exercise_main_container_11_1' >
            <h1 className='exercise_username' >WELCOME! {user.name}</h1>
            <p className='exercise_quotes' >Plan your Days To be more Active,Finish the task day by day</p>
          </div>
          <div className='exercise_main_container_11_2' >
            <img className='img_exercise1' src={exercise1} alt="" />
            <img className='img_exercise2' src={exercise2} alt="" />
          </div>
        </div>
      </div>
      <div className='exercise_main_bottom_container' >
          <div className='exercise_main_bottom_container_1' >
            <div className='exercise_main_bottom_container_1_1' >Exercise

            </div>
            <div className='exercise_main_bottom_container_1_2' >
              <Card></Card>

            </div>
          </div>
          <div className='exercise_main_bottom_container_2' >
            <div className='exercise_main_bottom_container_21' >
              <p>FOOD PLAN</p>
              <Time/>
              
              <section  className='exercise_main_bottom_container_211' >

              <FoodplanShort image={fruits} foodName="Fruits" nutretion="Blackberries – 1.4g per 100g"  />
              <FoodplanShort image={vegetables} foodName="vegetables" nutretion="sweetpotato- Vitamin C-4%	Calcium-3%" />
              <FoodplanShort image={dryfruits} foodName="dryfruits" nutretion="Dates -2.5g per 100g"  />
              <FoodplanShort image={bread} foodName="bread" nutretion="bread with peanut butter 10g protein per 32g" />
              <button className='seemorebutton' onClick={handleClick}  >See more</button>
              </section>
              

            </div>
            <div  className='exercise_main_bottom_container_22' >
              <div className='exercise_main_bottom_container_22_1' >
                {hours === "breakfast"?<BreakFast/>:null}
                {hours === "lunch"?<Lunch/>:null}
                {hours === "dinner"?<Dinner/>:null}
                {hours === 'nextshedule'?<NextSchedule/>:null}

              </div>

            </div>

          </div>

        </div>

    </div>
  )
}

export default Exercise