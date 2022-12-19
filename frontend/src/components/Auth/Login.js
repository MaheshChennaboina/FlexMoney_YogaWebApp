/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-lone-blocks */
import React, { useContext, useEffect } from 'react'
import {useState} from 'react'
import reg from '../../CSS/register.module.css'
import yoga from '../../Img/girlYoga.jpg'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {UserContext} from '../../context/user-context'
function Login(props) {
    const [userLogin,setUserlogin] = useState({emaill:"",password:""})
    const [islogin, setIslogin] = useState(false)
    const [message,setMessage] = useState("")
    const [info,setInfo] = useState(false)

    const {userLoginStatus} = useContext(UserContext)
    const {userEmail} = useContext(UserContext)
    
    // const [message,setMessage]  = useState("")
    // const [loginStatus,setLoginStatus] = useState("")



      
   const navigate = useNavigate()
   Axios.defaults.withCredentials = true


    const changeHandler = (e)=>{
        setUserlogin((prev)=>({...prev,[e.target.name]:[e.target.value]}))
    }
    const formHandler = async (e)=>
    {
        e.preventDefault()
        await Axios.post("http://localhost:8080/login",userLogin).then((response)=>{
          if(response.data[0].name)
          {
            console.log("successfull login")
            setIslogin(true)
            userLoginStatus(true)
            userEmail(response.data[0].emaill)
            navigate('/')
          }
          else if(response.data === "user doesn't exist")
          {
            
            userEmail("")
            setIslogin(false)
            userLoginStatus(false)
            setInfo(true)
            setMessage("User Doesn't Exist")
            console.log(response)
          }
          else
          {
            setInfo(true)
            setMessage("Enter Wrong Password")
          }
        }) 
    }

    useEffect(()=>{
        const fetchLogin = async ()=>
        {
          await Axios.get('http://localhost:8080/login').then((response)=>{
            if(response.data.loggedIn)
            {
                setIslogin(response.data.loggedIn)

            }
            else
            {
                console.log(`response is ${response.data.loggedIn}`)
            }
          })
        }
        fetchLogin()
    },[islogin])

  
  return (
    <>
    <div className={reg.slide}>
       <img src={yoga} alt="Yoga_picture"  width='600px'height='600px' className={reg.image}></img>
        <form onSubmit={formHandler} className={reg.level}>
            <label>Email</label>
            <input type="email" required onChange={changeHandler}  name = "emaill" className={reg.value}/>
            <label>Password</label>
            <input type="password" required onChange={changeHandler} name="password" className={reg.value}/>
            <button type='submit' className={reg.btn}>Login</button>
            {info && (<p style={{color:"red",fontSize:"1rem"}}>{message}</p>)}
        </form>
    </div>
    </>
    
  )
}

export default Login