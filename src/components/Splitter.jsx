import React from 'react'
import { useUserContext } from './UserContext';
import Exercise1 from './Exercise1';
import Exercise3 from './Exercise3';
import Exercise4 from './Exercise4';
import Exercise2 from './Exercise2';

function Splitter() {
    const { exercise1,exercise2,exercise3,exercise4 }=useUserContext()
  return (
    <div className='splitter' >
        {exercise1?<Exercise1/>:null}
        {exercise2?<Exercise2/>:null}
        {exercise3?<Exercise3/>:null}
        {exercise4?<Exercise4/>:null}

    </div>
  )
}

export default Splitter