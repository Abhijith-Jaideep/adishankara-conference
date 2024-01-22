import React from 'react'
import "./hero.css"
import Navbar from './Navbar/Navbar'
import slider from '../../assets/slider.mp4'
function Hero() {
  return (
    <div className='main' id='home'>
        <video src={slider} autoPlay loop muted type='video/mp4'></video>
        <div className='overlay'>
            <Navbar/>
            <div className="herotext">
                <h1 className='heroheading'>ICICCSP 2024</h1>
                <p>International conference on </p>
                <p>Information computer communication and signal processing</p>
                <p style={{marginTop:"1%",fontWeight:'bold'}}>January 4 – 6 , 2024</p>
                
                <button type="button" className='explorebtn'>Explore More</button>
            </div>
        </div>
    </div>
  )
}

export default Hero