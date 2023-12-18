import React from 'react'
import {BrowserRouter as Router ,Routes,Route,Link,NavLink} from 'react-router-dom'
import Home from '../Home/Home'
import Contact from '../Contact/Contact'
import About from '../About/About'
import "./Navbar.css"



const Navbar = () => {
  return (
    <>
      <Router>
           <div className='Nav-Bar'>
            <NavLink 
            to="/Home" className="Nav-Menu">
                Home
            </NavLink>
            <NavLink 
            to="/About" className="Nav-Menu">
                Student
            </NavLink>
            <NavLink
            to="/Contact" className="Nav-Menu"
            >
                Contact
            </NavLink>
           </div>

           <Routes>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
           </Routes>
       

      </Router>
    </>
  )
}

export default Navbar
