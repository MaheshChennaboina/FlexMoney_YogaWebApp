import React from 'react'
import { Link } from 'react-router-dom'
import real from '../../CSS/realUser.module.css'
function RealUser() {
  return (
    <div>
        <h1>Please <Link className={real.link} to='/login'>Login</Link></h1>
        <h2>Don't Have Account please <Link  className={real.link} to="/signup">signup</Link></h2>
    </div>
  )
}

export default RealUser