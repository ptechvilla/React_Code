import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Routing/navbar.css'



const Contact_us = () => {
  return (
    <>
      <div class="nav">
        <ul>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
          <li>
            <NavLink to="/contact_us">contact_us</NavLink>
          </li>
          <li>
            <NavLink to="/services">services</NavLink>
          </li>
          <li>
            <NavLink to="/user">user</NavLink>
          </li>
        </ul>
      </div>
      <h1>This is contact_us component</h1>

    </>
  )
}
export default Contact_us;
