import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div className='footer' id='footer'>
            <div className='address'>
                <h2>Contact Us</h2>
                <p>Adi Shankara Institute of Engineering and Technology</p>
                <p>Vidya Bharathi Nagar , Mattoor, Kalady</p>
                <p>Ernakulam District, Kerala, 683574</p>
            </div>

            <div className="footerheadingsection">

                <h2>ICICCSP 2024</h2>

                <div className="footerpara">
                    <p>This is a sample text. It is used for as a placeholder textThis is a sample text. It is used for as a placeholder text</p>
                </div>

                <div className="socialmedialinks">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-youtube"></i>
                </div>

            </div>

            <div className="queries">
                <h2>Queries</h2>
                <form>
                    <input type="text" placeholder='Email'/>
                    <input type="text" placeholder='Query'/>
                    <button type="button" className='sendbtn'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Footer