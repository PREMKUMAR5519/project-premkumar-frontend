import React from 'react'

function FoodplanShort(props) {
  return (
    <div className='foodplan_short_main' >
        <div  className='foodplan_short_main1'>
            <img src={props.image} alt="" />

        </div>
        <div  className='foodplan_short_main2' >
            {props.foodName}
            <p className='fruits_nutretion' >{props.nutretion}</p>

        </div>
    </div>
  )
}

export default FoodplanShort