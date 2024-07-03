import React from 'react'
import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className={style.navbar}>
        <ul>
            <li>
              <NavLink to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/news">
                News
              </NavLink>
            </li>
            <li>
              <NavLink to="/reviews">
                Reviews
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                About us
              </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar