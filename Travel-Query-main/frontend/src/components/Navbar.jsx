import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
         <nav>
      <div className="nav__logo">Vacations<span>.</span></div>
      <ul className="nav__links">
        <NavLink className={(e)=>{return e.isActive?"blue":""}} to="/"><li>Home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"blue":""}} to="/tripplanner"><li>Trip Planner</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"blue":""}} to="/translate"><li>Translate</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"blue":""}} to="/cost"><li>Cost</li></NavLink>
      </ul>
      <button className="btn">Contact Us</button>
    </nav>
    </div>
  )
}

export default Navbar