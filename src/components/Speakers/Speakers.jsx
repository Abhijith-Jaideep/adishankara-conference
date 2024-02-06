import React from 'react'
import './speakers.css'
import dummy from '../../assets/dummy.jpg'

const Speakers = () => {
    return (
        <div className='speakers-container' id='speakers'>
            <h2 className='heading'>Invited Talks</h2>
            <h2 style={{color:'red'}}>Technical Talk from</h2>
            <div className="speakers">
                <div className='person'>
                    <div className='image'>
                        <img src={dummy} alt="" />
                    </div>
                    <div className='name'>
                        name
                    </div>
                    <div className="info">

                        <div className='designation'>
                            designation
                        </div>
                        <div className='location'>
                            location
                        </div>
                    </div>
                </div>
                <div className='person'>
                    <div className='image'>
                        <img src={dummy} alt="" />
                    </div>
                    <div className='name'>
                        name
                    </div>
                    <div className="info">

                        <div className='designation'>
                            designation
                        </div>
                        <div className='location'>
                            location
                        </div>
                    </div>
                </div>
                <div className='person'>
                    <div className='image'>
                        <img src={dummy} alt="" />
                    </div>
                    <div className='name'>
                        name
                    </div>
                    <div className="info">

                        <div className='designation'>
                            designation
                        </div>
                        <div className='location'>
                            location
                        </div>
                    </div>
                </div>
                <div className='person'>
                    <div className='image'>
                        <img src={dummy} alt="" />
                    </div>
                    <div className='name'>
                        name
                    </div>
                    <div className="info">

                        <div className='designation'>
                            designation
                        </div>
                        <div className='location'>
                            location
                        </div>
                    </div>
                </div>
                <div className='person'>
                    <div className='image'>
                        <img src={dummy} alt="" />
                    </div>
                    <div className='name'>
                        name
                    </div>
                    <div className="info">

                        <div className='designation'>
                            designation
                        </div>
                        <div className='location'>
                            location
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Speakers