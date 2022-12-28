import React from 'react'
import "./navbar.css"
import logo from '../../../assets/logo.png'

const Navbar = () => {
  return (
      <nav>
        <img  className="logo" src={logo} alt="Adi Shankara Institute of Engineering and Technology" />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Sample</li>
        </ul>
        <button type="button" className='viewmorebtn'>View More</button>
      </nav>
  )
}

export default Navbar