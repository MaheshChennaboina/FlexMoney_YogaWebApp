import './App.css';
import {Routes,Route} from 'react-router-dom'
import Subscription from './components/Payment/Subscription'
import Home from './components/Display/Home';
import Price from './components/Display/Price';
import About from './components/Display/About';
import Contact from './components/Display/Contact';
import Layout from './components/Display/Layout';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Profile from './components/Display/Profile';
import BookSlot from './components/Payment/BookSlot';
import UserContextProvider, { UserContext } from '../src/context/user-context';
import { useContext, useState } from 'react';
import UpdateBatch from './components/Display/UpdateBatch';

function App() {
  const [money,setMoney] = useState(null)
  const {uemail} = useContext(UserContext)
  const onSetMoney = (month)=>{
        console.log(`the number of months${month}`)
        setMoney(month)
  }
  return (
    <div className="App">
      <Layout ></Layout>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='price' element={<Price></Price>}></Route>
            <Route path ='/signup' element={<Register></Register>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/profile' element={<Profile></Profile>}></Route>
            <Route path="/bookSlot" element={<BookSlot onSavePayment={onSetMoney} ></BookSlot>}></Route>
            <Route path="/paymentDetails" element={<Subscription ></Subscription>}></Route>
            <Route path='/update' element={<UpdateBatch></UpdateBatch>}></Route>
        </Routes>
    </div>
  );
}

export default App;
