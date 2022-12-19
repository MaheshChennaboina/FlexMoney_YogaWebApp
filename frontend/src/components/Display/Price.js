import React from 'react'
import price from '../../CSS/priceCard.module.css'
import { Link } from 'react-router-dom'

function Price() {
  return (
    <div className={price.outer}>
      <div>
      <h1 className={price.title}>Mega Deal Of The Month</h1>
      <h2 className={price.money}>₹500<span className={price.perMonth}>/month</span></h2>
      <ul className={price.order_list}>
        <li className={price.list}>☑ Flexible Timings</li>
        <li className={price.list}>☑ Affordable Price</li>
        {/* <li className={price.list}>☑ Above 10000 users</li> */}
        <li className={price.list}>☑ Experienced Mentors</li>
        <li className={price.list}>☑ Available Recorded Videos</li>
      </ul>
      <button type='button' className={price.btn}><Link to='/bookSlot' className={price.sale}>book Your Slot</Link></button>
      </div>
    </div>
  )
}

export default Price