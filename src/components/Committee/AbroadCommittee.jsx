import React from 'react'
import "./committee.css"
import Abroad from "../../assets/Abroad Committee.json"
const AbroadCommittee = () => {

    return (
        <div className='Commitee_container'>
            <h2>Abroad Technical Committee</h2>
            <div className='people'>

                {Abroad.map((item) => {
                    return <div className='person'>
                        <div className='name' style={{ color: 'white' }}>
                            {item.name}
                        </div>
                        <div className="info">

                            <div className='designation' style={{ color: 'black' }}>
                                {item.designation}
                            </div>
                        </div>
                    </div>
                })
                }
            </div>

        </div>
    )
}

export default AbroadCommittee