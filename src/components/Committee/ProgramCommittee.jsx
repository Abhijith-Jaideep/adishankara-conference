import React from 'react'
import "./committee.css"
import committeeMembers from "../../assets/ProgramCommittee.js"
const ProgramCommittee = () => {
    console.log(Object.keys(committeeMembers).length);
    return (
        <div className='Commitee_container' id='committee' style={{ backgroundColor: 'white', color: 'black' }}>
            <h2 className='heading'>Program Committee</h2>
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

export default ProgramCommittee