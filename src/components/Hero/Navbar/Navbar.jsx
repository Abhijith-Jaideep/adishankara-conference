import React from 'react'
import "./navbar.css"
import logo from '../../../assets/logo.png'
import Link from 'react-scroll/modules/components/Link'

const Navbar = () => {
  return (
    <nav>
      <img className="logo" src={logo} alt="Adi Shankara Institute of Engineering and Technology" />
      <ul>
        <Link to='home' smooth={true}><li>Conference</li></Link>
        <Link to='about' smooth={true} ><li>About</li></Link>
        <Link to='importantdates' smooth={true} ><li>Important Dates</li></Link>
        <Link to='home' smooth={true} ><li>Call for Paper</li></Link>
        <Link to='home' smooth={true} ><li>Pre-conf Workshop</li></Link>
        <Link to='home' smooth={true} ><li>Speakers</li></Link>
        <Link to='home' smooth={true} ><li>For Authors</li></Link>
        <Link to='home' smooth={true} ><li style={{color:"red"}}>Registration</li></Link>
        <Link to='home' smooth={true} ><li>Payment</li></Link>
        <Link to='footer' smooth={true} ><li>Contact</li></Link>
        <Link to='home' smooth={true} ><li>History</li></Link>
      </ul>
    </nav>
  )
}

export default Navbar