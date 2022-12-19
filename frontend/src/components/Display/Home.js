import React from 'react'
import homeImage from '../../Img/fontpic.jpg'
import home from '../../CSS/home.module.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>  
      <div className={home.showcase}>
      <div>
      <h1 className={home.title}>Few <span className={home.highlight}> Your mind</span> to discover to <span className={home.highlight}>your new self</span></h1>
      <p className={home.desc} >Yoga is a mind and body practice.
       Various styles of yoga combine physical postures,
        breathing techniques, and meditation or relaxation</p>

        <div className={home.money}>
        <div className={home.permonth}>
        <h1 className={home.rupee}>500₹</h1>
        <p>per month</p>
        </div>
        <div>
        <button type='button' className={home.btn}><Link to='/bookSlot' className={home.sale}>Book <br></br>Your<br></br> Class</Link></button>   
        </div>
        </div>
       
      </div>  
      
      <img src={homeImage} alt="Yoga_picture" width='50%'></img>
      </div>

    </div>
  )
}

export default Home