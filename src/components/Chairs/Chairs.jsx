import React from 'react'
import './chairs.css'
import chairs from '../../assets/Chairs.json'
const Chairs = () => {
    return (
        <div className='Chairs_container'>
            <h2>Chairs</h2>
            <h2 style={{ color: "#2c7bfe" }}>General Chairs</h2>
            <div className='people'>

                {chairs.General_Chairs.map((item) => {
                    return <div className='person'>
                        <div className='name'>
                            {item.name}
                        </div>
                        <div className="info">

                            <div className='designation'>
                                {item.designation}
                            </div>
                            <div className='location'>
                                {item.location}
                            </div>
                        </div>
                    </div>
                })
                }
            </div>
            <h2 style={{ color: "#2c7bfe" }}>Finance Chairs</h2>
            <div className='people'>

                {chairs.Finance_Chairs.map((item) => {
                    return <div className='person'>
                        <div className='name'>
                            {item.name}
                        </div>
                        <div className="info">

                            <div className='designation'>
                                {item.designation}
                            </div>
                            <div className='location'>
                                {item.location}
                            </div>
                        </div>
                    </div>
                })
                }
            </div>
            <h2 style={{ color: "#2c7bfe" }}>Publication Chairs</h2>
            <div className='people'>

                {chairs.Publication_Chairs.map((item) => {
                    return <div className='person'>
                        <div className='name'>
                            {item.name}
                        </div>
                        <div className="info">

                            <div className='designation'>
                                {item.designation}
                            </div>
                            <div className='location'>
                                {item.location}
                            </div>
                        </div>
                    </div>
                })
                }
            </div>
        </div>
    )
}

export default Chairs