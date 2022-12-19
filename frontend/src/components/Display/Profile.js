import React, { useContext, useEffect, useState } from 'react'
import axios, { Axios } from 'axios'
import { UserContext } from '../../context/user-context'
import RealUser from './RealUser'
import profile from '../../CSS/profile.module.css'
import { Link } from 'react-router-dom'

function Profile() {
    const [email,setEmail] = useState("")
    const [name,setName] = useState()
    const [startDate,setStartDate] = useState(null)
    const [enDate,setEndDate] = useState(null)
    const [balance,setBalance] = useState(0)
    const [check,setCheck] = useState(false)
    const [batch,setBatch] = useState()
    const [complete,setComplete] = useState(false)
    const [update,setUpdate] = useState(false)
    const [ubid,setUbid] = useState(batch)
    const [alreadyUpdate,setAlreadyUpdate] = useState(false)

    const {uemail} = useContext(UserContext)
    const {login} = useContext(UserContext)
   
    const {subscribeHandler} = useContext(UserContext)
    const {alreadyUser} = useContext(UserContext)
    const [updateUserBatch,setUpdateUserBatch] = useState([])
    useEffect(()=>{
       async function profileDisplay() {
        await axios.get("http://localhost:8080/batchandpaid").then((response)=>{
          response.data.map((user)=>{
              if(uemail === user.email)
              {
                setBalance(user.balance)
                setStartDate(user.startDate)
                setEndDate(user.endDate)
                setEmail(email)
                subscribeHandler(true)
                setCheck(true)
                setBatch(user.batch)
                setComplete(true)
              }
          })
        })
      }
      const fetchUpdate = async()=>{
        await axios.get('http://localhost:8080/updateBatch')
        .then((response)=>{
              response.data.map((user)=>{
                <div key={user.id}>
                  {setUpdateUserBatch((prev)=>[...prev,user.email])}
                </div>
              })
        })
      }
      const editValues = ()=>{
        let editEmail = uemail
        const idx = editEmail.indexOf("@")
        setName(editEmail.slice(0,idx))
      }
      profileDisplay()
      editValues()
      fetchUpdate()
    },[])

  
  const updateHandler = ()=>{
    const checkIsEmail = ()=>
    {
      updateUserBatch.map((em)=>{
        (em === uemail?alreadyUser(true):<></>)
      })
      
    }
    const updateBatch = async()=>{
      await axios.post('http://localhost:8080/updateBatch',{email:uemail}).then((response)=>{
        console.log(response)
      })
    }
    setUpdate(true)
    checkIsEmail()
    updateBatch()
    console.log(`already value is ${alreadyUpdate}`)
    
  }
  return (
    <div>
     { (login && check) ? (<div className={profile.box}>
        {/* <div className={profile.start}>
        <h1 className={profile.title}>Welcome to YogaMantra</h1>
        </div> */}
        <div className={profile.outer_box}>
        <h1>UserName</h1>
        <h2>{name}</h2>
        <h1>Email</h1>
        <h2>{uemail}</h2>
        <div className={profile.date}>
         <div>
         <h1>StartDate</h1>
         <h2>{startDate.slice(0,startDate.indexOf('T'))}</h2>
         </div>
        <div>
         <h1>EndDate</h1>
         <h2>{enDate.slice(0,enDate.indexOf('T'))}</h2>
        </div>
        </div>
        <h1>Balance</h1>
        <h2>{balance}</h2>
        <div>
          <h2 className={profile.update}>current batch-id:{batch}<span><button type='button' onClick={updateHandler} className={profile.btn}><Link to='/update' className={profile.link}>update Batch</Link></button></span></h2>
        </div>  
        </div>
      </div>) : (login) ? (<>
        <h1>Welcome to YogaMantra</h1>
        <h1>Hi {name}</h1>
        <h1>You doesn't have premium membership</h1>
      </>): <RealUser></RealUser> }
       
    </div>
  )
}

export default Profile