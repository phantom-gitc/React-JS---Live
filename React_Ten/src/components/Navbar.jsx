import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div>

        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/service'}>Services</NavLink>

    </div>
  )
}

export default Navbar