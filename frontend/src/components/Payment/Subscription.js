import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/user-context'

function Subscription() {
   const [total,setTotal] = useState(0)
   const [startDate,setStartDate] = useState(null)
   const [endDate,setEndDate]  = useState(null)
   const [one,setOne] = useState(false)
   const [all,setAll] = useState(false)
   const [doPay,setDoPay] = useState(false)
   const [home,setHome] = useState(false)

   const {uemail} = useContext(UserContext)
   const navigate = useNavigate()
   
  
    useEffect(()=>{
      const getpaidUsers = async ()=>{
        await axios.get("http://localhost:8080/admission")
        .then((response)=>{
        response.data.map((user)=>{
          let i = response.data.length;
          while(i>0)
          {
               if(uemail === user.email)
               {
                 setEndDate(new Date(user.endDate))
                 setStartDate(user.startDate)
                 let months = new Date(user.endDate).getMonth()-new Date(user.startDate).getMonth()
                 let years  = new Date(user.endDate).getFullYear() - new Date(user.startDate).getFullYear()
                 console.log((months+ 12 * years+1)*500)
                 setTotal((months+ (12 * years)+1)*500)
                 
                 break;
               }
               i--;
          }
        })
        
        })
      }
      getpaidUsers()
    },[])
    const payHandler = ()=>{
      const userpay = async()=>{
        await axios.post('http://localhost:8080/successPayment',{email:uemail,startDate:startDate,endDate:endDate,balance:total})
        .then((response)=>{
          console.log(response)
          setDoPay(true)
        })
      }
      const delay = ()=>{
        setTimeout(()=>{
          navigate('/profile')
        },3000)
      }
      delay()
      userpay()
      
  }   
  const cancelHandler = ()=>{
    navigate('/')
   }
  return (
    <div>
         <h1>Total Amount is {total}</h1>
         <button type='submit' onClick={payHandler}>Pay</button>
         <button type='submit' onClick={cancelHandler}>cancel</button>
         {doPay && <h1>do not refresh...</h1>}
         {doPay && <h1>Payment successfull.......</h1> }
         {doPay && <h1>redirect to profile</h1> }    
    </div>
  )
}

export default Subscription