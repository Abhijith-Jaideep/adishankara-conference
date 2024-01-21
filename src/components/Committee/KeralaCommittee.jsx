import React from 'react'
import "./committee.css"
import Kerala from "../../assets/Kerala Technical Commitee.json"
const KeralaCommittee = () => {

    return (
        <div className='Commitee_container' id='committee'>
            <h2>Kerala Technical Committee</h2>
            <div className='people'>
                {Kerala.map((item) => {
                    return <div className='person'>
                        <div className='name' style={{ color: 'white' }} >
                            {item.name}
                        </div>
                        <div className="info">

                            <div className='designation' style={{ color: 'black' }}>
                                {item.designation}
                            </div>
                            <div className='location' style={{ color: 'black' }}>
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

export default KeralaCommittee