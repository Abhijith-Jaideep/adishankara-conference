import React from 'react'
import "./hero.css"
import Navbar from './Navbar/Navbar'
import slider from '../../assets/slider.mp4'
function Hero() {
  return (
    <div className='main'>
        <video src={slider} autoPlay loop muted type='video/mp4'></video>
        <div className='overlay'>
            <Navbar/>
            <div className="herotext">
                <h1 className='heroheading'>ICCP 2023</h1>
                <p>7th International Conference on</p>
                <p>Computer, Communication and Signal Processing</p>
                <p style={{marginTop:"1%",fontWeight:'bold'}}>January 4 – 6 , 2023</p>
                
                <button type="button" className='explorebtn'>Explore More</button>
            </div>
        </div>
    </div>
  )
}

export default Hero