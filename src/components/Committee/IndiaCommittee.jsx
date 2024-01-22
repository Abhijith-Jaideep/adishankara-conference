import React from 'react'
import "./committee.css"
import India from "../../assets/India Technical Committee.json"
import professor from "../../assets/professor.png"
const IndiaCommittee = () => {

    return (
        <div className='Commitee_container' style={{ backgroundColor: 'white', color: 'black' }}>
            <h2>From outside Kerala, within India</h2>
            <div className='people'>

                {India.map((item) => {
                    return <div className='person'>
                        <div className='image'>
                            <img src={professor} alt="" />
                        </div>
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

export default IndiaCommittee