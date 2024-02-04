import React from 'react'
import "./committee.css"
import committeeMembers from "../../assets/OrganizingCommittee.js"

const OrganizingCommittee = () => {

    return (
        <div className='Commitee_container'>
            <h2 style={{color:'white'}}>Organizing Committee</h2>
            <div className='people'>

                {committeeMembers.map((item) => {
                    return <div className='person'>
                        <div className='image'>
                            <img src={item.photo} alt="" />
                        </div>
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

export default OrganizingCommittee