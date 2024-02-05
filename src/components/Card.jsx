import React, { useState } from 'react'
import '../styles/Card.css'
import { FaPlay } from "react-icons/fa";
import card1 from '../images/card1.jpg'
import card2 from '../images/card2.jpg'
import card4 from '../images/card4.jpg'
import card3 from '../images/card3.png'
import Splitter from './Splitter';
import { useUserContext } from './UserContext';

function Card() {
    const { setExercise1,card,setCard,setExercise2,setExercise3,setExercise4 }=useUserContext()

    const handleClick1=()=>{
        setCard(false)
        setExercise1(true)
    }
    const handleClick2=()=>{
        setCard(false)
        setExercise2(true)
    }
    const handleClick3=()=>{
        setCard(false)
        setExercise3(true)
    }
    const handleClick4=()=>{
        setCard(false) 
        setExercise4(true)
    }
    return (
        <div className='card_main' >
           {card?(<div className='card_main'>
            <div className="card">
                    <img src={card1} alt="" />
                <div className='card_1' >
                    <div className='card_11' >
                    <p>Exercise 1</p>
                     <h6>10 min</h6>
                     <h6>Recommended reps: 8-12 reps for 3-4 sets</h6>
                    </div>
                    <div className='card_12' >
                        <button onClick={handleClick1} ><FaPlay  /></button>
                    </div>
                </div>
            </div>
            <div className="card">
            <img src={card2} alt="" />
                <div className='card_1' >
                    <div className='card_11' >
                    <p>Exercise 2</p>
                     <h6>10 min</h6>
                     <h6>Recommended reps: 8-12 reps for 3-4 sets</h6>
                    </div>
                    <div className='card_12' >
                        <button onClick={handleClick2} ><FaPlay  /></button>
                    </div>
                </div>
            </div>
            <div className="card">
            <img src={card3} alt="" />
                <div className='card_1' >
                    <div className='card_11' >
                    <p>Exercise 3</p>
                     <h6>10 min</h6>
                     <h6>Recommended reps: 8-12 reps for 3-4 sets</h6>
                    </div>
                    <div className='card_12' >
                        <button onClick={handleClick3} ><FaPlay  /></button>
                    </div>
                </div>
            </div>
            <div className="card">
            <img src={card4} alt="" />
                <div className='card_1' >
                    <div className='card_11' >
                    <p>Exercise 4</p>
                     <h6>10 min</h6>
                     <h6>Recommended reps: 8-12 reps for 3-4 sets</h6>
                    </div>
                    <div className='card_12' >
                        <button onClick={handleClick4} ><FaPlay  /></button>
                    </div>
                </div>
            </div>
           </div>):<Splitter/>}
        </div>

    )
}

export default Card