/* eslint-disable no-lone-blocks */
/* eslint-disable array-callback-return */
import React, { useEffect } from 'react'
import {useState} from 'react'
import reg from '../../CSS/register.module.css'
import yoga from '../../Img/girlYoga.jpg'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

function Register() {

    const navigate = useNavigate()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword]= useState("")
    const [message,setMessage] = useState("")
    const [passlength,setPassLength] = useState('')
    const [count,setCount] = useState(false)
    const [user,setUser] = useState({name:" ",phone:""})
    const [signup,setSignUp] = useState([])
    const changeHandler = (e)=>{
         setUser((prev)=>({...prev,[e.target.name]:[e.target.value]}))

    }    
    axios.defaults.withCredentials = true
    useEffect(()=>{
        const validEmail = async()=>{
            await axios.get("http://localhost:8080/")
            .then((response)=>{
                    response.data.map((user)=>{
                            <div key={user.id}>
                            {setSignUp((prev)=>([...prev,user.emaill]))}
                            </div>
                    })
            })

            
        }
        const reloadPassword = ()=>{
            setCount(false)
        }
        const checking =()=>{
            signup.map((user)=>{
                <div key={user.id}>
                   {(user === email) && setCount(true)}
                </div>
            })
            console.log(`the checking value of ${count} and mail id:${email}`)
         }
        reloadPassword()
        validEmail()
        checking()
    },[password])

    const submitHandler = (e)=>
    {
     e.preventDefault()
     const checkingPassword = ()=>{
        {password === confirmPassword&&setPassLength(true)}
        {password !== confirmPassword&&setPassLength(false)}                
     }
     const finalValues = ()=>
     {
        console.log(`final count:${count}`)
        console.log(`final passwaord:${passlength}`)
     }
     const postUser = async()=>{
        await axios.post("http://localhost:8080/signup",{...user,emaill:email,password:password}).then((response)=>{
            console.log('inside the postuser')
            console.log("inside the ")
            navigate('/login')
        })
    }
    const something = ()=>
    {
        setPassword("")
        setEmail("")
        setCount(false)
        console.log("May be user already exists and different password length ")
    }
    
    const activity = ()=>{
        console.log(`activity count:${count}`)
        console.log(`activity password:${passlength}`)
        // {count?something():(passlength?postUser():something())}
        count?something():postUser()

    }
   finalValues()
   checkingPassword()
   finalValues()
   activity()
  
    
    
    
}
    const emailHandler = (e)=>
    {
       setEmail(e.target.value)
       console.log(email)
       
    }
    const passwordHandler = (e)=>{
        setPassword(e.target.value)
        
    }   
    // const ConfirmPasswordHandler = (e)=>{
    //         setConfirmPassword(e.target.value)
    // }   
  return (
    
   <div>
    
    <div className={reg.slide}>
       <img src={yoga} alt="Yoga_picture" width='600px'height='600px' className={reg.image}></img>
        <form onSubmit={submitHandler} className={reg.level}>
            <label>Name</label>
            <input type="text"   name="name" required onChange={changeHandler} className={reg.value}/>
            <label>Email</label>
            <input type="email"  name="email" required value={email} onChange={emailHandler} className={reg.value}/>
            <label>Phone</label>
            <input type="text"  name="phone" required onChange={changeHandler} className={reg.value}/>
            <label>Password</label>
            <input type="password"  name="password"  required value={password} onChange={passwordHandler} className={reg.value}/>
            {/* <label>Confirm Password</label>
            <input type="password"  name="password" onChange={ConfirmPasswordHandler} className={reg.value}/>*/
            <button type='submit' className={reg.btn}>Signup</button> }
            {count && <p style={{color:"red",fontSize:"1rem"}}>User already exists</p>}
        </form>
    </div>
   </div>
  )
}

export default Register