import React from 'react'
import './Navbar.scss'
// import { Link } from "react-router-dom";
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

function Navbar() {
  return (
    <nav>
    <div className="logo">
      <img src="/image (2) (1).png" alt="august." />
    </div>

    <ul>
      <li><a className="active" href="">home</a></li>
      <li><a href="">services</a></li>
      <li><a href="">projects</a></li>
      <li><a href="">contact</a></li>
     
    </ul>
    <div><MenuRoundedIcon className='menuIcon'/></div>

  </nav>

  )
}

export default Navbar