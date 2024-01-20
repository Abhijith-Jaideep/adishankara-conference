import React from 'react'
import "./committee.css"
import Kerala from "../../assets/Kerala Technical Commitee.json"
const KeralaCommittee = () => {

    return (
        <div className='Commitee_container'>
            <h2>Kerala Technical Committee</h2>
            <div className='people'>

                {Kerala.map((item) => {
                    return <div className='person'>
                        <div className='name'>
                            {item.name}
                        </div>
                        <div className='designation'>
                            {item.designation}
                        </div>
                        <div className='location'>
                            {item.location}
                        </div>
                    </div>
                })
                }
            </div>

        </div>
    )
}

export default KeralaCommittee