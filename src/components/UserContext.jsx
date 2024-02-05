import React ,{createContext, useState, useContext} from "react";
import axios from "axios";

const UserContext = createContext();

export const useUserContext = ()=> useContext(UserContext)

export const UserProvider = ({children})=>{
    const [user, setUser]=useState([]);
    const [data, setData] = useState([])
    const [indianTime, setIndianTime] = useState('');
    const [hours,setHours]=useState('')
    const [percentage,setPercentage]=useState(0)
    const [exercise1,setExercise1]=useState(false)
    const [exercise2,setExercise2]=useState(false)
    const [exercise3,setExercise3]=useState(false)
    const [exercise4,setExercise4]=useState(false)
    const [completion,setCompletion]=useState(0)
    const [card,setCard]=useState(true)
    const [email,setEmail]=useState('')
    const [age,setAge]=useState('')
    const [weight,setWeight]=useState('')
    const [height,setHeight]=useState('')
    const [gender,setGender]=useState('')

    const logout =()=>{
        setUser([])
        localStorage.removeItem('userTokken')
    }

    return(
        <UserContext.Provider value={{gender,setGender,age,setAge,completion,weight,setWeight,height,setHeight,setCompletion,card,setCard,setExercise1,setExercise2,setExercise3,setExercise4,exercise1,exercise2,exercise3,exercise4,user,setUser,percentage,setPercentage,logout,data,setData,indianTime,setIndianTime,hours,setHours,email,setEmail}} >
            {children}
        </UserContext.Provider>
    )
}