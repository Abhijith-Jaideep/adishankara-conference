import React from 'react'
import "./committee.css"
import committeeMembers from "../../assets/OrganizingCommittee.js"

const OrganizingCommittee = () => {

    return (
        <div className='Commitee_container'>
            <h2 className='heading'>Organizing Committee</h2>
            <div className='people'>

                {committeeMembers.map((item) => {
                    return <div className='person'>
                        <div className='image'>
                            <img src={item.photo} alt="" />
                        </div>
                        <div className='name'>
                            {item.name}
                        </div>
                        <div className="info">

                            <div className='designation'>
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