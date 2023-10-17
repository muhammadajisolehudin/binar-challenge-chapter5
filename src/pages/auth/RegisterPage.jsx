import React, { useEffect, useState } from 'react'
import { useCreateUser, RegisterUser } from '../../services/auth/register_user'
import { useNavigate } from 'react-router-dom'
export const RegisterPage = () => {
  
    // const [Movie, setMovie] = useState([])
    const navigate = useNavigate()
    const [Name, setName] = useState()
    const [Lastname, setLastname] = useState()
    const [Password, setPassword] = useState()
    const [PasswordConfirmation, setPasswordConfirmation] = useState()
    const [Email, setEmail] = useState() 

    const{mutate: RUser, isSuccess, error} = useCreateUser()

    const handleInput=(e)=>{
        if(e){
            if(e.target.id === "name"){
                setName(e.target.value)
            }
            if(e.target.id === "lastname"){
                setLastname(e.target.value)
            }
            if(e.target.id === "email"){
                setEmail(e.target.value)
            }
            if(e.target.id === "password"){
                setPassword(e.target.value)
            }
            if(e.target.id === "confirmation_password"){
                setPasswordConfirmation(e.target.value)
            }
        }
        
    }

    if (error){
        console.log (error, "ini error")
    }

    if (isSuccess){
        navigate('/')
    }

    const registerUser=()=>{
        RUser({
            
            // "firstname" : Firstname,
            "name" : Name,
            "lastname" : Lastname,
            "email" : Email,
            "password" : Password,
            "password_confirmation" : PasswordConfirmation
        })
    }


    return (
   
    <div>
        <input onChange={handleInput} id="name" type="text" className='border' placeholder='firstname' />
        <input onChange={handleInput} id="lastname" type="text" className='border' placeholder='lastname' />
        <input onChange={handleInput} id="email" type="email" className='border' placeholder='email' />
        <input onChange={handleInput} id="password" type="password" className='border' placeholder='password'/>
        <input onChange={handleInput} id="password_confirmation" type="text" className='border' placeholder='password confirmation'/>
        <button onClick={()=>{registerUser()}}> Register </button>
        {/* {console.log(Movie)} */}
    </div>
  )
}
