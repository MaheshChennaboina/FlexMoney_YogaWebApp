/* eslint-disable no-lone-blocks */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import book from '../../CSS/bookSlot.module.css'
import { UserContext } from '../../context/user-context'
import { useContext } from 'react'
import RealUser from '../Display/RealUser'
import { Link,Navigate,Route,Routes ,useNavigate } from 'react-router-dom'

function BookSlot(props) {
    const [startDate,setStartDate] = useState(null)
    const [endDate,setEndDate] = useState(null)
    const[paidUsers,setPaidUsers] = useState({
    age:18,startDate:null,endDate: null,batch:0
});

   const {login} = useContext(UserContext)
   const {uemail} = useContext(UserContext)
   const [isSumbit,setIsSubmit] = useState(false)
   const [paiduser,setPaidUser] = useState(false)
   const navigate = useNavigate()

    const changeHandler = (e)=>{
        setPaidUsers((prev)=>({...prev,[e.target.name]:[e.target.value]}))
        if(e.target.name === "startDate")
        {
            setStartDate(e.target.value)
        }
        if(e.target.name === "endDate")
        {
            setEndDate(e.target.value)
        }
    }
    const submitHandler = (e)=>{
           console.log("tetsing.....SubmitHandler")
            e.preventDefault()
            const finalUserData = {...paidUsers,email:uemail}
            const postUserDetails = async ()=>{
                await axios.post('http://localhost:8080/admissionForm',finalUserData)
                .then((response)=>{
                    console.log("user details submitted....")
                    console.log(response)
                    setIsSubmit(true)
                })
            }
            postUserDetails()
            navigate('/paymentDetails')
    }
    useEffect(()=>{
        const checkDate = async ()=>{
            await axios.get("http://localhost:8080/successPayment")
            .then((response)=>{
                response.data.map((user)=>{
                    if(user.email === uemail)
                    {
                        const date = new Date();
                        const start = new Date(user.startDate);
                        const end = new Date(user.endDate);
                    
                        if (date >= start && date <= end) 
                        {
                            setPaidUser(true);
                        } 
                        else 
                        {
                            setPaidUser(false);
                        }
                        
                    }
                })
            })
        }
        checkDate()
    },[])
  return (
      <div>
        {login && paiduser ? <div><h1>You Have premium membership</h1></div> :(login ?(<div className= {book.page} >
        <form className={book.outer} onSubmit={submitHandler}>
            <div className={book.booking}>
            <label>Age</label>
            <input type="number" name='age'  required onChange={changeHandler}/>
            <label>startDate</label>
            <input type="date" name='startDate'required  onChange={changeHandler}/>
            <label>EndDate</label>
            <input type="date" name='endDate'  required onChange={changeHandler}/>
            <label>Batch</label>
            <select name="batch" onChange={changeHandler} required>
                    <option value={1} >6-7AM</option>
                    <option value={2} >7-8AM</option>
                    <option  value={3} >8-9AM</option>
                    <option  value={4} >5-6PM</option>
            </select>
            <button type='submit'>Confirm</button>
            </div>
        </form>
    </div>):(<RealUser></RealUser>))}
    </div>
  )
}

export default BookSlot