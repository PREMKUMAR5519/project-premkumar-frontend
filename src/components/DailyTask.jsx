import React, { useState } from 'react'
import { IoFootstepsSharp } from "react-icons/io5";
import { useUserContext } from './UserContext';
import { GiWaterBottle } from "react-icons/gi";
import { GiMeditation } from "react-icons/gi";




function DailyTask() { 
  const { setPercentage, percentage } = useUserContext()
  const [clicked, setClicked] = useState(false)
  const [clicked2, setClicked2] = useState(false)
  const [clicked3, setClicked3] = useState(false)
  const handleClick = () => {
    if (!clicked) {
      setPercentage(percentage + 25)
    }
    setClicked(true)

  }
  const handleClick2 = () => {
    if (!clicked2) {
      setPercentage(percentage + 35)
    }
    setClicked2(true)

  }
  const handleClick3 = () => {
    if (!clicked3) {
      setPercentage(percentage + 40)
    }
    setClicked3(true)

  }
  return (
    <div className='dailytaskmain' >
      <div className='dailytask_main_div' >
        <div onClick={handleClick} className={`dailytask_main_container ${clicked ?"clicked" : "unclicked"}`} >
          <div className='dailytask_main_container_1' >
            <h1 className='stepsIcon' ><IoFootstepsSharp /></h1>
            <div>
              <p className='count'>1200</p>
              <p className='steps' >steps</p>
            </div>
          </div>
          <div className='dailytask_completed' >
            {clicked ? "Completed" : ""}
          </div>

        </div>
        <div onClick={handleClick2} className={`dailytask_main_container ${clicked2 ? "clicked" : "unclicked"}`} >
          <div className='dailytask_main_container_1' >
            <h1 className='stepsIcon' ><GiWaterBottle /></h1>
            <div>
              <p className='count'>water</p>
              <p className='steps' >3-4lt</p>
            </div>
          </div>
          <div className='dailytask_completed' >
            {clicked2 ? "Completed" : ""}
          </div>

        </div>

      </div>
      <div className='dailytask_main_div2'>
        <div onClick={handleClick3} className={`dailytask_main_containers ${clicked3 ? "clicked" : "unclicked"}`} >
          <div className='dailytask_main_container_1' >
            <h1 className='stepsIcon' ><GiMeditation /></h1>
            <div>
              <p className='count'>Meditation</p>
              <p className='steps' >10-15 min</p>
            </div>
          </div>
          <div className='dailytask_completed' >
            {clicked3 ? "Completed" : ""}
          </div>

        </div>
      </div>
    </div>
  )
}

export default DailyTask