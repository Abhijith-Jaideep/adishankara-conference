import React from 'react'
import "./navbar.css"
import logo from '../../../assets/logo.png'
import Link from 'react-scroll/modules/components/Link'

const Navbar = () => {
  return (
      <nav>
        <img  className="logo" src={logo} alt="Adi Shankara Institute of Engineering and Technology" />
        <ul>
          <Link to='home' smooth={true}><li>Home</li></Link>
          <Link to='about' smooth={true} ><li>About</li></Link>
          <Link to='importantdates' smooth={true} ><li>Important Dates</li></Link>
          <Link to='committee' smooth={true} ><li>Committee</li></Link>
        </ul>
      </nav>
  )
}

export default Navbar