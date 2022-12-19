import React, { useContext, useEffect, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { UserContext } from '../../context/user-context'
import axios from 'axios'
import update from '../../CSS/updateBatch.module.css'

function UpdateBatch() {
    const [ubatch,setUBatch] = useState()
    const [batch,setBatch] = useState()
  

    const {already} = useContext(UserContext)
    const {uemail} = useContext(UserContext)

    const navigate = useNavigate()

    useEffect(()=>{
        async function profileDisplay() {
            await axios.get("http://localhost:8080/batchandpaid").then((response)=>{
              response.data.map((user)=>{
                  if(uemail === user.email)
                  {
                    setBatch(user.batch)
                  }
              })
            })
          }
          profileDisplay()
    },[])
    const updateSubmitHandler = (e)=>{
        e.preventDefault()
        console.log(already)
        const updateBatch = async()=>{
            await axios.post('http://localhost:8080/update',{email:uemail,batch:batch,ubatch:ubatch}).then((response)=>{
              console.log(response)
            })
        }    
        updateBatch()
        setTimeout(()=>{
            navigate('/')
        },1000)
    }
    const changeHandler =(e)=>{
            setUBatch(e.target.value)
    }
  return (
    <div className={update.box}>
        <h3>Update The Batch-Id</h3>
        <h4><span style={{color:"red"}}>Note:</span>  It will active from next month</h4>
        <form onSubmit={updateSubmitHandler}>
          <label>Batch</label>
            <select name="batch" onChange={changeHandler} required>
                    <option value={1} >6-7AM</option>
                    <option value= {2} >7-8AM</option>
                    <option  value={3} >8-9AM</option>
                    <option  value={4} >5-6PM</option>
            </select>
            <button type='submit'>submit</button>
            <button type='button'><Link to='/profile' style={{textDecoration:'none',color:"#fff"}}>back</Link></button>
          </form>
    </div>
  )
}

export default UpdateBatch