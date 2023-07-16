/* eslint-disable react-hooks/exhaustive-deps */
import {Link, useNavigate} from 'react-router-dom'
import nav from '../../CSS/layout.module.css'
import axios from 'axios'
import {UserContext} from '../../context/user-context'
import { useContext } from 'react'
function Layout(props) {

  const {login} = useContext(UserContext)
  const {userLoginStatus} = useContext(UserContext)
  const {userEmail} = useContext(UserContext)
  const {subscribeHandler} = useContext(UserContext)
  const {alreadyUser} = useContext(UserContext)
  const navigate = useNavigate()
  console.log(login)

  async function logoutHandler() {
    await axios.get('https://yogamantra-backend.onrender.com/logout').then((response) => {
      userLoginStatus(false)
      userEmail("")
      subscribeHandler(false)
      alreadyUser(false)
      navigate('/')
    })
  }
  return (
    <div>
    <nav className={nav.navBar}>
      <ul className={nav.bar}>
      <li  className={[nav.list, nav.title,nav].join(' ')}><Link to = '/' className={nav.link}>YogaMantra</Link></li>
        <li className={nav.list}>
        <Link to = '/about' className={nav.anchor}>About</Link>
        </li>
        <li className={nav.list}>
        <Link to = '/contact' className={nav.anchor}>Contact</Link>
        </li>
        <li className={nav.list}>
        <Link to = '/price' className={nav.anchor}>Price</Link>
        </li>

     { !login && (<li className={nav.list}>
       <Link to = '/signup' className={[nav.anchor,nav.signup,nav.btnColor].join(' ')}>SignUp</Link>
            </li>)} 

       {!login &&(<li className={nav.list}>
        <Link to = '/login' className={[nav.anchor,nav.signup,nav.btnColor].join(' ')}>Login</Link>
        </li>)}
      {login && <li className={nav.list}>
        <Link to = '/profile' className={[nav.anchor,nav.signup,nav.btnColor].join(' ')} >Profile</Link>
        </li>}
        
      {login && <li className={nav.list}>
        <Link to = '/' className={[nav.anchor,nav.signup,nav.btnColor].join(' ')}  onClick={logoutHandler} type='button'>logout</Link>
        </li>}  

      {/* {login && <li className={nav.list}>
            <button onClick={logoutHandler} type='button'>logout</button>
        </li>} */}

      </ul>
     </nav>
     {<hr className={nav.size}></hr>}
    </div>
  )
}

export default Layout