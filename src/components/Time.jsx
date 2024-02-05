import React, { useState, useEffect } from 'react';
import { useUserContext } from './UserContext';

const Time = () => {
    const { hours }=  useUserContext()
    const { setHours }=  useUserContext()
    const { indianTime }=  useUserContext()
    const { setIndianTime }=  useUserContext()
    const [timer,setTimer]=useState('')


  useEffect(() => {
    const updateIndianTime = () => {
      const options1 = {
        timeZone: 'Asia/Kolkata', // Indian Standard Time (IST)
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
        second:'numeric',
      };
      const options2 = {
        timeZone: 'Asia/Kolkata', // Indian Standard Time (IST)
        hour12: false,
        hour: 'numeric',
      };
      const now = new Date();
      const indianTimeString = now.toLocaleTimeString('en-US', options1);
      const indian= now.toLocaleTimeString('en-US', options2);
      setIndianTime(indianTimeString);
      setTimer(indian)
     

    };

    const intervalId = setInterval(updateIndianTime, 1000);
  

    return () => clearInterval(intervalId);
   

  
  }, []);
  const validation=()=>{
    if (timer>=8 && timer<=11) {
      setHours("breakfast")
      
    }

  
     if(timer>=20 && timer<=23){
      setHours("dinner")

  
     } 
     if(timer>=12 && timer<=19){
      setHours("lunch")
  
     } 
  
  }
  return (
    <div>
      {validation()
}
    </div>
  );
};

export default Time;