import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Menu from './Pages/Menu/Menu.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Cart from './Pages/Cart/Cart.jsx';
import SignUp from './Component/Sign Up/SignUp.jsx'

const App = () => {
  return (
  
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path ='/menu' element= {<Menu/>} />
      <Route path='/about' element={<About />} />
      <Route path ='/contact' element= {<Contact/>} />
      <Route path ='/cart' element= {<Cart/>} />
      <Route path='/login' element = {<Home />} />
      <Route path='/signup' element = {<SignUp />} />
      
    </Routes>
   
  )
}
export default App